
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
        _this.gameArea = null;
        _this.offOronBG = null;
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
            //this.initGame();
        }, this);
        // 监听点击事件 todo 是否能够注册全局事件
        this.gameArea.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
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
    ], Game.prototype, "gameArea", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "offOronBG", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBZ0M7QUFDaEMscUNBQW9DO0FBSXBDLDJDQUEwQztBQUMxQyx5REFBd0Q7QUFDeEQsd0NBQXVDO0FBQ3ZDLGlEQUErQztBQUcvQyxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ25CLElBQUksRUFBRSxXQUFXO0lBQ2pCLFVBQVUsRUFBRTtRQUNSLEVBQUUsRUFBRSxDQUFDO1FBQ0wsTUFBTSxFQUFFLEVBQUUsQ0FBQyxXQUFXO0tBQ3pCO0NBQ0osQ0FBQyxDQUFDO0FBRUgsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUN2QixJQUFJLEVBQUUsV0FBVztJQUNqQixVQUFVLEVBQUU7UUFDUixRQUFRLEVBQUUsRUFBRSxDQUFDLFdBQVc7UUFDeEIsTUFBTSxFQUFFLEVBQUUsQ0FBQyxXQUFXO1FBQ3RCLEtBQUssRUFBRSxFQUFFLENBQUMsV0FBVztLQUN4QjtDQUNKLENBQUMsQ0FBQztBQUVHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBbVhDO1FBaFhXLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFHWixZQUFNLEdBQUcsRUFBRSxDQUFDO1FBR1osaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFHbkIsaUJBQVcsR0FBRyxJQUFJLENBQUM7UUFHbkIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixnQkFBVSxHQUFnQixJQUFJLENBQUM7UUFHL0IsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0Isa0JBQVksR0FBYyxJQUFJLENBQUM7UUFH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QUNpQjtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNpQjtJQUduQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNlO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7NENBQ2lCO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ2lCO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7OENBQ21CO0lBR3ZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ2U7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDZ0I7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDZTtJQXZDaEIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQW1YeEI7SUFBRCxXQUFDO0NBblhELEFBbVhDLENBblhpQyxFQUFFLENBQUMsU0FBUyxHQW1YN0M7a0JBblhvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4vYXBwL0FwcFwiO1xuaW1wb3J0IHsgVUlDZmcgfSBmcm9tIFwiLi9jZmcvVUlDZmdcIjtcbmltcG9ydCB7IFNvdW5kTWdyIH0gZnJvbSBcIi4vbWdycy9Tb3VuZE1nclwiO1xuaW1wb3J0IHsgaHR0cENsaWVudCB9IGZyb20gXCIuL3BsYXRmb3JtL0h0dHBDbGllbnRcIjtcbmltcG9ydCB7IEh0dHBVcmwgfSBmcm9tIFwiLi9wbGF0Zm9ybS9IdHRwVXJsXCI7XG5pbXBvcnQgeyBTYXZlIH0gZnJvbSBcIi4vc2F2ZU1hbmFnZXIvU2F2ZVwiO1xuaW1wb3J0IHsgU2F2ZU1hbmFnZXIgfSBmcm9tIFwiLi9zYXZlTWFuYWdlci9TYXZlTWFuYWdlclwiO1xuaW1wb3J0IHsgVUlVdGlscyB9IGZyb20gXCIuL3VpL1VJVXRpbHNcIjtcbmltcG9ydCB7IG1hdGhVdGlscyB9IGZyb20gXCIuL3V0aWxzL21hdGgtdXRpbHNcIjtcbmltcG9ydCB7IG9iamVjdFV0aWxzIH0gZnJvbSBcIi4vdXRpbHMvb2JqZWN0LXV0aWxzXCI7XG5cbmNvbnN0IEZydWl0ID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdGcnVpdEl0ZW0nLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIGljb25TRjogY2MuU3ByaXRlRnJhbWVcbiAgICB9XG59KTtcblxuY29uc3QgSnVpY2VJdGVtID0gY2MuQ2xhc3Moe1xuICAgIG5hbWU6ICdKdWljZUl0ZW0nLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcGFydGljbGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICBjaXJjbGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICBzbGFzaDogY2MuU3ByaXRlRnJhbWUsXG4gICAgfVxufSk7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShGcnVpdClcbiAgICBwcml2YXRlIGZydWl0cyA9IFtdO1xuXG4gICAgQHByb3BlcnR5KEp1aWNlSXRlbSlcbiAgICBwcml2YXRlIGp1aWNlcyA9IFtdO1xuXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcml2YXRlIGZydWl0UHJlZmFiID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJpdmF0ZSBqdWljZVByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGZydWl0c05vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBqdWljZXNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIGxiU2NvcmVzOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUmljaFRleHQpXG4gICAgcHJpdmF0ZSBsYlNjb3JlVGlwOiBjYy5SaWNoVGV4dCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGJvdHRvbU5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBwcml2YXRlIGJ0bk9wZW5XaGVlbDogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgZ2FtZUFyZWE6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBvZmZPcm9uQkc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBzaG9vdFBvczogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGZydWl0U2NhbGU6IG51bWJlciA9IDAuODsgICAgIC8v5rC05p6c57yp5pS+5q+U5L6LXG5cbiAgICBwcml2YXRlIGNyZWF0WTogbnVtYmVyID0gNDAwOyAgICAgICAvL+eUn+S6p+eQg+eahOS9jee9rlxuXG4gICAgcHJpdmF0ZSBpc0NyZWF0aW5nOiBib29sZWFuOyAgICAgICAgLy/mmK/lkKblnKjliJvlu7rnkIPkuK1cblxuICAgIHByaXZhdGUgaXNMakluZzogYm9vbGVhbjsgICAgICAgICAgICAvL+aYr+WQpuWcqOi/nuWHu+S4rVxuXG4gICAgcHJpdmF0ZSBmcnVpdENvdW50OiBudW1iZXI7ICAgICAgICAgLy/lnLrkuIrmgLvlhbHnmoTmlbDph49cblxuICAgIHByaXZhdGUgY3VycmVudEZydWl0OiBjYy5Ob2RlOyAgICAgIC8v5b2T5YmN5rC05p6cICAgIFxuXG4gICAgcHJpdmF0ZSBzY29yZXNUaW1lciA9IG51bGw7ICAgICAgICAgIC8v6L+e5Ye76K6h5pe25ZmoXG5cbiAgICBwcml2YXRlIHNjb3Jlc1RpbWUgPSAxOyAgICAgICAgICAgICAvL+i/nuWHu+acieaViOaXtumXtFxuXG4gICAgcHJpdmF0ZSBsalNjb3JlcyA9IDA7ICAgICAgICAgICAgICAgLy/ov57lh7vliIbmlbBcblxuICAgIHByaXZhdGUgbGpDb3VudCA9IDA7ICAgICAgICAgICAgICAgIC8v6L+e5Ye75qyh5pWwXG5cbiAgICBwcml2YXRlIF9jdXJTY29yZXMgPSAwOyAgICAgICAgICAgICAvL+W9k+WJjeaAu+WIhlxuXG4gICAgcHVibGljIHNldCBjdXJTY29yZXModmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9jdXJTY29yZXMgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0U2NvcmVzID4gdGhpcy5jdXJTY29yZXMpIHtcbiAgICAgICAgICAgIHRoaXMubGJTY29yZXMuc3RyaW5nID0gYCR7dGhpcy5jdXJTY29yZXN9LyR7dGhpcy50YXJnZXRTY29yZXN9YDtcbiAgICAgICAgICAgIHRoaXMubGJTY29yZVRpcC5zdHJpbmcgPSBg5YaN5b6XPGNvbG9yID0gI0NGNUI1Qj4ke3RoaXMudGFyZ2V0U2NvcmVzIC0gdGhpcy5jdXJTY29yZXN9PC9jPuWIhu+8jOWNs+WPr+iOt+W+l+mineWkluaPkOeOsOacuuS8mmA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxiU2NvcmVzLnN0cmluZyA9IFwi5Y+v5o+Q546wXCI7XG4gICAgICAgICAgICB0aGlzLmxiU2NvcmVUaXAuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgY3VyU2NvcmVzKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJTY29yZXM7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIHRhcmdldFNjb3JlcyA9IDcwMDsgICAgICAgICAvL+S4i+S4gOS4quebruagh+WIhuaVsCAgICBcblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBBcHAudWlDZmdNZ3IuaW5pdEJ5Q2ZnKFVJQ2ZnKTtcblxuICAgICAgICBVSVV0aWxzLmFkZENsaWNrRXZlbnQodGhpcy5idG5PcGVuV2hlZWwubm9kZSwgKCkgPT4ge1xuICAgICAgICAgICAgLy9BcHAudWlNZ3Iub3BlblVJKFVJQ2ZnLlBhbm5lbFdoZWVsLm5hbWUpO1xuICAgICAgICAgICAgLy90aGlzLmluaXRHYW1lKCk7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIC8vIOebkeWQrOeCueWHu+S6i+S7tiB0b2RvIOaYr+WQpuiDveWkn+azqOWGjOWFqOWxgOS6i+S7tlxuICAgICAgICB0aGlzLmdhbWVBcmVhLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcylcblxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jcmVhdFkgPSBtYXRoVXRpbHMuY29udmVydFRvUGFyZW50KHRoaXMuc2hvb3RQb3MsIHRoaXMuZnJ1aXRzTm9kZSkueTtcbiAgICAgICAgICAgIHRoaXMuaW5pdEdhbWUoKTtcblxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLkv53lrZjmuLjmiI9cIik7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlR2FtZSgpO1xuICAgICAgICAgICAgfSwgMTAwMDApXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwi6K+75Y+W5ri45oiPXCIpO1xuICAgICAgICAgICAgdGhpcy5yZWFkR2FtZSgpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBpbml0R2FtZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEZydWl0KSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGcnVpdC5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZnJ1aXRzTm9kZS5jaGlsZHJlbkNvdW50ID4gMCkge1xuICAgICAgICAgICAgdGhpcy5mcnVpdHNOb2RlLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmp1aWNlc05vZGUuY2hpbGRyZW5Db3VudCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuanVpY2VzTm9kZS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzQ3JlYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0xqSW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaW5pdFBoeXNpY3MoKTtcbiAgICAgICAgdGhpcy5pbml0T25lRnJ1aXQoKTtcbiAgICB9XG5cbiAgICBjaGVja0dhbWVPdmVyKCkge1xuICAgICAgICBsZXQgZW5kRnJ1aXQgPSB0aGlzLmZydWl0c05vZGUuY2hpbGRyZW5bdGhpcy5mcnVpdHNOb2RlLmNoaWxkcmVuQ291bnQgLSAxXTtcbiAgICAgICAgaWYgKGVuZEZydWl0ICYmIGVuZEZydWl0LnkgPj0gdGhpcy5jcmVhdFkgLSAxMDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEdhbWUoKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyDlvIDlkK/niannkIblvJXmk47lkoznorDmkp7mo4DmtYtcbiAgICBpbml0UGh5c2ljcygpIHtcbiAgICAgICAgLy8g54mp55CG5byV5pOOXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKVxuICAgICAgICBpbnN0YW5jZS5lbmFibGVkID0gdHJ1ZVxuICAgICAgICAvLyBpbnN0YW5jZS5kZWJ1Z0RyYXdGbGFncyA9IDRcbiAgICAgICAgaW5zdGFuY2UuZ3Jhdml0eSA9IGNjLnYyKDAsIC05NjApO1xuXG4gICAgICAgIC8vIOeisOaSnuajgOa1i1xuICAgICAgICBjb25zdCBjb2xsaXNpb25NYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBjb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIOiuvue9ruWbm+WRqOeahOeisOaSnuWMuuWfn1xuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLm5vZGUud2lkdGg7XG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0O1xuXG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKTtcblxuICAgICAgICBsZXQgYm9keSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XG4gICAgICAgIGJvZHkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xuXG4gICAgICAgIGNvbnN0IF9hZGRCb3VuZCA9IChub2RlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sbGlkZXIgPSBub2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xuICAgICAgICAgICAgY29sbGlkZXIub2Zmc2V0LnggPSB4O1xuICAgICAgICAgICAgY29sbGlkZXIub2Zmc2V0LnkgPSB5O1xuICAgICAgICAgICAgY29sbGlkZXIuc2l6ZS53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgY29sbGlkZXIuc2l6ZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBfYWRkQm91bmQobm9kZSwgMCwgLWhlaWdodCAvIDIgKyB0aGlzLmJvdHRvbU5vZGUuaGVpZ2h0LCB3aWR0aCwgMSk7XG4gICAgICAgIF9hZGRCb3VuZChub2RlLCAwLCBoZWlnaHQgLyAyLCB3aWR0aCwgMSk7XG4gICAgICAgIF9hZGRCb3VuZChub2RlLCAtd2lkdGggLyAyLCAwLCAxLCBoZWlnaHQpO1xuICAgICAgICBfYWRkQm91bmQobm9kZSwgd2lkdGggLyAyLCAwLCAxLCBoZWlnaHQpO1xuXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgIH1cblxuICAgIGluaXRPbmVGcnVpdChpZCA9IDEpIHtcbiAgICAgICAgdGhpcy5mcnVpdENvdW50Kys7XG4gICAgICAgIHRoaXMuY3VycmVudEZydWl0ID0gdGhpcy5jcmVhdGVGcnVpdE9uUG9zKDAsIHRoaXMuY3JlYXRZLCBpZCk7XG4gICAgfVxuXG4gICAgLy8g55uR5ZCs5bGP5bmV54K55Ye7XG4gICAgb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDcmVhdGluZykgcmV0dXJuXG4gICAgICAgIHRoaXMuaXNDcmVhdGluZyA9IHRydWVcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLm5vZGVcblxuXG4gICAgICAgIGNvbnN0IGZydWl0ID0gdGhpcy5jdXJyZW50RnJ1aXRcblxuICAgICAgICBjb25zdCBwb3MgPSBlLmdldExvY2F0aW9uKClcbiAgICAgICAgbGV0IHsgeCwgeSB9ID0gcG9zXG4gICAgICAgIHggPSB4IC0gd2lkdGggLyAyXG4gICAgICAgIHkgPSB5IC0gaGVpZ2h0IC8gMlxuXG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IGNjLnNlcXVlbmNlKGNjLm1vdmVCeSgwLjMsIGNjLnYyKHgsIDApKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uSW4oKSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgIC8vIOW8gOWQr+eJqeeQhuaViOaenFxuICAgICAgICAgICAgdGhpcy5zdGFydEZydWl0UGh5c2ljcyhmcnVpdClcblxuICAgICAgICAgICAgLy8gMXPlkI7ph43mlrDnlJ/miJDkuIDkuKpcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY2hlY2tHYW1lT3ZlcigpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRJZCA9IHRoaXMuZ2V0TmV4dEZydWl0SWQoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRPbmVGcnVpdChuZXh0SWQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNDcmVhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEpXG4gICAgICAgIH0pKVxuXG4gICAgICAgIGZydWl0LnJ1bkFjdGlvbihhY3Rpb24pXG4gICAgfVxuXG4gICAgLy8g6I635Y+W5LiL5LiA5Liq5rC05p6c55qEaWRcbiAgICBnZXROZXh0RnJ1aXRJZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZnJ1aXRDb3VudCA8IDMpIHtcbiAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5mcnVpdENvdW50ID09PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gMlxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g6ZqP5py66L+U5Zue5YmNNeS4qlxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpICsgMVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5Yib5bu65LiA5Liq5rC05p6cXG4gICAgY3JlYXRlT25lRnJ1aXQobnVtKSB7XG4gICAgICAgIGxldCBmcnVpdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZnJ1aXRQcmVmYWIpO1xuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLmZydWl0c1tudW0gLSAxXVxuXG4gICAgICAgIGZydWl0LmdldENvbXBvbmVudCgnRnJ1aXQnKS5pbml0KHtcbiAgICAgICAgICAgIGlkOiBjb25maWcuaWQsXG4gICAgICAgICAgICBpY29uU0Y6IGNvbmZpZy5pY29uU0ZcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnJ1aXQuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljXG4gICAgICAgIGZydWl0LmdldENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpLnJhZGl1cyA9IDBcblxuICAgICAgICB0aGlzLmZydWl0c05vZGUuYWRkQ2hpbGQoZnJ1aXQpO1xuICAgICAgICBmcnVpdC5zY2FsZSA9IHRoaXMuZnJ1aXRTY2FsZTtcblxuICAgICAgICAvLyDmnIlGcnVpdOe7hOS7tuS8oOWFpVxuICAgICAgICBmcnVpdC5vbignc2FtZUNvbnRhY3QnLCB0aGlzLm9uU2FtZUZydWl0Q29udGFjdC5iaW5kKHRoaXMpKVxuXG4gICAgICAgIHJldHVybiBmcnVpdFxuICAgIH1cblxuICAgIHN0YXJ0RnJ1aXRQaHlzaWNzKGZydWl0KSB7XG4gICAgICAgIGZydWl0LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLkR5bmFtaWM7XG4gICAgICAgIGNvbnN0IHBoeXNpY3NDaXJjbGVDb2xsaWRlciA9IGZydWl0LmdldENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpXG4gICAgICAgIHBoeXNpY3NDaXJjbGVDb2xsaWRlci5yYWRpdXMgPSBmcnVpdC5oZWlnaHQgLyAyXG4gICAgICAgIHBoeXNpY3NDaXJjbGVDb2xsaWRlci5hcHBseSgpXG4gICAgfVxuXG4gICAgLy8g5Zyo5oyH5a6a5L2N572u55Sf5oiQ5rC05p6cXG4gICAgY3JlYXRlRnJ1aXRPblBvcyh4LCB5LCB0eXBlID0gMSkge1xuICAgICAgICBjb25zdCBmcnVpdCA9IHRoaXMuY3JlYXRlT25lRnJ1aXQodHlwZSlcbiAgICAgICAgZnJ1aXQuc2V0UG9zaXRpb24oY2MudjIoeCwgeSkpO1xuICAgICAgICByZXR1cm4gZnJ1aXRcbiAgICB9XG5cbiAgICAvLyDkuKTkuKrmsLTmnpznorDmkp5cbiAgICBvblNhbWVGcnVpdENvbnRhY3QoeyBzZWxmLCBvdGhlciB9KSB7XG4gICAgICAgIG90aGVyLm5vZGUub2ZmKCdzYW1lQ29udGFjdCcpIC8vIOS4pOS4qm5vZGXpg73kvJrop6blj5HvvIx0b2RvIOeci+eci+acieayoeacieWFtuS7luaWueazleWPquWxleekuuS4gOasoeeahFxuXG4gICAgICAgIGNvbnN0IGlkID0gb3RoZXIuZ2V0Q29tcG9uZW50KCdGcnVpdCcpLmlkXG4gICAgICAgIC8vIHRvZG8g5Y+v5Lul5L2/55So5a+56LGh5rGg5Zue5pS2XG4gICAgICAgIHNlbGYubm9kZS5yZW1vdmVGcm9tUGFyZW50KGZhbHNlKVxuICAgICAgICBvdGhlci5ub2RlLnJlbW92ZUZyb21QYXJlbnQoZmFsc2UpXG5cbiAgICAgICAgY29uc3QgeyB4LCB5IH0gPSBvdGhlci5ub2RlXG5cbiAgICAgICAgdGhpcy5jcmVhdGVGcnVpdEp1aWNlKGlkLCBjYy52Mih7IHgsIHkgfSksIG90aGVyLm5vZGUud2lkdGgpXG5cbiAgICAgICAgY29uc3QgbmV4dElkID0gaWQgKyAxXG4gICAgICAgIGlmIChuZXh0SWQgPD0gMTEpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0ZydWl0ID0gdGhpcy5jcmVhdGVGcnVpdE9uUG9zKHgsIHksIG5leHRJZClcblxuICAgICAgICAgICAgdGhpcy5zdGFydEZydWl0UGh5c2ljcyhuZXdGcnVpdClcblxuICAgICAgICAgICAgLy8g5bGV56S65Yqo55S7IHRvZG8g5Yqo55S75pWI5p6c6ZyA6KaB6LCD5pW0XG4gICAgICAgICAgICBuZXdGcnVpdC5zY2FsZSA9IDBcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5ld0ZydWl0KS50byguNSwge1xuICAgICAgICAgICAgICAgIHNjYWxlOiB0aGlzLmZydWl0U2NhbGVcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBlYXNpbmc6IFwiYmFja091dFwiXG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0b2RvIOWQiOaIkOS4pOS4quilv+eTnFxuICAgICAgICAgICAgY29uc29sZS5sb2coJyB0b2RvIOWQiOaIkOS4pOS4quilv+eTnCDov5jmsqHmnInlrp7njrDlk6Z+ICcpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuc2NvcmVzVGltZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdExqVGltZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0TGpUaW1lcigpO1xuICAgICAgICBsZXQgb25lbGpTY29yZXMgPSB0aGlzLmdldGxqU2NvcmVzKG5leHRJZCk7XG4gICAgICAgIHRoaXMubGpDb3VudCsrO1xuICAgICAgICB0aGlzLmxqU2NvcmVzICs9IG9uZWxqU2NvcmVzO1xuICAgICAgICB0aGlzLmN1clNjb3JlcyArPSB0aGlzLmxqU2NvcmVzO1xuICAgIH1cblxuICAgIC8v6K6+572u6L+e5Ye75Yid5aeL5pWw5o2uXG4gICAgcHJpdmF0ZSBpbml0TGpUaW1lKCkge1xuICAgICAgICB0aGlzLmlzTGpJbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmxqQ291bnQgPSAwO1xuICAgIH1cblxuICAgIC8v6YeN572u6L+e5Ye76K6h5pe25ZmoXG4gICAgcHJpdmF0ZSBzZXRMalRpbWVyKCkge1xuICAgICAgICB0aGlzLnNjb3Jlc1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlTGpUaW1lKCk7XG4gICAgICAgIH0sIHRoaXMuc2NvcmVzVGltZSAqIDEwMDApO1xuICAgIH1cblxuICAgIC8v5YWz6Zet6L+e5Ye76K6h5pe25ZmoXG4gICAgcHJpdmF0ZSBjbG9zZUxqVGltZSgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc2NvcmVzVGltZXIpO1xuICAgICAgICB0aGlzLmxqU2NvcmVzID0gMDtcbiAgICAgICAgdGhpcy5zY29yZXNUaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNMakluZyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5jdXJTY29yZXMgPj0gdGhpcy50YXJnZXRTY29yZXMpIHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/ojrflvpfov57lh7vliIbmlbBcbiAgICBwcml2YXRlIGdldGxqU2NvcmVzKGx2OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG5cblxuICAgIC8vIOWQiOW5tuaXtueahOWKqOeUu+aViOaenFxuICAgIGNyZWF0ZUZydWl0SnVpY2UoaWQsIHBvcywgbikge1xuICAgICAgICAvLyDmkq3mlL7lkIjlubbnmoTlo7Dpn7NcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmJvb21BdWRpbywgZmFsc2UsIDEpO1xuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMud2F0ZXJBdWRpbywgZmFsc2UsIDEpO1xuXG4gICAgICAgIEFwcC5zb3VuZE1nci5wbGF5RWZmZWN0KFwiY29tbW9uL3NvdW5kcy9ib29tXCIpO1xuICAgICAgICBBcHAuc291bmRNZ3IucGxheUVmZmVjdChcImNvbW1vbi9zb3VuZHMvd2F0ZXJcIik7XG5cbiAgICAgICAgLy8g5bGV56S65Yqo55S7XG4gICAgICAgIGxldCBqdWljZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuanVpY2VQcmVmYWIpO1xuICAgICAgICB0aGlzLmp1aWNlc05vZGUuYWRkQ2hpbGQoanVpY2UpO1xuXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuanVpY2VzW2lkIC0gMV1cbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBqdWljZS5nZXRDb21wb25lbnQoJ0p1aWNlJylcbiAgICAgICAgaW5zdGFuY2UuaW5pdChjb25maWcpXG4gICAgICAgIGluc3RhbmNlLnNob3dKdWljZShwb3MsIG4pXG4gICAgfVxuXG5cbiAgICAvL+a4uOaIj+S/neWtmFxuICAgIHNhdmVHYW1lKCkge1xuICAgICAgICBsZXQgZnJ1aXRQb3NBcnJheSA9IFtdO1xuICAgICAgICBsZXQgZnJ1aXRDaGlsZCA9IHRoaXMuZnJ1aXRzTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcnVpdENoaWxkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RnJ1aXQudXVpZCAhPSBmcnVpdENoaWxkW2ldLnV1aWQpIHtcbiAgICAgICAgICAgICAgICBmcnVpdFBvc0FycmF5LnB1c2goZnJ1aXRDaGlsZFtpXS5nZXRDb21wb25lbnQoXCJGcnVpdFwiKS5nZXREYXRhKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFNhdmVNYW5hZ2VyLkluc3RhbmNlKCkuc2V0SXRlbShTYXZlLmZydWl0c1BvcywgZnJ1aXRQb3NBcnJheSk7XG5cbiAgICAgICAgU2F2ZU1hbmFnZXIuSW5zdGFuY2UoKS5zZXRJdGVtKFNhdmUuZ2FtZVNjb3JlcywgdGhpcy5jdXJTY29yZXMpO1xuICAgIH1cblxuICAgIC8v5ri45oiP6K+75Y+WXG4gICAgcmVhZEdhbWUoKSB7XG4gICAgICAgIGxldCBnYW1lRGF0YSA9IFNhdmVNYW5hZ2VyLkluc3RhbmNlKCkuZ2V0SXRlbShTYXZlLmZydWl0c1Bvcyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gZ2FtZURhdGFbaV07XG4gICAgICAgICAgICB0aGlzLnN0YXJ0RnJ1aXRQaHlzaWNzKHRoaXMuY3JlYXRlRnJ1aXRPblBvcyhkYXRhLnBvcy54LCBkYXRhLnBvcy55LCBkYXRhLmlkKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZnJ1aXRDb3VudCA9IGdhbWVEYXRhLmxlbmd0aDtcbiAgICAgICAgdGhpcy5jdXJTY29yZXMgPSBTYXZlTWFuYWdlci5JbnN0YW5jZSgpLmdldEl0ZW0oU2F2ZS5nYW1lU2NvcmVzKTtcbiAgICB9XG5cbn1cbiJdfQ==