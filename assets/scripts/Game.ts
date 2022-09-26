import { App } from "./app/App";
import { UICfg } from "./cfg/UICfg";
import { httpClient } from "./platform/HttpClient";
import { HttpUrl } from "./platform/HttpUrl";
import { Save } from "./saveManager/Save";
import { SaveManager } from "./saveManager/SaveManager";
import { objectUtils } from "./utils/object-utils";

const Fruit = cc.Class({
    name: 'FruitItem',
    properties: {
        id: 0,
        iconSF: cc.SpriteFrame
    }
});

const JuiceItem = cc.Class({
    name: 'JuiceItem',
    properties: {
        particle: cc.SpriteFrame,
        circle: cc.SpriteFrame,
        slash: cc.SpriteFrame,
    }
});

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {

    @property(Fruit)
    private fruits = [];

    @property(JuiceItem)
    private juices = [];

    @property(cc.Prefab)
    private fruitPrefab = null;

    @property(cc.Prefab)
    private juicePrefab = null;

    @property(cc.AudioClip)
    private boomAudio: cc.AudioClip = null;

    @property(cc.AudioClip)
    private waterAudio: cc.AudioClip = null;

    @property(cc.AudioClip)
    private knockAudio: cc.AudioClip = null;

    @property(cc.Node)
    private fruitsNode: cc.Node = null;

    @property(cc.Node)
    private juicesNode: cc.Node = null;

    private isCreating: boolean;
    private fruitCount: number;
    private currentFruit: cc.Node;

    onLoad() {
        this.initPhysics()

        this.isCreating = false;
        this.fruitCount = 0;

        // 监听点击事件 todo 是否能够注册全局事件
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this)

        this.initOneFruit()

        setInterval(() => {
            //console.log("保存游戏");
            this.saveGame();
        }, 10000)
        //console.log("读取游戏");
        this.readGame();        
    }

    // 开启物理引擎和碰撞检测
    initPhysics() {
        // 物理引擎
        const instance = cc.director.getPhysicsManager()
        instance.enabled = true
        // instance.debugDrawFlags = 4
        instance.gravity = cc.v2(0, -960);

        // 碰撞检测
        const collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true

        // 设置四周的碰撞区域
        let width = this.node.width;
        let height = this.node.height;

        let node = new cc.Node();

        let body = node.addComponent(cc.RigidBody);
        body.type = cc.RigidBodyType.Static;

        const _addBound = (node, x, y, width, height) => {
            let collider = node.addComponent(cc.PhysicsBoxCollider);
            collider.offset.x = x;
            collider.offset.y = y;
            collider.size.width = width;
            collider.size.height = height;
        }

        _addBound(node, 0, -height / 2, width, 1);
        _addBound(node, 0, height / 2, width, 1);
        _addBound(node, -width / 2, 0, 1, height);
        _addBound(node, width / 2, 0, 1, height);

        node.parent = this.node;
    }

    initOneFruit(id = 1) {
        this.fruitCount++;
        this.currentFruit = this.createFruitOnPos(0, 400, id);
    }

    // 监听屏幕点击
    onTouchStart(e) {
        if (this.isCreating) return
        this.isCreating = true
        const { width, height } = this.node


        const fruit = this.currentFruit

        const pos = e.getLocation()
        let { x, y } = pos
        x = x - width / 2
        y = y - height / 2

        const action = cc.sequence(cc.moveBy(0.3, cc.v2(x, 0)).easing(cc.easeCubicActionIn()), cc.callFunc(() => {
            // 开启物理效果
            this.startFruitPhysics(fruit)

            // 1s后重新生成一个
            this.scheduleOnce(() => {
                const nextId = this.getNextFruitId()
                this.initOneFruit(nextId)
                this.isCreating = false
            }, 1)
        }))

        fruit.runAction(action)
    }

    // 获取下一个水果的id
    getNextFruitId() {
        if (this.fruitCount < 3) {
            return 1
        } else if (this.fruitCount === 3) {
            return 2
        } else {
            // 随机返回前5个
            return Math.floor(Math.random() * 5) + 1
        }
    }

    // 创建一个水果
    createOneFruit(num) {
        let fruit = cc.instantiate(this.fruitPrefab);
        const config = this.fruits[num - 1]

        fruit.getComponent('Fruit').init({
            id: config.id,
            iconSF: config.iconSF
        });

        fruit.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static
        fruit.getComponent(cc.PhysicsCircleCollider).radius = 0

        this.fruitsNode.addChild(fruit);
        fruit.scale = 0.6

        // 有Fruit组件传入
        fruit.on('sameContact', this.onSameFruitContact.bind(this))

        return fruit
    }

    startFruitPhysics(fruit) {
        fruit.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
        const physicsCircleCollider = fruit.getComponent(cc.PhysicsCircleCollider)
        physicsCircleCollider.radius = fruit.height / 2
        physicsCircleCollider.apply()
    }

    // 在指定位置生成水果
    createFruitOnPos(x, y, type = 1) {
        const fruit = this.createOneFruit(type)
        fruit.setPosition(cc.v2(x, y));
        return fruit
    }

    // 两个水果碰撞
    onSameFruitContact({ self, other }) {
        other.node.off('sameContact') // 两个node都会触发，todo 看看有没有其他方法只展示一次的

        const id = other.getComponent('Fruit').id
        // todo 可以使用对象池回收
        self.node.removeFromParent(false)
        other.node.removeFromParent(false)

        const { x, y } = other.node

        this.createFruitJuice(id, cc.v2({ x, y }), other.node.width)

        const nextId = id + 1
        if (nextId <= 11) {
            const newFruit = this.createFruitOnPos(x, y, nextId)

            this.startFruitPhysics(newFruit)

            // 展示动画 todo 动画效果需要调整
            newFruit.scale = 0
            cc.tween(newFruit).to(.5, {
                scale: 0.6
            }, {
                easing: "backOut"
            }).start()
        } else {
            // todo 合成两个西瓜
            console.log(' todo 合成两个西瓜 还没有实现哦~ ')
        }
    }

    // 合并时的动画效果
    createFruitJuice(id, pos, n) {
        // 播放合并的声音
        cc.audioEngine.play(this.boomAudio, false, 1);
        cc.audioEngine.play(this.waterAudio, false, 1);

        // 展示动画
        let juice = cc.instantiate(this.juicePrefab);
        this.juicesNode.addChild(juice);

        const config = this.juices[id - 1]
        const instance = juice.getComponent('Juice')
        instance.init(config)
        instance.showJuice(pos, n)
    }


    //游戏保存
    saveGame() {
        let fruitPosArray = [];
        let fruitChild = this.fruitsNode.children;
        for (let i = 0; i < fruitChild.length; i++) {
            if (this.currentFruit.uuid != fruitChild[i].uuid) {
                fruitPosArray.push(fruitChild[i].getComponent("Fruit").getData());
            }
        }
        SaveManager.Instance().setItem(Save.fruitsPos, fruitPosArray);
    }

    //游戏读取
    readGame() {
        let gameData = SaveManager.Instance().getItem(Save.fruitsPos);
        for (let i = 0; i < gameData.length; i++) {
            let data = gameData[i];
            this.startFruitPhysics(this.createFruitOnPos(data.pos.x, data.pos.y, data.id))
        }
    }

}
