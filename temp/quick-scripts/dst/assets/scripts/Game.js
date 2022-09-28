
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
var math_utils_1 = require("./utils/math-utils");
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
        _this.shootPos = null;
        _this.fruitScale = 0.8; //水果缩放比例
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
        setTimeout(function () {
            _this.creatY = math_utils_1.mathUtils.convertToParent(_this.shootPos, _this.fruitsNode).y;
            _this.initGame();
            setInterval(function () {
                //console.log("保存游戏");
                _this.saveGame();
            }, 10000);
            //console.log("读取游戏");
            _this.readGame();
        }, 0);
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
        fruit.scale = this.fruitScale;
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
                scale: this.fruitScale
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
    __decorate([
        property(cc.Node)
    ], Game.prototype, "shootPos", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBZ0M7QUFDaEMscUNBQW9DO0FBSXBDLDJDQUEwQztBQUMxQyx5REFBd0Q7QUFDeEQsd0NBQXVDO0FBQ3ZDLGlEQUErQztBQUcvQyxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ25CLElBQUksRUFBRSxXQUFXO0lBQ2pCLFVBQVUsRUFBRTtRQUNSLEVBQUUsRUFBRSxDQUFDO1FBQ0wsTUFBTSxFQUFFLEVBQUUsQ0FBQyxXQUFXO0tBQ3pCO0NBQ0osQ0FBQyxDQUFDO0FBRUgsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUN2QixJQUFJLEVBQUUsV0FBVztJQUNqQixVQUFVLEVBQUU7UUFDUixRQUFRLEVBQUUsRUFBRSxDQUFDLFdBQVc7UUFDeEIsTUFBTSxFQUFFLEVBQUUsQ0FBQyxXQUFXO1FBQ3RCLEtBQUssRUFBRSxFQUFFLENBQUMsV0FBVztLQUN4QjtDQUNKLENBQUMsQ0FBQztBQUVHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBNldDO1FBMVdXLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFHWixZQUFNLEdBQUcsRUFBRSxDQUFDO1FBR1osaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFHbkIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFHbkIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFHL0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0Isa0JBQVksR0FBYyxJQUFJLENBQUM7UUFH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QyxJQUFJLENBQUM7NENBQ2lCO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ2U7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs0Q0FDaUI7SUFHdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDaUI7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs4Q0FDbUI7SUFHdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDYztJQWpDZixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBNld4QjtJQUFELFdBQUM7Q0E3V0QsQUE2V0MsQ0E3V2lDLEVBQUUsQ0FBQyxTQUFTLEdBNlc3QztrQkE3V29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi9hcHAvQXBwXCI7XG5pbXBvcnQgeyBVSUNmZyB9IGZyb20gXCIuL2NmZy9VSUNmZ1wiO1xuaW1wb3J0IHsgU291bmRNZ3IgfSBmcm9tIFwiLi9tZ3JzL1NvdW5kTWdyXCI7XG5pbXBvcnQgeyBodHRwQ2xpZW50IH0gZnJvbSBcIi4vcGxhdGZvcm0vSHR0cENsaWVudFwiO1xuaW1wb3J0IHsgSHR0cFVybCB9IGZyb20gXCIuL3BsYXRmb3JtL0h0dHBVcmxcIjtcbmltcG9ydCB7IFNhdmUgfSBmcm9tIFwiLi9zYXZlTWFuYWdlci9TYXZlXCI7XG5pbXBvcnQgeyBTYXZlTWFuYWdlciB9IGZyb20gXCIuL3NhdmVNYW5hZ2VyL1NhdmVNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVSVV0aWxzIH0gZnJvbSBcIi4vdWkvVUlVdGlsc1wiO1xuaW1wb3J0IHsgbWF0aFV0aWxzIH0gZnJvbSBcIi4vdXRpbHMvbWF0aC11dGlsc1wiO1xuaW1wb3J0IHsgb2JqZWN0VXRpbHMgfSBmcm9tIFwiLi91dGlscy9vYmplY3QtdXRpbHNcIjtcblxuY29uc3QgRnJ1aXQgPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogJ0ZydWl0SXRlbScsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgaWNvblNGOiBjYy5TcHJpdGVGcmFtZVxuICAgIH1cbn0pO1xuXG5jb25zdCBKdWljZUl0ZW0gPSBjYy5DbGFzcyh7XG4gICAgbmFtZTogJ0p1aWNlSXRlbScsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBwYXJ0aWNsZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgIGNpcmNsZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgIHNsYXNoOiBjYy5TcHJpdGVGcmFtZSxcbiAgICB9XG59KTtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KEZydWl0KVxuICAgIHByaXZhdGUgZnJ1aXRzID0gW107XG5cbiAgICBAcHJvcGVydHkoSnVpY2VJdGVtKVxuICAgIHByaXZhdGUganVpY2VzID0gW107XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByaXZhdGUgZnJ1aXRQcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcml2YXRlIGp1aWNlUHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgZnJ1aXRzTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGp1aWNlc05vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgbGJTY29yZXM6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICBwcml2YXRlIGxiU2NvcmVUaXA6IGNjLlJpY2hUZXh0ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgYm90dG9tTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgYnRuT3BlbldoZWVsOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBzaG9vdFBvczpjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgZnJ1aXRTY2FsZTogbnVtYmVyID0gMC44OyAgICAgLy/msLTmnpznvKnmlL7mr5TkvotcblxuICAgIHByaXZhdGUgY3JlYXRZOiBudW1iZXIgPSA0MDA7ICAgICAgIC8v55Sf5Lqn55CD55qE5L2N572uXG5cbiAgICBwcml2YXRlIGlzQ3JlYXRpbmc6IGJvb2xlYW47ICAgICAgICAvL+aYr+WQpuWcqOWIm+W7uueQg+S4rVxuXG4gICAgcHJpdmF0ZSBpc0xqSW5nOiBib29sZWFuOyAgICAgICAgICAgIC8v5piv5ZCm5Zyo6L+e5Ye75LitXG5cbiAgICBwcml2YXRlIGZydWl0Q291bnQ6IG51bWJlcjsgICAgICAgICAvL+WcuuS4iuaAu+WFseeahOaVsOmHj1xuXG4gICAgcHJpdmF0ZSBjdXJyZW50RnJ1aXQ6IGNjLk5vZGU7ICAgICAgLy/lvZPliY3msLTmnpwgICAgXG5cbiAgICBwcml2YXRlIHNjb3Jlc1RpbWVyID0gbnVsbDsgICAgICAgICAgLy/ov57lh7vorqHml7blmahcblxuICAgIHByaXZhdGUgc2NvcmVzVGltZSA9IDE7ICAgICAgICAgICAgIC8v6L+e5Ye75pyJ5pWI5pe26Ze0XG5cbiAgICBwcml2YXRlIGxqU2NvcmVzID0gMDsgICAgICAgICAgICAgICAvL+i/nuWHu+WIhuaVsFxuXG4gICAgcHJpdmF0ZSBsakNvdW50ID0gMDsgICAgICAgICAgICAgICAgLy/ov57lh7vmrKHmlbBcblxuICAgIHByaXZhdGUgX2N1clNjb3JlcyA9IDA7ICAgICAgICAgICAgIC8v5b2T5YmN5oC75YiGXG5cbiAgICBwdWJsaWMgc2V0IGN1clNjb3Jlcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2N1clNjb3JlcyA9IHZhbHVlO1xuICAgICAgICBpZiAodGhpcy50YXJnZXRTY29yZXMgPiB0aGlzLmN1clNjb3Jlcykge1xuICAgICAgICAgICAgdGhpcy5sYlNjb3Jlcy5zdHJpbmcgPSBgJHt0aGlzLmN1clNjb3Jlc30vJHt0aGlzLnRhcmdldFNjb3Jlc31gO1xuICAgICAgICAgICAgdGhpcy5sYlNjb3JlVGlwLnN0cmluZyA9IGDlho3lvpc8Y29sb3IgPSAjQ0Y1QjVCPiR7dGhpcy50YXJnZXRTY29yZXMgLSB0aGlzLmN1clNjb3Jlc308L2M+5YiG77yM5Y2z5Y+v6I635b6X6aKd5aSW5o+Q546w5py65LyaYDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGJTY29yZXMuc3RyaW5nID0gXCLlj6/mj5DnjrBcIjtcbiAgICAgICAgICAgIHRoaXMubGJTY29yZVRpcC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBjdXJTY29yZXMoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1clNjb3JlcztcbiAgICB9XG5cblxuICAgIHByaXZhdGUgdGFyZ2V0U2NvcmVzID0gNzAwOyAgICAgICAgIC8v5LiL5LiA5Liq55uu5qCH5YiG5pWwICAgIFxuXG5cbiAgICBvbkxvYWQoKSB7ICAgICBcbiAgICAgICAgQXBwLnVpQ2ZnTWdyLmluaXRCeUNmZyhVSUNmZyk7ICAgICAgICBcblxuICAgICAgICBVSVV0aWxzLmFkZENsaWNrRXZlbnQodGhpcy5idG5PcGVuV2hlZWwubm9kZSwgKCkgPT4ge1xuICAgICAgICAgICAgLy9BcHAudWlNZ3Iub3BlblVJKFVJQ2ZnLlBhbm5lbFdoZWVsLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5pbml0R2FtZSgpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAvLyDnm5HlkKzngrnlh7vkuovku7YgdG9kbyDmmK/lkKbog73lpJ/ms6jlhozlhajlsYDkuovku7ZcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcylcblxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVhdFkgPSBtYXRoVXRpbHMuY29udmVydFRvUGFyZW50KHRoaXMuc2hvb3RQb3MsIHRoaXMuZnJ1aXRzTm9kZSkueTtcbiAgICAgICAgICAgIHRoaXMuaW5pdEdhbWUoKTtcblxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLkv53lrZjmuLjmiI9cIik7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlR2FtZSgpO1xuICAgICAgICAgICAgfSwgMTAwMDApXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwi6K+75Y+W5ri45oiPXCIpO1xuICAgICAgICAgICAgdGhpcy5yZWFkR2FtZSgpO1xuICAgICAgICB9LCAwKTsgICAgICAgICAgICAgICAgXG4gICAgfVxuXG4gICAgaW5pdEdhbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRGcnVpdCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJ1aXQuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZydWl0c05vZGUuY2hpbGRyZW5Db3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZnJ1aXRzTm9kZS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5qdWljZXNOb2RlLmNoaWxkcmVuQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmp1aWNlc05vZGUuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0NyZWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNMakluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluaXRQaHlzaWNzKCk7XG4gICAgICAgIHRoaXMuaW5pdE9uZUZydWl0KCk7XG4gICAgfVxuXG4gICAgY2hlY2tHYW1lT3ZlcigpIHtcbiAgICAgICAgbGV0IGVuZEZydWl0ID0gdGhpcy5mcnVpdHNOb2RlLmNoaWxkcmVuW3RoaXMuZnJ1aXRzTm9kZS5jaGlsZHJlbkNvdW50IC0gMV07XG4gICAgICAgIGlmIChlbmRGcnVpdCAmJiBlbmRGcnVpdC55ID49IHRoaXMuY3JlYXRZIC0gMTAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRHYW1lKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8g5byA5ZCv54mp55CG5byV5pOO5ZKM56Kw5pKe5qOA5rWLXG4gICAgaW5pdFBoeXNpY3MoKSB7XG4gICAgICAgIC8vIOeJqeeQhuW8leaTjlxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKClcbiAgICAgICAgaW5zdGFuY2UuZW5hYmxlZCA9IHRydWVcbiAgICAgICAgLy8gaW5zdGFuY2UuZGVidWdEcmF3RmxhZ3MgPSA0XG4gICAgICAgIGluc3RhbmNlLmdyYXZpdHkgPSBjYy52MigwLCAtOTYwKTtcblxuICAgICAgICAvLyDnorDmkp7mo4DmtYtcbiAgICAgICAgY29uc3QgY29sbGlzaW9uTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcbiAgICAgICAgY29sbGlzaW9uTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyDorr7nva7lm5vlkajnmoTnorDmkp7ljLrln59cbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5ub2RlLndpZHRoO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodDtcblxuICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG5cbiAgICAgICAgbGV0IGJvZHkgPSBub2RlLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcblxuICAgICAgICBjb25zdCBfYWRkQm91bmQgPSAobm9kZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbGxpZGVyID0gbm9kZS5hZGRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcbiAgICAgICAgICAgIGNvbGxpZGVyLm9mZnNldC54ID0geDtcbiAgICAgICAgICAgIGNvbGxpZGVyLm9mZnNldC55ID0geTtcbiAgICAgICAgICAgIGNvbGxpZGVyLnNpemUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIGNvbGxpZGVyLnNpemUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgX2FkZEJvdW5kKG5vZGUsIDAsIC1oZWlnaHQgLyAyICsgdGhpcy5ib3R0b21Ob2RlLmhlaWdodCwgd2lkdGgsIDEpO1xuICAgICAgICBfYWRkQm91bmQobm9kZSwgMCwgaGVpZ2h0IC8gMiwgd2lkdGgsIDEpO1xuICAgICAgICBfYWRkQm91bmQobm9kZSwgLXdpZHRoIC8gMiwgMCwgMSwgaGVpZ2h0KTtcbiAgICAgICAgX2FkZEJvdW5kKG5vZGUsIHdpZHRoIC8gMiwgMCwgMSwgaGVpZ2h0KTtcblxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICB9XG5cbiAgICBpbml0T25lRnJ1aXQoaWQgPSAxKSB7XG4gICAgICAgIHRoaXMuZnJ1aXRDb3VudCsrO1xuICAgICAgICB0aGlzLmN1cnJlbnRGcnVpdCA9IHRoaXMuY3JlYXRlRnJ1aXRPblBvcygwLCB0aGlzLmNyZWF0WSwgaWQpO1xuICAgIH1cblxuICAgIC8vIOebkeWQrOWxj+W5leeCueWHu1xuICAgIG9uVG91Y2hTdGFydChlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ3JlYXRpbmcpIHJldHVyblxuICAgICAgICB0aGlzLmlzQ3JlYXRpbmcgPSB0cnVlXG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5ub2RlXG5cblxuICAgICAgICBjb25zdCBmcnVpdCA9IHRoaXMuY3VycmVudEZydWl0XG5cbiAgICAgICAgY29uc3QgcG9zID0gZS5nZXRMb2NhdGlvbigpXG4gICAgICAgIGxldCB7IHgsIHkgfSA9IHBvc1xuICAgICAgICB4ID0geCAtIHdpZHRoIC8gMlxuICAgICAgICB5ID0geSAtIGhlaWdodCAvIDJcblxuICAgICAgICBjb25zdCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5tb3ZlQnkoMC4zLCBjYy52Mih4LCAwKSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbkluKCkpLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAvLyDlvIDlkK/niannkIbmlYjmnpxcbiAgICAgICAgICAgIHRoaXMuc3RhcnRGcnVpdFBoeXNpY3MoZnJ1aXQpXG5cbiAgICAgICAgICAgIC8vIDFz5ZCO6YeN5paw55Sf5oiQ5LiA5LiqXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrR2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0SWQgPSB0aGlzLmdldE5leHRGcnVpdElkKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0T25lRnJ1aXQobmV4dElkKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ3JlYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxKVxuICAgICAgICB9KSlcblxuICAgICAgICBmcnVpdC5ydW5BY3Rpb24oYWN0aW9uKVxuICAgIH1cblxuICAgIC8vIOiOt+WPluS4i+S4gOS4quawtOaenOeahGlkXG4gICAgZ2V0TmV4dEZydWl0SWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmZydWl0Q291bnQgPCAzKSB7XG4gICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZnJ1aXRDb3VudCA9PT0gMykge1xuICAgICAgICAgICAgcmV0dXJuIDJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOmaj+acuui/lOWbnuWJjTXkuKpcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KSArIDFcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWIm+W7uuS4gOS4quawtOaenFxuICAgIGNyZWF0ZU9uZUZydWl0KG51bSkge1xuICAgICAgICBsZXQgZnJ1aXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZydWl0UHJlZmFiKTtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5mcnVpdHNbbnVtIC0gMV1cblxuICAgICAgICBmcnVpdC5nZXRDb21wb25lbnQoJ0ZydWl0JykuaW5pdCh7XG4gICAgICAgICAgICBpZDogY29uZmlnLmlkLFxuICAgICAgICAgICAgaWNvblNGOiBjb25maWcuaWNvblNGXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZydWl0LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpY1xuICAgICAgICBmcnVpdC5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKS5yYWRpdXMgPSAwXG5cbiAgICAgICAgdGhpcy5mcnVpdHNOb2RlLmFkZENoaWxkKGZydWl0KTtcbiAgICAgICAgZnJ1aXQuc2NhbGUgPSB0aGlzLmZydWl0U2NhbGU7XG5cbiAgICAgICAgLy8g5pyJRnJ1aXTnu4Tku7bkvKDlhaVcbiAgICAgICAgZnJ1aXQub24oJ3NhbWVDb250YWN0JywgdGhpcy5vblNhbWVGcnVpdENvbnRhY3QuYmluZCh0aGlzKSlcblxuICAgICAgICByZXR1cm4gZnJ1aXRcbiAgICB9XG5cbiAgICBzdGFydEZydWl0UGh5c2ljcyhmcnVpdCkge1xuICAgICAgICBmcnVpdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xuICAgICAgICBjb25zdCBwaHlzaWNzQ2lyY2xlQ29sbGlkZXIgPSBmcnVpdC5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKVxuICAgICAgICBwaHlzaWNzQ2lyY2xlQ29sbGlkZXIucmFkaXVzID0gZnJ1aXQuaGVpZ2h0IC8gMlxuICAgICAgICBwaHlzaWNzQ2lyY2xlQ29sbGlkZXIuYXBwbHkoKVxuICAgIH1cblxuICAgIC8vIOWcqOaMh+WumuS9jee9rueUn+aIkOawtOaenFxuICAgIGNyZWF0ZUZydWl0T25Qb3MoeCwgeSwgdHlwZSA9IDEpIHtcbiAgICAgICAgY29uc3QgZnJ1aXQgPSB0aGlzLmNyZWF0ZU9uZUZydWl0KHR5cGUpXG4gICAgICAgIGZydWl0LnNldFBvc2l0aW9uKGNjLnYyKHgsIHkpKTtcbiAgICAgICAgcmV0dXJuIGZydWl0XG4gICAgfVxuXG4gICAgLy8g5Lik5Liq5rC05p6c56Kw5pKeXG4gICAgb25TYW1lRnJ1aXRDb250YWN0KHsgc2VsZiwgb3RoZXIgfSkge1xuICAgICAgICBvdGhlci5ub2RlLm9mZignc2FtZUNvbnRhY3QnKSAvLyDkuKTkuKpub2Rl6YO95Lya6Kem5Y+R77yMdG9kbyDnnIvnnIvmnInmsqHmnInlhbbku5bmlrnms5Xlj6rlsZXnpLrkuIDmrKHnmoRcblxuICAgICAgICBjb25zdCBpZCA9IG90aGVyLmdldENvbXBvbmVudCgnRnJ1aXQnKS5pZFxuICAgICAgICAvLyB0b2RvIOWPr+S7peS9v+eUqOWvueixoeaxoOWbnuaUtlxuICAgICAgICBzZWxmLm5vZGUucmVtb3ZlRnJvbVBhcmVudChmYWxzZSlcbiAgICAgICAgb3RoZXIubm9kZS5yZW1vdmVGcm9tUGFyZW50KGZhbHNlKVxuXG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gb3RoZXIubm9kZVxuXG4gICAgICAgIHRoaXMuY3JlYXRlRnJ1aXRKdWljZShpZCwgY2MudjIoeyB4LCB5IH0pLCBvdGhlci5ub2RlLndpZHRoKVxuXG4gICAgICAgIGNvbnN0IG5leHRJZCA9IGlkICsgMVxuICAgICAgICBpZiAobmV4dElkIDw9IDExKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdGcnVpdCA9IHRoaXMuY3JlYXRlRnJ1aXRPblBvcyh4LCB5LCBuZXh0SWQpXG5cbiAgICAgICAgICAgIHRoaXMuc3RhcnRGcnVpdFBoeXNpY3MobmV3RnJ1aXQpXG5cbiAgICAgICAgICAgIC8vIOWxleekuuWKqOeUuyB0b2RvIOWKqOeUu+aViOaenOmcgOimgeiwg+aVtFxuICAgICAgICAgICAgbmV3RnJ1aXQuc2NhbGUgPSAwXG4gICAgICAgICAgICBjYy50d2VlbihuZXdGcnVpdCkudG8oLjUsIHtcbiAgICAgICAgICAgICAgICBzY2FsZTogdGhpcy5mcnVpdFNjYWxlXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdG9kbyDlkIjmiJDkuKTkuKropb/nk5xcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgdG9kbyDlkIjmiJDkuKTkuKropb/nk5wg6L+Y5rKh5pyJ5a6e546w5ZOmfiAnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnNjb3Jlc1RpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRMalRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldExqVGltZXIoKTtcbiAgICAgICAgbGV0IG9uZWxqU2NvcmVzID0gdGhpcy5nZXRsalNjb3JlcyhuZXh0SWQpO1xuICAgICAgICB0aGlzLmxqQ291bnQrKztcbiAgICAgICAgdGhpcy5salNjb3JlcyArPSBvbmVsalNjb3JlcztcbiAgICAgICAgdGhpcy5jdXJTY29yZXMgKz0gdGhpcy5salNjb3JlcztcbiAgICB9XG5cbiAgICAvL+iuvue9rui/nuWHu+WIneWni+aVsOaNrlxuICAgIHByaXZhdGUgaW5pdExqVGltZSgpIHtcbiAgICAgICAgdGhpcy5pc0xqSW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sakNvdW50ID0gMDtcbiAgICB9XG5cbiAgICAvL+mHjee9rui/nuWHu+iuoeaXtuWZqFxuICAgIHByaXZhdGUgc2V0TGpUaW1lcigpIHtcbiAgICAgICAgdGhpcy5zY29yZXNUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUxqVGltZSgpO1xuICAgICAgICB9LCB0aGlzLnNjb3Jlc1RpbWUgKiAxMDAwKTtcbiAgICB9XG5cbiAgICAvL+WFs+mXrei/nuWHu+iuoeaXtuWZqFxuICAgIHByaXZhdGUgY2xvc2VMalRpbWUoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNjb3Jlc1RpbWVyKTtcbiAgICAgICAgdGhpcy5salNjb3JlcyA9IDA7XG4gICAgICAgIHRoaXMuc2NvcmVzVGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmlzTGpJbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuY3VyU2NvcmVzID49IHRoaXMudGFyZ2V0U2NvcmVzKSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v6I635b6X6L+e5Ye75YiG5pWwXG4gICAgcHJpdmF0ZSBnZXRsalNjb3JlcyhsdjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG5cbiAgICAvLyDlkIjlubbml7bnmoTliqjnlLvmlYjmnpxcbiAgICBjcmVhdGVGcnVpdEp1aWNlKGlkLCBwb3MsIG4pIHtcbiAgICAgICAgLy8g5pKt5pS+5ZCI5bm255qE5aOw6Z+zXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5ib29tQXVkaW8sIGZhbHNlLCAxKTtcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLndhdGVyQXVkaW8sIGZhbHNlLCAxKTtcblxuICAgICAgICBBcHAuc291bmRNZ3IucGxheUVmZmVjdChcImNvbW1vbi9zb3VuZHMvYm9vbVwiKTtcbiAgICAgICAgQXBwLnNvdW5kTWdyLnBsYXlFZmZlY3QoXCJjb21tb24vc291bmRzL3dhdGVyXCIpO1xuXG4gICAgICAgIC8vIOWxleekuuWKqOeUu1xuICAgICAgICBsZXQganVpY2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmp1aWNlUHJlZmFiKTtcbiAgICAgICAgdGhpcy5qdWljZXNOb2RlLmFkZENoaWxkKGp1aWNlKTtcblxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmp1aWNlc1tpZCAtIDFdXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0ganVpY2UuZ2V0Q29tcG9uZW50KCdKdWljZScpXG4gICAgICAgIGluc3RhbmNlLmluaXQoY29uZmlnKVxuICAgICAgICBpbnN0YW5jZS5zaG93SnVpY2UocG9zLCBuKVxuICAgIH1cblxuXG4gICAgLy/muLjmiI/kv53lrZhcbiAgICBzYXZlR2FtZSgpIHtcbiAgICAgICAgbGV0IGZydWl0UG9zQXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IGZydWl0Q2hpbGQgPSB0aGlzLmZydWl0c05vZGUuY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJ1aXRDaGlsZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEZydWl0LnV1aWQgIT0gZnJ1aXRDaGlsZFtpXS51dWlkKSB7XG4gICAgICAgICAgICAgICAgZnJ1aXRQb3NBcnJheS5wdXNoKGZydWl0Q2hpbGRbaV0uZ2V0Q29tcG9uZW50KFwiRnJ1aXRcIikuZ2V0RGF0YSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBTYXZlTWFuYWdlci5JbnN0YW5jZSgpLnNldEl0ZW0oU2F2ZS5mcnVpdHNQb3MsIGZydWl0UG9zQXJyYXkpO1xuXG4gICAgICAgIFNhdmVNYW5hZ2VyLkluc3RhbmNlKCkuc2V0SXRlbShTYXZlLmdhbWVTY29yZXMsIHRoaXMuY3VyU2NvcmVzKTtcbiAgICB9XG5cbiAgICAvL+a4uOaIj+ivu+WPllxuICAgIHJlYWRHYW1lKCkge1xuICAgICAgICBsZXQgZ2FtZURhdGEgPSBTYXZlTWFuYWdlci5JbnN0YW5jZSgpLmdldEl0ZW0oU2F2ZS5mcnVpdHNQb3MpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGdhbWVEYXRhW2ldO1xuICAgICAgICAgICAgdGhpcy5zdGFydEZydWl0UGh5c2ljcyh0aGlzLmNyZWF0ZUZydWl0T25Qb3MoZGF0YS5wb3MueCwgZGF0YS5wb3MueSwgZGF0YS5pZCkpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZydWl0Q291bnQgPSBnYW1lRGF0YS5sZW5ndGg7XG4gICAgICAgIHRoaXMuY3VyU2NvcmVzID0gU2F2ZU1hbmFnZXIuSW5zdGFuY2UoKS5nZXRJdGVtKFNhdmUuZ2FtZVNjb3Jlcyk7XG4gICAgfVxuXG59XG4iXX0=