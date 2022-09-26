
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
            App_1.App.uiMgr.openUI(UICfg_1.UICfg.PannelWheel.name);
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
        this.isCreating = false;
        this.isLjIng = false;
        this.initPhysics();
        this.initOneFruit();
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
        this.currentFruit = this.createFruitOnPos(0, 400, id);
    };
    // 监听屏幕点击
    Game.prototype.onTouchStart = function (e) {
        var _this = this;
        if (this.isCreating || this.isLjIng)
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
                var nextId = _this.getNextFruitId();
                _this.initOneFruit(nextId);
                _this.isCreating = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBZ0M7QUFDaEMscUNBQW9DO0FBSXBDLDJDQUEwQztBQUMxQyx5REFBd0Q7QUFDeEQsd0NBQXVDO0FBR3ZDLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDbkIsSUFBSSxFQUFFLFdBQVc7SUFDakIsVUFBVSxFQUFFO1FBQ1IsRUFBRSxFQUFFLENBQUM7UUFDTCxNQUFNLEVBQUUsRUFBRSxDQUFDLFdBQVc7S0FDekI7Q0FDSixDQUFDLENBQUM7QUFFSCxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ3ZCLElBQUksRUFBRSxXQUFXO0lBQ2pCLFVBQVUsRUFBRTtRQUNSLFFBQVEsRUFBRSxFQUFFLENBQUMsV0FBVztRQUN4QixNQUFNLEVBQUUsRUFBRSxDQUFDLFdBQVc7UUFDdEIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxXQUFXO0tBQ3hCO0NBQ0osQ0FBQyxDQUFDO0FBRUcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUErVUM7UUE1VVcsWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUdaLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFHWixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUduQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUduQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRzFCLGdCQUFVLEdBQWdCLElBQUksQ0FBQztRQUcvQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixrQkFBWSxHQUFhLElBQUksQ0FBQztRQVU5QixpQkFBVyxHQUFH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LENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDaUI7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDaUI7SUFHbkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDZTtJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDOzRDQUNpQjtJQUd2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNpQjtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNrQjtJQTlCckIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQStVeEI7SUFBRCxXQUFDO0NBL1VELEFBK1VDLENBL1VpQyxFQUFFLENBQUMsU0FBUyxHQStVN0M7a0JBL1VvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vYXBwL0FwcFwiO1xuaW1wb3J0IHsgVUlDZmcgfSBmcm9tIFwiLi9jZmcvVUlDZmdcIjtcbmltcG9ydCB7IFNvdW5kTWdyIH0gZnJvbSBcIi4vbWdycy9Tb3VuZE1nclwiO1xuaW1wb3J0IHsgaHR0cENsaWVudCB9IGZyb20gXCIuL3BsYXRmb3JtL0h0dHBDbGllbnRcIjtcbmltcG9ydCB7IEh0dHBVcmwgfSBmcm9tIFwiLi9wbGF0Zm9ybS9IdHRwVXJsXCI7XG5pbXBvcnQgeyBTYXZlIH0gZnJvbSBcIi4vc2F2ZU1hbmFnZXIvU2F2ZVwiO1xuaW1wb3J0IHsgU2F2ZU1hbmFnZXIgfSBmcm9tIFwiLi9zYXZlTWFuYWdlci9TYXZlTWFuYWdlclwiO1xuaW1wb3J0IHsgVUlVdGlscyB9IGZyb20gXCIuL3VpL1VJVXRpbHNcIjtcbmltcG9ydCB7IG9iamVjdFV0aWxzIH0gZnJvbSBcIi4vdXRpbHMvb2JqZWN0LXV0aWxzXCI7XG5cbmNvbnN0IEZydWl0ID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdGcnVpdEl0ZW0nLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIGljb25TRjogY2MuU3ByaXRlRnJhbWVcbiAgICB9XG59KTtcblxuY29uc3QgSnVpY2VJdGVtID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdKdWljZUl0ZW0nLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcGFydGljbGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICBjaXJjbGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICBzbGFzaDogY2MuU3ByaXRlRnJhbWUsXG4gICAgfVxufSk7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShGcnVpdClcbiAgICBwcml2YXRlIGZydWl0cyA9IFtdO1xuXG4gICAgQHByb3BlcnR5KEp1aWNlSXRlbSlcbiAgICBwcml2YXRlIGp1aWNlcyA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcml2YXRlIGZydWl0UHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJpdmF0ZSBqdWljZVByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGZydWl0c05vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBqdWljZXNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIGxiU2NvcmVzOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUmljaFRleHQpXG4gICAgcHJpdmF0ZSBsYlNjb3JlVGlwOiBjYy5SaWNoVGV4dCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGJvdHRvbU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBwcml2YXRlIGJ0bk9wZW5XaGVlbDpjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBpc0NyZWF0aW5nOiBib29sZWFuOyAgICAgICAgLy/mmK/lkKblnKjliJvlu7rnkIPkuK1cblxuICAgIHByaXZhdGUgaXNMakluZzogYm9vbGVhbjsgICAgICAgICAgICAvL+aYr+WQpuWcqOi/nuWHu+S4rVxuXG4gICAgcHJpdmF0ZSBmcnVpdENvdW50OiBudW1iZXI7ICAgICAgICAgLy/lnLrkuIrmgLvlhbHnmoTmlbDph49cblxuICAgIHByaXZhdGUgY3VycmVudEZydWl0OiBjYy5Ob2RlOyAgICAgIC8v5b2T5YmN5rC05p6cICAgIFxuXG4gICAgcHJpdmF0ZSBzY29yZXNUaW1lciA9IG51bGw7ICAgICAgICAgIC8v6L+e5Ye76K6h5pe25ZmoXG5cbiAgICBwcml2YXRlIHNjb3Jlc1RpbWUgPSAxOyAgICAgICAgICAgICAvL+i/nuWHu+acieaViOaXtumXtFxuXG4gICAgcHJpdmF0ZSBsalNjb3JlcyA9IDA7ICAgICAgICAgICAgICAgLy/ov57lh7vliIbmlbBcblxuICAgIHByaXZhdGUgbGpDb3VudCA9IDA7ICAgICAgICAgICAgICAgIC8v6L+e5Ye75qyh5pWwXG5cbiAgICBwcml2YXRlIF9jdXJTY29yZXMgPSAwOyAgICAgICAgICAgICAvL+W9k+WJjeaAu+WIhlxuXG4gICAgcHVibGljIHNldCBjdXJTY29yZXModmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jdXJTY29yZXMgPSB2YWx1ZTtcbiAgICAgICAgaWYodGhpcy50YXJnZXRTY29yZXMgPiB0aGlzLmN1clNjb3Jlcyl7XG4gICAgICAgICAgICB0aGlzLmxiU2NvcmVzLnN0cmluZyA9IGAke3RoaXMuY3VyU2NvcmVzfS8ke3RoaXMudGFyZ2V0U2NvcmVzfWA7XG4gICAgICAgICAgICB0aGlzLmxiU2NvcmVUaXAuc3RyaW5nID0gYOWGjeW+lzxjb2xvciA9ICNDRjVCNUI+JHt0aGlzLnRhcmdldFNjb3JlcyAtIHRoaXMuY3VyU2NvcmVzfTwvYz7liIbvvIzljbPlj6/ojrflvpfpop3lpJbmj5DnjrDmnLrkvJpgO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLmxiU2NvcmVzLnN0cmluZyA9IFwi5Y+v5o+Q546wXCI7XG4gICAgICAgICAgICB0aGlzLmxiU2NvcmVUaXAuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY3VyU2NvcmVzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJTY29yZXM7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHRhcmdldFNjb3JlcyA9IDcwMDsgICAgICAgICAvL+S4i+S4gOS4quebruagh+WIhuaVsCAgICBcblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBBcHAudWlDZmdNZ3IuaW5pdEJ5Q2ZnKFVJQ2ZnKTtcblxuICAgICAgICBVSVV0aWxzLmFkZENsaWNrRXZlbnQodGhpcy5idG5PcGVuV2hlZWwubm9kZSwgKCk9PntcbiAgICAgICAgICAgIEFwcC51aU1nci5vcGVuVUkoVUlDZmcuUGFubmVsV2hlZWwubmFtZSk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vIOebkeWQrOeCueWHu+S6i+S7tiB0b2RvIOaYr+WQpuiDveWkn+azqOWGjOWFqOWxgOS6i+S7tlxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKVxuXG5cbiAgICAgICAgdGhpcy5pbml0R2FtZSgpO1xuXG5cbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIuS/neWtmOa4uOaIj1wiKTtcbiAgICAgICAgICAgIHRoaXMuc2F2ZUdhbWUoKTtcbiAgICAgICAgfSwgMTAwMDApXG4gICAgICAgIC8vY29uc29sZS5sb2coXCLor7vlj5bmuLjmiI9cIik7XG4gICAgICAgIHRoaXMucmVhZEdhbWUoKTtcbiAgICB9XG5cbiAgICBpbml0R2FtZSgpIHtcbiAgICAgICAgdGhpcy5pc0NyZWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNMakluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluaXRQaHlzaWNzKCk7XG4gICAgICAgIHRoaXMuaW5pdE9uZUZydWl0KCk7XG4gICAgfVxuXG4gICAgLy8g5byA5ZCv54mp55CG5byV5pOO5ZKM56Kw5pKe5qOA5rWLXG4gICAgaW5pdFBoeXNpY3MoKSB7XG4gICAgICAgIC8vIOeJqeeQhuW8leaTjlxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKClcbiAgICAgICAgaW5zdGFuY2UuZW5hYmxlZCA9IHRydWVcbiAgICAgICAgLy8gaW5zdGFuY2UuZGVidWdEcmF3RmxhZ3MgPSA0XG4gICAgICAgIGluc3RhbmNlLmdyYXZpdHkgPSBjYy52MigwLCAtOTYwKTtcblxuICAgICAgICAvLyDnorDmkp7mo4DmtYtcbiAgICAgICAgY29uc3QgY29sbGlzaW9uTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcbiAgICAgICAgY29sbGlzaW9uTWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyDorr7nva7lm5vlkajnmoTnorDmkp7ljLrln59cbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5ub2RlLndpZHRoO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5ub2RlLmhlaWdodDtcblxuICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG5cbiAgICAgICAgbGV0IGJvZHkgPSBub2RlLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xuICAgICAgICBib2R5LnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcblxuICAgICAgICBjb25zdCBfYWRkQm91bmQgPSAobm9kZSwgeCwgeSwgd2lkdGgsIGhlaWdodCkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbGxpZGVyID0gbm9kZS5hZGRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcbiAgICAgICAgICAgIGNvbGxpZGVyLm9mZnNldC54ID0geDtcbiAgICAgICAgICAgIGNvbGxpZGVyLm9mZnNldC55ID0geTtcbiAgICAgICAgICAgIGNvbGxpZGVyLnNpemUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIGNvbGxpZGVyLnNpemUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgX2FkZEJvdW5kKG5vZGUsIDAsIC1oZWlnaHQgLyAyICsgdGhpcy5ib3R0b21Ob2RlLmhlaWdodCwgd2lkdGgsIDEpO1xuICAgICAgICBfYWRkQm91bmQobm9kZSwgMCwgaGVpZ2h0IC8gMiwgd2lkdGgsIDEpO1xuICAgICAgICBfYWRkQm91bmQobm9kZSwgLXdpZHRoIC8gMiwgMCwgMSwgaGVpZ2h0KTtcbiAgICAgICAgX2FkZEJvdW5kKG5vZGUsIHdpZHRoIC8gMiwgMCwgMSwgaGVpZ2h0KTtcblxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICB9XG5cbiAgICBpbml0T25lRnJ1aXQoaWQgPSAxKSB7XG4gICAgICAgIHRoaXMuZnJ1aXRDb3VudCsrO1xuICAgICAgICB0aGlzLmN1cnJlbnRGcnVpdCA9IHRoaXMuY3JlYXRlRnJ1aXRPblBvcygwLCA0MDAsIGlkKTtcbiAgICB9XG5cbiAgICAvLyDnm5HlkKzlsY/luZXngrnlh7tcbiAgICBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgICBpZiAodGhpcy5pc0NyZWF0aW5nIHx8IHRoaXMuaXNMakluZykgcmV0dXJuXG4gICAgICAgIHRoaXMuaXNDcmVhdGluZyA9IHRydWVcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLm5vZGVcblxuXG4gICAgICAgIGNvbnN0IGZydWl0ID0gdGhpcy5jdXJyZW50RnJ1aXRcblxuICAgICAgICBjb25zdCBwb3MgPSBlLmdldExvY2F0aW9uKClcbiAgICAgICAgbGV0IHsgeCwgeSB9ID0gcG9zXG4gICAgICAgIHggPSB4IC0gd2lkdGggLyAyXG4gICAgICAgIHkgPSB5IC0gaGVpZ2h0IC8gMlxuXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGNjLnNlcXVlbmNlKGNjLm1vdmVCeSgwLjMsIGNjLnYyKHgsIDApKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uSW4oKSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIC8vIOW8gOWQr+eJqeeQhuaViOaenFxuICAgICAgICAgICAgdGhpcy5zdGFydEZydWl0UGh5c2ljcyhmcnVpdClcblxuICAgICAgICAgICAgLy8gMXPlkI7ph43mlrDnlJ/miJDkuIDkuKpcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0SWQgPSB0aGlzLmdldE5leHRGcnVpdElkKClcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRPbmVGcnVpdChuZXh0SWQpXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NyZWF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9LCAxKVxuICAgICAgICB9KSlcblxuICAgICAgICBmcnVpdC5ydW5BY3Rpb24oYWN0aW9uKVxuICAgIH1cblxuICAgIC8vIOiOt+WPluS4i+S4gOS4quawtOaenOeahGlkXG4gICAgZ2V0TmV4dEZydWl0SWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmZydWl0Q291bnQgPCAzKSB7XG4gICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZnJ1aXRDb3VudCA9PT0gMykge1xuICAgICAgICAgICAgcmV0dXJuIDJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOmaj+acuui/lOWbnuWJjTXkuKpcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KSArIDFcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOWIm+W7uuS4gOS4quawtOaenFxuICAgIGNyZWF0ZU9uZUZydWl0KG51bSkge1xuICAgICAgICBsZXQgZnJ1aXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZydWl0UHJlZmFiKTtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5mcnVpdHNbbnVtIC0gMV1cblxuICAgICAgICBmcnVpdC5nZXRDb21wb25lbnQoJ0ZydWl0JykuaW5pdCh7XG4gICAgICAgICAgICBpZDogY29uZmlnLmlkLFxuICAgICAgICAgICAgaWNvblNGOiBjb25maWcuaWNvblNGXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZydWl0LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpY1xuICAgICAgICBmcnVpdC5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKS5yYWRpdXMgPSAwXG5cbiAgICAgICAgdGhpcy5mcnVpdHNOb2RlLmFkZENoaWxkKGZydWl0KTtcbiAgICAgICAgZnJ1aXQuc2NhbGUgPSAwLjY7XG5cbiAgICAgICAgLy8g5pyJRnJ1aXTnu4Tku7bkvKDlhaVcbiAgICAgICAgZnJ1aXQub24oJ3NhbWVDb250YWN0JywgdGhpcy5vblNhbWVGcnVpdENvbnRhY3QuYmluZCh0aGlzKSlcblxuICAgICAgICByZXR1cm4gZnJ1aXRcbiAgICB9XG5cbiAgICBzdGFydEZydWl0UGh5c2ljcyhmcnVpdCkge1xuICAgICAgICBmcnVpdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xuICAgICAgICBjb25zdCBwaHlzaWNzQ2lyY2xlQ29sbGlkZXIgPSBmcnVpdC5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKVxuICAgICAgICBwaHlzaWNzQ2lyY2xlQ29sbGlkZXIucmFkaXVzID0gZnJ1aXQuaGVpZ2h0IC8gMlxuICAgICAgICBwaHlzaWNzQ2lyY2xlQ29sbGlkZXIuYXBwbHkoKVxuICAgIH1cblxuICAgIC8vIOWcqOaMh+WumuS9jee9rueUn+aIkOawtOaenFxuICAgIGNyZWF0ZUZydWl0T25Qb3MoeCwgeSwgdHlwZSA9IDEpIHtcbiAgICAgICAgY29uc3QgZnJ1aXQgPSB0aGlzLmNyZWF0ZU9uZUZydWl0KHR5cGUpXG4gICAgICAgIGZydWl0LnNldFBvc2l0aW9uKGNjLnYyKHgsIHkpKTtcbiAgICAgICAgcmV0dXJuIGZydWl0XG4gICAgfVxuXG4gICAgLy8g5Lik5Liq5rC05p6c56Kw5pKeXG4gICAgb25TYW1lRnJ1aXRDb250YWN0KHsgc2VsZiwgb3RoZXIgfSkge1xuICAgICAgICBvdGhlci5ub2RlLm9mZignc2FtZUNvbnRhY3QnKSAvLyDkuKTkuKpub2Rl6YO95Lya6Kem5Y+R77yMdG9kbyDnnIvnnIvmnInmsqHmnInlhbbku5bmlrnms5Xlj6rlsZXnpLrkuIDmrKHnmoRcblxuICAgICAgICBjb25zdCBpZCA9IG90aGVyLmdldENvbXBvbmVudCgnRnJ1aXQnKS5pZFxuICAgICAgICAvLyB0b2RvIOWPr+S7peS9v+eUqOWvueixoeaxoOWbnuaUtlxuICAgICAgICBzZWxmLm5vZGUucmVtb3ZlRnJvbVBhcmVudChmYWxzZSlcbiAgICAgICAgb3RoZXIubm9kZS5yZW1vdmVGcm9tUGFyZW50KGZhbHNlKVxuXG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gb3RoZXIubm9kZVxuXG4gICAgICAgIHRoaXMuY3JlYXRlRnJ1aXRKdWljZShpZCwgY2MudjIoeyB4LCB5IH0pLCBvdGhlci5ub2RlLndpZHRoKVxuXG4gICAgICAgIGNvbnN0IG5leHRJZCA9IGlkICsgMVxuICAgICAgICBpZiAobmV4dElkIDw9IDExKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdGcnVpdCA9IHRoaXMuY3JlYXRlRnJ1aXRPblBvcyh4LCB5LCBuZXh0SWQpXG5cbiAgICAgICAgICAgIHRoaXMuc3RhcnRGcnVpdFBoeXNpY3MobmV3RnJ1aXQpXG5cbiAgICAgICAgICAgIC8vIOWxleekuuWKqOeUuyB0b2RvIOWKqOeUu+aViOaenOmcgOimgeiwg+aVtFxuICAgICAgICAgICAgbmV3RnJ1aXQuc2NhbGUgPSAwXG4gICAgICAgICAgICBjYy50d2VlbihuZXdGcnVpdCkudG8oLjUsIHtcbiAgICAgICAgICAgICAgICBzY2FsZTogMC42XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdG9kbyDlkIjmiJDkuKTkuKropb/nk5xcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgdG9kbyDlkIjmiJDkuKTkuKropb/nk5wg6L+Y5rKh5pyJ5a6e546w5ZOmfiAnKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnNjb3Jlc1RpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRMalRpbWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldExqVGltZXIoKTtcbiAgICAgICAgbGV0IG9uZWxqU2NvcmVzID0gdGhpcy5nZXRsalNjb3JlcyhuZXh0SWQpO1xuICAgICAgICB0aGlzLmxqQ291bnQrKztcbiAgICAgICAgdGhpcy5salNjb3JlcyArPSBvbmVsalNjb3JlcztcbiAgICAgICAgdGhpcy5jdXJTY29yZXMgKz0gdGhpcy5salNjb3JlcztcbiAgICB9XG5cbiAgICAvL+iuvue9rui/nuWHu+WIneWni+aVsOaNrlxuICAgIHByaXZhdGUgaW5pdExqVGltZSgpIHtcbiAgICAgICAgdGhpcy5pc0xqSW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sakNvdW50ID0gMDtcbiAgICB9XG5cbiAgICAvL+mHjee9rui/nuWHu+iuoeaXtuWZqFxuICAgIHByaXZhdGUgc2V0TGpUaW1lcigpIHtcbiAgICAgICAgdGhpcy5zY29yZXNUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbG9zZUxqVGltZSgpO1xuICAgICAgICB9LCB0aGlzLnNjb3Jlc1RpbWUgKiAxMDAwKTtcbiAgICB9XG5cbiAgICAvL+WFs+mXrei/nuWHu+iuoeaXtuWZqFxuICAgIHByaXZhdGUgY2xvc2VMalRpbWUoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNjb3Jlc1RpbWVyKTtcbiAgICAgICAgdGhpcy5salNjb3JlcyA9IDA7XG4gICAgICAgIHRoaXMuc2NvcmVzVGltZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmlzTGpJbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuY3VyU2NvcmVzID49IHRoaXMudGFyZ2V0U2NvcmVzKSB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v6I635b6X6L+e5Ye75YiG5pWwXG4gICAgcHJpdmF0ZSBnZXRsalNjb3JlcyhsdjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgfVxuXG5cbiAgICAvLyDlkIjlubbml7bnmoTliqjnlLvmlYjmnpxcbiAgICBjcmVhdGVGcnVpdEp1aWNlKGlkLCBwb3MsIG4pIHtcbiAgICAgICAgLy8g5pKt5pS+5ZCI5bm255qE5aOw6Z+zXG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5ib29tQXVkaW8sIGZhbHNlLCAxKTtcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLndhdGVyQXVkaW8sIGZhbHNlLCAxKTtcblxuICAgICAgICBBcHAuc291bmRNZ3IucGxheUVmZmVjdChcImNvbW1vbi9zb3VuZHMvYm9vbVwiKTtcbiAgICAgICAgQXBwLnNvdW5kTWdyLnBsYXlFZmZlY3QoXCJjb21tb24vc291bmRzL3dhdGVyXCIpO1xuXG4gICAgICAgIC8vIOWxleekuuWKqOeUu1xuICAgICAgICBsZXQganVpY2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmp1aWNlUHJlZmFiKTtcbiAgICAgICAgdGhpcy5qdWljZXNOb2RlLmFkZENoaWxkKGp1aWNlKTtcblxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmp1aWNlc1tpZCAtIDFdXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0ganVpY2UuZ2V0Q29tcG9uZW50KCdKdWljZScpXG4gICAgICAgIGluc3RhbmNlLmluaXQoY29uZmlnKVxuICAgICAgICBpbnN0YW5jZS5zaG93SnVpY2UocG9zLCBuKVxuICAgIH1cblxuXG4gICAgLy/muLjmiI/kv53lrZhcbiAgICBzYXZlR2FtZSgpIHtcbiAgICAgICAgbGV0IGZydWl0UG9zQXJyYXkgPSBbXTtcbiAgICAgICAgbGV0IGZydWl0Q2hpbGQgPSB0aGlzLmZydWl0c05vZGUuY2hpbGRyZW47XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZnJ1aXRDaGlsZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEZydWl0LnV1aWQgIT0gZnJ1aXRDaGlsZFtpXS51dWlkKSB7XG4gICAgICAgICAgICAgICAgZnJ1aXRQb3NBcnJheS5wdXNoKGZydWl0Q2hpbGRbaV0uZ2V0Q29tcG9uZW50KFwiRnJ1aXRcIikuZ2V0RGF0YSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBTYXZlTWFuYWdlci5JbnN0YW5jZSgpLnNldEl0ZW0oU2F2ZS5mcnVpdHNQb3MsIGZydWl0UG9zQXJyYXkpO1xuXG4gICAgICAgIFNhdmVNYW5hZ2VyLkluc3RhbmNlKCkuc2V0SXRlbShTYXZlLmdhbWVTY29yZXMsIHRoaXMuY3VyU2NvcmVzKTtcbiAgICB9XG5cbiAgICAvL+a4uOaIj+ivu+WPllxuICAgIHJlYWRHYW1lKCkge1xuICAgICAgICBsZXQgZ2FtZURhdGEgPSBTYXZlTWFuYWdlci5JbnN0YW5jZSgpLmdldEl0ZW0oU2F2ZS5mcnVpdHNQb3MpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGdhbWVEYXRhW2ldO1xuICAgICAgICAgICAgdGhpcy5zdGFydEZydWl0UGh5c2ljcyh0aGlzLmNyZWF0ZUZydWl0T25Qb3MoZGF0YS5wb3MueCwgZGF0YS5wb3MueSwgZGF0YS5pZCkpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZydWl0Q291bnQgPSBnYW1lRGF0YS5sZW5ndGg7XG4gICAgICAgIHRoaXMuY3VyU2NvcmVzID0gU2F2ZU1hbmFnZXIuSW5zdGFuY2UoKS5nZXRJdGVtKFNhdmUuZ2FtZVNjb3Jlcyk7XG4gICAgfVxuXG59XG4iXX0=