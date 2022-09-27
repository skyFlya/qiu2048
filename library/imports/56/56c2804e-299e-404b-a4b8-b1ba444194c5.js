"use strict";
cc._RF.push(module, '56c28BOKZ5AS6S4sbpEQZTF', 'Game');
// scripts/Game.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./app/App");
var UICfg_1 = require("./cfg/UICfg");
var Save_1 = require("./saveManager/Save");
var SaveManager_1 = require("./saveManager/SaveManager");
var UIUtils_1 = require("./ui/UIUtils");
var Fruit = cc.Class({
    name: 'FruitItem',
    properties: {
        id: 0,
        iconSF: cc.SpriteFrame
    }
});
var JuiceItem = cc.Class({
    name: 'JuiceItem',
    properties: {
        particle: cc.SpriteFrame,
        circle: cc.SpriteFrame,
        slash: cc.SpriteFrame,
    }
});
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fruits = [];
        _this.juices = [];
        _this.fruitPrefab = null;
        _this.juicePrefab = null;
        _this.fruitsNode = null;
        _this.juicesNode = null;
        _this.lbScores = null;
        _this.lbScoreTip = null;
        _this.bottomNode = null;
        _this.btnOpenWheel = null;
        _this.creatY = 400; //生产球的位置
        _this.scoresTimer = null; //连击计时器
        _this.scoresTime = 1; //连击有效时间
        _this.ljScores = 0; //连击分数
        _this.ljCount = 0; //连击次数
        _this._curScores = 0; //当前总分
        _this.targetScores = 700; //下一个目标分数    
        return _this;
    }
    Object.defineProperty(Game.prototype, "curScores", {
        get: function () {
            return this._curScores;
        },
        set: function (value) {
            this._curScores = value;
            if (this.targetScores > this.curScores) {
                this.lbScores.string = this.curScores + "/" + this.targetScores;
                this.lbScoreTip.string = "\u518D\u5F97<color = #CF5B5B>" + (this.targetScores - this.curScores) + "</c>\u5206\uFF0C\u5373\u53EF\u83B7\u5F97\u989D\u5916\u63D0\u73B0\u673A\u4F1A";
            }
            else {
                this.lbScores.string = "可提现";
                this.lbScoreTip.string = "";
            }
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.onLoad = function () {
        var _this = this;
        App_1.App.uiCfgMgr.initByCfg(UICfg_1.UICfg);
        UIUtils_1.UIUtils.addClickEvent(this.btnOpenWheel.node, function () {
            //App.uiMgr.openUI(UICfg.PannelWheel.name);
            _this.initGame();
        }, this);
        // 监听点击事件 todo 是否能够注册全局事件
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.initGame();
        setInterval(function () {
            //console.log("保存游戏");
            _this.saveGame();
        }, 10000);
        //console.log("读取游戏");
        this.readGame();
    };
    Game.prototype.initGame = function () {
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
    };
    Game.prototype.checkGameOver = function () {
        var endFruit = this.fruitsNode.children[this.fruitsNode.childrenCount - 1];
        if (endFruit && endFruit.y >= this.creatY - 100) {
            this.initGame();
            return true;
        }
        return false;
    };
    // 开启物理引擎和碰撞检测
    Game.prototype.initPhysics = function () {
        // 物理引擎
        var instance = cc.director.getPhysicsManager();
        instance.enabled = true;
        // instance.debugDrawFlags = 4
        instance.gravity = cc.v2(0, -960);
        // 碰撞检测
        var collisionManager = cc.director.getCollisionManager();
        collisionManager.enabled = true;
        // 设置四周的碰撞区域
        var width = this.node.width;
        var height = this.node.height;
        var node = new cc.Node();
        var body = node.addComponent(cc.RigidBody);
        body.type = cc.RigidBodyType.Static;
        var _addBound = function (node, x, y, width, height) {
            var collider = node.addComponent(cc.PhysicsBoxCollider);
            collider.offset.x = x;
            collider.offset.y = y;
            collider.size.width = width;
            collider.size.height = height;
        };
        _addBound(node, 0, -height / 2 + this.bottomNode.height, width, 1);
        _addBound(node, 0, height / 2, width, 1);
        _addBound(node, -width / 2, 0, 1, height);
        _addBound(node, width / 2, 0, 1, height);
        node.parent = this.node;
    };
    Game.prototype.initOneFruit = function (id) {
        if (id === void 0) { id = 1; }
        this.fruitCount++;
        this.currentFruit = this.createFruitOnPos(0, this.creatY, id);
    };
    // 监听屏幕点击
    Game.prototype.onTouchStart = function (e) {
        var _this = this;
        if (this.isCreating)
            return;
        this.isCreating = true;
        var _a = this.node, width = _a.width, height = _a.height;
        var fruit = this.currentFruit;
        var pos = e.getLocation();
        var x = pos.x, y = pos.y;
        x = x - width / 2;
        y = y - height / 2;
        var action = cc.sequence(cc.moveBy(0.3, cc.v2(x, 0)).easing(cc.easeCubicActionIn()), cc.callFunc(function () {
            // 开启物理效果
            _this.startFruitPhysics(fruit);
            // 1s后重新生成一个
            _this.scheduleOnce(function () {
                if (!_this.checkGameOver()) {
                    var nextId = _this.getNextFruitId();
                    _this.initOneFruit(nextId);
                    _this.isCreating = false;
                }
            }, 1);
        }));
        fruit.runAction(action);
    };
    // 获取下一个水果的id
    Game.prototype.getNextFruitId = function () {
        if (this.fruitCount < 3) {
            return 1;
        }
        else if (this.fruitCount === 3) {
            return 2;
        }
        else {
            // 随机返回前5个
            return Math.floor(Math.random() * 5) + 1;
        }
    };
    // 创建一个水果
    Game.prototype.createOneFruit = function (num) {
        var fruit = cc.instantiate(this.fruitPrefab);
        var config = this.fruits[num - 1];
        fruit.getComponent('Fruit').init({
            id: config.id,
            iconSF: config.iconSF
        });
        fruit.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static;
        fruit.getComponent(cc.PhysicsCircleCollider).radius = 0;
        this.fruitsNode.addChild(fruit);
        fruit.scale = 0.6;
        // 有Fruit组件传入
        fruit.on('sameContact', this.onSameFruitContact.bind(this));
        return fruit;
    };
    Game.prototype.startFruitPhysics = function (fruit) {
        fruit.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
        var physicsCircleCollider = fruit.getComponent(cc.PhysicsCircleCollider);
        physicsCircleCollider.radius = fruit.height / 2;
        physicsCircleCollider.apply();
    };
    // 在指定位置生成水果
    Game.prototype.createFruitOnPos = function (x, y, type) {
        if (type === void 0) { type = 1; }
        var fruit = this.createOneFruit(type);
        fruit.setPosition(cc.v2(x, y));
        return fruit;
    };
    // 两个水果碰撞
    Game.prototype.onSameFruitContact = function (_a) {
        var self = _a.self, other = _a.other;
        other.node.off('sameContact'); // 两个node都会触发，todo 看看有没有其他方法只展示一次的
        var id = other.getComponent('Fruit').id;
        // todo 可以使用对象池回收
        self.node.removeFromParent(false);
        other.node.removeFromParent(false);
        var _b = other.node, x = _b.x, y = _b.y;
        this.createFruitJuice(id, cc.v2({ x: x, y: y }), other.node.width);
        var nextId = id + 1;
        if (nextId <= 11) {
            var newFruit = this.createFruitOnPos(x, y, nextId);
            this.startFruitPhysics(newFruit);
            // 展示动画 todo 动画效果需要调整
            newFruit.scale = 0;
            cc.tween(newFruit).to(.5, {
                scale: 0.6
            }, {
                easing: "backOut"
            }).start();
        }
        else {
            // todo 合成两个西瓜
            console.log(' todo 合成两个西瓜 还没有实现哦~ ');
        }
        if (!this.scoresTimer) {
            this.initLjTime();
        }
        this.setLjTimer();
        var oneljScores = this.getljScores(nextId);
        this.ljCount++;
        this.ljScores += oneljScores;
        this.curScores += this.ljScores;
    };
    //设置连击初始数据
    Game.prototype.initLjTime = function () {
        this.isLjIng = true;
        this.ljCount = 0;
    };
    //重置连击计时器
    Game.prototype.setLjTimer = function () {
        var _this = this;
        this.scoresTimer = setTimeout(function () {
            _this.closeLjTime();
        }, this.scoresTime * 1000);
    };
    //关闭连击计时器
    Game.prototype.closeLjTime = function () {
        clearTimeout(this.scoresTimer);
        this.ljScores = 0;
        this.scoresTimer = null;
        this.isLjIng = false;
        if (this.curScores >= this.targetScores) {
        }
    };
    //获得连击分数
    Game.prototype.getljScores = function (lv) {
        return 1;
    };
    // 合并时的动画效果
    Game.prototype.createFruitJuice = function (id, pos, n) {
        // 播放合并的声音
        // cc.audioEngine.play(this.boomAudio, false, 1);
        // cc.audioEngine.play(this.waterAudio, false, 1);
        App_1.App.soundMgr.playEffect("common/sounds/boom");
        App_1.App.soundMgr.playEffect("common/sounds/water");
        // 展示动画
        var juice = cc.instantiate(this.juicePrefab);
        this.juicesNode.addChild(juice);
        var config = this.juices[id - 1];
        var instance = juice.getComponent('Juice');
        instance.init(config);
        instance.showJuice(pos, n);
    };
    //游戏保存
    Game.prototype.saveGame = function () {
        var fruitPosArray = [];
        var fruitChild = this.fruitsNode.children;
        for (var i = 0; i < fruitChild.length; i++) {
            if (this.currentFruit.uuid != fruitChild[i].uuid) {
                fruitPosArray.push(fruitChild[i].getComponent("Fruit").getData());
            }
        }
        SaveManager_1.SaveManager.Instance().setItem(Save_1.Save.fruitsPos, fruitPosArray);
        SaveManager_1.SaveManager.Instance().setItem(Save_1.Save.gameScores, this.curScores);
    };
    //游戏读取
    Game.prototype.readGame = function () {
        var gameData = SaveManager_1.SaveManager.Instance().getItem(Save_1.Save.fruitsPos);
        for (var i = 0; i < gameData.length; i++) {
            var data = gameData[i];
            this.startFruitPhysics(this.createFruitOnPos(data.pos.x, data.pos.y, data.id));
        }
        this.fruitCount = gameData.length;
        this.curScores = SaveManager_1.SaveManager.Instance().getItem(Save_1.Save.gameScores);
    };
    __decorate([
        property(Fruit)
    ], Game.prototype, "fruits", void 0);
    __decorate([
        property(JuiceItem)
    ], Game.prototype, "juices", void 0);
    __decorate([
        property(cc.Prefab)
    ], Game.prototype, "fruitPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], Game.prototype, "juicePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "fruitsNode", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "juicesNode", void 0);
    __decorate([
        property(cc.Label)
    ], Game.prototype, "lbScores", void 0);
    __decorate([
        property(cc.RichText)
    ], Game.prototype, "lbScoreTip", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "bottomNode", void 0);
    __decorate([
        property(cc.Button)
    ], Game.prototype, "btnOpenWheel", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

cc._RF.pop();