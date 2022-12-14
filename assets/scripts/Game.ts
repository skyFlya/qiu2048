import { App } from "./app/App";
import { EventIDCfg } from "./cfg/EventIDCfg";
import { GameDcfg } from "./cfg/GameDcfg";
import { UICfg } from "./cfg/UICfg";
import { PlayerData } from "./global/PlayerData";
import { EventMgr } from "./mgrs/EventMgr";
import { SoundMgr } from "./mgrs/SoundMgr";
import TimeMgr from "./mgrs/TimeMgr";
import PannelTip2 from "./pannels/PannelTip2";
import { httpClient } from "./platform/HttpClient";
import { HttpUrl } from "./platform/HttpUrl";
import WebViewPlatform from "./platform/WebViewPlatform";
import { Save } from "./saveManager/Save";
import { SaveManager } from "./saveManager/SaveManager";
import { UIUtils } from "./ui/UIUtils";
import { mathUtils } from "./utils/math-utils";
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

    @property(cc.Node)
    private fruitsNode: cc.Node = null;

    @property(cc.Node)
    private juicesNode: cc.Node = null;

    @property(cc.Label)
    private lbScores: cc.Label = null;

    @property(cc.RichText)
    private lbScoreTip: cc.RichText = null;

    @property(cc.Node)
    private bottomNode: cc.Node = null;

    @property(cc.Button)
    private btnOpenWheel: cc.Button = null;

    @property(cc.Node)
    private gameArea: cc.Node = null;

    @property(cc.Node)
    private shootPos: cc.Node = null;

    @property(cc.Widget)
    private topNode: cc.Widget = null;

    @property(cc.Sprite)
    private rectFilled: cc.Sprite = null;

    @property(cc.Button)
    private btnTest: cc.Button = null;

    @property(cc.Button)
    private btnClickMySet: cc.Button = null;

    @property(cc.SpriteFrame)
    private btnWheelSpr: cc.SpriteFrame[] = [];

    @property(cc.Button)
    private btnCashOut: cc.Button = null;

    @property(cc.Button)
    private btnCashOut2: cc.Button = null;

    @property(cc.Label)
    private lbAmount:cc.Label = null;

    @property(cc.Label)
    private lb2048Count:cc.Label = null;

    @property(cc.Label)
    private lbDayNeed2048:cc.Label = null;

    @property(cc.RichText)
    private lbCashOutPad:cc.RichText = null;

    @property(cc.Node)
    private cashOutPad:cc.Node = null;

    private btnWheelAni = false;

    private fruitScale: number = 0.8;     //??????????????????

    private creatY: number = 400;       //??????????????????

    private isCreating: boolean;        //?????????????????????

    private isLjIng: boolean;            //??????????????????

    private fruitCount: number;         //?????????????????????

    private currentFruit: cc.Node;      //????????????    

    private scoresTimer = null;          //???????????????

    private scoresTime = 1;             //??????????????????

    private ljScores = 0;               //????????????

    private ljCount = 0;                //????????????

    private targetScores = 700;         //?????????????????????    

    private _curScores = 0;             //????????????

    public set curScores(value: number) {
        this._curScores = value;
        if (this.targetScores > this.curScores) {
            this.lbScores.string = `${this.curScores}/${this.targetScores}`;
            this.rectFilled.fillRange = this.curScores / this.targetScores > 1 ? 1 : this.curScores / this.targetScores;
            this.lbScoreTip.string = `??????<color = #CF5B5B>${this.targetScores - this.curScores}</c>????????????????????????????????????`;
            this.btnOpenWheel.node.getComponent(cc.Sprite).spriteFrame = this.btnWheelSpr[0];
            if (this.btnWheelAni) {
                this.btnOpenWheel.node.stopAllActions();
                this.btnOpenWheel.node.scale = 1;
                this.btnOpenWheel.node.getComponent(cc.Sprite).spriteFrame = this.btnWheelSpr[0];
                this.btnWheelAni = false;
            }
        }
        else {
            this.lbScores.string = "?????????";
            this.lbScoreTip.string = "";
            if (!this.btnWheelAni) {
                this.btnOpenWheel.node.getComponent(cc.Sprite).spriteFrame = this.btnWheelSpr[1];
                cc.tween(this.btnOpenWheel.node).repeatForever(cc.tween().to(0.3, { scale: 1.2 }).to(0.3, { scale: 1 })).start();
                this.btnWheelAni = true;
            }
        }
    }

    public get curScores(): number {
        return this._curScores;
    }

    onLoad() {
        httpClient.getInstance().httpPost(HttpUrl.getVersion, {

        }, {
            success: () => {
                this.initHttp();
            },
            fail: () => {
                console.log("??????")
            },
            final: () => {
                console.log("??????")
            }
        })      

        this.addEvent();


        App.uiCfgMgr.initByCfg(UICfg);


        setTimeout(() => {
            this.creatY = mathUtils.convertToParent(this.shootPos, this.fruitsNode).y;
            this.initGame();

            setInterval(() => {
                //console.log("????????????");
                this.saveGame();
            }, 10000)
            //console.log("????????????");
            this.readGame();
        }, 0);


        let liuhai = WebViewPlatform.getInstance().getDeviceInfo();
        this.topNode.top += liuhai.notchBarHeight;
    }

    addEvent() {
        UIUtils.addClickEvent(this.btnOpenWheel.node, () => {
            if (this.curScores >= this.targetScores) {
                App.uiMgr.openUI(UICfg.PannelWheel.name);
            }
            else {
                App.toastMgr.showToast(`??????${this.targetScores - this.curScores}????????????????????????????????????`);
            }
        }, this);

        UIUtils.addClickEvent(this.btnClickMySet.node, () => {
            App.uiMgr.openUI(UICfg.PannelMySet.name);
        }, this);

        UIUtils.addClickEvent(this.btnCashOut.node, () => {
            App.uiMgr.openUI(UICfg.PannelCashOut.name);
        }, this);

        UIUtils.addClickEvent(this.btnCashOut2.node, () => {
            App.uiMgr.openUI(UICfg.PannelCashOut.name);
        }, this);

        UIUtils.addClickEvent(this.btnTest.node, () => {
            httpClient.getInstance().httpPost(HttpUrl.hecheng, {
                ballNumber: 11
            }, {
                success: (res) => {
                    let user = res.model.user;
                    this.targetScores = user.needFinishScore;
                    this.curScores = user.currentScore;
                },
                fail: () => {

                },
                final: () => {
                    console.log("??????")
                }
            })
        }, this);


        // ?????????????????? todo ??????????????????????????????
        this.gameArea.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);

        EventMgr.on(EventIDCfg.UPDATE_WHEEL_TARGET, (scrore: number) => {
            this.targetScores = scrore;
            this.curScores = this.curScores;
        }, this);
    }

    initHttp() {
        httpClient.getInstance().httpPost(HttpUrl.config, {

        }, {
            success: () => {

            },
            fail: () => {

            },
        })

        httpClient.getInstance().httpPost(HttpUrl.configIndex, {

        }, {
            success: (res) => {
                let user = res.model.user;
                this.targetScores = user.needFinishScore;
                this.curScores = user.currentScore;

                let ext = res.ext;
                console.log("????????????", ext);
                this.lbAmount.string = ext.cash + "???";
                this.lb2048Count.string = res.model.totalUserActive + "";
                this.lbDayNeed2048.string = `????????????:      x${res.model.todayUserActive}`;

                PlayerData.gold = ext.cash;
                PlayerData.ball2048 = res.model.totalUserActive;
            },
            fail: () => {

            },
        })
       
        this.checkMinCashOut();
    }

    private checkMinCashOut(){
        httpClient.getInstance().httpPost(HttpUrl.cashOutMin, {

        }, {
            success: (res) => {
                if(res.model.coin >= res.ext.coin){
                    let pad = ((res.model.coin - res.ext.coin) / GameDcfg.EXCHANGE).toFixed(2);            
                    this.lbCashOutPad.string = `??????<color = #FF170C>12345</c>???????????????<color = #FF170C>${res.model.coin / GameDcfg.EXCHANGE}</c>???`

                    this.cashOutPad.active = true;
                }                
                else{
                    this.cashOutPad.active = false;
                }
            },
            fail: () => {

            },
        }, true)
    }


    initGame() {
        if (this.currentFruit) {
            this.currentFruit.destroy();
        }
        if (this.fruitsNode.childrenCount > 0) {
            this.fruitsNode.destroyAllChildren();
        }
        if (this.juicesNode.childrenCount > 0) {
            this.juicesNode.destroyAllChildren();
        }
        this.isCreating = false;
        this.isLjIng = false;
        this.initPhysics();
        this.initOneFruit();
    }

    checkGameOver() {
        let endFruit = this.fruitsNode.children[this.fruitsNode.childrenCount - 1];
        if (endFruit && endFruit.y >= this.creatY - 100) {
            this.initGame();
            return true;
        }
        return false;
    }

    // ?????????????????????????????????
    initPhysics() {
        // ????????????
        const instance = cc.director.getPhysicsManager()
        instance.enabled = true
        // instance.debugDrawFlags = 4
        instance.gravity = cc.v2(0, -960);

        // ????????????
        const collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;

        // ???????????????????????????
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

        _addBound(node, 0, -height / 2 + this.bottomNode.height, width, 1);
        _addBound(node, 0, height / 2, width, 1);
        _addBound(node, -width / 2, 0, 1, height);
        _addBound(node, width / 2, 0, 1, height);

        node.parent = this.node;
    }

    initOneFruit(id = 1) {
        this.fruitCount++;
        this.currentFruit = this.createFruitOnPos(0, this.creatY, id);
    }

    // ??????????????????
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
            // ??????????????????
            this.startFruitPhysics(fruit)

            // 1s?????????????????????
            this.scheduleOnce(() => {
                if (!this.checkGameOver()) {
                    const nextId = this.getNextFruitId()
                    this.initOneFruit(nextId)
                    this.isCreating = false;
                }
            }, 1)
        }))

        fruit.runAction(action)
    }

    // ????????????????????????id
    getNextFruitId() {
        if (this.fruitCount < 3) {
            return 1
        } else if (this.fruitCount === 3) {
            return 2
        } else {
            // ???????????????5???
            return Math.floor(Math.random() * 5) + 1
        }
    }

    // ??????????????????
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
        fruit.scale = this.fruitScale;

        // ???Fruit????????????
        fruit.on('sameContact', this.onSameFruitContact.bind(this))

        return fruit
    }

    startFruitPhysics(fruit) {
        fruit.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
        const physicsCircleCollider = fruit.getComponent(cc.PhysicsCircleCollider)
        physicsCircleCollider.radius = fruit.height / 2
        physicsCircleCollider.apply()
    }

    // ???????????????????????????
    createFruitOnPos(x, y, type = 1) {
        const fruit = this.createOneFruit(type)
        fruit.setPosition(cc.v2(x, y));
        return fruit
    }

    // ??????????????????
    onSameFruitContact({ self, other }) {
        other.node.off('sameContact') // ??????node???????????????todo ?????????????????????????????????????????????

        const id = other.getComponent('Fruit').id
        // todo ???????????????????????????
        self.node.removeFromParent(false)
        other.node.removeFromParent(false)

        const { x, y } = other.node

        this.createFruitJuice(id, cc.v2({ x, y }), other.node.width)

        const nextId = id + 1
        if (nextId <= 11) {
            const newFruit = this.createFruitOnPos(x, y, nextId)

            this.startFruitPhysics(newFruit)

            // ???????????? todo ????????????????????????
            newFruit.scale = 0
            cc.tween(newFruit).to(.5, {
                scale: this.fruitScale
            }, {
                easing: "backOut"
            }).start()
        } else {
            // todo ??????????????????
            console.log(' todo ?????????????????? ??????????????????~ ')
        }

        if (!this.scoresTimer) {
            this.initLjTime();

            httpClient.getInstance().httpPost(HttpUrl.hecheng, {
                ballNumber: nextId
            }, {
                success: (res) => {
                    let user = res.model.user;
                    this.targetScores = user.needFinishScore;
                    this.curScores = user.currentScore;
                },
                fail: () => {

                },
                final: () => {
                    console.log("??????")
                }
            })
        }
        this.setLjTimer();
        let oneljScores = this.getljScores(nextId);
        this.ljCount++;
        //this.ljScores += oneljScores;
        //this.curScores += this.ljScores;
    }

    private getFruitLv(index) {
        switch (index) {
            case 1:
                return 2;
            case 2:
                return 4;
            case 3:
                return 8;
            case 4:
                return 16;
            case 5:
                return 32;
            case 6:
                return 64;
            case 7:
                return 128;
            case 8:
                return 256;
            case 9:
                return 512;
            case 10:
                return 1024;
            default:
                break;
        }
    }

    //????????????????????????
    private initLjTime() {
        this.isLjIng = true;
        this.ljCount = 0;
    }

    //?????????????????????
    private setLjTimer() {
        this.scoresTimer = setTimeout(() => {
            this.closeLjTime();
        }, this.scoresTime * 1000);
    }

    //?????????????????????
    private closeLjTime() {
        clearTimeout(this.scoresTimer);
        this.ljScores = 0;
        this.scoresTimer = null;
        this.isLjIng = false;
    }

    //??????????????????
    private getljScores(lv: number): number {
        return 1;
    }


    // ????????????????????????
    createFruitJuice(id, pos, n) {
        // ?????????????????????
        // cc.audioEngine.play(this.boomAudio, false, 1);
        // cc.audioEngine.play(this.waterAudio, false, 1);

        App.soundMgr.playEffect("common/sounds/boom");
        App.soundMgr.playEffect("common/sounds/water");

        // ????????????
        let juice = cc.instantiate(this.juicePrefab);
        this.juicesNode.addChild(juice);

        const config = this.juices[id - 1]
        const instance = juice.getComponent('Juice')
        instance.init(config)
        instance.showJuice(pos, n)
    }


    //????????????
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

    //????????????
    readGame() {
        let gameData = SaveManager.Instance().getItem(Save.fruitsPos);
        for (let i = 0; i < gameData.length; i++) {
            let data = gameData[i];
            this.startFruitPhysics(this.createFruitOnPos(data.pos.x, data.pos.y, data.id))
        }
        this.fruitCount = gameData.length;
    }

}
