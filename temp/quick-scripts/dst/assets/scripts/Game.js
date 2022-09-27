
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBZ0M7QUFDaEMscUNBQW9DO0FBSXBDLDJDQUEwQztBQUMxQyx5REFBd0Q7QUFDeEQsd0NBQXVDO0FBR3ZDLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDbkIsSUFBSSxFQUFFLFdBQVc7SUFDakIsVUFBVSxFQUFFO1FBQ1IsRUFBRSxFQUFFLENBQUM7UUFDTCxNQUFNLEVBQUUsRUFBRSxDQUFDLFdBQVc7S0FDekI7Q0FDSixDQUFDLENBQUM7QUFFSCxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ3ZCLElBQUksRUFBRSxXQUFXO0lBQ2pCLFVBQVUsRUFBRTtRQUNSLFFBQVEsRUFBRSxFQUFFLENBQUMsV0FBVztRQUN4QixNQUFNLEVBQUUsRUFBRSxDQUFDLFdBQVc7UUFDdEIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxXQUFXO0tBQ3hCO0NBQ0osQ0FBQyxDQUFDO0FBRUcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFzV0M7UUFuV1csWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUdaLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFHWixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUduQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUduQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLGdCQUFVLEdBQWdCLElBQUksQ0FBQztRQUcvQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixrQkFBWSxHQUFjLElBQUksQ0FBQztRQUUvQixZQUFNLEdBQVcs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V3hCO0lBQUQsV0FBQztDQXRXRCxBQXNXQyxDQXRXaUMsRUFBRSxDQUFDLFNBQVMsR0FzVzdDO2tCQXRXb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcCB9IGZyb20gXCIuL2FwcC9BcHBcIjtcbmltcG9ydCB7IFVJQ2ZnIH0gZnJvbSBcIi4vY2ZnL1VJQ2ZnXCI7XG5pbXBvcnQgeyBTb3VuZE1nciB9IGZyb20gXCIuL21ncnMvU291bmRNZ3JcIjtcbmltcG9ydCB7IGh0dHBDbGllbnQgfSBmcm9tIFwiLi9wbGF0Zm9ybS9IdHRwQ2xpZW50XCI7XG5pbXBvcnQgeyBIdHRwVXJsIH0gZnJvbSBcIi4vcGxhdGZvcm0vSHR0cFVybFwiO1xuaW1wb3J0IHsgU2F2ZSB9IGZyb20gXCIuL3NhdmVNYW5hZ2VyL1NhdmVcIjtcbmltcG9ydCB7IFNhdmVNYW5hZ2VyIH0gZnJvbSBcIi4vc2F2ZU1hbmFnZXIvU2F2ZU1hbmFnZXJcIjtcbmltcG9ydCB7IFVJVXRpbHMgfSBmcm9tIFwiLi91aS9VSVV0aWxzXCI7XG5pbXBvcnQgeyBvYmplY3RVdGlscyB9IGZyb20gXCIuL3V0aWxzL29iamVjdC11dGlsc1wiO1xuXG5jb25zdCBGcnVpdCA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnRnJ1aXRJdGVtJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBpY29uU0Y6IGNjLlNwcml0ZUZyYW1lXG4gICAgfVxufSk7XG5cbmNvbnN0IEp1aWNlSXRlbSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnSnVpY2VJdGVtJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHBhcnRpY2xlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgY2lyY2xlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgc2xhc2g6IGNjLlNwcml0ZUZyYW1lLFxuICAgIH1cbn0pO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoRnJ1aXQpXG4gICAgcHJpdmF0ZSBmcnVpdHMgPSBbXTtcblxuICAgIEBwcm9wZXJ0eShKdWljZUl0ZW0pXG4gICAgcHJpdmF0ZSBqdWljZXMgPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJpdmF0ZSBmcnVpdFByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByaXZhdGUganVpY2VQcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBmcnVpdHNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUganVpY2VzTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSBsYlNjb3JlczogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlJpY2hUZXh0KVxuICAgIHByaXZhdGUgbGJTY29yZVRpcDogY2MuUmljaFRleHQgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBib3R0b21Ob2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgcHJpdmF0ZSBidG5PcGVuV2hlZWw6IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBwcml2YXRlIGNyZWF0WTogbnVtYmVyID0gNDAwOyAgICAgICAvL+eUn+S6p+eQg+eahOS9jee9rlxuXG4gICAgcHJpdmF0ZSBpc0NyZWF0aW5nOiBib29sZWFuOyAgICAgICAgLy/mmK/lkKblnKjliJvlu7rnkIPkuK1cblxuICAgIHByaXZhdGUgaXNMakluZzogYm9vbGVhbjsgICAgICAgICAgICAvL+aYr+WQpuWcqOi/nuWHu+S4rVxuXG4gICAgcHJpdmF0ZSBmcnVpdENvdW50OiBudW1iZXI7ICAgICAgICAgLy/lnLrkuIrmgLvlhbHnmoTmlbDph49cblxuICAgIHByaXZhdGUgY3VycmVudEZydWl0OiBjYy5Ob2RlOyAgICAgIC8v5b2T5YmN5rC05p6cICAgIFxuXG4gICAgcHJpdmF0ZSBzY29yZXNUaW1lciA9IG51bGw7ICAgICAgICAgIC8v6L+e5Ye76K6h5pe25ZmoXG5cbiAgICBwcml2YXRlIHNjb3Jlc1RpbWUgPSAxOyAgICAgICAgICAgICAvL+i/nuWHu+acieaViOaXtumXtFxuXG4gICAgcHJpdmF0ZSBsalNjb3JlcyA9IDA7ICAgICAgICAgICAgICAgLy/ov57lh7vliIbmlbBcblxuICAgIHByaXZhdGUgbGpDb3VudCA9IDA7ICAgICAgICAgICAgICAgIC8v6L+e5Ye75qyh5pWwXG5cbiAgICBwcml2YXRlIF9jdXJTY29yZXMgPSAwOyAgICAgICAgICAgICAvL+W9k+WJjeaAu+WIhlxuXG4gICAgcHVibGljIHNldCBjdXJTY29yZXModmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jdXJTY29yZXMgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0U2NvcmVzID4gdGhpcy5jdXJTY29yZXMpIHtcbiAgICAgICAgICAgIHRoaXMubGJTY29yZXMuc3RyaW5nID0gYCR7dGhpcy5jdXJTY29yZXN9LyR7dGhpcy50YXJnZXRTY29yZXN9YDtcbiAgICAgICAgICAgIHRoaXMubGJTY29yZVRpcC5zdHJpbmcgPSBg5YaN5b6XPGNvbG9yID0gI0NGNUI1Qj4ke3RoaXMudGFyZ2V0U2NvcmVzIC0gdGhpcy5jdXJTY29yZXN9PC9jPuWIhu+8jOWNs+WPr+iOt+W+l+mineWkluaPkOeOsOacuuS8mmA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxiU2NvcmVzLnN0cmluZyA9IFwi5Y+v5o+Q546wXCI7XG4gICAgICAgICAgICB0aGlzLmxiU2NvcmVUaXAuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY3VyU2NvcmVzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJTY29yZXM7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHRhcmdldFNjb3JlcyA9IDcwMDsgICAgICAgICAvL+S4i+S4gOS4quebruagh+WIhuaVsCAgICBcblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBBcHAudWlDZmdNZ3IuaW5pdEJ5Q2ZnKFVJQ2ZnKTtcblxuICAgICAgICBVSVV0aWxzLmFkZENsaWNrRXZlbnQodGhpcy5idG5PcGVuV2hlZWwubm9kZSwgKCkgPT4ge1xuICAgICAgICAgICAgLy9BcHAudWlNZ3Iub3BlblVJKFVJQ2ZnLlBhbm5lbFdoZWVsLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5pbml0R2FtZSgpO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAvLyDnm5HlkKzngrnlh7vkuovku7YgdG9kbyDmmK/lkKbog73lpJ/ms6jlhozlhajlsYDkuovku7ZcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcylcblxuXG4gICAgICAgIHRoaXMuaW5pdEdhbWUoKTtcblxuXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLkv53lrZjmuLjmiI9cIik7XG4gICAgICAgICAgICB0aGlzLnNhdmVHYW1lKCk7XG4gICAgICAgIH0sIDEwMDAwKVxuICAgICAgICAvL2NvbnNvbGUubG9nKFwi6K+75Y+W5ri45oiPXCIpO1xuICAgICAgICB0aGlzLnJlYWRHYW1lKCk7XG4gICAgfVxuXG4gICAgaW5pdEdhbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRGcnVpdCkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJ1aXQuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZydWl0c05vZGUuY2hpbGRyZW5Db3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZnJ1aXRzTm9kZS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5qdWljZXNOb2RlLmNoaWxkcmVuQ291bnQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmp1aWNlc05vZGUuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0NyZWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNMakluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluaXRQaHlzaWNzKCk7XG4gICAgICAgIHRoaXMuaW5pdE9uZUZydWl0KCk7XG4gICAgfVxuXG4gICAgY2hlY2tHYW1lT3ZlcigpIHtcbiAgICAgICAgbGV0IGVuZEZydWl0ID0gdGhpcy5mcnVpdHNOb2RlLmNoaWxkcmVuW3RoaXMuZnJ1aXRzTm9kZS5jaGlsZHJlbkNvdW50IC0gMV07ICAgICAgICBcbiAgICAgICAgaWYgKGVuZEZydWl0ICYmIGVuZEZydWl0LnkgPj0gdGhpcy5jcmVhdFkgLSAxMDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEdhbWUoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyDlvIDlkK/niannkIblvJXmk47lkoznorDmkp7mo4DmtYtcbiAgICBpbml0UGh5c2ljcygpIHtcbiAgICAgICAgLy8g54mp55CG5byV5pOOXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKVxuICAgICAgICBpbnN0YW5jZS5lbmFibGVkID0gdHJ1ZVxuICAgICAgICAvLyBpbnN0YW5jZS5kZWJ1Z0RyYXdGbGFncyA9IDRcbiAgICAgICAgaW5zdGFuY2UuZ3Jhdml0eSA9IGNjLnYyKDAsIC05NjApO1xuXG4gICAgICAgIC8vIOeisOaSnuajgOa1i1xuICAgICAgICBjb25zdCBjb2xsaXNpb25NYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBjb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIOiuvue9ruWbm+WRqOeahOeisOaSnuWMuuWfn1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLm5vZGUud2lkdGg7XG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0O1xuXG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKTtcblxuICAgICAgICBsZXQgYm9keSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xuXG4gICAgICAgIGNvbnN0IF9hZGRCb3VuZCA9IChub2RlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sbGlkZXIgPSBub2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xuICAgICAgICAgICAgY29sbGlkZXIub2Zmc2V0LnggPSB4O1xuICAgICAgICAgICAgY29sbGlkZXIub2Zmc2V0LnkgPSB5O1xuICAgICAgICAgICAgY29sbGlkZXIuc2l6ZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgY29sbGlkZXIuc2l6ZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBfYWRkQm91bmQobm9kZSwgMCwgLWhlaWdodCAvIDIgKyB0aGlzLmJvdHRvbU5vZGUuaGVpZ2h0LCB3aWR0aCwgMSk7XG4gICAgICAgIF9hZGRCb3VuZChub2RlLCAwLCBoZWlnaHQgLyAyLCB3aWR0aCwgMSk7XG4gICAgICAgIF9hZGRCb3VuZChub2RlLCAtd2lkdGggLyAyLCAwLCAxLCBoZWlnaHQpO1xuICAgICAgICBfYWRkQm91bmQobm9kZSwgd2lkdGggLyAyLCAwLCAxLCBoZWlnaHQpO1xuXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIGluaXRPbmVGcnVpdChpZCA9IDEpIHtcbiAgICAgICAgdGhpcy5mcnVpdENvdW50Kys7XG4gICAgICAgIHRoaXMuY3VycmVudEZydWl0ID0gdGhpcy5jcmVhdGVGcnVpdE9uUG9zKDAsIHRoaXMuY3JlYXRZLCBpZCk7XG4gICAgfVxuXG4gICAgLy8g55uR5ZCs5bGP5bmV54K55Ye7XG4gICAgb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDcmVhdGluZykgcmV0dXJuXG4gICAgICAgIHRoaXMuaXNDcmVhdGluZyA9IHRydWVcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLm5vZGVcblxuXG4gICAgICAgIGNvbnN0IGZydWl0ID0gdGhpcy5jdXJyZW50RnJ1aXRcblxuICAgICAgICBjb25zdCBwb3MgPSBlLmdldExvY2F0aW9uKClcbiAgICAgICAgbGV0IHsgeCwgeSB9ID0gcG9zXG4gICAgICAgIHggPSB4IC0gd2lkdGggLyAyXG4gICAgICAgIHkgPSB5IC0gaGVpZ2h0IC8gMlxuXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGNjLnNlcXVlbmNlKGNjLm1vdmVCeSgwLjMsIGNjLnYyKHgsIDApKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uSW4oKSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIC8vIOW8gOWQr+eJqeeQhuaViOaenFxuICAgICAgICAgICAgdGhpcy5zdGFydEZydWl0UGh5c2ljcyhmcnVpdClcblxuICAgICAgICAgICAgLy8gMXPlkI7ph43mlrDnlJ/miJDkuIDkuKpcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tHYW1lT3ZlcigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRJZCA9IHRoaXMuZ2V0TmV4dEZydWl0SWQoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRPbmVGcnVpdChuZXh0SWQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDcmVhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEpXG4gICAgICAgIH0pKVxuXG4gICAgICAgIGZydWl0LnJ1bkFjdGlvbihhY3Rpb24pXG4gICAgfVxuXG4gICAgLy8g6I635Y+W5LiL5LiA5Liq5rC05p6c55qEaWRcbiAgICBnZXROZXh0RnJ1aXRJZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJ1aXRDb3VudCA8IDMpIHtcbiAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5mcnVpdENvdW50ID09PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gMlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g6ZqP5py66L+U5Zue5YmNNeS4qlxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpICsgMVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5Yib5bu65LiA5Liq5rC05p6cXG4gICAgY3JlYXRlT25lRnJ1aXQobnVtKSB7XG4gICAgICAgIGxldCBmcnVpdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZnJ1aXRQcmVmYWIpO1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmZydWl0c1tudW0gLSAxXVxuXG4gICAgICAgIGZydWl0LmdldENvbXBvbmVudCgnRnJ1aXQnKS5pbml0KHtcbiAgICAgICAgICAgIGlkOiBjb25maWcuaWQsXG4gICAgICAgICAgICBpY29uU0Y6IGNvbmZpZy5pY29uU0ZcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnJ1aXQuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljXG4gICAgICAgIGZydWl0LmdldENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpLnJhZGl1cyA9IDBcblxuICAgICAgICB0aGlzLmZydWl0c05vZGUuYWRkQ2hpbGQoZnJ1aXQpO1xuICAgICAgICBmcnVpdC5zY2FsZSA9IDAuNjtcblxuICAgICAgICAvLyDmnIlGcnVpdOe7hOS7tuS8oOWFpVxuICAgICAgICBmcnVpdC5vbignc2FtZUNvbnRhY3QnLCB0aGlzLm9uU2FtZUZydWl0Q29udGFjdC5iaW5kKHRoaXMpKVxuXG4gICAgICAgIHJldHVybiBmcnVpdFxuICAgIH1cblxuICAgIHN0YXJ0RnJ1aXRQaHlzaWNzKGZydWl0KSB7XG4gICAgICAgIGZydWl0LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XG4gICAgICAgIGNvbnN0IHBoeXNpY3NDaXJjbGVDb2xsaWRlciA9IGZydWl0LmdldENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpXG4gICAgICAgIHBoeXNpY3NDaXJjbGVDb2xsaWRlci5yYWRpdXMgPSBmcnVpdC5oZWlnaHQgLyAyXG4gICAgICAgIHBoeXNpY3NDaXJjbGVDb2xsaWRlci5hcHBseSgpXG4gICAgfVxuXG4gICAgLy8g5Zyo5oyH5a6a5L2N572u55Sf5oiQ5rC05p6cXG4gICAgY3JlYXRlRnJ1aXRPblBvcyh4LCB5LCB0eXBlID0gMSkgeyAgICAgICAgXG4gICAgICAgIGNvbnN0IGZydWl0ID0gdGhpcy5jcmVhdGVPbmVGcnVpdCh0eXBlKVxuICAgICAgICBmcnVpdC5zZXRQb3NpdGlvbihjYy52Mih4LCB5KSk7XG4gICAgICAgIHJldHVybiBmcnVpdFxuICAgIH1cblxuICAgIC8vIOS4pOS4quawtOaenOeisOaSnlxuICAgIG9uU2FtZUZydWl0Q29udGFjdCh7IHNlbGYsIG90aGVyIH0pIHsgICAgICAgIFxuICAgICAgICBvdGhlci5ub2RlLm9mZignc2FtZUNvbnRhY3QnKSAvLyDkuKTkuKpub2Rl6YO95Lya6Kem5Y+R77yMdG9kbyDnnIvnnIvmnInmsqHmnInlhbbku5bmlrnms5Xlj6rlsZXnpLrkuIDmrKHnmoRcblxuICAgICAgICBjb25zdCBpZCA9IG90aGVyLmdldENvbXBvbmVudCgnRnJ1aXQnKS5pZFxuICAgICAgICAvLyB0b2RvIOWPr+S7peS9v+eUqOWvueixoeaxoOWbnuaUtlxuICAgICAgICBzZWxmLm5vZGUucmVtb3ZlRnJvbVBhcmVudChmYWxzZSlcbiAgICAgICAgb3RoZXIubm9kZS5yZW1vdmVGcm9tUGFyZW50KGZhbHNlKVxuXG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gb3RoZXIubm9kZVxuXG4gICAgICAgIHRoaXMuY3JlYXRlRnJ1aXRKdWljZShpZCwgY2MudjIoeyB4LCB5IH0pLCBvdGhlci5ub2RlLndpZHRoKVxuXG4gICAgICAgIGNvbnN0IG5leHRJZCA9IGlkICsgMVxuICAgICAgICBpZiAobmV4dElkIDw9IDExKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdGcnVpdCA9IHRoaXMuY3JlYXRlRnJ1aXRPblBvcyh4LCB5LCBuZXh0SWQpXG5cbiAgICAgICAgICAgIHRoaXMuc3RhcnRGcnVpdFBoeXNpY3MobmV3RnJ1aXQpXG5cbiAgICAgICAgICAgIC8vIOWxleekuuWKqOeUuyB0b2RvIOWKqOeUu+aViOaenOmcgOimgeiwg+aVtFxuICAgICAgICAgICAgbmV3RnJ1aXQuc2NhbGUgPSAwXG4gICAgICAgICAgICBjYy50d2VlbihuZXdGcnVpdCkudG8oLjUsIHtcbiAgICAgICAgICAgICAgICBzY2FsZTogMC42XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdG9kbyDlkIjmiJDkuKTkuKropb/nk5xcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgdG9kbyDlkIjmiJDkuKTkuKropb/nk5wg6L+Y5rKh5pyJ5a6e546w5ZOmfiAnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnNjb3Jlc1RpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRMalRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldExqVGltZXIoKTtcbiAgICAgICAgbGV0IG9uZWxqU2NvcmVzID0gdGhpcy5nZXRsalNjb3JlcyhuZXh0SWQpO1xuICAgICAgICB0aGlzLmxqQ291bnQrKztcbiAgICAgICAgdGhpcy5salNjb3JlcyArPSBvbmVsalNjb3JlcztcbiAgICAgICAgdGhpcy5jdXJTY29yZXMgKz0gdGhpcy5salNjb3JlcztcbiAgICB9XG5cbiAgICAvL+iuvue9rui/nuWHu+WIneWni+aVsOaNrlxuICAgIHByaXZhdGUgaW5pdExqVGltZSgpIHtcbiAgICAgICAgdGhpcy5pc0xqSW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sakNvdW50ID0gMDtcbiAgICB9XG5cbiAgICAvL+mHjee9rui/nuWHu+iuoeaXtuWZqFxuICAgIHByaXZhdGUgc2V0TGpUaW1lcigpIHtcbiAgICAgICAgdGhpcy5zY29yZXNUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUxqVGltZSgpO1xuICAgICAgICB9LCB0aGlzLnNjb3Jlc1RpbWUgKiAxMDAwKTtcbiAgICB9XG5cbiAgICAvL+WFs+mXrei/nuWHu+iuoeaXtuWZqFxuICAgIHByaXZhdGUgY2xvc2VMalRpbWUoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNjb3Jlc1RpbWVyKTtcbiAgICAgICAgdGhpcy5salNjb3JlcyA9IDA7XG4gICAgICAgIHRoaXMuc2NvcmVzVGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmlzTGpJbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuY3VyU2NvcmVzID49IHRoaXMudGFyZ2V0U2NvcmVzKSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v6I635b6X6L+e5Ye75YiG5pWwXG4gICAgcHJpdmF0ZSBnZXRsalNjb3JlcyhsdjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG5cbiAgICAvLyDlkIjlubbml7bnmoTliqjnlLvmlYjmnpxcbiAgICBjcmVhdGVGcnVpdEp1aWNlKGlkLCBwb3MsIG4pIHtcbiAgICAgICAgLy8g5pKt5pS+5ZCI5bm255qE5aOw6Z+zXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5ib29tQXVkaW8sIGZhbHNlLCAxKTtcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLndhdGVyQXVkaW8sIGZhbHNlLCAxKTtcblxuICAgICAgICBBcHAuc291bmRNZ3IucGxheUVmZmVjdChcImNvbW1vbi9zb3VuZHMvYm9vbVwiKTtcbiAgICAgICAgQXBwLnNvdW5kTWdyLnBsYXlFZmZlY3QoXCJjb21tb24vc291bmRzL3dhdGVyXCIpO1xuXG4gICAgICAgIC8vIOWxleekuuWKqOeUu1xuICAgICAgICBsZXQganVpY2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmp1aWNlUHJlZmFiKTtcbiAgICAgICAgdGhpcy5qdWljZXNOb2RlLmFkZENoaWxkKGp1aWNlKTtcblxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmp1aWNlc1tpZCAtIDFdXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0ganVpY2UuZ2V0Q29tcG9uZW50KCdKdWljZScpXG4gICAgICAgIGluc3RhbmNlLmluaXQoY29uZmlnKVxuICAgICAgICBpbnN0YW5jZS5zaG93SnVpY2UocG9zLCBuKVxuICAgIH1cblxuXG4gICAgLy/muLjmiI/kv53lrZhcbiAgICBzYXZlR2FtZSgpIHtcbiAgICAgICAgbGV0IGZydWl0UG9zQXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IGZydWl0Q2hpbGQgPSB0aGlzLmZydWl0c05vZGUuY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJ1aXRDaGlsZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEZydWl0LnV1aWQgIT0gZnJ1aXRDaGlsZFtpXS51dWlkKSB7XG4gICAgICAgICAgICAgICAgZnJ1aXRQb3NBcnJheS5wdXNoKGZydWl0Q2hpbGRbaV0uZ2V0Q29tcG9uZW50KFwiRnJ1aXRcIikuZ2V0RGF0YSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBTYXZlTWFuYWdlci5JbnN0YW5jZSgpLnNldEl0ZW0oU2F2ZS5mcnVpdHNQb3MsIGZydWl0UG9zQXJyYXkpO1xuXG4gICAgICAgIFNhdmVNYW5hZ2VyLkluc3RhbmNlKCkuc2V0SXRlbShTYXZlLmdhbWVTY29yZXMsIHRoaXMuY3VyU2NvcmVzKTtcbiAgICB9XG5cbiAgICAvL+a4uOaIj+ivu+WPllxuICAgIHJlYWRHYW1lKCkge1xuICAgICAgICBsZXQgZ2FtZURhdGEgPSBTYXZlTWFuYWdlci5JbnN0YW5jZSgpLmdldEl0ZW0oU2F2ZS5mcnVpdHNQb3MpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGdhbWVEYXRhW2ldO1xuICAgICAgICAgICAgdGhpcy5zdGFydEZydWl0UGh5c2ljcyh0aGlzLmNyZWF0ZUZydWl0T25Qb3MoZGF0YS5wb3MueCwgZGF0YS5wb3MueSwgZGF0YS5pZCkpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZydWl0Q291bnQgPSBnYW1lRGF0YS5sZW5ndGg7XG4gICAgICAgIHRoaXMuY3VyU2NvcmVzID0gU2F2ZU1hbmFnZXIuSW5zdGFuY2UoKS5nZXRJdGVtKFNhdmUuZ2FtZVNjb3Jlcyk7XG4gICAgfVxuXG59XG4iXX0=