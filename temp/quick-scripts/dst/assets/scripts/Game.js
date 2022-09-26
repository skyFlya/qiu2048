
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
var Save_1 = require("./saveManager/Save");
var SaveManager_1 = require("./saveManager/SaveManager");
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
        _this.boomAudio = null;
        _this.waterAudio = null;
        _this.knockAudio = null;
        _this.fruitsNode = null;
        _this.juicesNode = null;
        return _this;
    }
    Game.prototype.onLoad = function () {
        var _this = this;
        this.initPhysics();
        this.isCreating = false;
        this.fruitCount = 0;
        // 监听点击事件 todo 是否能够注册全局事件
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.initOneFruit();
        setInterval(function () {
            //console.log("保存游戏");
            _this.saveGame();
        }, 10000);
        //console.log("读取游戏");
        this.readGame();
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
        _addBound(node, 0, -height / 2, width, 1);
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
    };
    // 合并时的动画效果
    Game.prototype.createFruitJuice = function (id, pos, n) {
        // 播放合并的声音
        cc.audioEngine.play(this.boomAudio, false, 1);
        cc.audioEngine.play(this.waterAudio, false, 1);
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
    };
    //游戏读取
    Game.prototype.readGame = function () {
        var gameData = SaveManager_1.SaveManager.Instance().getItem(Save_1.Save.fruitsPos);
        for (var i = 0; i < gameData.length; i++) {
            var data = gameData[i];
            this.startFruitPhysics(this.createFruitOnPos(data.pos.x, data.pos.y, data.id));
        }
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
        property(cc.AudioClip)
    ], Game.prototype, "boomAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Game.prototype, "waterAudio", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Game.prototype, "knockAudio", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "fruitsNode", void 0);
    __decorate([
        property(cc.Node)
    ], Game.prototype, "juicesNode", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSwyQ0FBMEM7QUFDMUMseURBQXdEO0FBR3hELElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDbkIsSUFBSSxFQUFFLFdBQVc7SUFDakIsVUFBVSxFQUFFO1FBQ1IsRUFBRSxFQUFFLENBQUM7UUFDTCxNQUFNLEVBQUUsRUFBRSxDQUFDLFdBQVc7S0FDekI7Q0FDSixDQUFDLENBQUM7QUFFSCxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0lBQ3ZCLElBQUksRUFBRSxXQUFXO0lBQ2pCLFVBQVUsRUFBRTtRQUNSLFFBQVEsRUFBRSxFQUFFLENBQUMsV0FBVztRQUN4QixNQUFNLEVBQUUsRUFBRSxDQUFDLFdBQVc7UUFDdEIsS0FBSyxFQUFFLEVBQUUsQ0FBQyxXQUFXO0tBQ3hCO0NBQ0osQ0FBQyxDQUFDO0FBRUcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFpUEM7UUE5T1csWUFBTSxHQUFHLEVBQUUsQ0FBQztRQUdaLFlBQU0sR0FBRyxFQUFFLENBQUM7UUFHWixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUduQixpQkFBVyxHQUFHLElBQUksQ0FBQztRQUduQixlQUFTLEdBQWlCLElBQUksQ0FBQztRQUcvQixnQkFBVSxHQUFpQixJQUFJLENBQUM7UUFHaEMsZ0JBQVUsR0FBaUIsSUFBSSxDQUFDO1FBR2hDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRzNCLGdCQUFVLEdBQVksSUFBSSxDQUFDOztJQXNOdkMsQ0FBQztJQWhORyxxQkFBTSxHQUFOO1FBQUEsaUJBaUJDO1FBaEJHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUVsQixJ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UDdDO2tCQWpQb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcCB9IGZyb20gXCIuL2FwcC9BcHBcIjtcbmltcG9ydCB7IFVJQ2ZnIH0gZnJvbSBcIi4vY2ZnL1VJQ2ZnXCI7XG5pbXBvcnQgeyBodHRwQ2xpZW50IH0gZnJvbSBcIi4vcGxhdGZvcm0vSHR0cENsaWVudFwiO1xuaW1wb3J0IHsgSHR0cFVybCB9IGZyb20gXCIuL3BsYXRmb3JtL0h0dHBVcmxcIjtcbmltcG9ydCB7IFNhdmUgfSBmcm9tIFwiLi9zYXZlTWFuYWdlci9TYXZlXCI7XG5pbXBvcnQgeyBTYXZlTWFuYWdlciB9IGZyb20gXCIuL3NhdmVNYW5hZ2VyL1NhdmVNYW5hZ2VyXCI7XG5pbXBvcnQgeyBvYmplY3RVdGlscyB9IGZyb20gXCIuL3V0aWxzL29iamVjdC11dGlsc1wiO1xuXG5jb25zdCBGcnVpdCA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnRnJ1aXRJdGVtJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBpY29uU0Y6IGNjLlNwcml0ZUZyYW1lXG4gICAgfVxufSk7XG5cbmNvbnN0IEp1aWNlSXRlbSA9IGNjLkNsYXNzKHtcbiAgICBuYW1lOiAnSnVpY2VJdGVtJyxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHBhcnRpY2xlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgY2lyY2xlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgc2xhc2g6IGNjLlNwcml0ZUZyYW1lLFxuICAgIH1cbn0pO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoRnJ1aXQpXG4gICAgcHJpdmF0ZSBmcnVpdHMgPSBbXTtcblxuICAgIEBwcm9wZXJ0eShKdWljZUl0ZW0pXG4gICAgcHJpdmF0ZSBqdWljZXMgPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJpdmF0ZSBmcnVpdFByZWZhYiA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByaXZhdGUganVpY2VQcmVmYWIgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIGJvb21BdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgcHJpdmF0ZSB3YXRlckF1ZGlvOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkF1ZGlvQ2xpcClcbiAgICBwcml2YXRlIGtub2NrQXVkaW86IGNjLkF1ZGlvQ2xpcCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGZydWl0c05vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBqdWljZXNOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgaXNDcmVhdGluZzogYm9vbGVhbjtcbiAgICBwcml2YXRlIGZydWl0Q291bnQ6IG51bWJlcjtcbiAgICBwcml2YXRlIGN1cnJlbnRGcnVpdDogY2MuTm9kZTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5pbml0UGh5c2ljcygpXG5cbiAgICAgICAgdGhpcy5pc0NyZWF0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnJ1aXRDb3VudCA9IDA7XG5cbiAgICAgICAgLy8g55uR5ZCs54K55Ye75LqL5Lu2IHRvZG8g5piv5ZCm6IO95aSf5rOo5YaM5YWo5bGA5LqL5Lu2XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpXG5cbiAgICAgICAgdGhpcy5pbml0T25lRnJ1aXQoKVxuXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLkv53lrZjmuLjmiI9cIik7XG4gICAgICAgICAgICB0aGlzLnNhdmVHYW1lKCk7XG4gICAgICAgIH0sIDEwMDAwKVxuICAgICAgICAvL2NvbnNvbGUubG9nKFwi6K+75Y+W5ri45oiPXCIpO1xuICAgICAgICB0aGlzLnJlYWRHYW1lKCk7ICAgICAgICBcbiAgICB9XG5cbiAgICAvLyDlvIDlkK/niannkIblvJXmk47lkoznorDmkp7mo4DmtYtcbiAgICBpbml0UGh5c2ljcygpIHtcbiAgICAgICAgLy8g54mp55CG5byV5pOOXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKVxuICAgICAgICBpbnN0YW5jZS5lbmFibGVkID0gdHJ1ZVxuICAgICAgICAvLyBpbnN0YW5jZS5kZWJ1Z0RyYXdGbGFncyA9IDRcbiAgICAgICAgaW5zdGFuY2UuZ3Jhdml0eSA9IGNjLnYyKDAsIC05NjApO1xuXG4gICAgICAgIC8vIOeisOaSnuajgOa1i1xuICAgICAgICBjb25zdCBjb2xsaXNpb25NYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xuICAgICAgICBjb2xsaXNpb25NYW5hZ2VyLmVuYWJsZWQgPSB0cnVlXG5cbiAgICAgICAgLy8g6K6+572u5Zub5ZGo55qE56Kw5pKe5Yy65Z+fXG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMubm9kZS53aWR0aDtcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMubm9kZS5oZWlnaHQ7XG5cbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuXG4gICAgICAgIGxldCBib2R5ID0gbm9kZS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcbiAgICAgICAgYm9keS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XG5cbiAgICAgICAgY29uc3QgX2FkZEJvdW5kID0gKG5vZGUsIHgsIHksIHdpZHRoLCBoZWlnaHQpID0+IHtcbiAgICAgICAgICAgIGxldCBjb2xsaWRlciA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XG4gICAgICAgICAgICBjb2xsaWRlci5vZmZzZXQueCA9IHg7XG4gICAgICAgICAgICBjb2xsaWRlci5vZmZzZXQueSA9IHk7XG4gICAgICAgICAgICBjb2xsaWRlci5zaXplLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBjb2xsaWRlci5zaXplLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIF9hZGRCb3VuZChub2RlLCAwLCAtaGVpZ2h0IC8gMiwgd2lkdGgsIDEpO1xuICAgICAgICBfYWRkQm91bmQobm9kZSwgMCwgaGVpZ2h0IC8gMiwgd2lkdGgsIDEpO1xuICAgICAgICBfYWRkQm91bmQobm9kZSwgLXdpZHRoIC8gMiwgMCwgMSwgaGVpZ2h0KTtcbiAgICAgICAgX2FkZEJvdW5kKG5vZGUsIHdpZHRoIC8gMiwgMCwgMSwgaGVpZ2h0KTtcblxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICB9XG5cbiAgICBpbml0T25lRnJ1aXQoaWQgPSAxKSB7XG4gICAgICAgIHRoaXMuZnJ1aXRDb3VudCsrO1xuICAgICAgICB0aGlzLmN1cnJlbnRGcnVpdCA9IHRoaXMuY3JlYXRlRnJ1aXRPblBvcygwLCA0MDAsIGlkKTtcbiAgICB9XG5cbiAgICAvLyDnm5HlkKzlsY/luZXngrnlh7tcbiAgICBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgICBpZiAodGhpcy5pc0NyZWF0aW5nKSByZXR1cm5cbiAgICAgICAgdGhpcy5pc0NyZWF0aW5nID0gdHJ1ZVxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMubm9kZVxuXG5cbiAgICAgICAgY29uc3QgZnJ1aXQgPSB0aGlzLmN1cnJlbnRGcnVpdFxuXG4gICAgICAgIGNvbnN0IHBvcyA9IGUuZ2V0TG9jYXRpb24oKVxuICAgICAgICBsZXQgeyB4LCB5IH0gPSBwb3NcbiAgICAgICAgeCA9IHggLSB3aWR0aCAvIDJcbiAgICAgICAgeSA9IHkgLSBoZWlnaHQgLyAyXG5cbiAgICAgICAgY29uc3QgYWN0aW9uID0gY2Muc2VxdWVuY2UoY2MubW92ZUJ5KDAuMywgY2MudjIoeCwgMCkpLmVhc2luZyhjYy5lYXNlQ3ViaWNBY3Rpb25JbigpKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgLy8g5byA5ZCv54mp55CG5pWI5p6cXG4gICAgICAgICAgICB0aGlzLnN0YXJ0RnJ1aXRQaHlzaWNzKGZydWl0KVxuXG4gICAgICAgICAgICAvLyAxc+WQjumHjeaWsOeUn+aIkOS4gOS4qlxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5leHRJZCA9IHRoaXMuZ2V0TmV4dEZydWl0SWQoKVxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdE9uZUZydWl0KG5leHRJZClcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ3JlYXRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgfSwgMSlcbiAgICAgICAgfSkpXG5cbiAgICAgICAgZnJ1aXQucnVuQWN0aW9uKGFjdGlvbilcbiAgICB9XG5cbiAgICAvLyDojrflj5bkuIvkuIDkuKrmsLTmnpznmoRpZFxuICAgIGdldE5leHRGcnVpdElkKCkge1xuICAgICAgICBpZiAodGhpcy5mcnVpdENvdW50IDwgMykge1xuICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZydWl0Q291bnQgPT09IDMpIHtcbiAgICAgICAgICAgIHJldHVybiAyXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDpmo/mnLrov5Tlm57liY015LiqXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSkgKyAxXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDliJvlu7rkuIDkuKrmsLTmnpxcbiAgICBjcmVhdGVPbmVGcnVpdChudW0pIHtcbiAgICAgICAgbGV0IGZydWl0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5mcnVpdFByZWZhYik7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZnJ1aXRzW251bSAtIDFdXG5cbiAgICAgICAgZnJ1aXQuZ2V0Q29tcG9uZW50KCdGcnVpdCcpLmluaXQoe1xuICAgICAgICAgICAgaWQ6IGNvbmZpZy5pZCxcbiAgICAgICAgICAgIGljb25TRjogY29uZmlnLmljb25TRlxuICAgICAgICB9KTtcblxuICAgICAgICBmcnVpdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWNcbiAgICAgICAgZnJ1aXQuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcikucmFkaXVzID0gMFxuXG4gICAgICAgIHRoaXMuZnJ1aXRzTm9kZS5hZGRDaGlsZChmcnVpdCk7XG4gICAgICAgIGZydWl0LnNjYWxlID0gMC42XG5cbiAgICAgICAgLy8g5pyJRnJ1aXTnu4Tku7bkvKDlhaVcbiAgICAgICAgZnJ1aXQub24oJ3NhbWVDb250YWN0JywgdGhpcy5vblNhbWVGcnVpdENvbnRhY3QuYmluZCh0aGlzKSlcblxuICAgICAgICByZXR1cm4gZnJ1aXRcbiAgICB9XG5cbiAgICBzdGFydEZydWl0UGh5c2ljcyhmcnVpdCkge1xuICAgICAgICBmcnVpdC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5EeW5hbWljO1xuICAgICAgICBjb25zdCBwaHlzaWNzQ2lyY2xlQ29sbGlkZXIgPSBmcnVpdC5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKVxuICAgICAgICBwaHlzaWNzQ2lyY2xlQ29sbGlkZXIucmFkaXVzID0gZnJ1aXQuaGVpZ2h0IC8gMlxuICAgICAgICBwaHlzaWNzQ2lyY2xlQ29sbGlkZXIuYXBwbHkoKVxuICAgIH1cblxuICAgIC8vIOWcqOaMh+WumuS9jee9rueUn+aIkOawtOaenFxuICAgIGNyZWF0ZUZydWl0T25Qb3MoeCwgeSwgdHlwZSA9IDEpIHtcbiAgICAgICAgY29uc3QgZnJ1aXQgPSB0aGlzLmNyZWF0ZU9uZUZydWl0KHR5cGUpXG4gICAgICAgIGZydWl0LnNldFBvc2l0aW9uKGNjLnYyKHgsIHkpKTtcbiAgICAgICAgcmV0dXJuIGZydWl0XG4gICAgfVxuXG4gICAgLy8g5Lik5Liq5rC05p6c56Kw5pKeXG4gICAgb25TYW1lRnJ1aXRDb250YWN0KHsgc2VsZiwgb3RoZXIgfSkge1xuICAgICAgICBvdGhlci5ub2RlLm9mZignc2FtZUNvbnRhY3QnKSAvLyDkuKTkuKpub2Rl6YO95Lya6Kem5Y+R77yMdG9kbyDnnIvnnIvmnInmsqHmnInlhbbku5bmlrnms5Xlj6rlsZXnpLrkuIDmrKHnmoRcblxuICAgICAgICBjb25zdCBpZCA9IG90aGVyLmdldENvbXBvbmVudCgnRnJ1aXQnKS5pZFxuICAgICAgICAvLyB0b2RvIOWPr+S7peS9v+eUqOWvueixoeaxoOWbnuaUtlxuICAgICAgICBzZWxmLm5vZGUucmVtb3ZlRnJvbVBhcmVudChmYWxzZSlcbiAgICAgICAgb3RoZXIubm9kZS5yZW1vdmVGcm9tUGFyZW50KGZhbHNlKVxuXG4gICAgICAgIGNvbnN0IHsgeCwgeSB9ID0gb3RoZXIubm9kZVxuXG4gICAgICAgIHRoaXMuY3JlYXRlRnJ1aXRKdWljZShpZCwgY2MudjIoeyB4LCB5IH0pLCBvdGhlci5ub2RlLndpZHRoKVxuXG4gICAgICAgIGNvbnN0IG5leHRJZCA9IGlkICsgMVxuICAgICAgICBpZiAobmV4dElkIDw9IDExKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdGcnVpdCA9IHRoaXMuY3JlYXRlRnJ1aXRPblBvcyh4LCB5LCBuZXh0SWQpXG5cbiAgICAgICAgICAgIHRoaXMuc3RhcnRGcnVpdFBoeXNpY3MobmV3RnJ1aXQpXG5cbiAgICAgICAgICAgIC8vIOWxleekuuWKqOeUuyB0b2RvIOWKqOeUu+aViOaenOmcgOimgeiwg+aVtFxuICAgICAgICAgICAgbmV3RnJ1aXQuc2NhbGUgPSAwXG4gICAgICAgICAgICBjYy50d2VlbihuZXdGcnVpdCkudG8oLjUsIHtcbiAgICAgICAgICAgICAgICBzY2FsZTogMC42XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZWFzaW5nOiBcImJhY2tPdXRcIlxuICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdG9kbyDlkIjmiJDkuKTkuKropb/nk5xcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgdG9kbyDlkIjmiJDkuKTkuKropb/nk5wg6L+Y5rKh5pyJ5a6e546w5ZOmfiAnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g5ZCI5bm25pe255qE5Yqo55S75pWI5p6cXG4gICAgY3JlYXRlRnJ1aXRKdWljZShpZCwgcG9zLCBuKSB7XG4gICAgICAgIC8vIOaSreaUvuWQiOW5tueahOWjsOmfs1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYm9vbUF1ZGlvLCBmYWxzZSwgMSk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy53YXRlckF1ZGlvLCBmYWxzZSwgMSk7XG5cbiAgICAgICAgLy8g5bGV56S65Yqo55S7XG4gICAgICAgIGxldCBqdWljZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuanVpY2VQcmVmYWIpO1xuICAgICAgICB0aGlzLmp1aWNlc05vZGUuYWRkQ2hpbGQoanVpY2UpO1xuXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuanVpY2VzW2lkIC0gMV1cbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBqdWljZS5nZXRDb21wb25lbnQoJ0p1aWNlJylcbiAgICAgICAgaW5zdGFuY2UuaW5pdChjb25maWcpXG4gICAgICAgIGluc3RhbmNlLnNob3dKdWljZShwb3MsIG4pXG4gICAgfVxuXG5cbiAgICAvL+a4uOaIj+S/neWtmFxuICAgIHNhdmVHYW1lKCkge1xuICAgICAgICBsZXQgZnJ1aXRQb3NBcnJheSA9IFtdO1xuICAgICAgICBsZXQgZnJ1aXRDaGlsZCA9IHRoaXMuZnJ1aXRzTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcnVpdENoaWxkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RnJ1aXQudXVpZCAhPSBmcnVpdENoaWxkW2ldLnV1aWQpIHtcbiAgICAgICAgICAgICAgICBmcnVpdFBvc0FycmF5LnB1c2goZnJ1aXRDaGlsZFtpXS5nZXRDb21wb25lbnQoXCJGcnVpdFwiKS5nZXREYXRhKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFNhdmVNYW5hZ2VyLkluc3RhbmNlKCkuc2V0SXRlbShTYXZlLmZydWl0c1BvcywgZnJ1aXRQb3NBcnJheSk7XG4gICAgfVxuXG4gICAgLy/muLjmiI/or7vlj5ZcbiAgICByZWFkR2FtZSgpIHtcbiAgICAgICAgbGV0IGdhbWVEYXRhID0gU2F2ZU1hbmFnZXIuSW5zdGFuY2UoKS5nZXRJdGVtKFNhdmUuZnJ1aXRzUG9zKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBnYW1lRGF0YVtpXTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRGcnVpdFBoeXNpY3ModGhpcy5jcmVhdGVGcnVpdE9uUG9zKGRhdGEucG9zLngsIGRhdGEucG9zLnksIGRhdGEuaWQpKVxuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=