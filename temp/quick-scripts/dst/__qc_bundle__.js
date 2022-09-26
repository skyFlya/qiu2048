
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Fruit');
require('./assets/scripts/Game');
require('./assets/scripts/Juice');
require('./assets/scripts/app/App');
require('./assets/scripts/cfg/EventIDCfg');
require('./assets/scripts/cfg/LocalStorageIDCfg');
require('./assets/scripts/cfg/QuickClickCfg');
require('./assets/scripts/cfg/UICfg');
require('./assets/scripts/cfg/UIZIndexCfg');
require('./assets/scripts/mgrs/DialogMgr');
require('./assets/scripts/mgrs/EventMgr');
require('./assets/scripts/mgrs/SoundMgr');
require('./assets/scripts/mgrs/TrackMgr');
require('./assets/scripts/mgrs/UICfgMgr');
require('./assets/scripts/mgrs/UIMgr');
require('./assets/scripts/misc/InterfaceDef');
require('./assets/scripts/pannels/PannelAlert1');
require('./assets/scripts/pannels/PannelWheel');
require('./assets/scripts/platform/Config');
require('./assets/scripts/platform/HttpClient');
require('./assets/scripts/platform/HttpUrl');
require('./assets/scripts/platform/TestHttp');
require('./assets/scripts/platform/WebViewPlatform');
require('./assets/scripts/saveManager/Save');
require('./assets/scripts/saveManager/SaveManager');
require('./assets/scripts/ui/DialogBase');
require('./assets/scripts/ui/List');
require('./assets/scripts/ui/ListItem');
require('./assets/scripts/ui/UIBase');
require('./assets/scripts/ui/UIUtils');
require('./assets/scripts/utils/animate-utils');
require('./assets/scripts/utils/math-utils');
require('./assets/scripts/utils/object-utils');
require('./assets/scripts/utils/random');
require('./assets/test');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/test.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '02fa06unaZEVLwBVDo8lsMi', 'test');
// test.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function () {
    function NewClass() {
    }
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}());
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQUE7SUErQkEsQ0FBQztJQS9Cb0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQStCNUI7SUFBRCxlQUFDO0NBL0JELEFBK0JDLElBQUE7a0JBL0JvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3Mge1xyXG5cclxuXHJcbiAgICAvLyBodHRwQ2xpZW50LmdldEluc3RhbmNlKCkuaHR0cFBvc3QoSHR0cFVybC50ZXN0Miwge1xyXG4gICAgLy8gICAgIGlkOiBcIjEuMC4wLjBcIlxyXG4gICAgLy8gfSwge1xyXG4gICAgLy8gICAgIHN1Y2Nlc3M6ICgpPT57XHJcbiAgICAvLyAgICAgICAgIC8vY29uc29sZS5sb2coXCLmiJDlip9hXCIpXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICBmYWlsOiAoKT0+e1xyXG4gICAgLy8gICAgICAgICAvL2NvbnNvbGUubG9nKFwi5aSx6LSlYVwiKVxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAgZmluYWw6ICgpPT57XHJcbiAgICAvLyAgICAgICAgIC8vY29uc29sZS5sb2coXCLlrozmiJBhXCIpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSlcclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBBcHAudWlDZmdNZ3IuaW5pdEJ5Q2ZnKFVJQ2ZnKTtcclxuXHJcbiAgICAvLyBBcHAuZGlhbG9nTWdyLnNob3dEaWFsb2coVUlDZmcuUGFubmVsQWxlcnQxLm5hbWUsICc8Yj48Y29sb3I9IzAwNzRCRD7mga3llpzmgqjvvIHmiYDmnInmj5DnjrDov5vluqblop7liqDvvIzmgqjnprs8Y29sb3I9I0VGMEEwOT4yMDDlhYM8L2NvbG9yPueOsOmHkeWkp+WlluabtOi/keS4gOatpeS6huWTpjwvY29sb3I+PC9iPicsIG51bGwsICgpPT57XHJcblxyXG4gICAgLy8gfSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mgrs/UIMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '14376qdSO1HEqisl6XkkSE5', 'UIMgr');
// scripts/mgrs/UIMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIMgr = void 0;
var App_1 = require("../app/App");
var EventIDCfg_1 = require("../cfg/EventIDCfg");
var UIBase_1 = require("../ui/UIBase");
var EventMgr_1 = require("./EventMgr");
var UIMgr = /** @class */ (function () {
    function UIMgr() {
        this._loadingIds = [];
        this._nodeList = cc.js.createMap();
        this._waittingDisplayList = [];
        this._curDisplay = null;
        this._uiList = [];
        this._openUINameList = [];
    }
    UIMgr.getInstance = function () {
        if (UIMgr._instance == null) {
            UIMgr._instance = new UIMgr();
        }
        return UIMgr._instance;
    };
    UIMgr.destroyInstance = function () {
        if (UIMgr._instance) {
            UIMgr._instance = null;
        }
    };
    UIMgr.prototype.openUI = function (name, callback) {
        var cfg = App_1.App.uiCfgMgr.getCfg(name);
        if (!cfg) {
            cc.error('未配置：' + name);
            return;
        }
        var displayId = 0;
        if (this._nodeList[name] && cc.isValid(this._nodeList[name])) {
            this._openUINameList.push(name);
            if (cfg.needWait) {
                if (this._curDisplay == null) {
                    displayId = ++UIMgr._curDisplayId;
                    this._curDisplay = {
                        name: name,
                        callback: callback
                    };
                    this.showUI(name, callback, displayId);
                }
                else {
                    if (this._curDisplay.name == name) {
                        cc.error('重复显示：' + name);
                        return;
                    }
                    for (var i = 0; i < this._waittingDisplayList.length; i++) {
                        if (this._waittingDisplayList[i].name == name) {
                            cc.error('重复显示：' + name);
                            return;
                        }
                    }
                    this._waittingDisplayList.push({
                        name: name,
                        callback: callback
                    });
                }
            }
            else {
                this.showUI(name, callback, displayId);
            }
        }
        else {
            // 加载资源
            if (cfg.preloadRes && cfg.preloadRes.length > 0) {
                this._openUINameList.push(name);
                if (cfg.needWait) {
                    if (this._curDisplay == null) {
                        displayId = ++UIMgr._curDisplayId;
                        this._curDisplay = {
                            name: name,
                            callback: callback
                        };
                    }
                    else {
                        if (this._curDisplay.name == name) {
                            cc.error('重复显示：' + name);
                            return;
                        }
                        for (var i = 0; i < this._waittingDisplayList.length; i++) {
                            if (this._waittingDisplayList[i].name == name) {
                                cc.error('重复显示：' + name);
                                return;
                            }
                        }
                        this._waittingDisplayList.push({
                            name: name,
                            callback: callback
                        });
                    }
                }
                this.loadRes(name, callback, displayId);
            }
            else {
                cc.error('未配置资源：' + name);
            }
        }
    };
    UIMgr.prototype.closeUI = function (name, isDestroy, callback) {
        var _this = this;
        if (isDestroy === void 0) { isDestroy = false; }
        var cfg = App_1.App.uiCfgMgr.getCfg(name);
        if (!cfg) {
            cc.error('未配置' + cfg);
            return;
        }
        var idx = this._openUINameList.indexOf(name);
        if (-1 != idx) {
            this._openUINameList.splice(idx, 1);
        }
        var isExits = false;
        if (cfg.needWait) {
            if (this._curDisplay && this._curDisplay.name == name) {
                this._curDisplay = null;
                isExits = true;
            }
            for (var i = 0; i < this._waittingDisplayList.length; i++) {
                if (this._waittingDisplayList[i].name == name) {
                    this._waittingDisplayList.splice(i, 1);
                    isExits = true;
                    break;
                }
            }
        }
        var node = this._nodeList[name];
        if (node) {
            var uiBase_1 = node.getComponent(UIBase_1.default);
            var idx_1 = this._uiList.indexOf(uiBase_1);
            if (isDestroy) {
                this._nodeList[name] = null;
            }
            if (idx_1 != -1) {
                this._uiList.splice(idx_1, 1);
                uiBase_1.hide(function () {
                    if (isDestroy) {
                        node.removeFromParent();
                        node.destroy();
                    }
                    _this.closeAndShowNext(uiBase_1, name, cfg.needWait, callback);
                });
            }
            else {
                this.closeAndShowNext(null, name, cfg.needWait, callback);
            }
        }
        else if (isExits) {
            this.closeAndShowNext(null, name, cfg.needWait, callback);
        }
    };
    UIMgr.prototype.findUI = function (name) {
        var node = this._nodeList[name];
        if (node) {
            var uiBase = node.getComponent(UIBase_1.default);
            var idx = this._uiList.indexOf(uiBase);
            if (idx != -1) {
                return uiBase;
            }
        }
        return null;
    };
    UIMgr.prototype.showUI = function (name, callback, displayId) {
        var cfg = App_1.App.uiCfgMgr.getCfg(name);
        if (!cfg) {
            cc.error('未配置' + cfg);
            return;
        }
        if (-1 == this._openUINameList.indexOf(name)) {
            return;
        }
        if (cfg.needWait) {
            if (!this._curDisplay || displayId != UIMgr._curDisplayId) {
                return;
            }
        }
        cc.log("show " + name);
        var uiBase = this._nodeList[name].getComponent(UIBase_1.default);
        var idx = this._uiList.indexOf(uiBase);
        if (idx != -1) {
            this._uiList.splice(idx, 1);
        }
        this._uiList.push(uiBase);
        uiBase.node.parent = cc.find("Canvas/UIRoot");
        uiBase.node.zIndex = cfg.zIndex;
        uiBase.show(function () { });
        callback && callback(uiBase);
        EventMgr_1.EventMgr.emit(EventIDCfg_1.EventIDCfg.PANNLE_SHOW, { name: name });
    };
    UIMgr.prototype.closeAndShowNext = function (uiBase, name, tryShowNext, callback) {
        callback && callback(uiBase);
        EventMgr_1.EventMgr.emit(EventIDCfg_1.EventIDCfg.PANNEL_CLOSE, { name: name });
        tryShowNext && this.tryShowNextUI();
    };
    UIMgr.prototype.tryShowNextUI = function () {
        if (this._curDisplay == null && this._waittingDisplayList.length > 0) {
            var cfg = this._waittingDisplayList.shift();
            var displayId = ++UIMgr._curDisplayId;
            this._curDisplay = {
                name: cfg.name,
                callback: cfg.callback
            };
            if (this._nodeList[cfg.name] && cc.isValid(this._nodeList[cfg.name])) {
                this.showUI(this._curDisplay.name, this._curDisplay.callback, displayId);
            }
            else {
                // 加载
                this.loadRes(cfg.name, cfg.callback, displayId);
            }
        }
    };
    UIMgr.prototype.loadRes = function (name, callback, displayId) {
        var _this = this;
        var cfg = App_1.App.uiCfgMgr.getCfg(name);
        if (!cfg) {
            cc.error('未配置：' + name);
            return;
        }
        var id = ++UIMgr._loadingId;
        this._loadingIds.push(id);
        var length = cfg.preloadRes.length;
        var loaded = 0;
        var isLoadedError = false;
        for (var i = 0; i < length; i++) {
            cc.loader.loadRes(cfg.preloadRes[i].url, cfg.preloadRes[i].type, function (error, res) {
                if (error) {
                    isLoadedError = true;
                    cc.error(error.message || error);
                }
                loaded++;
                if (loaded == length) {
                    var idx = _this._loadingIds.indexOf(id);
                    if (idx != -1) {
                        _this._loadingIds.splice(idx, 1);
                        if (!isLoadedError) {
                            if (!_this._nodeList[name] || !cc.isValid(_this._nodeList[name])) {
                                var prefab = cc.loader.getRes(cfg.ui, cc.Prefab);
                                _this._nodeList[name] = cc.instantiate(prefab);
                            }
                            if (-1 == _this._openUINameList.indexOf(name)) {
                                return;
                            }
                            _this.showUI(name, callback, displayId);
                        }
                    }
                }
            });
        }
    };
    UIMgr.prototype.clear = function () {
        var uiRoot = cc.find("Canvas/UIRoot");
        if (uiRoot) {
            uiRoot.removeAllChildren();
        }
        this._loadingIds = [];
        this._nodeList = cc.js.createMap();
        this._waittingDisplayList = [];
        this._curDisplay = null;
        this._uiList = [];
        this._openUINameList = [];
    };
    /**
     * 是否已经打开
     * @param name
     */
    UIMgr.prototype.isOpend = function (name) {
        var idx = this._openUINameList.indexOf(name);
        if (-1 != idx) {
            return true;
        }
        if (this._curDisplay && this._curDisplay.name == name) {
            return true;
        }
        return false;
    };
    /**
     * 是否等待打开
     */
    UIMgr.prototype.isWaittingOpen = function (name) {
        for (var i = 0; i < this._waittingDisplayList.length; i++) {
            if (this._waittingDisplayList[i].name == name) {
                return true;
            }
        }
        return false;
    };
    UIMgr.prototype.isOpenedOrWaittingOpen = function (name) {
        return this.isOpend(name) || this.isWaittingOpen(name);
    };
    UIMgr._instance = null;
    UIMgr._loadingId = 0;
    UIMgr._curDisplayId = 0;
    return UIMgr;
}());
exports.UIMgr = UIMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWdyc1xcVUlNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0NBQWlDO0FBQ2pDLGdEQUErQztBQUMvQyx1Q0FBa0M7QUFDbEMsdUNBQXNDO0FBR3RDO0lBQUE7UUFJWSxnQkFBVyxHQUFrQixFQUFFLENBQUM7UUFDaEMsY0FBUyxHQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdEMseUJBQW9CLEdBQWUsRUFBRSxDQUFDO1FBQ3RDLGdCQUFXLEdBQVEsSUFBSSxDQUFDO1FBQ3hCLFlBQU8sR0FBa0IsRUFBRSxDQUFDO1FBQzVCLG9CQUFlLEdBQWtCLEVBQUUsQ0FBQztJQTJSaEQsQ0FBQztJQXpSaUIsaUJBQVcsR0FBekI7UUFDSSxJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ3pCLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztTQUNqQztRQUNELE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBRWEscUJBQWUsR0FBN0I7UUFDSSxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDakIsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRU0sc0JBQU0sR0FBYixVQUFjLElBQVksRUFBRSxRQUFtQztRQUMzRCxJQUFNLEdBQUcsR0FBRyxTQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ04sRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDeEIsT0FBTztTQUNWO1FBQ0QsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxD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QUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2RCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUMzQyxPQUFPLElBQUksQ0FBQzthQUNmO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRU0sc0NBQXNCLEdBQTdCLFVBQThCLElBQVk7UUFDdEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQWpTYyxlQUFTLEdBQVUsSUFBSSxDQUFDO0lBQ3hCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO0lBQ3ZCLG1CQUFhLEdBQVcsQ0FBQyxDQUFDO0lBaVM3QyxZQUFDO0NBcFNELEFBb1NDLElBQUE7QUFwU1ksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi4vYXBwL0FwcFwiO1xyXG5pbXBvcnQgeyBFdmVudElEQ2ZnIH0gZnJvbSBcIi4uL2NmZy9FdmVudElEQ2ZnXCI7XHJcbmltcG9ydCBVSUJhc2UgZnJvbSBcIi4uL3VpL1VJQmFzZVwiO1xyXG5pbXBvcnQgeyBFdmVudE1nciB9IGZyb20gXCIuL0V2ZW50TWdyXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFVJTWdyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVUlNZ3IgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2xvYWRpbmdJZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc3RhdGljIF9jdXJEaXNwbGF5SWQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIF9sb2FkaW5nSWRzOiBBcnJheTxudW1iZXI+ID0gW107XHJcbiAgICBwcml2YXRlIF9ub2RlTGlzdDogT2JqZWN0ID0gY2MuanMuY3JlYXRlTWFwKCk7XHJcbiAgICBwcml2YXRlIF93YWl0dGluZ0Rpc3BsYXlMaXN0OiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBwcml2YXRlIF9jdXJEaXNwbGF5OiBhbnkgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfdWlMaXN0OiBBcnJheTxVSUJhc2U+ID0gW107XHJcbiAgICBwcml2YXRlIF9vcGVuVUlOYW1lTGlzdDogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogVUlNZ3Ige1xyXG4gICAgICAgIGlmIChVSU1nci5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBVSU1nci5faW5zdGFuY2UgPSBuZXcgVUlNZ3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFVJTWdyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlc3Ryb3lJbnN0YW5jZSgpOnZvaWQge1xyXG4gICAgICAgIGlmIChVSU1nci5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgVUlNZ3IuX2luc3RhbmNlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5VSShuYW1lOiBzdHJpbmcsIGNhbGxiYWNrPzogKHVpQmFzZTogVUlCYXNlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY2ZnID0gQXBwLnVpQ2ZnTWdyLmdldENmZyhuYW1lKTtcclxuICAgICAgICBpZiAoIWNmZykge1xyXG4gICAgICAgICAgICBjYy5lcnJvcign5pyq6YWN572u77yaJyArIG5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBkaXNwbGF5SWQgPSAwO1xyXG4gICAgICAgIGlmICh0aGlzLl9ub2RlTGlzdFtuYW1lXSAmJiBjYy5pc1ZhbGlkKHRoaXMuX25vZGVMaXN0W25hbWVdKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9vcGVuVUlOYW1lTGlzdC5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoY2ZnLm5lZWRXYWl0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY3VyRGlzcGxheSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheUlkID0gKytVSU1nci5fY3VyRGlzcGxheUlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1ckRpc3BsYXkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dVSShuYW1lLCBjYWxsYmFjaywgZGlzcGxheUlkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1ckRpc3BsYXkubmFtZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKCfph43lpI3mmL7npLrvvJonICsgbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl93YWl0dGluZ0Rpc3BsYXlMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl93YWl0dGluZ0Rpc3BsYXlMaXN0W2ldLm5hbWUgPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoJ+mHjeWkjeaYvuekuu+8micgKyBuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl93YWl0dGluZ0Rpc3BsYXlMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1VJKG5hbWUsIGNhbGxiYWNrLCBkaXNwbGF5SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g5Yqg6L296LWE5rqQXHJcbiAgICAgICAgICAgIGlmIChjZmcucHJlbG9hZFJlcyAmJiBjZmcucHJlbG9hZFJlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vcGVuVUlOYW1lTGlzdC5wdXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNmZy5uZWVkV2FpdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJEaXNwbGF5ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUlkID0gKytVSU1nci5fY3VyRGlzcGxheUlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jdXJEaXNwbGF5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1ckRpc3BsYXkubmFtZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcign6YeN5aSN5pi+56S677yaJyArIG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fd2FpdHRpbmdEaXNwbGF5TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3dhaXR0aW5nRGlzcGxheUxpc3RbaV0ubmFtZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoJ+mHjeWkjeaYvuekuu+8micgKyBuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fd2FpdHRpbmdEaXNwbGF5TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUmVzKG5hbWUsIGNhbGxiYWNrLCBkaXNwbGF5SWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoJ+acqumFjee9rui1hOa6kO+8micgKyBuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VVSShuYW1lOiBzdHJpbmcsIGlzRGVzdHJveTogYm9vbGVhbiA9IGZhbHNlLCBjYWxsYmFjaz86ICh1aUJhc2U6IFVJQmFzZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNmZyA9IEFwcC51aUNmZ01nci5nZXRDZmcobmFtZSk7XHJcbiAgICAgICAgaWYgKCFjZmcpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoJ+acqumFjee9ricgKyBjZmcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuX29wZW5VSU5hbWVMaXN0LmluZGV4T2YobmFtZSk7XHJcbiAgICAgICAgaWYgKC0xICE9IGlkeCkge1xyXG4gICAgICAgICAgICB0aGlzLl9vcGVuVUlOYW1lTGlzdC5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpc0V4aXRzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGNmZy5uZWVkV2FpdCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY3VyRGlzcGxheSAmJiB0aGlzLl9jdXJEaXNwbGF5Lm5hbWUgPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyRGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpc0V4aXRzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3dhaXR0aW5nRGlzcGxheUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl93YWl0dGluZ0Rpc3BsYXlMaXN0W2ldLm5hbWUgPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dhaXR0aW5nRGlzcGxheUxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRXhpdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBub2RlOiBjYy5Ob2RlID0gdGhpcy5fbm9kZUxpc3RbbmFtZV07XHJcbiAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgY29uc3QgdWlCYXNlOiBVSUJhc2UgPSBub2RlLmdldENvbXBvbmVudChVSUJhc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSB0aGlzLl91aUxpc3QuaW5kZXhPZih1aUJhc2UpO1xyXG4gICAgICAgICAgICBpZiAoaXNEZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9ub2RlTGlzdFtuYW1lXSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlkeCAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdWlMaXN0LnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgICAgICAgICAgdWlCYXNlLmhpZGUoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNEZXN0cm95KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZUFuZFNob3dOZXh0KHVpQmFzZSwgbmFtZSwgY2ZnLm5lZWRXYWl0LCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VBbmRTaG93TmV4dChudWxsLCBuYW1lLCBjZmcubmVlZFdhaXQsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoaXNFeGl0cykge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlQW5kU2hvd05leHQobnVsbCwgbmFtZSwgY2ZnLm5lZWRXYWl0LCBjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaW5kVUkobmFtZTogc3RyaW5nKTogVUlCYXNlIHtcclxuICAgICAgICBjb25zdCBub2RlOiBjYy5Ob2RlID0gdGhpcy5fbm9kZUxpc3RbbmFtZV07XHJcbiAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgY29uc3QgdWlCYXNlOiBVSUJhc2UgPSBub2RlLmdldENvbXBvbmVudChVSUJhc2UpO1xyXG4gICAgICAgICAgICBjb25zdCBpZHggPSB0aGlzLl91aUxpc3QuaW5kZXhPZih1aUJhc2UpO1xyXG4gICAgICAgICAgICBpZiAoaWR4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdWlCYXNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93VUkobmFtZTogc3RyaW5nLCBjYWxsYmFjazogKHVpQmFzZTogVUlCYXNlKSA9PiB2b2lkLCBkaXNwbGF5SWQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGNmZyA9IEFwcC51aUNmZ01nci5nZXRDZmcobmFtZSk7XHJcbiAgICAgICAgaWYgKCFjZmcpIHtcclxuICAgICAgICAgICAgY2MuZXJyb3IoJ+acqumFjee9ricgKyBjZmcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgtMSA9PSB0aGlzLl9vcGVuVUlOYW1lTGlzdC5pbmRleE9mKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjZmcubmVlZFdhaXQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9jdXJEaXNwbGF5IHx8IGRpc3BsYXlJZCAhPSBVSU1nci5fY3VyRGlzcGxheUlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2MubG9nKFwic2hvdyBcIiArIG5hbWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHVpQmFzZTogVUlCYXNlID0gdGhpcy5fbm9kZUxpc3RbbmFtZV0uZ2V0Q29tcG9uZW50KFVJQmFzZSk7XHJcbiAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5fdWlMaXN0LmluZGV4T2YodWlCYXNlKTtcclxuICAgICAgICBpZiAoaWR4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VpTGlzdC5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdWlMaXN0LnB1c2godWlCYXNlKTtcclxuICAgICAgICB1aUJhc2Uubm9kZS5wYXJlbnQgPSBjYy5maW5kKFwiQ2FudmFzL1VJUm9vdFwiKTtcclxuICAgICAgICB1aUJhc2Uubm9kZS56SW5kZXggPSBjZmcuekluZGV4O1xyXG4gICAgICAgIHVpQmFzZS5zaG93KCgpPT57fSk7XHJcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodWlCYXNlKTtcclxuICAgICAgICBFdmVudE1nci5lbWl0KEV2ZW50SURDZmcuUEFOTkxFX1NIT1csIHtuYW1lOiBuYW1lfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9zZUFuZFNob3dOZXh0KHVpQmFzZTogVUlCYXNlLCBuYW1lOiBzdHJpbmcsIHRyeVNob3dOZXh0OiBib29sZWFuLCBjYWxsYmFjazogKHVpQmFzZTogVUlCYXNlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2sodWlCYXNlKTtcclxuICAgICAgICBFdmVudE1nci5lbWl0KEV2ZW50SURDZmcuUEFOTkVMX0NMT1NFLCB7bmFtZTogbmFtZX0pO1xyXG4gICAgICAgIHRyeVNob3dOZXh0ICYmIHRoaXMudHJ5U2hvd05leHRVSSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdHJ5U2hvd05leHRVSSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fY3VyRGlzcGxheSA9PSBudWxsICYmIHRoaXMuX3dhaXR0aW5nRGlzcGxheUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBjZmcgPSB0aGlzLl93YWl0dGluZ0Rpc3BsYXlMaXN0LnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlJZCA9ICsrVUlNZ3IuX2N1ckRpc3BsYXlJZDtcclxuICAgICAgICAgICAgdGhpcy5fY3VyRGlzcGxheSA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGNmZy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNmZy5jYWxsYmFja1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9ub2RlTGlzdFtjZmcubmFtZV0gJiYgY2MuaXNWYWxpZCh0aGlzLl9ub2RlTGlzdFtjZmcubmFtZV0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dVSSh0aGlzLl9jdXJEaXNwbGF5Lm5hbWUsIHRoaXMuX2N1ckRpc3BsYXkuY2FsbGJhY2ssIGRpc3BsYXlJZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliqDovb1cclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFJlcyhjZmcubmFtZSwgY2ZnLmNhbGxiYWNrLCBkaXNwbGF5SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZFJlcyhuYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiAodWlCYXNlOiBVSUJhc2UpID0+IHZvaWQsIGRpc3BsYXlJZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY2ZnID0gQXBwLnVpQ2ZnTWdyLmdldENmZyhuYW1lKTtcclxuICAgICAgICBpZiAoIWNmZykge1xyXG4gICAgICAgICAgICBjYy5lcnJvcign5pyq6YWN572u77yaJyArIG5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlkID0gKytVSU1nci5fbG9hZGluZ0lkO1xyXG4gICAgICAgIHRoaXMuX2xvYWRpbmdJZHMucHVzaChpZCk7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gY2ZnLnByZWxvYWRSZXMubGVuZ3RoO1xyXG4gICAgICAgIGxldCBsb2FkZWQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGlzTG9hZGVkRXJyb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKGNmZy5wcmVsb2FkUmVzW2ldLnVybCwgY2ZnLnByZWxvYWRSZXNbaV0udHlwZSwgKGVycm9yOiBFcnJvciwgcmVzOiBhbnkpPT57XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0xvYWRlZEVycm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnJvci5tZXNzYWdlIHx8IGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICBsb2FkZWQrKztcclxuICAgICAgICAgICAgICAgIGlmIChsb2FkZWQgPT0gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5fbG9hZGluZ0lkcy5pbmRleE9mKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWR4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvYWRpbmdJZHMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNMb2FkZWRFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9ub2RlTGlzdFtuYW1lXSB8fCAhY2MuaXNWYWxpZCh0aGlzLl9ub2RlTGlzdFtuYW1lXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmVmYWI6IGNjLlByZWZhYiA9IGNjLmxvYWRlci5nZXRSZXMoY2ZnLnVpLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25vZGVMaXN0W25hbWVdID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgtMSA9PSB0aGlzLl9vcGVuVUlOYW1lTGlzdC5pbmRleE9mKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VUkobmFtZSwgY2FsbGJhY2ssIGRpc3BsYXlJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdWlSb290ID0gY2MuZmluZChcIkNhbnZhcy9VSVJvb3RcIik7XHJcbiAgICAgICAgaWYgKHVpUm9vdCkge1xyXG4gICAgICAgICAgICB1aVJvb3QucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbG9hZGluZ0lkcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX25vZGVMaXN0ID0gY2MuanMuY3JlYXRlTWFwKCk7XHJcbiAgICAgICAgdGhpcy5fd2FpdHRpbmdEaXNwbGF5TGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2N1ckRpc3BsYXkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3VpTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX29wZW5VSU5hbWVMaXN0ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKblt7Lnu4/miZPlvIBcclxuICAgICAqIEBwYXJhbSBuYW1lIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGlzT3BlbmQobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5fb3BlblVJTmFtZUxpc3QuaW5kZXhPZihuYW1lKTtcclxuICAgICAgICBpZiAoLTEgIT0gaWR4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fY3VyRGlzcGxheSAmJiB0aGlzLl9jdXJEaXNwbGF5Lm5hbWUgPT0gbmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm562J5b6F5omT5byAXHJcbiAgICAgKi9cclxuICAgICBwcml2YXRlIGlzV2FpdHRpbmdPcGVuKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fd2FpdHRpbmdEaXNwbGF5TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fd2FpdHRpbmdEaXNwbGF5TGlzdFtpXS5uYW1lID09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNPcGVuZWRPcldhaXR0aW5nT3BlbihuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc09wZW5kKG5hbWUpIHx8IHRoaXMuaXNXYWl0dGluZ09wZW4obmFtZSk7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/cfg/UICfg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb0f9BI0TVEv6IEQe0/7Pik', 'UICfg');
// scripts/cfg/UICfg.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UICfg = void 0;
var UIZIndexCfg_1 = require("./UIZIndexCfg");
exports.UICfg = {
    /**
     * 玩法
     */
    'PannelAbout': {
        name: 'PannelAbout',
        preloadRes: [
            { url: 'common/pannels/PannelAbout', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelAbout',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    'PannelAdLoading': {
        name: 'PannelAdLoading',
        preloadRes: [
            { url: 'common/pannels/PannelAdLoading', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelAdLoading',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.AD_LOADING
    },
    /**
     * 提示框
     */
    'PannelAlert1': {
        name: 'PannelAlert1',
        preloadRes: [
            { url: 'common/pannels/PannelAlert1', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelAlert1',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 频繁点击
     */
    'PannelAlert2': {
        name: 'PannelAlert2',
        preloadRes: [
            { url: 'common/pannels/PannelAlert2', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelAlert2',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 提现
     */
    'PannelCashOut': {
        name: 'PannelCashOut',
        preloadRes: [
            { url: 'common/pannels/PannelCashOut', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelCashOut',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.CASHOUT,
    },
    /**
     * 限时合成奖励
     */
    'PannelCombineReward': {
        name: 'PannelCombineReward',
        preloadRes: [
            { url: 'common/pannels/PannelCombineReward', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelCombineReward',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 提现记录
     */
    'PannelCashOutRecord': {
        name: 'PannelCashOutRecord',
        preloadRes: [
            { url: 'common/pannels/PannelCashOutRecord', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelCashOutRecord',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.CASHOUT + 1,
    },
    /**
     * 提现成功弹窗
     */
    'PannelCashOutSuccess': {
        name: 'PannelCashOutSuccess',
        preloadRes: [
            { url: 'common/pannels/PannelCashOutSuccess', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelCashOutSuccess',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.CASHOUT + 2,
    },
    /**
     * 每日提现
     */
    'PannelDailyCashOut': {
        name: 'PannelDailyCashOut',
        preloadRes: [
            { url: 'common/pannels/PannelDailyCashOut', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelDailyCashOut',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 日常任務
     */
    'PannelDailyTask': {
        name: 'PannelDailyTask',
        preloadRes: [
            { url: 'common/pannels/PannelDailyTask', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelDailyTask',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT + 1,
    },
    /**
     * 游戲結束
     */
    'PannelGameOver': {
        name: 'PannelGameOver',
        preloadRes: [
            { url: 'game/pannels/PannelGameOver', type: cc.Prefab }
        ],
        ui: 'game/pannels/PannelGameOver',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * GM
     */
    'PannelGM': {
        name: 'PannelGM',
        preloadRes: [
            { url: 'common/pannels/PannelGM', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelGM',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 引导移动失败
     */
    'PannelGuideMoveFailed': {
        name: 'PannelGuideMoveFailed',
        preloadRes: [
            { url: 'common/pannels/PannelGuideMoveFailed', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelGuideMoveFailed',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 网络错误
     */
    'PannelNetworkError': {
        name: 'PannelNetworkError',
        preloadRes: [
            { url: 'common/pannels/PannelNetworkError', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelNetworkError',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.NETWORK_ERROR,
    },
    /**
     * 儲錢罐
     */
    'PannelPiggyBank': {
        name: 'PannelPiggyBank',
        preloadRes: [
            { url: 'common/pannels/PannelPiggyBank', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelPiggyBank',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 排行榜
     */
    'PannelRankList': {
        name: 'PannelRankList',
        preloadRes: [
            { url: 'common/pannels/PannelRankList', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelRankList',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 提现红包
     */
    'PannelRedPacketDailyCashOut': {
        name: 'PannelRedPacketDailyCashOut',
        preloadRes: [
            { url: 'common/pannels/PannelRedPacketDailyCashOut', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelRedPacketDailyCashOut',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.CASHOUT,
    },
    /**
     * 漂浮红包
     */
    'PannelRedPacketFloat': {
        name: 'PannelRedPacketFloat',
        preloadRes: [
            { url: 'common/pannels/PannelRedPacketFloat', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelRedPacketFloat',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 幸运红包
     */
    'PannelRedPacketLucky': {
        name: 'PannelRedPacketLucky',
        preloadRes: [
            { url: 'common/pannels/PannelRedPacketLucky', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelRedPacketLucky',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 新人奖励红包
     */
    'PannelRedPacketNew': {
        name: 'PannelRedPacketNew',
        preloadRes: [
            { url: 'common/pannels/PannelRedPacketNew', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelRedPacketNew',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 在线红包
     */
    'PannelRedPacketOnline': {
        name: 'PannelRedPacketOnline',
        preloadRes: [
            { url: 'common/pannels/PannelRedPacketOnline', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelRedPacketOnline',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 红包
     */
    'PannelRedPacketPassLevel': {
        name: 'PannelRedPacketPassLevel',
        preloadRes: [
            { url: 'common/pannels/PannelRedPacketPassLevel', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelRedPacketPassLevel',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 超级红包
     */
    'PannelRedPacketSuper': {
        name: 'PannelRedPacketSuper',
        preloadRes: [
            { url: 'common/pannels/PannelRedPacketSuper', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelRedPacketSuper',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 红包收取
     */
    'PannelReward': {
        name: 'PannelReward',
        preloadRes: [
            { url: 'common/pannels/PannelReward', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelReward',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.REWARD,
    },
    /**
     * 老虎机
     */
    'PannelSlotMachine': {
        name: 'PannelSlotMachine',
        preloadRes: [
            { url: 'common/pannels/PannelSlotMachine', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelSlotMachine',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 老虎机金币收下
     */
    'PannelSlotMachineCoinReceive': {
        name: 'PannelSlotMachineCoinReceive',
        preloadRes: [
            { url: 'common/pannels/PannelSlotMachineCoinReceive', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelSlotMachineCoinReceive',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 設置
     */
    'PannelSetting': {
        name: 'PannelSetting',
        preloadRes: [
            { url: 'common/pannels/PannelSetting', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelSetting',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 登錄
     */
    'PannelSignIn': {
        name: 'PannelSignIn',
        preloadRes: [
            { url: 'common/pannels/PannelSignIn', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelSignIn',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 任务成就
     */
    'PannelTask': {
        name: 'PannelTask',
        preloadRes: [
            { url: 'common/pannels/PannelTask', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelTask',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 警告
     */
    'PannelWarning': {
        name: 'PannelWarning',
        preloadRes: [
            { url: 'common/pannels/PannelWarning', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelWarning',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 轉盤
     */
    'PannelWheel': {
        name: 'PannelWheel',
        preloadRes: [
            { url: 'common/pannels/PannelWheel', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelWheel',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2ZnXFxVSUNmZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFHL0IsUUFBQSxLQUFLLEdBQUc7SUFDakI7O09BRUc7SUFDSCxhQUFhLEVBQUU7UUFDWCxJQUFJLEVBQUUsYUFBYTtRQUNuQixVQUFVLEVBQUU7WUFDUixFQUFDLEdBQUcsRUFBRSw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBQztTQUN2RDtRQUNELEVBQUUsRUFBRSw0QkFBNEI7UUFDaEMsUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUseUJBQVcsQ0FBQyxPQUFPO0tBQzlCO0lBQ0QsaUJBQWlCLEVBQUU7UUFDZixJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLFVBQVUsRUFBRTtZQUNSLEVBQUMsR0FBRyxFQUFFLGdDQUFnQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFDO1NBQzNEO1FBQ0QsRUFBRSxFQUFFLGdDQUFnQztRQUNwQyxRQUFRLEVBQUUsS0FBSztRQUNmLE1BQU0sRUFBRSx5QkFBVyxDQUFDLFVBQVU7S0FDakM7SUFDRDs7T0FFRztJQUNILGNBQWMsRUFBRTtRQUNaLElBQUksRUFBRSxjQUFjO1FBQ3BCLFVBQVUsRUFBRTtZQUNSLEVBQUMsR0FBRyxFQUFFLDZCQUE2QixFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFDO1NBQ3hEO1FBQ0QsRUFBRSxFQUFFLDZCQUE2QjtRQUNqQyxRQUFRLEVBQUUsS0FBSztRQUNmLE1BQU0sRUFBRSx5QkFBVyxDQUFDLE9BQU87S0FDOUI7SUFDRDs7T0FFRztJQUNILGNBQWMsRUFBRTtRQUNaLElBQUksRUFBRSxjQUFjO1FBQ3BCLFVBQVUsRUFBRTtZQUNSLEVBQUMsR0FBRyxFQUFFLDZCQUE2QixFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFDO1NBQ3hEO1FBQ0QsRUFBRSxFQUFF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UUFDZixNQUFNLEVBQUUseUJBQVcsQ0FBQyxPQUFPO0tBQzlCO0lBRUQ7O09BRUc7SUFDSCxlQUFlLEVBQUU7UUFDYixJQUFJLEVBQUUsZUFBZTtRQUNyQixVQUFVLEVBQUU7WUFDUixFQUFDLEdBQUcsRUFBRSw4QkFBOEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBQztTQUN6RDtRQUNELEVBQUUsRUFBRSw4QkFBOEI7UUFDbEMsUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNLEVBQUUseUJBQVcsQ0FBQyxPQUFPO0tBQzlCO0lBQ0Q7O09BRUc7SUFDSCxhQUFhLEVBQUU7UUFDWCxJQUFJLEVBQUUsYUFBYTtRQUNuQixVQUFVLEVBQUU7WUFDUixFQUFDLEdBQUcsRUFBRSw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBQztTQUN2RDtRQUNELEVBQUUsRUFBRSw0QkFBNEI7UUFDaEMsUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUseUJBQVcsQ0FBQyxPQUFPO0tBQzlCO0NBQ0osQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJWkluZGV4Q2ZnIH0gZnJvbSBcIi4vVUlaSW5kZXhDZmdcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVUlDZmcgPSB7XHJcbiAgICAvKipcclxuICAgICAqIOeOqeazlVxyXG4gICAgICovXHJcbiAgICAnUGFubmVsQWJvdXQnOiB7XHJcbiAgICAgICAgbmFtZTogJ1Bhbm5lbEFib3V0JyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxBYm91dCcsIHR5cGU6IGNjLlByZWZhYn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVpOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsQWJvdXQnLFxyXG4gICAgICAgIG5lZWRXYWl0OiB0cnVlLFxyXG4gICAgICAgIHpJbmRleDogVUlaSW5kZXhDZmcuREVGQVVMVCxcclxuICAgIH0sXHJcbiAgICAnUGFubmVsQWRMb2FkaW5nJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxBZExvYWRpbmcnLFxyXG4gICAgICAgIHByZWxvYWRSZXM6IFtcclxuICAgICAgICAgICAge3VybDogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbEFkTG9hZGluZycsIHR5cGU6IGNjLlByZWZhYn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVpOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsQWRMb2FkaW5nJyxcclxuICAgICAgICBuZWVkV2FpdDogZmFsc2UsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5BRF9MT0FESU5HXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDmj5DnpLrmoYZcclxuICAgICAqL1xyXG4gICAgJ1Bhbm5lbEFsZXJ0MSc6IHtcclxuICAgICAgICBuYW1lOiAnUGFubmVsQWxlcnQxJyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxBbGVydDEnLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbEFsZXJ0MScsXHJcbiAgICAgICAgbmVlZFdhaXQ6IGZhbHNlLFxyXG4gICAgICAgIHpJbmRleDogVUlaSW5kZXhDZmcuREVGQVVMVCxcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOmikee5geeCueWHu1xyXG4gICAgICovXHJcbiAgICAnUGFubmVsQWxlcnQyJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxBbGVydDInLFxyXG4gICAgICAgIHByZWxvYWRSZXM6IFtcclxuICAgICAgICAgICAge3VybDogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbEFsZXJ0MicsIHR5cGU6IGNjLlByZWZhYn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVpOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsQWxlcnQyJyxcclxuICAgICAgICBuZWVkV2FpdDogZmFsc2UsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5o+Q546wXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxDYXNoT3V0Jzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxDYXNoT3V0JyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxDYXNoT3V0JywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxDYXNoT3V0JyxcclxuICAgICAgICBuZWVkV2FpdDogZmFsc2UsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5DQVNIT1VULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog6ZmQ5pe25ZCI5oiQ5aWW5YqxXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxDb21iaW5lUmV3YXJkJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxDb21iaW5lUmV3YXJkJyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxDb21iaW5lUmV3YXJkJywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxDb21iaW5lUmV3YXJkJyxcclxuICAgICAgICBuZWVkV2FpdDogZmFsc2UsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5o+Q546w6K6w5b2VXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxDYXNoT3V0UmVjb3JkJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxDYXNoT3V0UmVjb3JkJyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxDYXNoT3V0UmVjb3JkJywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxDYXNoT3V0UmVjb3JkJyxcclxuICAgICAgICBuZWVkV2FpdDogZmFsc2UsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5DQVNIT1VUICsgMSxcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOaPkOeOsOaIkOWKn+W8ueeql1xyXG4gICAgICovXHJcbiAgICAnUGFubmVsQ2FzaE91dFN1Y2Nlc3MnOiB7XHJcbiAgICAgICAgbmFtZTogJ1Bhbm5lbENhc2hPdXRTdWNjZXNzJyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxDYXNoT3V0U3VjY2VzcycsIHR5cGU6IGNjLlByZWZhYn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVpOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsQ2FzaE91dFN1Y2Nlc3MnLFxyXG4gICAgICAgIG5lZWRXYWl0OiBmYWxzZSxcclxuICAgICAgICB6SW5kZXg6IFVJWkluZGV4Q2ZnLkNBU0hPVVQgKyAyLFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5q+P5pel5o+Q546wXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxEYWlseUNhc2hPdXQnOiB7XHJcbiAgICAgICAgbmFtZTogJ1Bhbm5lbERhaWx5Q2FzaE91dCcsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsRGFpbHlDYXNoT3V0JywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxEYWlseUNhc2hPdXQnLFxyXG4gICAgICAgIG5lZWRXYWl0OiB0cnVlLFxyXG4gICAgICAgIHpJbmRleDogVUlaSW5kZXhDZmcuREVGQVVMVCxcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOaXpeW4uOS7u+WLmVxyXG4gICAgICovXHJcbiAgICAnUGFubmVsRGFpbHlUYXNrJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxEYWlseVRhc2snLFxyXG4gICAgICAgIHByZWxvYWRSZXM6IFtcclxuICAgICAgICAgICAge3VybDogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbERhaWx5VGFzaycsIHR5cGU6IGNjLlByZWZhYn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVpOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsRGFpbHlUYXNrJyxcclxuICAgICAgICBuZWVkV2FpdDogZmFsc2UsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxUICsgMSxcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIsue1kOadn1xyXG4gICAgICovXHJcbiAgICAnUGFubmVsR2FtZU92ZXInOiB7XHJcbiAgICAgICAgbmFtZTogJ1Bhbm5lbEdhbWVPdmVyJyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdnYW1lL3Bhbm5lbHMvUGFubmVsR2FtZU92ZXInLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2dhbWUvcGFubmVscy9QYW5uZWxHYW1lT3ZlcicsXHJcbiAgICAgICAgbmVlZFdhaXQ6IHRydWUsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogR01cclxuICAgICAqL1xyXG4gICAgJ1Bhbm5lbEdNJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxHTScsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsR00nLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbEdNJyxcclxuICAgICAgICBuZWVkV2FpdDogZmFsc2UsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5byV5a+856e75Yqo5aSx6LSlXHJcbiAgICAgKi9cclxuICAgICAnUGFubmVsR3VpZGVNb3ZlRmFpbGVkJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxHdWlkZU1vdmVGYWlsZWQnLFxyXG4gICAgICAgIHByZWxvYWRSZXM6IFtcclxuICAgICAgICAgICAge3VybDogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbEd1aWRlTW92ZUZhaWxlZCcsIHR5cGU6IGNjLlByZWZhYn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVpOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsR3VpZGVNb3ZlRmFpbGVkJyxcclxuICAgICAgICBuZWVkV2FpdDogZmFsc2UsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog572R57uc6ZSZ6K+vXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxOZXR3b3JrRXJyb3InOiB7XHJcbiAgICAgICAgbmFtZTogJ1Bhbm5lbE5ldHdvcmtFcnJvcicsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsTmV0d29ya0Vycm9yJywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxOZXR3b3JrRXJyb3InLFxyXG4gICAgICAgIG5lZWRXYWl0OiBmYWxzZSxcclxuICAgICAgICB6SW5kZXg6IFVJWkluZGV4Q2ZnLk5FVFdPUktfRVJST1IsXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDlhLLpjKLnvZBcclxuICAgICAqL1xyXG4gICAgJ1Bhbm5lbFBpZ2d5QmFuayc6IHtcclxuICAgICAgICBuYW1lOiAnUGFubmVsUGlnZ3lCYW5rJyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxQaWdneUJhbmsnLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFBpZ2d5QmFuaycsXHJcbiAgICAgICAgbmVlZFdhaXQ6IHRydWUsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5o6S6KGM5qacXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxSYW5rTGlzdCc6IHtcclxuICAgICAgICBuYW1lOiAnUGFubmVsUmFua0xpc3QnLFxyXG4gICAgICAgIHByZWxvYWRSZXM6IFtcclxuICAgICAgICAgICAge3VybDogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFJhbmtMaXN0JywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxSYW5rTGlzdCcsXHJcbiAgICAgICAgbmVlZFdhaXQ6IHRydWUsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5o+Q546w57qi5YyFXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxSZWRQYWNrZXREYWlseUNhc2hPdXQnOiB7XHJcbiAgICAgICAgbmFtZTogJ1Bhbm5lbFJlZFBhY2tldERhaWx5Q2FzaE91dCcsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsUmVkUGFja2V0RGFpbHlDYXNoT3V0JywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxSZWRQYWNrZXREYWlseUNhc2hPdXQnLFxyXG4gICAgICAgIG5lZWRXYWl0OiB0cnVlLFxyXG4gICAgICAgIHpJbmRleDogVUlaSW5kZXhDZmcuQ0FTSE9VVCxcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOa8gua1rue6ouWMhVxyXG4gICAgICovXHJcbiAgICAgJ1Bhbm5lbFJlZFBhY2tldEZsb2F0Jzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxSZWRQYWNrZXRGbG9hdCcsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsUmVkUGFja2V0RmxvYXQnLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFJlZFBhY2tldEZsb2F0JyxcclxuICAgICAgICBuZWVkV2FpdDogdHJ1ZSxcclxuICAgICAgICB6SW5kZXg6IFVJWkluZGV4Q2ZnLkRFRkFVTFQsXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDlubjov5DnuqLljIVcclxuICAgICAqL1xyXG4gICAgJ1Bhbm5lbFJlZFBhY2tldEx1Y2t5Jzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxSZWRQYWNrZXRMdWNreScsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsUmVkUGFja2V0THVja3knLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFJlZFBhY2tldEx1Y2t5JyxcclxuICAgICAgICBuZWVkV2FpdDogdHJ1ZSxcclxuICAgICAgICB6SW5kZXg6IFVJWkluZGV4Q2ZnLkRFRkFVTFQsXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDmlrDkurrlpZblirHnuqLljIVcclxuICAgICAqL1xyXG4gICAgJ1Bhbm5lbFJlZFBhY2tldE5ldyc6IHtcclxuICAgICAgICBuYW1lOiAnUGFubmVsUmVkUGFja2V0TmV3JyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxSZWRQYWNrZXROZXcnLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFJlZFBhY2tldE5ldycsXHJcbiAgICAgICAgbmVlZFdhaXQ6IHRydWUsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5Zyo57q/57qi5YyFXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxSZWRQYWNrZXRPbmxpbmUnOiB7XHJcbiAgICAgICAgbmFtZTogJ1Bhbm5lbFJlZFBhY2tldE9ubGluZScsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsUmVkUGFja2V0T25saW5lJywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxSZWRQYWNrZXRPbmxpbmUnLFxyXG4gICAgICAgIG5lZWRXYWl0OiB0cnVlLFxyXG4gICAgICAgIHpJbmRleDogVUlaSW5kZXhDZmcuREVGQVVMVCxcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOe6ouWMhVxyXG4gICAgICovXHJcbiAgICAnUGFubmVsUmVkUGFja2V0UGFzc0xldmVsJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxSZWRQYWNrZXRQYXNzTGV2ZWwnLFxyXG4gICAgICAgIHByZWxvYWRSZXM6IFtcclxuICAgICAgICAgICAge3VybDogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFJlZFBhY2tldFBhc3NMZXZlbCcsIHR5cGU6IGNjLlByZWZhYn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVpOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsUmVkUGFja2V0UGFzc0xldmVsJyxcclxuICAgICAgICBuZWVkV2FpdDogdHJ1ZSxcclxuICAgICAgICB6SW5kZXg6IFVJWkluZGV4Q2ZnLkRFRkFVTFQsXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDotoXnuqfnuqLljIVcclxuICAgICAqL1xyXG4gICAgJ1Bhbm5lbFJlZFBhY2tldFN1cGVyJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxSZWRQYWNrZXRTdXBlcicsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsUmVkUGFja2V0U3VwZXInLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFJlZFBhY2tldFN1cGVyJyxcclxuICAgICAgICBuZWVkV2FpdDogdHJ1ZSxcclxuICAgICAgICB6SW5kZXg6IFVJWkluZGV4Q2ZnLkRFRkFVTFQsXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDnuqLljIXmlLblj5ZcclxuICAgICAqL1xyXG4gICAgJ1Bhbm5lbFJld2FyZCc6IHtcclxuICAgICAgICBuYW1lOiAnUGFubmVsUmV3YXJkJyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxSZXdhcmQnLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFJld2FyZCcsXHJcbiAgICAgICAgbmVlZFdhaXQ6IGZhbHNlLFxyXG4gICAgICAgIHpJbmRleDogVUlaSW5kZXhDZmcuUkVXQVJELFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog6ICB6JmO5py6XHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxTbG90TWFjaGluZSc6IHtcclxuICAgICAgICBuYW1lOiAnUGFubmVsU2xvdE1hY2hpbmUnLFxyXG4gICAgICAgIHByZWxvYWRSZXM6IFtcclxuICAgICAgICAgICAge3VybDogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFNsb3RNYWNoaW5lJywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxTbG90TWFjaGluZScsXHJcbiAgICAgICAgbmVlZFdhaXQ6IGZhbHNlLFxyXG4gICAgICAgIHpJbmRleDogVUlaSW5kZXhDZmcuREVGQVVMVCxcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOiAgeiZjuacuumHkeW4geaUtuS4i1xyXG4gICAgICovXHJcbiAgICAnUGFubmVsU2xvdE1hY2hpbmVDb2luUmVjZWl2ZSc6IHtcclxuICAgICAgICBuYW1lOiAnUGFubmVsU2xvdE1hY2hpbmVDb2luUmVjZWl2ZScsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsU2xvdE1hY2hpbmVDb2luUmVjZWl2ZScsIHR5cGU6IGNjLlByZWZhYn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVpOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsU2xvdE1hY2hpbmVDb2luUmVjZWl2ZScsXHJcbiAgICAgICAgbmVlZFdhaXQ6IGZhbHNlLFxyXG4gICAgICAgIHpJbmRleDogVUlaSW5kZXhDZmcuREVGQVVMVCxcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOioree9rlxyXG4gICAgICovXHJcbiAgICAnUGFubmVsU2V0dGluZyc6IHtcclxuICAgICAgICBuYW1lOiAnUGFubmVsU2V0dGluZycsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsU2V0dGluZycsIHR5cGU6IGNjLlByZWZhYn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVpOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsU2V0dGluZycsXHJcbiAgICAgICAgbmVlZFdhaXQ6IHRydWUsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog55m76YyEXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxTaWduSW4nOiB7XHJcbiAgICAgICAgbmFtZTogJ1Bhbm5lbFNpZ25JbicsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsU2lnbkluJywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxTaWduSW4nLFxyXG4gICAgICAgIG5lZWRXYWl0OiB0cnVlLFxyXG4gICAgICAgIHpJbmRleDogVUlaSW5kZXhDZmcuREVGQVVMVCxcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDku7vliqHmiJDlsLFcclxuICAgICAqL1xyXG4gICAgJ1Bhbm5lbFRhc2snOiB7XHJcbiAgICAgICAgbmFtZTogJ1Bhbm5lbFRhc2snLFxyXG4gICAgICAgIHByZWxvYWRSZXM6IFtcclxuICAgICAgICAgICAge3VybDogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFRhc2snLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFRhc2snLFxyXG4gICAgICAgIG5lZWRXYWl0OiBmYWxzZSxcclxuICAgICAgICB6SW5kZXg6IFVJWkluZGV4Q2ZnLkRFRkFVTFQsXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K2m5ZGKXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxXYXJuaW5nJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxXYXJuaW5nJyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxXYXJuaW5nJywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxXYXJuaW5nJyxcclxuICAgICAgICBuZWVkV2FpdDogZmFsc2UsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog6L2J55ukXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxXaGVlbCc6IHtcclxuICAgICAgICBuYW1lOiAnUGFubmVsV2hlZWwnLFxyXG4gICAgICAgIHByZWxvYWRSZXM6IFtcclxuICAgICAgICAgICAge3VybDogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFdoZWVsJywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxXaGVlbCcsXHJcbiAgICAgICAgbmVlZFdhaXQ6IHRydWUsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/ListItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d8a2uK3F9Hl6QjU85nDlj/', 'ListItem');
// scripts/ui/ListItem.ts

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
/******************************************
 * @author kL <klk0@qq.com>
 * @date 2019/6/6
 * @doc 列表Item组件.
 * 说明：
 *      1、此组件须配合List组件使用。（配套的配套的..）
 * @end
 ******************************************/
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple, menu = _a.menu, executionOrder = _a.executionOrder;
var SelectedType;
(function (SelectedType) {
    SelectedType[SelectedType["NONE"] = 0] = "NONE";
    SelectedType[SelectedType["TOGGLE"] = 1] = "TOGGLE";
    SelectedType[SelectedType["SWITCH"] = 2] = "SWITCH";
})(SelectedType || (SelectedType = {}));
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //选择模式
        _this.selectedMode = SelectedType.NONE;
        //被选标志
        _this.selectedFlag = null;
        //被选择的SpriteFrame
        _this.selectedSpriteFrame = null;
        //未被选择的SpriteFrame
        _this._unselectedSpriteFrame = null;
        //自适应尺寸
        _this.adaptiveSize = false;
        //选择
        _this._selected = false;
        //是否已经注册过事件
        _this._eventReg = false;
        return _this;
    }
    Object.defineProperty(ListItem.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (val) {
            this._selected = val;
            if (!this.selectedFlag)
                return;
            switch (this.selectedMode) {
                case SelectedType.TOGGLE:
                    this.selectedFlag.active = val;
                    break;
                case SelectedType.SWITCH:
                    var sp = this.selectedFlag.getComponent(cc.Sprite);
                    if (sp)
                        sp.spriteFrame = val ? this.selectedSpriteFrame : this._unselectedSpriteFrame;
                    break;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItem.prototype, "btnCom", {
        get: function () {
            if (!this._btnCom)
                this._btnCom = this.node.getComponent(cc.Button);
            return this._btnCom;
        },
        enumerable: false,
        configurable: true
    });
    ListItem.prototype.onLoad = function () {
        // //没有按钮组件的话，selectedFlag无效
        // if (!this.btnCom)
        //     this.selectedMode == SelectedType.NONE;
        //有选择模式时，保存相应的东西
        if (this.selectedMode == SelectedType.SWITCH) {
            var com = this.selectedFlag.getComponent(cc.Sprite);
            this._unselectedSpriteFrame = com.spriteFrame;
        }
    };
    ListItem.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
    };
    ListItem.prototype._registerEvent = function () {
        if (!this._eventReg) {
            if (this.btnCom && this.list.selectedMode > 0) {
                this.btnCom.clickEvents.unshift(this.createEvt(this, 'onClickThis'));
            }
            if (this.adaptiveSize) {
                this.node.on(cc.Node.EventType.SIZE_CHANGED, this._onSizeChange, this);
            }
            this._eventReg = true;
        }
    };
    ListItem.prototype._onSizeChange = function () {
        this.list._onItemAdaptive(this.node);
    };
    /**
     * 创建事件
     * @param {cc.Component} component 组件脚本
     * @param {string} handlerName 触发函数名称
     * @param {cc.Node} node 组件所在node（不传的情况下取component.node）
     * @returns cc.Component.EventHandler
     */
    ListItem.prototype.createEvt = function (component, handlerName, node) {
        if (node === void 0) { node = null; }
        if (!component.isValid)
            return; //有些异步加载的，节点以及销毁了。
        component['comName'] = component['comName'] || component.name.match(/\<(.*?)\>/g).pop().replace(/\<|>/g, '');
        var evt = new cc.Component.EventHandler();
        evt.target = node || component.node;
        evt.component = component['comName'];
        evt.handler = handlerName;
        return evt;
    };
    ListItem.prototype.showAni = function (aniType, callFunc, del) {
        var _this = this;
        var acts;
        switch (aniType) {
            case 0: //向上消失
                acts = [
                    cc.scaleTo(.2, .7),
                    cc.moveBy(.3, 0, this.node.height * 2),
                ];
                break;
            case 1: //向右消失
                acts = [
                    cc.scaleTo(.2, .7),
                    cc.moveBy(.3, this.node.width * 2, 0),
                ];
                break;
            case 2: //向下消失
                acts = [
                    cc.scaleTo(.2, .7),
                    cc.moveBy(.3, 0, this.node.height * -2),
                ];
                break;
            case 3: //向左消失
                acts = [
                    cc.scaleTo(.2, .7),
                    cc.moveBy(.3, this.node.width * -2, 0),
                ];
                break;
            default: //默认：缩小消失
                acts = [
                    cc.scaleTo(.3, .1),
                ];
                break;
        }
        if (callFunc || del) {
            acts.push(cc.callFunc(function () {
                if (del) {
                    _this.list._delSingleItem(_this.node);
                    for (var n = _this.list.displayData.length - 1; n >= 0; n--) {
                        if (_this.list.displayData[n].id == _this.listId) {
                            _this.list.displayData.splice(n, 1);
                            break;
                        }
                    }
                }
                callFunc();
            }));
        }
        this.node.runAction(cc.sequence(acts));
    };
    ListItem.prototype.onClickThis = function () {
        this.list.selectedId = this.listId;
    };
    __decorate([
        property({
            type: cc.Enum(SelectedType),
            tooltip: CC_DEV && '选择模式'
        })
    ], ListItem.prototype, "selectedMode", void 0);
    __decorate([
        property({
            type: cc.Node, tooltip: CC_DEV && '被选标志',
            visible: function () { return this.selectedMode > SelectedType.NONE; }
        })
    ], ListItem.prototype, "selectedFlag", void 0);
    __decorate([
        property({
            type: cc.SpriteFrame, tooltip: CC_DEV && '被选择的SpriteFrame',
            visible: function () { return this.selectedMode == SelectedType.SWITCH; }
        })
    ], ListItem.prototype, "selectedSpriteFrame", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && '自适应尺寸（宽或高）',
        })
    ], ListItem.prototype, "adaptiveSize", void 0);
    ListItem = __decorate([
        ccclass,
        disallowMultiple(),
        menu('自定义组件/List Item'),
        executionOrder(-5001) //先于List
    ], ListItem);
    return ListItem;
}(cc.Component));
exports.default = ListItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlcXExpc3RJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OzRDQU80QztBQUN0QyxJQUFBLEtBQWdFLEVBQUUsQ0FBQyxVQUFVLEVBQTNFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLElBQUksVUFBQSxFQUFFLGNBQWMsb0JBQWtCLENBQUM7QUFJcEYsSUFBSyxZQUlKO0FBSkQsV0FBSyxZQUFZO0lBQ2IsK0NBQVEsQ0FBQTtJQUNSLG1EQUFVLENBQUE7SUFDVixtREFBVSxDQUFBO0FBQ2QsQ0FBQyxFQUpJLFlBQVksS0FBWixZQUFZLFFBSWhCO0FBTUQ7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFrS0M7UUFqS0csTUFBTTtRQUtOLGtCQUFZLEdBQWlCLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFDL0MsTUFBTTtRQUtOLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGlCQUFpQjtRQUtqQix5QkFBbUIsR0FBbUIsSUFBSSxDQUFDO1FBQzNDLGtCQUFrQjtRQUNsQiw0QkFBc0IsR0FBbUIsSUFBSSxDQUFDO1FBQzlDLE9BQU87UUFJUCxrQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixJQUFJO1FBQ0osZUFBUyxHQUFZLEtBQUssQ0FBQztRQTRCM0IsV0FBVztRQUNILGVBQVMsR0FBRyxLQUFLLENBQUM7O0lBMEc5QixDQUFDO0lBdElHLHNCQUFJLDhCQUFRO2FBZVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQWpCRCxVQUFhLEdBQVk7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO2dCQUNsQixPQUFPO1lBQ1gsUUFBUSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN2QixLQUFLLFlB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QUFDLE1BQU0sQ0FBQztJQUN2QyxDQUFDO0lBMUpEO1FBSkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzNCLE9BQU8sRUFBRSxNQUFNLElBQUksTUFBTTtTQUM1QixDQUFDO2tEQUM2QztJQU0vQztRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksTUFBTTtZQUN4QyxPQUFPLGdCQUFLLE9BQU8sSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFBLENBQUMsQ0FBQztTQUM3RCxDQUFDO2tEQUMyQjtJQU03QjtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLElBQUksaUJBQWlCO1lBQzFELE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUEsQ0FBQyxDQUFDO1NBQ2hFLENBQUM7eURBQ3lDO0lBTzNDO1FBSEMsUUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLE1BQU0sSUFBSSxZQUFZO1NBQ2xDLENBQUM7a0RBQzRCO0lBekJiLFFBQVE7UUFKNUIsT0FBTztRQUNQLGdCQUFnQixFQUFFO1FBQ2xCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUN2QixjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBVSxRQUFRO09BQ25CLFFBQVEsQ0FrSzVCO0lBQUQsZUFBQztDQWxLRCxBQWtLQyxDQWxLcUMsRUFBRSxDQUFDLFNBQVMsR0FrS2pEO2tCQWxLb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQGF1dGhvciBrTCA8a2xrMEBxcS5jb20+XHJcbiAqIEBkYXRlIDIwMTkvNi82XHJcbiAqIEBkb2Mg5YiX6KGoSXRlbee7hOS7ti5cclxuICog6K+05piO77yaXHJcbiAqICAgICAgMeOAgeatpOe7hOS7tumhu+mFjeWQiExpc3Tnu4Tku7bkvb/nlKjjgILvvIjphY3lpZfnmoTphY3lpZfnmoQuLu+8iVxyXG4gKiBAZW5kXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGRpc2FsbG93TXVsdGlwbGUsIG1lbnUsIGV4ZWN1dGlvbk9yZGVyIH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuaW1wb3J0IExpc3QgZnJvbSAnLi9MaXN0JztcclxuXHJcbmVudW0gU2VsZWN0ZWRUeXBlIHtcclxuICAgIE5PTkUgPSAwLFxyXG4gICAgVE9HR0xFID0gMSxcclxuICAgIFNXSVRDSCA9IDIsXHJcbn1cclxuXHJcbkBjY2NsYXNzXHJcbkBkaXNhbGxvd011bHRpcGxlKClcclxuQG1lbnUoJ+iHquWumuS5iee7hOS7ti9MaXN0IEl0ZW0nKVxyXG5AZXhlY3V0aW9uT3JkZXIoLTUwMDEpICAgICAgICAgIC8v5YWI5LqOTGlzdFxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0SXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICAvL+mAieaLqeaooeW8j1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5FbnVtKFNlbGVjdGVkVHlwZSksXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfpgInmi6nmqKHlvI8nXHJcbiAgICB9KVxyXG4gICAgc2VsZWN0ZWRNb2RlOiBTZWxlY3RlZFR5cGUgPSBTZWxlY3RlZFR5cGUuTk9ORTtcclxuICAgIC8v6KKr6YCJ5qCH5b+XXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLk5vZGUsIHRvb2x0aXA6IENDX0RFViAmJiAn6KKr6YCJ5qCH5b+XJyxcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5zZWxlY3RlZE1vZGUgPiBTZWxlY3RlZFR5cGUuTk9ORSB9XHJcbiAgICB9KVxyXG4gICAgc2VsZWN0ZWRGbGFnOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8v6KKr6YCJ5oup55qEU3ByaXRlRnJhbWVcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHRvb2x0aXA6IENDX0RFViAmJiAn6KKr6YCJ5oup55qEU3ByaXRlRnJhbWUnLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuU1dJVENIIH1cclxuICAgIH0pXHJcbiAgICBzZWxlY3RlZFNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICAvL+acquiiq+mAieaLqeeahFNwcml0ZUZyYW1lXHJcbiAgICBfdW5zZWxlY3RlZFNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICAvL+iHqumAguW6lOWwuuWvuFxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+iHqumAguW6lOWwuuWvuO+8iOWuveaIlumrmO+8iScsXHJcbiAgICB9KVxyXG4gICAgYWRhcHRpdmVTaXplOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvL+mAieaLqVxyXG4gICAgX3NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzZXQgc2VsZWN0ZWQodmFsOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB2YWw7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkRmxhZylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RlZE1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuVE9HR0xFOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZsYWcuYWN0aXZlID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2VsZWN0ZWRUeXBlLlNXSVRDSDpcclxuICAgICAgICAgICAgICAgIGxldCBzcDogY2MuU3ByaXRlID0gdGhpcy5zZWxlY3RlZEZsYWcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3ApXHJcbiAgICAgICAgICAgICAgICAgICAgc3Auc3ByaXRlRnJhbWUgPSB2YWwgPyB0aGlzLnNlbGVjdGVkU3ByaXRlRnJhbWUgOiB0aGlzLl91bnNlbGVjdGVkU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgc2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gICAgfVxyXG4gICAgLy/mjInpkq7nu4Tku7ZcclxuICAgIHByaXZhdGUgX2J0bkNvbTogYW55O1xyXG4gICAgZ2V0IGJ0bkNvbSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2J0bkNvbSlcclxuICAgICAgICAgICAgdGhpcy5fYnRuQ29tID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9idG5Db207XHJcbiAgICB9XHJcbiAgICAvL+S+nei1lueahExpc3Tnu4Tku7ZcclxuICAgIHB1YmxpYyBsaXN0OiBMaXN0O1xyXG4gICAgLy/mmK/lkKblt7Lnu4/ms6jlhozov4fkuovku7ZcclxuICAgIHByaXZhdGUgX2V2ZW50UmVnID0gZmFsc2U7XHJcbiAgICAvL+W6j+WIl2lkXHJcbiAgICBwdWJsaWMgbGlzdElkOiBudW1iZXI7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIC8v5rKh5pyJ5oyJ6ZKu57uE5Lu255qE6K+d77yMc2VsZWN0ZWRGbGFn5peg5pWIXHJcbiAgICAgICAgLy8gaWYgKCF0aGlzLmJ0bkNvbSlcclxuICAgICAgICAvLyAgICAgdGhpcy5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLk5PTkU7XHJcbiAgICAgICAgLy/mnInpgInmi6nmqKHlvI/ml7bvvIzkv53lrZjnm7jlupTnmoTkuJzopb9cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLlNXSVRDSCkge1xyXG4gICAgICAgICAgICBsZXQgY29tOiBjYy5TcHJpdGUgPSB0aGlzLnNlbGVjdGVkRmxhZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgdGhpcy5fdW5zZWxlY3RlZFNwcml0ZUZyYW1lID0gY29tLnNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHRoaXMuX29uU2l6ZUNoYW5nZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlZ2lzdGVyRXZlbnQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9ldmVudFJlZykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5idG5Db20gJiYgdGhpcy5saXN0LnNlbGVjdGVkTW9kZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuQ29tLmNsaWNrRXZlbnRzLnVuc2hpZnQodGhpcy5jcmVhdGVFdnQodGhpcywgJ29uQ2xpY2tUaGlzJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFkYXB0aXZlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy5fb25TaXplQ2hhbmdlLCB0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9ldmVudFJlZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9vblNpemVDaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Ll9vbkl0ZW1BZGFwdGl2ZSh0aGlzLm5vZGUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rkuovku7ZcclxuICAgICAqIEBwYXJhbSB7Y2MuQ29tcG9uZW50fSBjb21wb25lbnQg57uE5Lu26ISa5pysXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaGFuZGxlck5hbWUg6Kem5Y+R5Ye95pWw5ZCN56ewXHJcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IG5vZGUg57uE5Lu25omA5Zyobm9kZe+8iOS4jeS8oOeahOaDheWGteS4i+WPlmNvbXBvbmVudC5ub2Rl77yJXHJcbiAgICAgKiBAcmV0dXJucyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUV2dChjb21wb25lbnQ6IGNjLkNvbXBvbmVudCwgaGFuZGxlck5hbWU6IHN0cmluZywgbm9kZTogY2MuTm9kZSA9IG51bGwpIHtcclxuICAgICAgICBpZiAoIWNvbXBvbmVudC5pc1ZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm47Ly/mnInkupvlvILmraXliqDovb3nmoTvvIzoioLngrnku6Xlj4rplIDmr4HkuobjgIJcclxuICAgICAgICBjb21wb25lbnRbJ2NvbU5hbWUnXSA9IGNvbXBvbmVudFsnY29tTmFtZSddIHx8IGNvbXBvbmVudC5uYW1lLm1hdGNoKC9cXDwoLio/KVxcPi9nKS5wb3AoKS5yZXBsYWNlKC9cXDx8Pi9nLCAnJyk7XHJcbiAgICAgICAgbGV0IGV2dCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcbiAgICAgICAgZXZ0LnRhcmdldCA9IG5vZGUgfHwgY29tcG9uZW50Lm5vZGU7XHJcbiAgICAgICAgZXZ0LmNvbXBvbmVudCA9IGNvbXBvbmVudFsnY29tTmFtZSddO1xyXG4gICAgICAgIGV2dC5oYW5kbGVyID0gaGFuZGxlck5hbWU7XHJcbiAgICAgICAgcmV0dXJuIGV2dDtcclxuICAgIH1cclxuXHJcbiAgICBzaG93QW5pKGFuaVR5cGU6IG51bWJlciwgY2FsbEZ1bmM6IEZ1bmN0aW9uLCBkZWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBsZXQgYWN0czogYW55W107XHJcbiAgICAgICAgc3dpdGNoIChhbmlUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogLy/lkJHkuIrmtojlpLFcclxuICAgICAgICAgICAgICAgIGFjdHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyguMiwgLjcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVCeSguMywgMCwgdGhpcy5ub2RlLmhlaWdodCAqIDIpLFxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6IC8v5ZCR5Y+z5raI5aSxXHJcbiAgICAgICAgICAgICAgICBhY3RzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjIsIC43KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlQnkoLjMsIHRoaXMubm9kZS53aWR0aCAqIDIsIDApLFxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6IC8v5ZCR5LiL5raI5aSxXHJcbiAgICAgICAgICAgICAgICBhY3RzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjIsIC43KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5tb3ZlQnkoLjMsIDAsIHRoaXMubm9kZS5oZWlnaHQgKiAtMiksXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzogLy/lkJHlt6bmtojlpLFcclxuICAgICAgICAgICAgICAgIGFjdHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyguMiwgLjcpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLm1vdmVCeSguMywgdGhpcy5ub2RlLndpZHRoICogLTIsIDApLFxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAvL+m7mOiupO+8mue8qeWwj+a2iOWksVxyXG4gICAgICAgICAgICAgICAgYWN0cyA9IFtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKC4zLCAuMSksXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYWxsRnVuYyB8fCBkZWwpIHtcclxuICAgICAgICAgICAgYWN0cy5wdXNoKGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3QuX2RlbFNpbmdsZUl0ZW0odGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSB0aGlzLmxpc3QuZGlzcGxheURhdGEubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubGlzdC5kaXNwbGF5RGF0YVtuXS5pZCA9PSB0aGlzLmxpc3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0LmRpc3BsYXlEYXRhLnNwbGljZShuLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FsbEZ1bmMoKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdHMpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrVGhpcygpIHtcclxuICAgICAgICB0aGlzLmxpc3Quc2VsZWN0ZWRJZCA9IHRoaXMubGlzdElkO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/app/App.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b5feqC8mpNtKLmPnOxYS4c', 'App');
// scripts/app/App.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var DialogMgr_1 = require("../mgrs/DialogMgr");
var SoundMgr_1 = require("../mgrs/SoundMgr");
var UICfgMgr_1 = require("../mgrs/UICfgMgr");
var UIMgr_1 = require("../mgrs/UIMgr");
var App = /** @class */ (function () {
    function App() {
    }
    Object.defineProperty(App, "uiMgr", {
        get: function () {
            return UIMgr_1.UIMgr.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(App, "uiCfgMgr", {
        get: function () {
            return UICfgMgr_1.UICfgMgr.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(App, "soundMgr", {
        get: function () {
            return SoundMgr_1.SoundMgr.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(App, "dialogMgr", {
        get: function () {
            return DialogMgr_1.DialogMgr.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    return App;
}());
exports.App = App;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYXBwXFxBcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLDZDQUE0QztBQUM1Qyw2Q0FBNEM7QUFDNUMsdUNBQXNDO0FBR3RDO0lBQUE7SUFrQkEsQ0FBQztJQWhCRyxzQkFBa0IsWUFBSzthQUF2QjtZQUNJLE9BQU8sYUFBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQWtCLGVBQVE7YUFBMUI7WUFDSSxPQUFPLG1CQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFHRCxzQkFBa0IsZUFBUTthQUExQjtZQUNJLE9BQU8sbUJBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFrQixnQkFBUzthQUEzQjtZQUNJLE9BQU8scUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUNMLFVBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLGtCQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlhbG9nTWdyIH0gZnJvbSBcIi4uL21ncnMvRGlhbG9nTWdyXCI7XHJcbmltcG9ydCB7IFNvdW5kTWdyIH0gZnJvbSBcIi4uL21ncnMvU291bmRNZ3JcIjtcclxuaW1wb3J0IHsgVUlDZmdNZ3IgfSBmcm9tIFwiLi4vbWdycy9VSUNmZ01nclwiO1xyXG5pbXBvcnQgeyBVSU1nciB9IGZyb20gXCIuLi9tZ3JzL1VJTWdyXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdWlNZ3IoKTogVUlNZ3Ige1xyXG4gICAgICAgIHJldHVybiBVSU1nci5nZXRJbnN0YW5jZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHVpQ2ZnTWdyKCk6IFVJQ2ZnTWdyIHtcclxuICAgICAgICByZXR1cm4gVUlDZmdNZ3IuZ2V0SW5zdGFuY2UoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc291bmRNZ3IoKTogU291bmRNZ3Ige1xyXG4gICAgICAgIHJldHVybiBTb3VuZE1nci5nZXRJbnN0YW5jZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGRpYWxvZ01ncigpOiBEaWFsb2dNZ3Ige1xyXG4gICAgICAgIHJldHVybiBEaWFsb2dNZ3IuZ2V0SW5zdGFuY2UoKTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/misc/InterfaceDef.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '656e9QQTDhOpabRfcPKxPLm', 'InterfaceDef');
// scripts/misc/InterfaceDef.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWlzY1xcSW50ZXJmYWNlRGVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVTY29yZSB7XHJcbiAgICBzY29yZTogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlVGFyZ2V0QmFsbE51bSB7XHJcbiAgICBiYWxsTnVtOiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXJ2ZXJDb25maWcge1xyXG4gICAgdXJsOiBzdHJpbmdcclxuICAgIGRhdGE/OiBhbnlcclxuICAgIG1ldGhvZD86IHN0cmluZ1xyXG4gICAgdGltZW91dD86IG51bWJlclxyXG4gICAgaGVhZGVyPzogb2JqZWN0XHJcbiAgICBvblN1Y2Nlc3M6IEZ1bmN0aW9uXHJcbiAgICBvbkZhaWw/OiBGdW5jdGlvblxyXG4gICAgb25Db21wbGV0ZT86IEZ1bmN0aW9uXHJcbn1cclxuXHJcbi8vIOWtmOaho+Wwj+eQg+aVsOaNrlxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsU3RvcmFnZUJhbGwge1xyXG4gICAgcG9zaXRpb246IGNjLlZlYzMsIC8vIOS9jee9rlxyXG4gICAgbnVtOiBudW1iZXIsIC8vIOWkp+Wwj1xyXG4gICAgYW5nbGU6IG51bWJlciAvLyDop5LluqZcclxuICAgIGlzQ29sb3JCYWxsOiBib29sZWFuXHJcbn1cclxuXHJcblxyXG4vLyDmiZPngrnmlbDmja5cclxuLyoqXHJcbiAqIOe6ouWMhVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBUcmFja01haW5Qcm9wcyB7XHJcbiAgICBhY3Rpdml0eV9zdGF0ZTogc3RyaW5nXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlhbPljaFcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tHYW1lTGV2ZWxQcm9wcyB7XHJcbiAgICBnYW1lX2xldmVsOiBudW1iZXIsXHJcbiAgICBnYW1lX3N0YXRlOiBzdHJpbmcsXHJcbiAgICBnYW1lX2R1cmF0aW9uOiBudW1iZXIsXHJcbiAgICBmcnVpdF9pZDogbnVtYmVyLFxyXG4gICAgZnJ1aXRfY291bnQ6IG51bWJlclxyXG59XHJcblxyXG4vKipcclxuICog57qi5YyFXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrUmVkUGFja2V0UHJvcHMge1xyXG4gICAgcmVkYmFnX3N0YXRlOiBzdHJpbmcsXHJcbiAgICByZWRiYWdfbmFtZTogc3RyaW5nLFxyXG4gICAgY2xpY2tfYnV0dG9uPzogc3RyaW5nXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmioDog71cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tTa2lsbFByb3BzIHtcclxuICAgIHNraWxsX25hbWU6IHN0cmluZyxcclxuICAgIHNraWxsX3N0YXRlOiBzdHJpbmdcclxufVxyXG5cclxuLyoqXHJcbiAqIOaPkOeOsFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBUcmFja0Nhc2hPdXRQcm9wcyB7XHJcbiAgICBhY3Rpdml0eV9zdGF0ZTogc3RyaW5nLFxyXG4gICAgYWN0aXZpdHlfc3RhdGVfdmFsdWU6IG51bWJlcixcclxuICAgIHdpdGhkcmF3X251bT86IG51bWJlcixcclxuICAgIHdpdGhkcmF3X3N0YXRlPzogc3RyaW5nLFxyXG4gICAgd2l0aGRyYXdfc3RhdGVfbnVtPzogbnVtYmVyXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmr4/ml6Xmj5DnjrBcclxuICovXHJcbiBleHBvcnQgaW50ZXJmYWNlIFRyYWNrRGFpbHlDYXNoT3V0UHJvcHMge1xyXG4gICAgZGFpbHl3aXRoZHJhd19zdGF0ZTogc3RyaW5nLFxyXG4gICAgZGFpbHl3aXRoZHJhd19uYW1lOiBzdHJpbmdcclxufVxyXG5cclxuLyoqXHJcbiAqIOW8ueeql1xyXG4gKi9cclxuIGV4cG9ydCBpbnRlcmZhY2UgVHJhY2tQb3B1cFByb3BzIHtcclxuICAgIHBvcHNob3dfc3RhdGU6IHN0cmluZyxcclxuICAgIHBvcHNob3dfdGl0bGU6IHN0cmluZyxcclxuICAgIHBvcF9idXR0b25fZWxlbWVudD86IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICog5byV5a+8XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrR3VpZGVQcm9wcyB7XHJcbiAgICBndWlkZV9zdGF0ZTogc3RyaW5nXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlvJXlr7xcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tXZWFrR3VpZGVQcm9wcyB7XHJcbiAgICB3ZWFrX2d1aWRlX3N0YXRlOiBzdHJpbmdcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiDkuLvnlYzpnaLlhaXlj6NcclxuICovXHJcbiBleHBvcnQgaW50ZXJmYWNlIFRyYWNrRW50ZXJQcm9wcyB7XHJcbiAgICBlbnRlcl9idXR0b25fZWxlbWVudDogc3RyaW5nLFxyXG4gICAgZXZlbnRfc3RhdGU6IHN0cmluZ1xyXG59XHJcblxyXG4vKipcclxuICog5Lu75Yqh5oiQ5bCxXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRyYWNrVGFza0FjaGlldmVtZW50UHJvcHMge1xyXG4gICAgdGFza19hY2hpZXZlbWVudF9lbGVtZW50OiBzdHJpbmcsXHJcbiAgICB0YXNrX25hbWU/OiBzdHJpbmcsXHJcbiAgICBhY2hpZXZlbWVudF9uYW1lPzogc3RyaW5nLFxyXG4gICAgd2l0aGRyYXdfc3RhdGU/OiBzdHJpbmdcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiDlub/lkYrkvZzlvIrorrDlvZVcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW50aUNoZWF0RGF0YSB7XHJcbiAgICBjbGlja0FkOiBib29sZWFuLFxyXG4gICAgY2xvc2VBZDogYm9vbGVhbixcclxuICAgIHJld2FyZFN1Y2Nlc3M6IGJvb2xlYW5cclxufVxyXG5cclxuLyoqXHJcbiAqIOW5v+WRiuS9nOW8ilxyXG4gKiAxLuW+ruS/oeeZu+mZhlxyXG4gKiAyLuWtmOmSsee9kOmihuWPllxyXG4gKiAzLueCueWHu+aJk+W8gOaPkOeOsOeVjOmdolxyXG4gKiA0Lue6ouWMhemihuWPllxyXG4gKiA1Lue6ouWMheiOt+W+l+eVjOmdouWFs+mXrVxyXG4gKiA2LueCueWHu+e6ouWMhVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBUcmFja0FudGlQcm9wcyB7XHJcbiAgICBhbnRpX2JydXNoaW5nX25hbWU6IHN0cmluZyxcclxuICAgIGFudGlfYnJ1c2hpbmdfc3RhdGU6IG51bWJlclxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/pannels/PannelAlert1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9dc4bA77TBAoLJW5iR+H/yp', 'PannelAlert1');
// scripts/pannels/PannelAlert1.ts

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
var UICfg_1 = require("../cfg/UICfg");
var DialogBase_1 = require("../ui/DialogBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PannelAlert1 = /** @class */ (function (_super) {
    __extends(PannelAlert1, _super);
    function PannelAlert1() {
        var _this = _super.call(this) || this;
        _this._uiName = UICfg_1.UICfg.PannelAlert1.name;
        return _this;
    }
    PannelAlert1 = __decorate([
        ccclass
    ], PannelAlert1);
    return PannelAlert1;
}(DialogBase_1.default));
exports.default = PannelAlert1;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGFubmVsc1xcUGFubmVsQWxlcnQxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFxQztBQUNyQywrQ0FBMEM7QUFHcEMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMEMsZ0NBQVU7SUFFaEQ7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFERyxLQUFJLENBQUMsT0FBTyxHQUFHLGFBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDOztJQUMzQyxDQUFDO0lBTGdCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FNaEM7SUFBRCxtQkFBQztDQU5ELEFBTUMsQ0FOeUMsb0JBQVUsR0FNbkQ7a0JBTm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSUNmZyB9IGZyb20gXCIuLi9jZmcvVUlDZmdcIjtcclxuaW1wb3J0IERpYWxvZ0Jhc2UgZnJvbSBcIi4uL3VpL0RpYWxvZ0Jhc2VcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbm5lbEFsZXJ0MSBleHRlbmRzIERpYWxvZ0Jhc2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fdWlOYW1lID0gVUlDZmcuUGFubmVsQWxlcnQxLm5hbWU7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/saveManager/SaveManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd815ap9cTtIl6o8N4ilXa1m', 'SaveManager');
// scripts/saveManager/SaveManager.ts

"use strict";
/**
 * @description 本地数据存储，为了后面可能需要对数据进入加密保存等，把cocos的封闭一层
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveManager = void 0;
var object_utils_1 = require("../utils/object-utils");
var Save_1 = require("./Save");
var SaveManager = /** @class */ (function () {
    function SaveManager() {
    }
    SaveManager.Instance = function () { return this._instance || (this._instance = new SaveManager()); };
    SaveManager.prototype.init = function () {
        //每日刷新
        var date = new Date();
        var text = parseInt((date.getMonth() + 1) + "" + date.getDay() + "");
        if (this.getItem(Save_1.Save.todayInfo) != text) {
            // for (let m in Save) {
            //     let item = Save[m]
            //     if (item && item.isDayUpdate) {                    
            //         this.setItem(item, item.default);
            //     }
            // }    
            if (!CC_EDITOR) {
                cc.log("每次刷新···································", text);
                // this.setItem(Save.isPopSignView, 0);
                // this.setItem(Save.taskOkArray, []);
                // this.setItem(Save.todayInfo, text);
                // this.setItem(Save.isShowNewCashOutTip, false);
            }
        }
    };
    SaveManager.prototype.getItem = function (item) {
        var value = cc.sys.localStorage.getItem(item.key);
        if (value) {
            //解析
            try {
                var data = value;
                var result = JSON.parse(data);
                if (result.type) {
                    return result.value;
                }
                else {
                    return value;
                }
            }
            catch (error) {
                return value;
            }
        }
        else {
            return object_utils_1.objectUtils.cloneObject(item.default);
        }
    };
    SaveManager.prototype.setItem = function (item, value) {
        var type = typeof value;
        if (type == "number" || type == "string" || type == "boolean" || type == "object") {
            var saveObj = { type: type, value: value };
            //加密
            try {
                var data = saveObj;
                cc.sys.localStorage.setItem(item.key, JSON.stringify(data));
            }
            catch (error) {
                if (CC_DEBUG)
                    cc.error(error);
            }
        }
        else {
            if (CC_DEBUG)
                cc.error("\u5B58\u50A8\u6570\u636E\u7C7B\u578B\u4E0D\u652F\u6301 \u5F53\u524D\u7684\u5B58\u50A8\u7C7B\u578B: " + type);
        }
    };
    SaveManager.prototype.removeItem = function (item) {
        cc.sys.localStorage.removeItem(item.key);
    };
    SaveManager.prototype.removeAllItem = function () {
        cc.sys.localStorage.clear();
    };
    SaveManager._instance = null;
    return SaveManager;
}());
exports.SaveManager = SaveManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2F2ZU1hbmFnZXJcXFNhdmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7R0FFRzs7O0FBR0gsc0RBQW9EO0FBQ3BELCtCQUE2QztBQVE3QztJQUFBO0lBdUVBLENBQUM7SUFyRWlCLG9CQUFRLEdBQXRCLGNBQTJCLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVwRiwwQkFBSSxHQUFYO1FBQ0ksTUFBTTtRQUNOLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7UUFDckIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDcEUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDdEMsd0JBQXdCO1lBQ3hCLHlCQUF5QjtZQUN6QiwwREFBMEQ7WUFDMUQsNENBQTRDO1lBQzVDLFFBQVE7WUFDUixRQUFRO1lBQ1IsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDWixFQUFFLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN4RCx1Q0FBdUM7Z0JBQ3ZDLHNDQUFzQztnQkFDdEMsc0NBQXNDO2dCQUN0QyxpREFBaUQ7YUFDcEQ7U0FDSjtJQUNMLENBQUM7SUFFTSw2QkFBTyxHQUFkLFVBQWUsSUFBbUI7UUFDOUIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUk7WUFDSixJQUFJO2dCQUNBLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDakIsSUFBSSxNQUFNLEdBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNDLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtvQkFDYixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7aUJBQ3ZCO3FCQUFNO29CQUNILE9BQU8sS0FBSyxDQUFDO2lCQUNoQjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxLQUFLLENBQUM7YUFDaEI7U0FDSjthQUNJO1lBQ0QsT0FBTywwQkFBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEQ7SUFDTCxDQUFDO0lBRU0sNkJBQU8sR0FBZCxVQUFlLElBQW1CLEVBQUUsS0FBeUM7UUFFekUsSUFBSSxJQUFJLEdBQUcsT0FBTyxLQUFLLENBQUM7UUFDeEIsSUFBSSxJQUFJLElBQUksUUFBUSxJQUFJLElBQUksSUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksUUFBUSxFQUFFO1lBQy9FLElBQUksT0FBTyxHQUFnQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQ3hELElBQUk7WUFDSixJQUFJO2dCQUNBLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQztnQkFDbkIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQy9EO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osSUFBSSxRQUFRO29CQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakM7U0FDSjthQUFNO1lBQ0gsSUFBSSxRQUFRO2dCQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0dBQXNCLElBQU0sQ0FBQyxDQUFDO1NBQ3hEO0lBQ0wsQ0FBQztJQUVNLGdDQUFVLEdBQWpCLFVBQWtCLElBQW1CO1FBQ2pDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLG1DQUFhLEdBQXBCO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDL0IsQ0FBQztJQXBFYyxxQkFBUyxHQUFnQixJQUFJLENBQUM7SUFzRWpELGtCQUFDO0NBdkVELEFBdUVDLElBQUE7QUF2RVksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmnKzlnLDmlbDmja7lrZjlgqjvvIzkuLrkuoblkI7pnaLlj6/og73pnIDopoHlr7nmlbDmja7ov5vlhaXliqDlr4bkv53lrZjnrYnvvIzmiopjb2Nvc+eahOWwgemXreS4gOWxglxyXG4gKi9cclxuXHJcblxyXG5pbXBvcnQgeyBvYmplY3RVdGlscyB9IGZyb20gXCIuLi91dGlscy9vYmplY3QtdXRpbHNcIjtcclxuaW1wb3J0IHsgU2F2ZSwgU2F2ZUl0ZW1Db25pZyB9IGZyb20gXCIuL1NhdmVcIjtcclxuXHJcbnR5cGUgU3RvcmFnZVZhdWxlVHlwZSA9IFwibnVtYmVyXCIgfCBcInN0cmluZ1wiIHwgXCJib29sZWFuXCIgfCBcIm9iamVjdFwiO1xyXG5pbnRlcmZhY2UgU3RvcmFnZURhdGEge1xyXG4gICAgdHlwZTogU3RvcmFnZVZhdWxlVHlwZSxcclxuICAgIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgb2JqZWN0O1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgU2F2ZU1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBTYXZlTWFuYWdlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlKCkgeyByZXR1cm4gdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IFNhdmVNYW5hZ2VyKCkpOyB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgLy/mr4/ml6XliLfmlrBcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgICBsZXQgdGV4dCA9IHBhcnNlSW50KChkYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiXCIgKyBkYXRlLmdldERheSgpICsgXCJcIilcclxuICAgICAgICBpZiAodGhpcy5nZXRJdGVtKFNhdmUudG9kYXlJbmZvKSAhPSB0ZXh0KSB7XHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IG0gaW4gU2F2ZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IGl0ZW0gPSBTYXZlW21dXHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoaXRlbSAmJiBpdGVtLmlzRGF5VXBkYXRlKSB7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNldEl0ZW0oaXRlbSwgaXRlbS5kZWZhdWx0KTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSAgICBcclxuICAgICAgICAgICAgaWYgKCFDQ19FRElUT1IpIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuavj+asoeWIt+aWsMK3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrdcIiwgdGV4dCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNldEl0ZW0oU2F2ZS5pc1BvcFNpZ25WaWV3LCAwKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0SXRlbShTYXZlLnRhc2tPa0FycmF5LCBbXSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNldEl0ZW0oU2F2ZS50b2RheUluZm8sIHRleHQpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRJdGVtKFNhdmUuaXNTaG93TmV3Q2FzaE91dFRpcCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtKGl0ZW06IFNhdmVJdGVtQ29uaWcpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oaXRlbS5rZXkpO1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAvL+ino+aekFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQ6IFN0b3JhZ2VEYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdFV0aWxzLmNsb25lT2JqZWN0KGl0ZW0uZGVmYXVsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJdGVtKGl0ZW06IFNhdmVJdGVtQ29uaWcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgb2JqZWN0KSB7XHJcblxyXG4gICAgICAgIGxldCB0eXBlID0gdHlwZW9mIHZhbHVlO1xyXG4gICAgICAgIGlmICh0eXBlID09IFwibnVtYmVyXCIgfHwgdHlwZSA9PSBcInN0cmluZ1wiIHx8IHR5cGUgPT0gXCJib29sZWFuXCIgfHwgdHlwZSA9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGxldCBzYXZlT2JqOiBTdG9yYWdlRGF0YSA9IHsgdHlwZTogdHlwZSwgdmFsdWU6IHZhbHVlIH07XHJcbiAgICAgICAgICAgIC8v5Yqg5a+GXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHNhdmVPYmo7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbS5rZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChDQ19ERUJVRykgY2MuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKENDX0RFQlVHKSBjYy5lcnJvcihg5a2Y5YKo5pWw5o2u57G75Z6L5LiN5pSv5oyBIOW9k+WJjeeahOWtmOWCqOexu+WeizogJHt0eXBlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShpdGVtOiBTYXZlSXRlbUNvbmlnKSB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGl0ZW0ua2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlQWxsSXRlbSgpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgIH1cclxuXHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/platform/HttpUrl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0f91136RdHpIFmxN4Atcmq', 'HttpUrl');
// scripts/platform/HttpUrl.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpUrl = void 0;
var HttpUrl = /** @class */ (function () {
    function HttpUrl() {
    }
    /**测试 */
    HttpUrl.test = {
        url: '/game/composite/ad-award',
    };
    HttpUrl.test2 = {
        url: "/game/composite/turntable-award"
    };
    return HttpUrl;
}());
exports.HttpUrl = HttpUrl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxhdGZvcm1cXEh0dHBVcmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7SUFBQTtJQVlBLENBQUM7SUFWRyxRQUFRO0lBQ0QsWUFBSSxHQUFrQjtRQUN6QixHQUFHLEVBQUUsMEJBQTBCO0tBQ2xDLENBQUE7SUFHTSxhQUFLLEdBQWtCO1FBQzFCLEdBQUcsRUFBRSxpQ0FBaUM7S0FDekMsQ0FBQTtJQUVMLGNBQUM7Q0FaRCxBQVlDLElBQUE7QUFaWSwwQkFBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgSHR0cFVybENvbmZpZyB7XHJcbiAgICB1cmw6IHN0cmluZ1xyXG4gICAgcmVxdWVzdERhdGE/XHJcbn1cclxuZXhwb3J0IGNsYXNzIEh0dHBVcmwge1xyXG5cclxuICAgIC8qKua1i+ivlSAqL1xyXG4gICAgc3RhdGljIHRlc3Q6IEh0dHBVcmxDb25maWcgPSB7XHJcbiAgICAgICAgdXJsOiAnL2dhbWUvY29tcG9zaXRlL2FkLWF3YXJkJyxcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhdGljIHRlc3QyOiBIdHRwVXJsQ29uZmlnID0ge1xyXG4gICAgICAgIHVybDogYC9nYW1lL2NvbXBvc2l0ZS90dXJudGFibGUtYXdhcmRgXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/math-utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '155db31YTdG5qvCZVUd3TIn', 'math-utils');
// scripts/utils/math-utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathUtils = void 0;
/**
 * 数学工具类
 */
exports.mathUtils = {
    /**
        * node转世界坐标
        * @param pos
        * @param node
        */
    nodeToWorld: function (pos, node) {
        return node.convertToWorldSpaceAR(pos);
    },
    /**
     * 世界坐标转node
     * @param worldPos
     * @param node
     */
    worldToNode: function (worldPos, node) {
        return node.convertToNodeSpaceAR(worldPos);
    },
    /**
    * 节点坐标转换
    * @param node 欲要转换的节点
    * @param newParent 新父节点
    */
    convertToParent: function (node, newParent, offset) {
        var worldPos = node.convertToWorldSpaceAR(offset || cc.v2(0, 0));
        return newParent.convertToNodeSpaceAR(worldPos);
    },
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdXRpbHNcXG1hdGgtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDVSxRQUFBLFNBQVMsR0FBRztJQUNyQjs7OztVQUlNO0lBQ04sV0FBVyxFQUFYLFVBQVksR0FBWSxFQUFFLElBQWE7UUFDbkMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxXQUFXLEVBQVgsVUFBWSxRQUFpQixFQUFFLElBQWE7UUFDeEMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVEOzs7O01BSUU7SUFDRixlQUFlLEVBQWYsVUFBZ0IsSUFBYSxFQUFFLFNBQWtCLEVBQUUsTUFBZ0I7UUFDL0QsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sU0FBUyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FFSixDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOaVsOWtpuW3peWFt+exu1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1hdGhVdGlscyA9IHtcclxuICAgIC8qKlxyXG4gICAgICAgICogbm9kZei9rOS4lueVjOWdkOagh1xyXG4gICAgICAgICogQHBhcmFtIHBvcyBcclxuICAgICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICAgICovXHJcbiAgICBub2RlVG9Xb3JsZChwb3M6IGNjLlZlYzIsIG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICByZXR1cm4gbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5LiW55WM5Z2Q5qCH6L2sbm9kZVxyXG4gICAgICogQHBhcmFtIHdvcmxkUG9zIFxyXG4gICAgICogQHBhcmFtIG5vZGUgXHJcbiAgICAgKi9cclxuICAgIHdvcmxkVG9Ob2RlKHdvcmxkUG9zOiBjYy5WZWMyLCBub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDoioLngrnlnZDmoIfovazmjaJcclxuICAgICogQHBhcmFtIG5vZGUg5qyy6KaB6L2s5o2i55qE6IqC54K5XHJcbiAgICAqIEBwYXJhbSBuZXdQYXJlbnQg5paw54i26IqC54K5XHJcbiAgICAqL1xyXG4gICAgY29udmVydFRvUGFyZW50KG5vZGU6IGNjLk5vZGUsIG5ld1BhcmVudDogY2MuTm9kZSwgb2Zmc2V0PzogY2MuVmVjMik6IGNjLlZlYzIge1xyXG4gICAgICAgIGNvbnN0IHdvcmxkUG9zID0gbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIob2Zmc2V0IHx8IGNjLnYyKDAsIDApKTtcclxuICAgICAgICByZXR1cm4gbmV3UGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgIH0sXHJcbiAgIFxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/cfg/UIZIndexCfg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '94772XHMv5La4PxdMrkJdva', 'UIZIndexCfg');
// scripts/cfg/UIZIndexCfg.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIZIndexCfg = void 0;
exports.UIZIndexCfg = {
    // 默认
    DEFAULT: 1,
    // 提现
    CASHOUT: 100,
    // 奖励
    REWARD: 200,
    // 网络异常
    NETWORK_ERROR: 500,
    // 广告加载
    AD_LOADING: 1000,
    // 红包效果
    RED_PACKET_EFFECT: 2000,
    // 吐司
    TOAST: 10000,
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2ZnXFxVSVpJbmRleENmZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBYSxRQUFBLFdBQVcsR0FBRztJQUN2QixLQUFLO0lBQ0wsT0FBTyxFQUFFLENBQUM7SUFDVixLQUFLO0lBQ0wsT0FBTyxFQUFFLEdBQUc7SUFDWixLQUFLO0lBQ0wsTUFBTSxFQUFFLEdBQUc7SUFDWCxPQUFPO0lBQ1AsYUFBYSxFQUFFLEdBQUc7SUFDbEIsT0FBTztJQUNQLFVBQVUsRUFBRSxJQUFJO0lBQ2hCLE9BQU87SUFDUCxpQkFBaUIsRUFBRSxJQUFJO0lBQ3ZCLEtBQUs7SUFDTCxLQUFLLEVBQUUsS0FBSztDQUNmLENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVUlaSW5kZXhDZmcgPSB7XHJcbiAgICAvLyDpu5jorqRcclxuICAgIERFRkFVTFQ6IDEsXHJcbiAgICAvLyDmj5DnjrBcclxuICAgIENBU0hPVVQ6IDEwMCxcclxuICAgIC8vIOWlluWKsVxyXG4gICAgUkVXQVJEOiAyMDAsXHJcbiAgICAvLyDnvZHnu5zlvILluLhcclxuICAgIE5FVFdPUktfRVJST1I6IDUwMCxcclxuICAgIC8vIOW5v+WRiuWKoOi9vVxyXG4gICAgQURfTE9BRElORzogMTAwMCxcclxuICAgIC8vIOe6ouWMheaViOaenFxyXG4gICAgUkVEX1BBQ0tFVF9FRkZFQ1Q6IDIwMDAsXHJcbiAgICAvLyDlkJDlj7hcclxuICAgIFRPQVNUOiAxMDAwMCxcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/cfg/LocalStorageIDCfg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e38bTEYR5NkISvICcLutea', 'LocalStorageIDCfg');
// scripts/cfg/LocalStorageIDCfg.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageIDCfg = void 0;
exports.LocalStorageIDCfg = {
    // 游戏音乐音效
    GAME_MUSIC_SOUND: 'GAME_MUSIC_SOUND',
    // 转盘
    WHEEL_MODEL: 'WHEEL_MODEL',
    // 每日任务
    DAILY_TASK_MODEL: 'DAILY_TASK_MODEL',
    // 游戏数据
    GAME_DATA: 'GAME_DATA',
    // 引导
    GUIDE_STEPS: 'GUIDE_STEPS',
    // 限时合成大西瓜任务
    COMBINE_REWARD_LEVEL_2: 'COMBINE_REWARD_LEVEL_2'
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2ZnXFxMb2NhbFN0b3JhZ2VJRENmZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBYSxRQUFBLGlCQUFpQixHQUFHO0lBQzdCLFNBQVM7SUFDVCxnQkFBZ0IsRUFBRSxrQkFBa0I7SUFDcEMsS0FBSztJQUNMLFdBQVcsRUFBRSxhQUFhO0lBQzFCLE9BQU87SUFDUCxnQkFBZ0IsRUFBRSxrQkFBa0I7SUFDcEMsT0FBTztJQUNQLFNBQVMsRUFBRSxXQUFXO0lBQ3RCLEtBQUs7SUFDTCxXQUFXLEVBQUUsYUFBYTtJQUMxQixZQUFZO0lBQ1osc0JBQXNCLEVBQUUsd0JBQXdCO0NBQ25ELENBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTG9jYWxTdG9yYWdlSURDZmcgPSB7XHJcbiAgICAvLyDmuLjmiI/pn7PkuZDpn7PmlYhcclxuICAgIEdBTUVfTVVTSUNfU09VTkQ6ICdHQU1FX01VU0lDX1NPVU5EJyxcclxuICAgIC8vIOi9rOebmFxyXG4gICAgV0hFRUxfTU9ERUw6ICdXSEVFTF9NT0RFTCcsXHJcbiAgICAvLyDmr4/ml6Xku7vliqFcclxuICAgIERBSUxZX1RBU0tfTU9ERUw6ICdEQUlMWV9UQVNLX01PREVMJyxcclxuICAgIC8vIOa4uOaIj+aVsOaNrlxyXG4gICAgR0FNRV9EQVRBOiAnR0FNRV9EQVRBJyxcclxuICAgIC8vIOW8leWvvFxyXG4gICAgR1VJREVfU1RFUFM6ICdHVUlERV9TVEVQUycsXHJcbiAgICAvLyDpmZDml7blkIjmiJDlpKfopb/nk5zku7vliqFcclxuICAgIENPTUJJTkVfUkVXQVJEX0xFVkVMXzI6ICdDT01CSU5FX1JFV0FSRF9MRVZFTF8yJ1xyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Fruit.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd42e71Qe6FA56JLRDPJ3jx5', 'Fruit');
// scripts/Fruit.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Fruit = /** @class */ (function (_super) {
    __extends(Fruit, _super);
    function Fruit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 0;
        return _this;
    }
    Fruit.prototype.init = function (data) {
        this.id = data.id;
        var sp = this.node.getComponent(cc.Sprite);
        sp.spriteFrame = data.iconSF;
        // todo 控制一下每种水果的尺寸
    };
    Fruit.prototype.onBeginContact = function (contact, self, other) {
        // 貌似检测有点消耗性能
        if (self.node && other.node) {
            var s = self.node.getComponent('Fruit');
            var o = other.node.getComponent('Fruit');
            if (s && o && s.id === o.id) {
                self.node.emit('sameContact', { self: self, other: other });
            }
        }
    };
    Fruit.prototype.getData = function () {
        return {
            id: this.id,
            pos: this.node.getPosition()
        };
    };
    Fruit = __decorate([
        ccclass
    ], Fruit);
    return Fruit;
}(cc.Component));
exports.default = Fruit;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRnJ1aXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUE2QkM7UUEzQlcsUUFBRSxHQUFXLENBQUMsQ0FBQzs7SUEyQjNCLENBQUM7SUF6Qkcsb0JBQUksR0FBSixVQUFLLElBQUk7UUFDTCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUE7UUFDakIsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzVDLEVBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUM1QixtQkFBbUI7SUFDdkIsQ0FBQztJQUVELDhCQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDL0IsYUFBYTtRQUNiLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ3pCLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3pDLElBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQzthQUNsRDtTQUNKO0lBQ0wsQ0FBQztJQUVELHVCQUFPLEdBQVA7UUFDSSxPQUFPO1lBQ0gsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1NBQy9CLENBQUE7SUFDTCxDQUFDO0lBM0JnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBNkJ6QjtJQUFELFlBQUM7Q0E3QkQsQUE2QkMsQ0E3QmtDLEVBQUUsQ0FBQyxTQUFTLEdBNkI5QztrQkE3Qm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJ1aXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyID0gMDtcblxuICAgIGluaXQoZGF0YSkge1xuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZFxuICAgICAgICBjb25zdCBzcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxuICAgICAgICBzcC5zcHJpdGVGcmFtZSA9IGRhdGEuaWNvblNGXG4gICAgICAgIC8vIHRvZG8g5o6n5Yi25LiA5LiL5q+P56eN5rC05p6c55qE5bC65a+4XG4gICAgfVxuXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcbiAgICAgICAgLy8g6LKM5Ly85qOA5rWL5pyJ54K55raI6ICX5oCn6IO9XG4gICAgICAgIGlmIChzZWxmLm5vZGUgJiYgb3RoZXIubm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcyA9IHNlbGYubm9kZS5nZXRDb21wb25lbnQoJ0ZydWl0JylcbiAgICAgICAgICAgIGNvbnN0IG8gPSBvdGhlci5ub2RlLmdldENvbXBvbmVudCgnRnJ1aXQnKVxuICAgICAgICAgICAgaWYgKHMgJiYgbyAmJiBzLmlkID09PSBvLmlkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmVtaXQoJ3NhbWVDb250YWN0JywgeyBzZWxmLCBvdGhlciB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldERhdGEoKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgcG9zOiB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mgrs/EventMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '193e91uAPlJ/5W9m/7yyJz+', 'EventMgr');
// scripts/mgrs/EventMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventMgr = void 0;
var EventMgr = /** @class */ (function () {
    function EventMgr() {
    }
    EventMgr.on = function (type, callback, target, useCapture) {
        cc.game.on(type, callback, target, useCapture);
    };
    EventMgr.off = function (type, callback, target) {
        cc.game.off(type, callback, target);
    };
    EventMgr.emit = function (key, arg1, arg2, arg3, arg4, arg5) {
        cc.game.emit(key, arg1, arg2, arg3, arg4, arg5);
    };
    EventMgr.hahasEventListeners = function (key) {
        return cc.game.hasEventListener(key);
    };
    EventMgr.once = function (type, callback, target) {
        cc.game.once(type, callback, target);
    };
    EventMgr.removeAll = function (keyOrTarget) {
        cc.game.removeAll(keyOrTarget);
    };
    EventMgr.targetOff = function (target) {
        cc.game.targetOff(target);
    };
    return EventMgr;
}());
exports.EventMgr = EventMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWdyc1xcRXZlbnRNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFBQTtJQTZCQSxDQUFDO0lBM0JpQixXQUFFLEdBQWhCLFVBQWlCLElBQVksRUFBRSxRQUFrQixFQUFFLE1BQVksRUFBRSxVQUFvQjtRQUNqRixFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRWEsWUFBRyxHQUFqQixVQUFrQixJQUFZLEVBQUUsUUFBa0IsRUFBRSxNQUFZO1FBQzVELEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVhLGFBQUksR0FBbEIsVUFBbUIsR0FBVyxFQUFFLElBQVUsRUFBRSxJQUFVLEVBQUUsSUFBVSxFQUFFLElBQVUsRUFBRSxJQUFVO1FBQ3RGLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVhLDRCQUFtQixHQUFqQyxVQUFrQyxHQUFXO1FBQ3pDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRWEsYUFBSSxHQUFsQixVQUFtQixJQUFZLEVBQUUsUUFBNkUsRUFBRSxNQUFZO1FBQ3hILEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVhLGtCQUFTLEdBQXZCLFVBQXdCLFdBQWdCO1FBQ3BDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFYSxrQkFBUyxHQUF2QixVQUF3QixNQUFXO1FBQy9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0E3QkEsQUE2QkMsSUFBQTtBQTdCWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgRXZlbnRNZ3Ige1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgb24odHlwZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24sIHRhcmdldD86IGFueSwgdXNlQ2FwdHVyZT86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBjYy5nYW1lLm9uKHR5cGUsIGNhbGxiYWNrLCB0YXJnZXQsIHVzZUNhcHR1cmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgb2ZmKHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjYy5nYW1lLm9mZih0eXBlLCBjYWxsYmFjaywgdGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGVtaXQoa2V5OiBzdHJpbmcsIGFyZzE/OiBhbnksIGFyZzI/OiBhbnksIGFyZzM/OiBhbnksIGFyZzQ/OiBhbnksIGFyZzU/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjYy5nYW1lLmVtaXQoa2V5LCBhcmcxLCBhcmcyLCBhcmczLCBhcmc0LCBhcmc1KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGhhaGFzRXZlbnRMaXN0ZW5lcnMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gY2MuZ2FtZS5oYXNFdmVudExpc3RlbmVyKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBvbmNlKHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IChhcmcxPzogYW55LCBhcmcyPzogYW55LCBhcmczPzogYW55LCBhcmc0PzogYW55LCBhcmc1PzogYW55KT0+IHZvaWQsIHRhcmdldD86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNjLmdhbWUub25jZSh0eXBlLCBjYWxsYmFjaywgdGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlbW92ZUFsbChrZXlPclRhcmdldDogYW55KTp2b2lkIHtcclxuICAgICAgICBjYy5nYW1lLnJlbW92ZUFsbChrZXlPclRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0YXJnZXRPZmYodGFyZ2V0OiBhbnkpOnZvaWQge1xyXG4gICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRhcmdldCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/cfg/QuickClickCfg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e8f1xF4mBFdLzFue49KJpj', 'QuickClickCfg');
// scripts/cfg/QuickClickCfg.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickClickCfg = void 0;
exports.QuickClickCfg = {
    /**
     *  默认0.1秒
     */
    DEFAULT: 0.1,
    /**
     * 0.5秒
     */
    DT_0: 0.5,
    /**
     * 1秒
     */
    DT_1: 1,
    /**
     * 1.5秒
     */
    DT_2: 1.5,
    /**
     * 2秒
     */
    DT_3: 2
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2ZnXFxRdWlja0NsaWNrQ2ZnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNhLFFBQUEsYUFBYSxHQUFHO0lBQ3pCOztPQUVHO0lBQ0gsT0FBTyxFQUFFLEdBQUc7SUFFWjs7T0FFRztJQUNILElBQUksRUFBRSxHQUFHO0lBRVQ7O09BRUc7SUFDSCxJQUFJLEVBQUUsQ0FBQztJQUVQOztPQUVHO0lBQ0gsSUFBSSxFQUFFLEdBQUc7SUFFVDs7T0FFRztJQUNILElBQUksRUFBRSxDQUFDO0NBQ1YsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY29uc3QgUXVpY2tDbGlja0NmZyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogIOm7mOiupDAuMeenklxyXG4gICAgICovXHJcbiAgICBERUZBVUxUOiAwLjEsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAwLjXnp5JcclxuICAgICAqL1xyXG4gICAgRFRfMDogMC41LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogMeenklxyXG4gICAgICovXHJcbiAgICBEVF8xOiAxLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogMS4156eSXHJcbiAgICAgKi9cclxuICAgIERUXzI6IDEuNSxcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiAy56eSXHJcbiAgICAgKi9cclxuICAgIERUXzM6IDJcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Juice.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68577KH4U9LraxPrFCjzw67', 'Juice');
// scripts/Juice.ts

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
var RandomInteger = function (e, t) {
    return Math.floor(Math.random() * (t - e) + e);
};
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Juice = /** @class */ (function (_super) {
    __extends(Juice, _super);
    function Juice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.particle = null;
        _this.circle = null;
        _this.slash = null;
        return _this;
    }
    Juice.prototype.init = function (data) {
        this.particle = data.particle;
        this.circle = data.particle;
        this.slash = data.slash;
    };
    // 合并时的动画效果
    Juice.prototype.showJuice = function (pos, width) {
        var _this = this;
        var _loop_1 = function (i) {
            var node_1 = new cc.Node('Sprite');
            var sp_1 = node_1.addComponent(cc.Sprite);
            sp_1.spriteFrame = this_1.particle;
            node_1.parent = this_1.node;
            var a = 359 * Math.random(), i_1 = 30 * Math.random() + width / 2, l = cc.v2(Math.sin(a * Math.PI / 180) * i_1, Math.cos(a * Math.PI / 180) * i_1);
            node_1.scale = .5 * Math.random() + width / 100;
            var p = .5 * Math.random();
            node_1.position = pos;
            node_1.runAction(cc.sequence(cc.spawn(cc.moveBy(p, l), cc.scaleTo(p + .5, .3), cc.rotateBy(p + .5, RandomInteger(-360, 360))), cc.fadeOut(.1), cc.callFunc(function () {
                node_1.active = false;
            }, this_1)));
        };
        var this_1 = this;
        // 果粒
        for (var i = 0; i < 10; ++i) {
            _loop_1(i);
        }
        var _loop_2 = function (f) {
            var node_2 = new cc.Node('Sprite');
            var sp_2 = node_2.addComponent(cc.Sprite);
            sp_2.spriteFrame = this_2.circle;
            node_2.parent = this_2.node;
            var a = 359 * Math.random(), i = 30 * Math.random() + width / 2, l = cc.v2(Math.sin(a * Math.PI / 180) * i, Math.cos(a * Math.PI / 180) * i);
            node_2.scale = .5 * Math.random() + width / 100;
            var p = .5 * Math.random();
            node_2.position = pos;
            node_2.runAction(cc.sequence(cc.spawn(cc.moveBy(p, l), cc.scaleTo(p + .5, .3)), cc.fadeOut(.1), cc.callFunc(function () {
                node_2.active = false;
            }, this_2)));
        };
        var this_2 = this;
        // 水珠
        for (var f = 0; f < 20; f++) {
            _loop_2(f);
        }
        // 果汁
        var node = new cc.Node('Sprite');
        var sp = node.addComponent(cc.Sprite);
        sp.spriteFrame = this.slash;
        node.parent = this.node;
        node.position = pos;
        node.scale = 0;
        node.angle = RandomInteger(0, 360);
        node.runAction(cc.sequence(cc.spawn(cc.scaleTo(.2, width / 150), cc.fadeOut(1)), cc.callFunc(function () {
            node.active = false;
        })));
        setTimeout(function () {
            _this.node.destroy();
        }, 3000);
    };
    __decorate([
        property(cc.SpriteFrame)
    ], Juice.prototype, "particle", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Juice.prototype, "circle", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Juice.prototype, "slash", void 0);
    Juice = __decorate([
        ccclass
    ], Juice);
    return Juice;
}(cc.Component));
exports.default = Juice;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSnVpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQztJQUNoQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ2xELENBQUMsQ0FBQTtBQUVLLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBaUZDO1FBOUVXLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFHaEIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUdkLFdBQUssR0FBRyxJQUFJLENBQUM7O0lBd0V6QixDQUFDO0lBdEVHLG9CQUFJLEdBQUosVUFBSyxJQUFJO1FBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDM0IsQ0FBQztJQUVELFdBQVc7SUFDWCx5QkFBUyxHQUFULFVBQVUsR0FBRyxFQUFFLEtBQUs7UUFBcEIsaUJBOERDO2dDQTVEWSxDQUFDO1lBQ04sSUFBTSxNQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLElBQU0sSUFBRSxHQUFHLE1BQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXhDLElBQUUsQ0FBQyxXQUFXLEdBQUcsT0FBSyxRQUFRLENBQUM7WUFDL0IsTUFBSSxDQUFDLE1BQU0sR0FB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LElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBN0VEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ0Q7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt5Q0FDSDtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dDQUNKO0lBVEosS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWlGekI7SUFBRCxZQUFDO0NBakZELEFBaUZDLENBakZrQyxFQUFFLENBQUMsU0FBUyxHQWlGOUM7a0JBakZvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUmFuZG9tSW50ZWdlciA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0IC0gZSkgKyBlKVxufVxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnVpY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHByaXZhdGUgcGFydGljbGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHByaXZhdGUgY2lyY2xlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBwcml2YXRlIHNsYXNoID0gbnVsbDtcblxuICAgIGluaXQoZGF0YSkge1xuICAgICAgICB0aGlzLnBhcnRpY2xlID0gZGF0YS5wYXJ0aWNsZVxuICAgICAgICB0aGlzLmNpcmNsZSA9IGRhdGEucGFydGljbGVcbiAgICAgICAgdGhpcy5zbGFzaCA9IGRhdGEuc2xhc2hcbiAgICB9XG5cbiAgICAvLyDlkIjlubbml7bnmoTliqjnlLvmlYjmnpxcbiAgICBzaG93SnVpY2UocG9zLCB3aWR0aCkge1xuICAgICAgICAvLyDmnpznspJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xuICAgICAgICAgICAgY29uc3Qgc3AgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuXG4gICAgICAgICAgICBzcC5zcHJpdGVGcmFtZSA9IHRoaXMucGFydGljbGU7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcblxuICAgICAgICAgICAgY29uc3QgYSA9IDM1OSAqIE1hdGgucmFuZG9tKCksXG4gICAgICAgICAgICAgICAgaSA9IDMwICogTWF0aC5yYW5kb20oKSArIHdpZHRoIC8gMixcbiAgICAgICAgICAgICAgICBsID0gY2MudjIoTWF0aC5zaW4oYSAqIE1hdGguUEkgLyAxODApICogaSwgTWF0aC5jb3MoYSAqIE1hdGguUEkgLyAxODApICogaSk7XG4gICAgICAgICAgICBub2RlLnNjYWxlID0gLjUgKiBNYXRoLnJhbmRvbSgpICsgd2lkdGggLyAxMDA7XG4gICAgICAgICAgICBjb25zdCBwID0gLjUgKiBNYXRoLnJhbmRvbSgpO1xuXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gcG9zO1xuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oXG4gICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoY2Muc3Bhd24oY2MubW92ZUJ5KHAsIGwpLFxuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKHAgKyAuNSwgLjMpLFxuICAgICAgICAgICAgICAgICAgICBjYy5yb3RhdGVCeShwICsgLjUsIFJhbmRvbUludGVnZXIoLTM2MCwgMzYwKSkpLFxuICAgICAgICAgICAgICAgICAgICBjYy5mYWRlT3V0KC4xKSxcbiAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOawtOePoFxuICAgICAgICBmb3IgKGxldCBmID0gMDsgZiA8IDIwOyBmKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XG4gICAgICAgICAgICBjb25zdCBzcCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG5cbiAgICAgICAgICAgIHNwLnNwcml0ZUZyYW1lID0gdGhpcy5jaXJjbGU7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcblxuICAgICAgICAgICAgbGV0IGEgPSAzNTkgKiBNYXRoLnJhbmRvbSgpLCBpID0gMzAgKiBNYXRoLnJhbmRvbSgpICsgd2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIGwgPSBjYy52MihNYXRoLnNpbihhICogTWF0aC5QSSAvIDE4MCkgKiBpLCBNYXRoLmNvcyhhICogTWF0aC5QSSAvIDE4MCkgKiBpKTtcbiAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAuNSAqIE1hdGgucmFuZG9tKCkgKyB3aWR0aCAvIDEwMDtcbiAgICAgICAgICAgIGxldCBwID0gLjUgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHBvc1xuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc3Bhd24oY2MubW92ZUJ5KHAsIGwpLCBjYy5zY2FsZVRvKHAgKyAuNSwgLjMpKSwgY2MuZmFkZU91dCguMSksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB9LCB0aGlzKSkpXG4gICAgICAgIH1cblxuICAgICAgICAvLyDmnpzmsYFcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcbiAgICAgICAgY29uc3Qgc3AgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuXG4gICAgICAgIHNwLnNwcml0ZUZyYW1lID0gdGhpcy5zbGFzaDtcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG5cbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHBvc1xuICAgICAgICBub2RlLnNjYWxlID0gMFxuICAgICAgICBub2RlLmFuZ2xlID0gUmFuZG9tSW50ZWdlcigwLCAzNjApXG4gICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNwYXduKGNjLnNjYWxlVG8oLjIsIHdpZHRoIC8gMTUwKSwgY2MuZmFkZU91dCgxKSksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgfSkpKVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxufVxuXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/cfg/EventIDCfg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '277460amtlHpqy2RdUjnWVK', 'EventIDCfg');
// scripts/cfg/EventIDCfg.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventIDCfg = void 0;
exports.EventIDCfg = {
    /*****************游戏模块*****************/
    // 分数
    UPDATE_SCORE: 'UPDATE_SCORE',
    // 目标球
    UPDATE_TARGET_BALL_NUM: 'UPDATE_TARGET_BALL_NUM',
    // 更新彩球的数量
    UPDATE_COLOR_BALLS: 'UPDATE_COLOR_BALLS',
    // 更新锤子的数量
    UPDATE_HAMMER: 'UPDATE_HAMMER',
    // 关闭弹窗
    PANNEL_CLOSE: 'PANNEL_CLOSE',
    // 打开弹窗
    PANNLE_SHOW: 'PANNLE_SHOW',
    // 游戏
    START_GAME: 'START_GAME',
    RESTART_GAME: 'RESTART_GAME',
    PAUSE_GAME: 'PAUSE_GAME',
    RESUME_GAME: 'RESUME_GAME',
    GAME_OVER: 'GAME_OVER',
    // 开始关卡
    LEVEL_START: 'LEVEL_START',
    // 关卡完成
    LEVEL_COMPLETE: 'LEVEL_COMPLETE',
    // 下一关
    NEXT_LEVEL: 'NEXT_LEVEL',
    // 使用锤子道具
    USE_HAMMER: 'USE_HAMMER',
    USE_HAMMER_SUCCESS: 'USE_HAMMER_SUCCESS',
    USE_HAMMER_CANCEL: 'USE_HAMMER_CANCEL',
    USE_HAMMER_START: 'USE_HAMMER_START',
    // 使用彩球
    USE_COLOR_BALL: 'USE_COLOR_BALL',
    USE_COLOR_BALL_SUCCESS: 'USE_COLOR_BALL_SUCCESS',
    USE_COLOR_BALL_CANCEL: 'USE_COLOR_BALL_CANCEL',
    USE_COLOR_BALL_TRY_CANCEL: 'USE_COLOR_BALL_TRY_CANCEL',
    USE_COLOR_BALL_START: 'USE_COLOR_BALL_START',
    // 小球碰撞
    BEGIN_CONTACT: 'BEGIN_CONTACT',
    CLICK_BALL: 'CLICK_BALL',
    // 过关红包显示
    SHOW_PASS_LEVEL_RED_PACKET: 'SHOW_PASS_LEVEL_RED_PACKET',
    // 合成最大球
    COMBINE_MAX: 'COMBINE_MAX',
    // 每日任务领取状态
    UPDATE_DAILY_GIFT_RECEIVE_STATE: 'UPDATE_DAILY_GIFT_RECEIVE_STATE',
    // 关卡目标提示
    HIDE_TARGET_TIPS: 'HIDE_TARGET_TIPS',
    /*****************授权登录*****************/
    AUTHORIZED_SUCCESS: 'AUTHORIZED_SUCCESS',
    AUTHORIZED_FAIL: 'AUTHORIZED_FAIL',
    /*****************用户模块*****************/
    // 红包币
    USER_UPDATE_MONEY: 'USER_UPDATE_MONEY',
    /*****************存钱罐模块*****************/
    // 金币
    PIGGY_BANK_UPDATE_POINT: 'PIGGY_BANK_UPDATE_POINT',
    // 可领取状态
    PIGGY_BANK_UPDATE_STATUS: 'PIGGY_BANK_UPDATE_STATUS',
    // 拉霸
    PIGGY_BANK_UPDATE_SLOT_MACHINE: 'PIGGY_BANK_UPDATE_SLOT_MACHINE',
    /*****************签到模块*****************/
    // 签到成功
    SIGN_SUCCESS: 'SIGN_SUCCESS',
    /*****************排行榜模块*****************/
    RANK_LIST_UPDATE: 'RANK_LIST_UPDATE',
    /*****************提现模块*****************/
    CASHOUT_UPDATE: 'CASHOUT_UPDATE',
    //提现记录
    CASHOUT_RECORD_UPDATE: 'CASHOUT_RECORD_UPDATE',
    // 提现成功
    CASHOUT_SUCCESS: 'CASHOUT_SUCCESS',
    /*****************每日提现模块*****************/
    DAILY_CASHOUT_UPDATE: 'DAILY_CASHOUT_UPDATE',
    DAILY_CASHOUT_SUCCESS: 'DAILY_CASHOUT_SUCCESS',
    /*****************轮盘模块*****************/
    WHEEL_SPIN_TIMES_UPDATE: 'WHEEL_SPIN_TIMES_UPDATE',
    /*****************引导步骤完成*****************/
    GUIDE_STEP_COMPLETED: 'GUIDE_STEP_COMPLETED',
    /*****************任务成就模块*****************/
    TASK_UPDATE: 'TASK_UPDATE',
    ACHIEVEMENT_UPDATE: 'ACHIEVEMENT_UPDATE',
    /*****************在线奖励模块*****************/
    ONLINE_UPDATE: 'ONLINE_UPDATE',
    /****************游戏中的弱引导手指模块*****************/
    HAND_SHOW: 'HAND_SHOW',
    HAND_HIDE: 'HAND_HIDE',
    /*****************其他事件*****************/
    // 显示奖励界面
    SHOW_REWARD_PANNEL: 'SHOW_REWARD_PANNEL',
    // 播放连击特效
    PLAY_COMBO_EFFECT: 'PLAY_COMBO_EFFECT',
    UPDATE_COMBO_COUNT: 'UPDATE_COMBO_COUNT',
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2ZnXFxFdmVudElEQ2ZnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFhLFFBQUEsVUFBVSxHQUFHO0lBQ3RCLHdDQUF3QztJQUN4QyxLQUFLO0lBQ0wsWUFBWSxFQUFFLGNBQWM7SUFDNUIsTUFBTTtJQUNOLHNCQUFzQixFQUFFLHdCQUF3QjtJQUNoRCxVQUFVO0lBQ1Ysa0JBQWtCLEVBQUUsb0JBQW9CO0lBQ3hDLFVBQVU7SUFDVixhQUFhLEVBQUUsZUFBZTtJQUM5QixPQUFPO0lBQ1AsWUFBWSxFQUFFLGNBQWM7SUFDNUIsT0FBTztJQUNQLFdBQVcsRUFBRSxhQUFhO0lBQzFCLEtBQUs7SUFDTCxVQUFVLEVBQUUsWUFBWTtJQUN4QixZQUFZLEVBQUUsY0FBYztJQUM1QixVQUFVLEVBQUUsWUFBWTtJQUN4QixXQUFXLEVBQUUsYUFBYTtJQUMxQixTQUFTLEVBQUUsV0FBVztJQUN0QixPQUFPO0lBQ1AsV0FBVyxFQUFFLGFBQWE7SUFDMUIsT0FBTztJQUNQLGNBQWMsRUFBRSxnQkFBZ0I7SUFDaEMsTUFBTTtJQUNOLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLFNBQVM7SUFDVCxVQUFVLEVBQUUsWUFBWTtJQUN4QixrQkFBa0IsRUFBRSxvQkFBb0I7SUFDeEMsaUJBQWlCLEVBQUUsbUJBQW1CO0lBQ3RDLGdCQUFnQixFQUFFLGtCQUFrQjtJQUNwQyxPQUFPO0lBQ1AsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxzQkFBc0IsRUFBRSx3QkFBd0I7SUFDaEQscUJBQXFCLEVBQUUsdUJBQXVCO0lBQzlDLHlCQUF5QixFQUFFLDJCQUEyQjtJQUN0RCxvQkFBb0IsRUFBRSxzQkFBc0I7SUFDNUMsT0FBTztJQUNQLGFBQWEsRUFBRSxlQUFlO0lBQzlCLFVBQVUsRUFBRSxZQUFZO0lBQ3hCLFNBQVM7SUFDVCwwQkFBMEIsRUFBRSw0QkFBNEI7SUFDeEQsUUFBUTtJQUNSLFdBQVcsRUFBRSxhQUFhO0lBQzFCLFdBQVc7SUFDWCwrQkFBK0IsRUFBRSxpQ0FBaUM7SUFDbEUsU0FBUztJQUNULGdCQUFnQixFQUFFLGtCQUFrQjtJQUVwQyx3Q0FBd0M7SUFDeEMsa0JBQWtCLEVBQUUsb0JBQW9CO0lBQ3hDLGVBQWUsRUFBRSxpQkFBaUI7SUFDbEMsd0NBQXdDO0lBQ3hDLE1BQU07SUFDTixpQkFBaUIsRUFBRSxtQkFBbUI7SUFDdEMseUNBQXlDO0lBQ3pDLEtBQUs7SUFDTCx1QkFBdUIsRUFBRSx5QkFBeUI7SUFDbEQsUUFBUTtJQUNSLHdCQUF3QixFQUFFLDBCQUEwQjtJQUNwRCxLQUFLO0lBQ0wsOEJBQThCLEVBQUUsZ0NBQWdDO0lBQ2hFLHdDQUF3QztJQUN4QyxPQUFPO0lBQ1AsWUFBWSxFQUFFLGNBQWM7SUFDNUIseUNBQXlDO0lBQ3pDLGdCQUFnQixFQUFFLGtCQUFrQjtJQUNwQyx3Q0FBd0M7SUFDeEMsY0FBYyxFQUFFLGdCQUFnQjtJQUNoQyxNQUFNO0lBQ04scUJBQXFCLEVBQUUsdUJBQXVCO0lBQzlDLE9BQU87SUFDUCxlQUFlLEVBQUUsaUJBQWlCO0lBQ2xDLDBDQUEwQztJQUMxQyxvQkFBb0IsRUFBRSxzQkFBc0I7SUFDNUMscUJBQXFCLEVBQUUsdUJBQXVCO0lBQzlDLHdDQUF3QztJQUN4Qyx1QkFBdUIsRUFBRSx5QkFBeUI7SUFDbEQsMENBQTBDO0lBQzFDLG9CQUFvQixFQUFFLHNCQUFzQjtJQUM1QywwQ0FBMEM7SUFDMUMsV0FBVyxFQUFFLGFBQWE7SUFDMUIsa0JBQWtCLEVBQUUsb0JBQW9CO0lBQ3hDLDBDQUEwQztJQUMxQyxhQUFhLEVBQUUsZUFBZTtJQUM5Qiw4Q0FBOEM7SUFDOUMsU0FBUyxFQUFFLFdBQVc7SUFDdEIsU0FBUyxFQUFFLFdBQVc7SUFDdEIsd0NBQXdDO0lBQ3hDLFNBQVM7SUFDVCxrQkFBa0IsRUFBRSxvQkFBb0I7SUFDeEMsU0FBUztJQUNULGlCQUFpQixFQUFFLG1CQUFtQjtJQUN0QyxrQkFBa0IsRUFBRSxvQkFBb0I7Q0FDM0MsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBFdmVudElEQ2ZnID0ge1xyXG4gICAgLyoqKioqKioqKioqKioqKioq5ri45oiP5qih5Z2XKioqKioqKioqKioqKioqKiovXHJcbiAgICAvLyDliIbmlbBcclxuICAgIFVQREFURV9TQ09SRTogJ1VQREFURV9TQ09SRScsXHJcbiAgICAvLyDnm67moIfnkINcclxuICAgIFVQREFURV9UQVJHRVRfQkFMTF9OVU06ICdVUERBVEVfVEFSR0VUX0JBTExfTlVNJyxcclxuICAgIC8vIOabtOaWsOW9qeeQg+eahOaVsOmHj1xyXG4gICAgVVBEQVRFX0NPTE9SX0JBTExTOiAnVVBEQVRFX0NPTE9SX0JBTExTJyxcclxuICAgIC8vIOabtOaWsOmUpOWtkOeahOaVsOmHj1xyXG4gICAgVVBEQVRFX0hBTU1FUjogJ1VQREFURV9IQU1NRVInLFxyXG4gICAgLy8g5YWz6Zet5by556qXXHJcbiAgICBQQU5ORUxfQ0xPU0U6ICdQQU5ORUxfQ0xPU0UnLFxyXG4gICAgLy8g5omT5byA5by556qXXHJcbiAgICBQQU5OTEVfU0hPVzogJ1BBTk5MRV9TSE9XJyxcclxuICAgIC8vIOa4uOaIj1xyXG4gICAgU1RBUlRfR0FNRTogJ1NUQVJUX0dBTUUnLFxyXG4gICAgUkVTVEFSVF9HQU1FOiAnUkVTVEFSVF9HQU1FJyxcclxuICAgIFBBVVNFX0dBTUU6ICdQQVVTRV9HQU1FJyxcclxuICAgIFJFU1VNRV9HQU1FOiAnUkVTVU1FX0dBTUUnLFxyXG4gICAgR0FNRV9PVkVSOiAnR0FNRV9PVkVSJyxcclxuICAgIC8vIOW8gOWni+WFs+WNoVxyXG4gICAgTEVWRUxfU1RBUlQ6ICdMRVZFTF9TVEFSVCcsXHJcbiAgICAvLyDlhbPljaHlrozmiJBcclxuICAgIExFVkVMX0NPTVBMRVRFOiAnTEVWRUxfQ09NUExFVEUnLFxyXG4gICAgLy8g5LiL5LiA5YWzXHJcbiAgICBORVhUX0xFVkVMOiAnTkVYVF9MRVZFTCcsXHJcbiAgICAvLyDkvb/nlKjplKTlrZDpgZPlhbdcclxuICAgIFVTRV9IQU1NRVI6ICdVU0VfSEFNTUVSJyxcclxuICAgIFVTRV9IQU1NRVJfU1VDQ0VTUzogJ1VTRV9IQU1NRVJfU1VDQ0VTUycsXHJcbiAgICBVU0VfSEFNTUVSX0NBTkNFTDogJ1VTRV9IQU1NRVJfQ0FOQ0VMJyxcclxuICAgIFVTRV9IQU1NRVJfU1RBUlQ6ICdVU0VfSEFNTUVSX1NUQVJUJyxcclxuICAgIC8vIOS9v+eUqOW9qeeQg1xyXG4gICAgVVNFX0NPTE9SX0JBTEw6ICdVU0VfQ09MT1JfQkFMTCcsXHJcbiAgICBVU0VfQ09MT1JfQkFMTF9TVUNDRVNTOiAnVVNFX0NPTE9SX0JBTExfU1VDQ0VTUycsXHJcbiAgICBVU0VfQ09MT1JfQkFMTF9DQU5DRUw6ICdVU0VfQ09MT1JfQkFMTF9DQU5DRUwnLFxyXG4gICAgVVNFX0NPTE9SX0JBTExfVFJZX0NBTkNFTDogJ1VTRV9DT0xPUl9CQUxMX1RSWV9DQU5DRUwnLFxyXG4gICAgVVNFX0NPTE9SX0JBTExfU1RBUlQ6ICdVU0VfQ09MT1JfQkFMTF9TVEFSVCcsXHJcbiAgICAvLyDlsI/nkIPnorDmkp5cclxuICAgIEJFR0lOX0NPTlRBQ1Q6ICdCRUdJTl9DT05UQUNUJyxcclxuICAgIENMSUNLX0JBTEw6ICdDTElDS19CQUxMJyxcclxuICAgIC8vIOi/h+WFs+e6ouWMheaYvuekulxyXG4gICAgU0hPV19QQVNTX0xFVkVMX1JFRF9QQUNLRVQ6ICdTSE9XX1BBU1NfTEVWRUxfUkVEX1BBQ0tFVCcsXHJcbiAgICAvLyDlkIjmiJDmnIDlpKfnkINcclxuICAgIENPTUJJTkVfTUFYOiAnQ09NQklORV9NQVgnLFxyXG4gICAgLy8g5q+P5pel5Lu75Yqh6aKG5Y+W54q25oCBXHJcbiAgICBVUERBVEVfREFJTFlfR0lGVF9SRUNFSVZFX1NUQVRFOiAnVVBEQVRFX0RBSUxZX0dJRlRfUkVDRUlWRV9TVEFURScsXHJcbiAgICAvLyDlhbPljaHnm67moIfmj5DnpLpcclxuICAgIEhJREVfVEFSR0VUX1RJUFM6ICdISURFX1RBUkdFVF9USVBTJyxcclxuXHJcbiAgICAvKioqKioqKioqKioqKioqKirmjojmnYPnmbvlvZUqKioqKioqKioqKioqKioqKi9cclxuICAgIEFVVEhPUklaRURfU1VDQ0VTUzogJ0FVVEhPUklaRURfU1VDQ0VTUycsXHJcbiAgICBBVVRIT1JJWkVEX0ZBSUw6ICdBVVRIT1JJWkVEX0ZBSUwnLFxyXG4gICAgLyoqKioqKioqKioqKioqKioq55So5oi35qih5Z2XKioqKioqKioqKioqKioqKiovXHJcbiAgICAvLyDnuqLljIXluIFcclxuICAgIFVTRVJfVVBEQVRFX01PTkVZOiAnVVNFUl9VUERBVEVfTU9ORVknLFxyXG4gICAgLyoqKioqKioqKioqKioqKioq5a2Y6ZKx572Q5qih5Z2XKioqKioqKioqKioqKioqKiovXHJcbiAgICAvLyDph5HluIFcclxuICAgIFBJR0dZX0JBTktfVVBEQVRFX1BPSU5UOiAnUElHR1lfQkFOS19VUERBVEVfUE9JTlQnLFxyXG4gICAgLy8g5Y+v6aKG5Y+W54q25oCBXHJcbiAgICBQSUdHWV9CQU5LX1VQREFURV9TVEFUVVM6ICdQSUdHWV9CQU5LX1VQREFURV9TVEFUVVMnLFxyXG4gICAgLy8g5ouJ6Zy4XHJcbiAgICBQSUdHWV9CQU5LX1VQREFURV9TTE9UX01BQ0hJTkU6ICdQSUdHWV9CQU5LX1VQREFURV9TTE9UX01BQ0hJTkUnLFxyXG4gICAgLyoqKioqKioqKioqKioqKioq562+5Yiw5qih5Z2XKioqKioqKioqKioqKioqKiovXHJcbiAgICAvLyDnrb7liLDmiJDlip9cclxuICAgIFNJR05fU1VDQ0VTUzogJ1NJR05fU1VDQ0VTUycsXHJcbiAgICAvKioqKioqKioqKioqKioqKirmjpLooYzmppzmqKHlnZcqKioqKioqKioqKioqKioqKi9cclxuICAgIFJBTktfTElTVF9VUERBVEU6ICdSQU5LX0xJU1RfVVBEQVRFJyxcclxuICAgIC8qKioqKioqKioqKioqKioqKuaPkOeOsOaooeWdlyoqKioqKioqKioqKioqKioqL1xyXG4gICAgQ0FTSE9VVF9VUERBVEU6ICdDQVNIT1VUX1VQREFURScsXHJcbiAgICAvL+aPkOeOsOiusOW9lVxyXG4gICAgQ0FTSE9VVF9SRUNPUkRfVVBEQVRFOiAnQ0FTSE9VVF9SRUNPUkRfVVBEQVRFJyxcclxuICAgIC8vIOaPkOeOsOaIkOWKn1xyXG4gICAgQ0FTSE9VVF9TVUNDRVNTOiAnQ0FTSE9VVF9TVUNDRVNTJyxcclxuICAgIC8qKioqKioqKioqKioqKioqKuavj+aXpeaPkOeOsOaooeWdlyoqKioqKioqKioqKioqKioqL1xyXG4gICAgREFJTFlfQ0FTSE9VVF9VUERBVEU6ICdEQUlMWV9DQVNIT1VUX1VQREFURScsXHJcbiAgICBEQUlMWV9DQVNIT1VUX1NVQ0NFU1M6ICdEQUlMWV9DQVNIT1VUX1NVQ0NFU1MnLFxyXG4gICAgLyoqKioqKioqKioqKioqKioq6L2u55uY5qih5Z2XKioqKioqKioqKioqKioqKiovXHJcbiAgICBXSEVFTF9TUElOX1RJTUVTX1VQREFURTogJ1dIRUVMX1NQSU5fVElNRVNfVVBEQVRFJyxcclxuICAgIC8qKioqKioqKioqKioqKioqKuW8leWvvOatpemqpOWujOaIkCoqKioqKioqKioqKioqKioqL1xyXG4gICAgR1VJREVfU1RFUF9DT01QTEVURUQ6ICdHVUlERV9TVEVQX0NPTVBMRVRFRCcsXHJcbiAgICAvKioqKioqKioqKioqKioqKirku7vliqHmiJDlsLHmqKHlnZcqKioqKioqKioqKioqKioqKi9cclxuICAgIFRBU0tfVVBEQVRFOiAnVEFTS19VUERBVEUnLFxyXG4gICAgQUNISUVWRU1FTlRfVVBEQVRFOiAnQUNISUVWRU1FTlRfVVBEQVRFJyxcclxuICAgIC8qKioqKioqKioqKioqKioqKuWcqOe6v+WlluWKseaooeWdlyoqKioqKioqKioqKioqKioqL1xyXG4gICAgT05MSU5FX1VQREFURTogJ09OTElORV9VUERBVEUnLFxyXG4gICAgLyoqKioqKioqKioqKioqKirmuLjmiI/kuK3nmoTlvLHlvJXlr7zmiYvmjIfmqKHlnZcqKioqKioqKioqKioqKioqKi9cclxuICAgIEhBTkRfU0hPVzogJ0hBTkRfU0hPVycsXHJcbiAgICBIQU5EX0hJREU6ICdIQU5EX0hJREUnLFxyXG4gICAgLyoqKioqKioqKioqKioqKioq5YW25LuW5LqL5Lu2KioqKioqKioqKioqKioqKiovXHJcbiAgICAvLyDmmL7npLrlpZblirHnlYzpnaJcclxuICAgIFNIT1dfUkVXQVJEX1BBTk5FTDogJ1NIT1dfUkVXQVJEX1BBTk5FTCcsXHJcbiAgICAvLyDmkq3mlL7ov57lh7vnibnmlYhcclxuICAgIFBMQVlfQ09NQk9fRUZGRUNUOiAnUExBWV9DT01CT19FRkZFQ1QnLFxyXG4gICAgVVBEQVRFX0NPTUJPX0NPVU5UOiAnVVBEQVRFX0NPTUJPX0NPVU5UJyxcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mgrs/DialogMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6688bgWTe5A9rDjUKIwclVX', 'DialogMgr');
// scripts/mgrs/DialogMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogMgr = void 0;
var App_1 = require("../app/App");
var DialogMgr = /** @class */ (function () {
    function DialogMgr() {
        this._waittingDisplayList = [];
        this._curDisplay = null;
    }
    DialogMgr.getInstance = function () {
        if (DialogMgr._instance == null) {
            DialogMgr._instance = new DialogMgr();
        }
        return DialogMgr._instance;
    };
    DialogMgr.destroyInstance = function () {
        if (DialogMgr._instance) {
            DialogMgr._instance = null;
        }
    };
    DialogMgr.prototype.showDialog = function (name, content, callback, clickCallback) {
        var dialogId = ++DialogMgr._dialogId;
        if (this._curDisplay) {
            this._waittingDisplayList.push({
                dialogId: dialogId,
                name: name,
                content: content,
                callback: callback,
                clickCallback: clickCallback
            });
        }
        else {
            this._curDisplay = {
                dialogId: dialogId,
                name: name,
                content: content,
                callback: callback,
                clickCallback: clickCallback
            };
            App_1.App.uiMgr.openUI(name, function (uiBase) {
                var dialog = uiBase;
                dialog.content = content;
                dialog.dialogId = dialogId;
                dialog.setClickCallback(clickCallback);
                callback && callback(dialog);
            });
        }
        return dialogId;
    };
    DialogMgr.prototype.closeDialog = function (dialog) {
        dialog && this.closeDialogById(dialog.dialogId);
    };
    DialogMgr.prototype.closeDialogById = function (dialogId) {
        var _this = this;
        if (this._curDisplay && this._curDisplay.dialogId == dialogId) {
            App_1.App.uiMgr.closeUI(this._curDisplay.name, true, function () {
                _this._curDisplay = null;
                _this.tryShowNext();
            });
        }
        else {
            for (var i = 0; i < this._waittingDisplayList.length; i++) {
                if (this._waittingDisplayList[i].dialogId == dialogId) {
                    this._waittingDisplayList.splice(i, 1);
                    break;
                }
            }
        }
    };
    DialogMgr.prototype.clearDialogs = function () {
        if (this._curDisplay) {
            App_1.App.uiMgr.closeUI(this._curDisplay.name);
            this._curDisplay = null;
        }
        this._waittingDisplayList = [];
    };
    DialogMgr.prototype.tryShowNext = function () {
        if (this._curDisplay == null && this._waittingDisplayList.length > 0) {
            var cfg_1 = this._waittingDisplayList.shift();
            this._curDisplay = cfg_1;
            App_1.App.uiMgr.openUI(cfg_1.name, function (uiBase) {
                var dialog = uiBase;
                dialog.content = cfg_1.content;
                dialog.dialogId = cfg_1.dialogId;
                dialog.setClickCallback(cfg_1.clickCallback);
                cfg_1.callback && cfg_1.callback(dialog);
            });
        }
    };
    DialogMgr._instance = null;
    DialogMgr._dialogId = 0;
    return DialogMgr;
}());
exports.DialogMgr = DialogMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWdyc1xcRGlhbG9nTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtDQUFpQztBQUtqQztJQUFBO1FBS1kseUJBQW9CLEdBQWUsRUFBRSxDQUFDO1FBQ3RDLGdCQUFXLEdBQVEsSUFBSSxDQUFDO0lBcUZwQyxDQUFDO0lBbkZpQixxQkFBVyxHQUF6QjtRQUNJLElBQUksU0FBUyxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDN0IsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1NBQ3pDO1FBQ0QsT0FBTyxTQUFTLENBQUMsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFYSx5QkFBZSxHQUE3QjtRQUNJLElBQUksU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUNyQixTQUFTLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFTSw4QkFBVSxHQUFqQixVQUFrQixJQUFZLEVBQUUsT0FBZSxFQUFFLFFBQTJDLEVBQUUsYUFBK0M7UUFDekksSUFBTSxRQUFRLEdBQUcsRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDO2dCQUMzQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixhQUFhLEVBQUUsYUFBYTthQUMvQixDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRztnQkFDZixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixhQUFhLEVBQUUsYUFBYTthQUMvQixDQUFBO1lB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bGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcCB9IGZyb20gXCIuLi9hcHAvQXBwXCI7XHJcbmltcG9ydCBEaWFsb2dCYXNlLCB7IERpYWxvZ0NsaWNrVHlwZSB9IGZyb20gXCIuLi91aS9EaWFsb2dCYXNlXCI7XHJcbmltcG9ydCBVSUJhc2UgZnJvbSBcIi4uL3VpL1VJQmFzZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEaWFsb2dNZ3Ige1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogRGlhbG9nTWdyID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3RhdGljIF9kaWFsb2dJZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIF93YWl0dGluZ0Rpc3BsYXlMaXN0OiBBcnJheTxhbnk+ID0gW107XHJcbiAgICBwcml2YXRlIF9jdXJEaXNwbGF5OiBhbnkgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogRGlhbG9nTWdyIHtcclxuICAgICAgICBpZiAoRGlhbG9nTWdyLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIERpYWxvZ01nci5faW5zdGFuY2UgPSBuZXcgRGlhbG9nTWdyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBEaWFsb2dNZ3IuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVzdHJveUluc3RhbmNlKCk6dm9pZCB7XHJcbiAgICAgICAgaWYgKERpYWxvZ01nci5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgRGlhbG9nTWdyLl9pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93RGlhbG9nKG5hbWU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBjYWxsYmFjaz86IChkaWFsb2dCYXNlOiBEaWFsb2dCYXNlKSA9PiB2b2lkLCBjbGlja0NhbGxiYWNrPzogKGNvZGU6IERpYWxvZ0NsaWNrVHlwZSkgPT4gdm9pZCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgZGlhbG9nSWQgPSArK0RpYWxvZ01nci5fZGlhbG9nSWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1ckRpc3BsYXkpIHtcclxuICAgICAgICAgICAgdGhpcy5fd2FpdHRpbmdEaXNwbGF5TGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZ0lkOiBkaWFsb2dJZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxyXG4gICAgICAgICAgICAgICAgY2xpY2tDYWxsYmFjazogY2xpY2tDYWxsYmFja1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJEaXNwbGF5ID0ge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nSWQ6IGRpYWxvZ0lkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogY2FsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICBjbGlja0NhbGxiYWNrOiBjbGlja0NhbGxiYWNrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQXBwLnVpTWdyLm9wZW5VSShuYW1lLCAodWlCYXNlOiBVSUJhc2UpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2cgPSB1aUJhc2UgYXMgRGlhbG9nQmFzZTtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5kaWFsb2dJZCA9IGRpYWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLnNldENsaWNrQ2FsbGJhY2soY2xpY2tDYWxsYmFjayk7IFxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soZGlhbG9nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaWFsb2dJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VEaWFsb2coZGlhbG9nOiBEaWFsb2dCYXNlKTogdm9pZCB7XHJcbiAgICAgICAgZGlhbG9nICYmIHRoaXMuY2xvc2VEaWFsb2dCeUlkKGRpYWxvZy5kaWFsb2dJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlRGlhbG9nQnlJZChkaWFsb2dJZDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1ckRpc3BsYXkgJiYgdGhpcy5fY3VyRGlzcGxheS5kaWFsb2dJZCA9PSBkaWFsb2dJZCkge1xyXG4gICAgICAgICAgICBBcHAudWlNZ3IuY2xvc2VVSSh0aGlzLl9jdXJEaXNwbGF5Lm5hbWUsIHRydWUsICgpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJEaXNwbGF5ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJ5U2hvd05leHQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl93YWl0dGluZ0Rpc3BsYXlMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fd2FpdHRpbmdEaXNwbGF5TGlzdFtpXS5kaWFsb2dJZCA9PSBkaWFsb2dJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3dhaXR0aW5nRGlzcGxheUxpc3Quc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhckRpYWxvZ3MoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1ckRpc3BsYXkpIHtcclxuICAgICAgICAgICAgQXBwLnVpTWdyLmNsb3NlVUkodGhpcy5fY3VyRGlzcGxheS5uYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fY3VyRGlzcGxheSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3dhaXR0aW5nRGlzcGxheUxpc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRyeVNob3dOZXh0KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJEaXNwbGF5ID09IG51bGwgJiYgdGhpcy5fd2FpdHRpbmdEaXNwbGF5TGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNmZyA9IHRoaXMuX3dhaXR0aW5nRGlzcGxheUxpc3Quc2hpZnQoKTtcclxuICAgICAgICAgICAgdGhpcy5fY3VyRGlzcGxheSA9IGNmZztcclxuICAgICAgICAgICAgQXBwLnVpTWdyLm9wZW5VSShjZmcubmFtZSwgKHVpQmFzZTogVUlCYXNlKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nID0gdWlCYXNlIGFzIERpYWxvZ0Jhc2U7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cuY29udGVudCA9IGNmZy5jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLmRpYWxvZ0lkID0gY2ZnLmRpYWxvZ0lkO1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLnNldENsaWNrQ2FsbGJhY2soY2ZnLmNsaWNrQ2FsbGJhY2spOyBcclxuICAgICAgICAgICAgICAgIGNmZy5jYWxsYmFjayAmJiBjZmcuY2FsbGJhY2soZGlhbG9nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mgrs/TrackMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8de10BJ/RdCR5qEhd1E6Ei3', 'TrackMgr');
// scripts/mgrs/TrackMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackMgr = void 0;
var WebViewPlatform_1 = require("../platform/WebViewPlatform");
var TrackMgr = /** @class */ (function () {
    function TrackMgr() {
    }
    TrackMgr.getInstance = function () {
        if (TrackMgr._instance == null) {
            TrackMgr._instance = new TrackMgr();
        }
        return TrackMgr._instance;
    };
    TrackMgr.destroyInstance = function () {
        if (TrackMgr._instance) {
            TrackMgr._instance = null;
        }
    };
    TrackMgr.prototype.track = function (eventName, eventProps) {
        WebViewPlatform_1.default.getInstance().track({
            eventName: eventName,
            props: eventProps
        });
    };
    TrackMgr.prototype.trackMain = function (eventProps) {
        this.track('fruit_main', eventProps);
    };
    /**
     * 关卡
     * @param eventProps
     */
    TrackMgr.prototype.trackGameLevel = function (eventProps) {
        this.track('game_pass', eventProps);
    };
    /**
     * 红包
     * @param eventProps
     */
    TrackMgr.prototype.trackRedPakcet = function (eventProps) {
        this.track('redbag', eventProps);
    };
    /**
     * 技能
     * @param eventProps
     */
    TrackMgr.prototype.trackSkill = function (eventProps) {
        this.track('SkillEvent', eventProps);
    };
    /**
     * 提现
     * @param eventProps
     */
    TrackMgr.prototype.trackCashOut = function (eventProps) {
        this.track('withdraw', eventProps);
    };
    /**
     * 每日提现
     * @param eventProps
     */
    TrackMgr.prototype.trackDailyCashOut = function (eventProps) {
        this.track('dailyWithdraw', eventProps);
    };
    /**
     * 弹窗
     * @param eventProps
     */
    TrackMgr.prototype.trackPopup = function (eventProps) {
        this.track('popshow', eventProps);
    };
    /**
     * 引导
     * @param eventProps
     */
    TrackMgr.prototype.trackGuide = function (eventProps) {
        this.track('guide_main', eventProps);
    };
    /**
     * 弱引导
     * @param eventProps
     */
    TrackMgr.prototype.trackWeakGuide = function (eventProps) {
        this.track('weak_guide', eventProps);
    };
    /**
     * 主界面入口点击
     * @param eventProps
     */
    TrackMgr.prototype.trackEnter = function (eventProps) {
        this.track('enterEvent', eventProps);
    };
    /**
     * 任务
     * @param eventProps
     */
    TrackMgr.prototype.trackTaskAchievement = function (eventProps) {
        this.track('task_achievement', eventProps);
    };
    TrackMgr._instance = null;
    return TrackMgr;
}());
exports.TrackMgr = TrackMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWdyc1xcVHJhY2tNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0RBQTBEO0FBRTFEO0lBQUE7SUE2R0EsQ0FBQztJQXpHaUIsb0JBQVcsR0FBekI7UUFDSSxJQUFJLFFBQVEsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQzVCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztTQUN2QztRQUNELE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBRWEsd0JBQWUsR0FBN0I7UUFDSSxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDcEIsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRU0sd0JBQUssR0FBWixVQUFhLFNBQWlCLEVBQUUsVUFBZTtRQUMzQyx5QkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNoQyxTQUFTLEVBQUUsU0FBUztZQUNwQixLQUFLLEVBQUUsVUFBVTtTQUNwQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBR00sNEJBQVMsR0FBaEIsVUFBaUIsVUFBMEI7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGlDQUFjLEdBQXJCLFVBQXNCLFVBQStCO1FBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxpQ0FBYyxHQUFyQixVQUFzQixVQUErQjtRQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNkJBQVUsR0FBakIsVUFBa0IsVUFBMkI7UUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLCtCQUFZLEdBQW5CLFVBQW9CLFVBQTZCO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxvQ0FBaUIsR0FBeEIsVUFBeUIsVUFBa0M7UUFDdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDZCQUFVLEdBQWpCLFVBQWtCLFVBQTJCO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7O09BR0c7SUFDSSw2QkFBVSxHQUFqQixVQUFrQixVQUEyQjtRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssaUNBQWMsR0FBckIsVUFBc0IsVUFBK0I7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUdEOzs7T0FHRztJQUNJLDZCQUFVLEdBQWpCLFVBQWtCLFVBQTJCO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7O09BR0c7SUFDSSx1Q0FBb0IsR0FBM0IsVUFBNEIsVUFBcUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBMUdjLGtCQUFTLEdBQWEsSUFBSSxDQUFDO0lBMkc5QyxlQUFDO0NBN0dELEFBNkdDLElBQUE7QUE3R1ksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFja1Rhc2tBY2hpZXZlbWVudFByb3BzLCBUcmFja0Nhc2hPdXRQcm9wcywgVHJhY2tEYWlseUNhc2hPdXRQcm9wcywgVHJhY2tFbnRlclByb3BzLCBUcmFja0dhbWVMZXZlbFByb3BzLCBUcmFja0d1aWRlUHJvcHMsIFRyYWNrTWFpblByb3BzLCBUcmFja1BvcHVwUHJvcHMsIFRyYWNrUmVkUGFja2V0UHJvcHMsIFRyYWNrU2tpbGxQcm9wcywgVHJhY2tXZWFrR3VpZGVQcm9wcywgVHJhY2tBbnRpUHJvcHMgfSBmcm9tIFwiLi4vbWlzYy9JbnRlcmZhY2VEZWZcIjtcclxuaW1wb3J0IFdlYlZpZXdQbGF0Zm9ybSBmcm9tIFwiLi4vcGxhdGZvcm0vV2ViVmlld1BsYXRmb3JtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhY2tNZ3Ige1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVHJhY2tNZ3IgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogVHJhY2tNZ3Ige1xyXG4gICAgICAgIGlmIChUcmFja01nci5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBUcmFja01nci5faW5zdGFuY2UgPSBuZXcgVHJhY2tNZ3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFRyYWNrTWdyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlc3Ryb3lJbnN0YW5jZSgpOnZvaWQge1xyXG4gICAgICAgIGlmIChUcmFja01nci5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgVHJhY2tNZ3IuX2luc3RhbmNlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyYWNrKGV2ZW50TmFtZTogc3RyaW5nLCBldmVudFByb3BzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBXZWJWaWV3UGxhdGZvcm0uZ2V0SW5zdGFuY2UoKS50cmFjayh7XHJcbiAgICAgICAgICAgIGV2ZW50TmFtZTogZXZlbnROYW1lLFxyXG4gICAgICAgICAgICBwcm9wczogZXZlbnRQcm9wc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgdHJhY2tNYWluKGV2ZW50UHJvcHM6IFRyYWNrTWFpblByb3BzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFjaygnZnJ1aXRfbWFpbicsIGV2ZW50UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz5Y2hXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRQcm9wcyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRyYWNrR2FtZUxldmVsKGV2ZW50UHJvcHM6IFRyYWNrR2FtZUxldmVsUHJvcHMpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRyYWNrKCdnYW1lX3Bhc3MnLCBldmVudFByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe6ouWMhVxyXG4gICAgICogQHBhcmFtIGV2ZW50UHJvcHMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFja1JlZFBha2NldChldmVudFByb3BzOiBUcmFja1JlZFBhY2tldFByb3BzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFjaygncmVkYmFnJywgZXZlbnRQcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmioDog71cclxuICAgICAqIEBwYXJhbSBldmVudFByb3BzIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdHJhY2tTa2lsbChldmVudFByb3BzOiBUcmFja1NraWxsUHJvcHMpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRyYWNrKCdTa2lsbEV2ZW50JywgZXZlbnRQcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmj5DnjrBcclxuICAgICAqIEBwYXJhbSBldmVudFByb3BzIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdHJhY2tDYXNoT3V0KGV2ZW50UHJvcHM6IFRyYWNrQ2FzaE91dFByb3BzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFjaygnd2l0aGRyYXcnLCBldmVudFByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOavj+aXpeaPkOeOsFxyXG4gICAgICogQHBhcmFtIGV2ZW50UHJvcHMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFja0RhaWx5Q2FzaE91dChldmVudFByb3BzOiBUcmFja0RhaWx5Q2FzaE91dFByb3BzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFjaygnZGFpbHlXaXRoZHJhdycsIGV2ZW50UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5by556qXXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRQcm9wcyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRyYWNrUG9wdXAoZXZlbnRQcm9wczogVHJhY2tQb3B1cFByb3BzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFjaygncG9wc2hvdycsIGV2ZW50UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byV5a+8XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRQcm9wcyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRyYWNrR3VpZGUoZXZlbnRQcm9wczogVHJhY2tHdWlkZVByb3BzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFjaygnZ3VpZGVfbWFpbicsIGV2ZW50UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byx5byV5a+8XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRQcm9wcyBcclxuICAgICAqL1xyXG4gICAgIHB1YmxpYyB0cmFja1dlYWtHdWlkZShldmVudFByb3BzOiBUcmFja1dlYWtHdWlkZVByb3BzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFjaygnd2Vha19ndWlkZScsIGV2ZW50UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4u+eVjOmdouWFpeWPo+eCueWHu1xyXG4gICAgICogQHBhcmFtIGV2ZW50UHJvcHMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFja0VudGVyKGV2ZW50UHJvcHM6IFRyYWNrRW50ZXJQcm9wcyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHJhY2soJ2VudGVyRXZlbnQnLCBldmVudFByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS7u+WKoVxyXG4gICAgICogQHBhcmFtIGV2ZW50UHJvcHMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFja1Rhc2tBY2hpZXZlbWVudChldmVudFByb3BzOiBUcmFja1Rhc2tBY2hpZXZlbWVudFByb3BzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFjaygndGFza19hY2hpZXZlbWVudCcsIGV2ZW50UHJvcHMpO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mgrs/UICfgMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'addebXP175LN4CBp6Rcj7IB', 'UICfgMgr');
// scripts/mgrs/UICfgMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UICfgMgr = void 0;
var UICfgMgr = /** @class */ (function () {
    function UICfgMgr() {
        this._cfgs = cc.js.createMap();
    }
    UICfgMgr.getInstance = function () {
        if (UICfgMgr._instance == null) {
            UICfgMgr._instance = new UICfgMgr();
        }
        return UICfgMgr._instance;
    };
    UICfgMgr.destroyInstance = function () {
        if (UICfgMgr._instance) {
            UICfgMgr._instance = null;
        }
    };
    UICfgMgr.prototype.getCfg = function (name) {
        return this._cfgs[name];
    };
    UICfgMgr.prototype.addCfg = function (name, cfg) {
        if (!this._cfgs[name]) {
            this._cfgs[name] = cfg;
        }
        else {
            cc.log('ui配置已存在');
        }
    };
    UICfgMgr.prototype.initByCfg = function (cfg) {
        for (var key in cfg) {
            if (Object.prototype.hasOwnProperty.call(cfg, key)) {
                this.addCfg(key, cfg[key]);
            }
        }
    };
    UICfgMgr._instance = null;
    return UICfgMgr;
}());
exports.UICfgMgr = UICfgMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWdyc1xcVUlDZmdNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUlZLFVBQUssR0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBa0M5QyxDQUFDO0lBaENpQixvQkFBVyxHQUF6QjtRQUNJLElBQUksUUFBUSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDNUIsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFFYSx3QkFBZSxHQUE3QjtRQUNJLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUNwQixRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFTSx5QkFBTSxHQUFiLFVBQWMsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLHlCQUFNLEdBQWIsVUFBYyxJQUFZLEVBQUUsR0FBUTtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUMxQjthQUFNO1lBQ0gsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFFTSw0QkFBUyxHQUFoQixVQUFpQixHQUFRO1FBQ3JCLEtBQUssSUFBTSxHQUFHLElBQUksR0FBRyxFQUFFO1lBQ25CLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDN0I7U0FDSjtJQUNMLENBQUM7SUFuQ2Msa0JBQVMsR0FBYSxJQUFJLENBQUM7SUFvQzlDLGVBQUM7Q0F0Q0QsQUFzQ0MsSUFBQTtBQXRDWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVSUNmZ01nciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBVSUNmZ01nciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfY2ZnczogT2JqZWN0ID0gY2MuanMuY3JlYXRlTWFwKCk7XHJcbiAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFVJQ2ZnTWdyIHtcclxuICAgICAgICBpZiAoVUlDZmdNZ3IuX2luc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgVUlDZmdNZ3IuX2luc3RhbmNlID0gbmV3IFVJQ2ZnTWdyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBVSUNmZ01nci5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkZXN0cm95SW5zdGFuY2UoKTp2b2lkIHtcclxuICAgICAgICBpZiAoVUlDZmdNZ3IuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFVJQ2ZnTWdyLl9pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDZmcobmFtZTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2Znc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQ2ZnKG5hbWU6IHN0cmluZywgY2ZnOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2NmZ3NbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fY2Znc1tuYW1lXSA9IGNmZztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coJ3Vp6YWN572u5bey5a2Y5ZyoJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0QnlDZmcoY2ZnOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjZmcpIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjZmcsIGtleSkpIHtcclxuICAgICAgICAgICAgICAgdGhpcy5hZGRDZmcoa2V5LCBjZmdba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mgrs/SoundMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6f4cG1pyJGw6QCGdivvK5t', 'SoundMgr');
// scripts/mgrs/SoundMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundMgr = void 0;
var LocalStorageIDCfg_1 = require("../cfg/LocalStorageIDCfg");
var SoundMgr = /** @class */ (function () {
    function SoundMgr() {
        this._isMusic = true;
        this._isSound = true;
        this._musicUrl = null;
        this._musicVolume = 1;
    }
    SoundMgr.getInstance = function () {
        if (SoundMgr._instance == null) {
            SoundMgr._instance = new SoundMgr();
            SoundMgr._instance.init();
        }
        return SoundMgr._instance;
    };
    SoundMgr.destroyInstance = function () {
        if (SoundMgr._instance) {
            SoundMgr._instance = null;
        }
    };
    SoundMgr.prototype.init = function () {
        var str = cc.sys.localStorage.getItem(LocalStorageIDCfg_1.LocalStorageIDCfg.GAME_MUSIC_SOUND);
        if (str) {
            try {
                var data = JSON.parse(str);
                this._isMusic = data.music == false ? false : true;
                this._isSound = data.sound == false ? false : true;
            }
            catch (err) {
                this.save();
            }
        }
        else {
            this.save();
        }
    };
    SoundMgr.prototype.save = function () {
        cc.sys.localStorage.setItem(LocalStorageIDCfg_1.LocalStorageIDCfg.GAME_MUSIC_SOUND, JSON.stringify({
            music: this.isMusic,
            sound: this.isSound
        }));
    };
    Object.defineProperty(SoundMgr.prototype, "isMusic", {
        get: function () {
            return this._isMusic;
        },
        set: function (isMusic) {
            if (this._isMusic != isMusic) {
                this._isMusic = isMusic;
                this._isMusic ? this.playMusic(this._musicUrl, true, this._musicVolume) : this.stopMusic();
                this.save();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundMgr.prototype, "isSound", {
        get: function () {
            return this._isSound;
        },
        set: function (isSound) {
            if (this._isSound != isSound) {
                this._isSound = isSound;
                if (!isSound) {
                    this.stopAllEffects();
                }
                this.save();
            }
        },
        enumerable: false,
        configurable: true
    });
    SoundMgr.prototype.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    SoundMgr.prototype.playMusic = function (url, loop, volume) {
        if (loop === void 0) { loop = true; }
        if (volume === void 0) { volume = 1; }
        this._musicUrl = url;
        this._musicVolume = volume;
        var clip = cc.loader.getRes(url, cc.AudioClip);
        if (clip && this.isMusic) {
            cc.audioEngine.playMusic(clip, loop);
            cc.audioEngine.setMusicVolume(volume);
        }
    };
    SoundMgr.prototype.stopEffect = function (id) {
        cc.audioEngine.stop(id);
    };
    SoundMgr.prototype.stopAllEffects = function () {
        cc.audioEngine.stopAllEffects();
    };
    SoundMgr.prototype.playEffect = function (url, loop, volume) {
        if (loop === void 0) { loop = false; }
        if (volume === void 0) { volume = 1; }
        var clip = cc.loader.getRes(url, cc.AudioClip);
        if (clip && this.isSound) {
            return cc.audioEngine.play(clip, loop, volume);
        }
    };
    SoundMgr.prototype.playClickSound = function () {
        this.playEffect('common/sounds/click');
    };
    SoundMgr._instance = null;
    return SoundMgr;
}());
exports.SoundMgr = SoundMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWdyc1xcU291bmRNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQTZEO0FBRzdEO0lBQUE7UUFJWSxhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUyxHQUFXLElBQUksQ0FBQztRQUN6QixpQkFBWSxHQUFXLENBQUMsQ0FBQztJQWtHckMsQ0FBQztJQS9GaUIsb0JBQVcsR0FBekI7UUFDSSxJQUFJLFFBQVEsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQzVCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUNwQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFFYSx3QkFBZSxHQUE3QjtRQUNJLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUNwQixRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFTyx1QkFBSSxHQUFaO1FBQ0ksSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFDQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUUsSUFBSSxHQUFHLEVBQUU7WUFDTCxJQUFHO2dCQUNDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMs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QUM7UUFDL0QsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN0QixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbEQ7SUFDTCxDQUFDO0lBRU0saUNBQWMsR0FBckI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQXRHYyxrQkFBUyxHQUFhLElBQUksQ0FBQztJQXdHOUMsZUFBQztDQTFHRCxBQTBHQyxJQUFBO0FBMUdZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYWxTdG9yYWdlSURDZmcgfSBmcm9tIFwiLi4vY2ZnL0xvY2FsU3RvcmFnZUlEQ2ZnXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNvdW5kTWdyIHtcclxuICAgXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFNvdW5kTWdyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9pc011c2ljOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX2lzU291bmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgX211c2ljVXJsOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfbXVzaWNWb2x1bWU6IG51bWJlciA9IDE7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogU291bmRNZ3Ige1xyXG4gICAgICAgIGlmIChTb3VuZE1nci5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBTb3VuZE1nci5faW5zdGFuY2UgPSBuZXcgU291bmRNZ3IoKTtcclxuICAgICAgICAgICAgU291bmRNZ3IuX2luc3RhbmNlLmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNvdW5kTWdyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlc3Ryb3lJbnN0YW5jZSgpOnZvaWQge1xyXG4gICAgICAgIGlmIChTb3VuZE1nci5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgU291bmRNZ3IuX2luc3RhbmNlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShMb2NhbFN0b3JhZ2VJRENmZy5HQU1FX01VU0lDX1NPVU5EKTtcclxuICAgICAgICBpZiAoc3RyKSB7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHN0cik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc011c2ljID0gZGF0YS5tdXNpYyA9PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzU291bmQgPSBkYXRhLnNvdW5kID09IGZhbHNlID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlKCk6IHZvaWQge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShMb2NhbFN0b3JhZ2VJRENmZy5HQU1FX01VU0lDX1NPVU5ELCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIG11c2ljOiB0aGlzLmlzTXVzaWMsXHJcbiAgICAgICAgICAgIHNvdW5kOiB0aGlzLmlzU291bmRcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpc011c2ljKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc011c2ljO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgaXNNdXNpYyhpc011c2ljOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzTXVzaWMgIT0gaXNNdXNpYykge1xyXG4gICAgICAgICAgICB0aGlzLl9pc011c2ljID0gaXNNdXNpYztcclxuICAgICAgICAgICAgdGhpcy5faXNNdXNpYyA/IHRoaXMucGxheU11c2ljKHRoaXMuX211c2ljVXJsLCB0cnVlLCB0aGlzLl9tdXNpY1ZvbHVtZSkgOiB0aGlzLnN0b3BNdXNpYygpO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpc1NvdW5kKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgaXNTb3VuZChpc1NvdW5kOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzU291bmQgIT0gaXNTb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc1NvdW5kID0gaXNTb3VuZDtcclxuICAgICAgICAgICAgaWYgKCFpc1NvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wTXVzaWMoKTogdm9pZCB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXlNdXNpYyh1cmw6IHN0cmluZywgbG9vcDogYm9vbGVhbiA9IHRydWUsIHZvbHVtZTogbnVtYmVyID0gMSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX211c2ljVXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMuX211c2ljVm9sdW1lID0gdm9sdW1lO1xyXG4gICAgICAgIGNvbnN0IGNsaXA6IGNjLkF1ZGlvQ2xpcCA9IGNjLmxvYWRlci5nZXRSZXModXJsLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgIGlmIChjbGlwICYmIHRoaXMuaXNNdXNpYykge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCwgbG9vcCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHZvbHVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wRWZmZWN0KGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcEFsbEVmZmVjdHMoKTogdm9pZCB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgIH0gICBcclxuXHJcbiAgICBwdWJsaWMgcGxheUVmZmVjdCh1cmw6IHN0cmluZywgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCB2b2x1bWU6IG51bWJlciA9IDEpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGNsaXA6IGNjLkF1ZGlvQ2xpcCA9IGNjLmxvYWRlci5nZXRSZXModXJsLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgIGlmIChjbGlwICYmIHRoaXMuaXNTb3VuZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBsb29wLCB2b2x1bWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheUNsaWNrU291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGF5RWZmZWN0KCdjb21tb24vc291bmRzL2NsaWNrJyk7XHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/platform/HttpClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5e2f0OUnY5EBJe9sWFvGKNb', 'HttpClient');
// scripts/platform/HttpClient.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClient = exports.NetworkType = exports.HttpErrorType = void 0;
var object_utils_1 = require("../utils/object-utils");
var Config_1 = require("./Config");
var HttpErrorType;
(function (HttpErrorType) {
    /**错误的Url地方 */
    HttpErrorType[HttpErrorType["UrlError"] = 0] = "UrlError";
    /**超时 */
    HttpErrorType[HttpErrorType["TimeOut"] = 1] = "TimeOut";
    /**请求错误 */
    HttpErrorType[HttpErrorType["RequestError"] = 2] = "RequestError";
    /**请求终止 */
    HttpErrorType[HttpErrorType["Abort"] = 3] = "Abort";
})(HttpErrorType = exports.HttpErrorType || (exports.HttpErrorType = {}));
/**网络类型 */
var NetworkType;
(function (NetworkType) {
    NetworkType["NETWORK_ETHERNET"] = "NETWORK_ETHERNET";
    NetworkType["NETWORK_WIFI"] = "NETWORK_WIFI";
    NetworkType["NETWORK_4G"] = "4G";
    NetworkType["NETWORK_3G"] = "3G";
    NetworkType["NETWORK_2G"] = "2G";
    NetworkType["NETWORK_UNKNOWN"] = "UNKNOWN";
    /**无网络 */
    NetworkType["NETWORK_NO"] = "";
})(NetworkType = exports.NetworkType || (exports.NetworkType = {}));
var httpHost = "http://composite.qufenqian-webgame.web-application.gz.vipc.me";
var httpClient = /** @class */ (function () {
    function httpClient() {
    }
    httpClient.getInstance = function () {
        if (httpClient._instance == null) {
            httpClient._instance = new httpClient();
        }
        return httpClient._instance;
    };
    httpClient.destroyInstance = function () {
        if (httpClient._instance) {
            httpClient._instance = null;
        }
    };
    httpClient.prototype.httpPost = function (url, fData, callback, reConneted) {
        if (fData === void 0) { fData = {}; }
        if (reConneted === void 0) { reConneted = true; }
        var _a = ((typeof callback == "function" && (callback = { click: callback })) || callback), success = _a.success, fail = _a.fail, final = _a.final, timeOut = _a.timeOut;
        var param = { url: url.url, param: fData };
        var now = Date.now();
        var finalData = Config_1.Config.PHEAD;
        Object.assign(Config_1.Config.PHEAD, fData);
        var finalurl = httpHost + url.url;
        cc.log("网页请求->>", param);
        this.request(finalurl, finalData, function (_success) {
            if (_success && _success.statuscode === 0) {
                success && success(_success.data);
                final && final(_success);
            }
            else {
                fail && fail(_success);
                final && final(_success);
            }
            cc.log("网页请求<<-", param, object_utils_1.objectUtils.cloneObject(_success));
        }, function (_fail) {
            fail && fail(_fail);
            final && final(_fail);
            cc.log("网页请求<<-", param, _fail);
        }, function (_timeOut) {
            timeOut && timeOut(_timeOut);
            final && final(_timeOut);
        }, reConneted);
    };
    /**cocos自带http */
    httpClient.prototype.request = function (url, body, _success, _fail, _timeOut, reConneted) {
        if (reConneted === void 0) { reConneted = true; }
        var xhr = new XMLHttpRequest();
        var timer = setTimeout(function () {
            //Manager.wait.show(url)
        }, 3 * 1000);
        var clearTimer = function () {
            clearTimeout(timer);
            //Manager.wait.hide(url)
        };
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                clearTimer();
                if (xhr.status >= 200 && xhr.status < 400) {
                    var res = JSON.parse(xhr.responseText);
                    _success(res);
                }
                else {
                    if (xhr.responseText) {
                        var res = JSON.parse(xhr.responseText);
                        _fail(res);
                    }
                    else {
                        _fail({ type: HttpErrorType.RequestError, reason: "状态异常" });
                    }
                }
            }
        };
        xhr.onabort = function (e) {
            clearTimer();
            console.log(e);
            try {
                if (_fail)
                    _fail({ type: HttpErrorType.Abort, reason: '请求被中止' });
            }
            catch (error) {
                error(error);
            }
        };
        xhr.ontimeout = function (e) {
            clearTimer();
            xhr.abort(); //网络超时，断开连接
            // if (reConneted)
            //     Manager.reConneted.show(() => this.request(url, body, _success, _fail, _timeOut, reConneted))
            if (CC_DEBUG)
                console.warn("request timeout : " + url);
            try {
                if (_timeOut)
                    _timeOut({ type: HttpErrorType.TimeOut, reason: "连接超时" });
            }
            catch (error) {
                error(error);
            }
        };
        xhr.onerror = function (e) {
            clearTimer();
            console.error("request error : " + url + " ");
            // if (reConneted)
            //     Manager.reConneted.show(() => this.request(url, body, _success, _fail, _timeOut, reConneted))
            try {
                if (_fail)
                    _fail({ type: HttpErrorType.RequestError, reason: "请求错误" });
            }
            catch (error) {
                error(error);
            }
        };
        xhr.open("POST", url);
        xhr.timeout = 10 * 1000; //超时10秒
        xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        xhr.send(JSON.stringify(body));
    };
    httpClient._instance = null;
    return httpClient;
}());
exports.httpClient = httpClient;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxhdGZvcm1cXEh0dHBDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQW9EO0FBQ3BELG1DQUFrQztBQUdsQyxJQUFZLGFBVVg7QUFWRCxXQUFZLGFBQWE7SUFDckIsY0FBYztJQUNkLHlEQUFRLENBQUE7SUFDUixRQUFRO0lBQ1IsdURBQU8sQ0FBQTtJQUNQLFVBQVU7SUFDVixpRUFBWSxDQUFBO0lBQ1osVUFBVTtJQUNWLG1EQUFLLENBQUE7QUFFVCxDQUFDLEVBVlcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFVeEI7QUFDRCxVQUFVO0FBQ1YsSUFBWSxXQVNYO0FBVEQsV0FBWSxXQUFXO0lBQ25CLG9EQUFxQyxDQUFBO0lBQ3JDLDRDQUE2QixDQUFBO0lBQzdCLGdDQUFpQixDQUFBO0lBQ2pCLGdDQUFpQixDQUFBO0lBQ2pCLGdDQUFpQixDQUFBO0lBQ2pCLDBDQUEyQixDQUFBO0lBQzNCLFNBQVM7SUFDVCw4QkFBZSxDQUFBO0FBQ25CLENBQUMsRUFUVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQVN0QjtBQU1ELElBQUksUUFBUSxHQUFHLCtEQUErRCxDQUFBO0FBRTlFO0lBQUE7SUFrSUEsQ0FBQztJQWhJaUIsc0JBQVcsR0FBekI7UUFDSSxJQUFJLFVBQVUsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQzlCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztTQUMzQztRQUNELE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBRWEsMEJBQWUsR0FBN0I7UUFDSSxJQUFJLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBR00sNkJBQVEsR0FBZixVQUFnQixHQUFrQixFQUM5QixLQUFVLEVBQ1YsUUFLWSxFQUNa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WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDZjtRQUVMLENBQUMsQ0FBQztRQUNGLEdBQUcsQ0FBQyxPQUFPLEdBQUcsVUFBQyxDQUFDO1lBQ1osVUFBVSxFQUFFLENBQUM7WUFFYixPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFtQixHQUFHLE1BQUcsQ0FBQyxDQUFDO1lBQ3pDLGtCQUFrQjtZQUNsQixvR0FBb0c7WUFDcEcsSUFBSTtnQkFDQSxJQUFJLEtBQUs7b0JBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7YUFDMUU7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEI7UUFDTCxDQUFDLENBQUM7UUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN0QixHQUFHLENBQUMsT0FBTyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPO1FBQ2hDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztRQUN2RSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVuQyxDQUFDO0lBL0hjLG9CQUFTLEdBQWUsSUFBSSxDQUFDO0lBaUloRCxpQkFBQztDQWxJRCxBQWtJQyxJQUFBO0FBbElZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb2JqZWN0VXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvb2JqZWN0LXV0aWxzXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCB7IEh0dHBVcmxDb25maWcgfSBmcm9tIFwiLi9IdHRwVXJsXCI7XG5cbmV4cG9ydCBlbnVtIEh0dHBFcnJvclR5cGUge1xuICAgIC8qKumUmeivr+eahFVybOWcsOaWuSAqL1xuICAgIFVybEVycm9yLFxuICAgIC8qKui2heaXtiAqL1xuICAgIFRpbWVPdXQsXG4gICAgLyoq6K+35rGC6ZSZ6K+vICovXG4gICAgUmVxdWVzdEVycm9yLFxuICAgIC8qKuivt+axgue7iOatoiAqL1xuICAgIEFib3J0LFxuXG59XG4vKirnvZHnu5znsbvlnosgKi9cbmV4cG9ydCBlbnVtIE5ldHdvcmtUeXBlIHtcbiAgICBORVRXT1JLX0VUSEVSTkVUID0gJ05FVFdPUktfRVRIRVJORVQnLFxuICAgIE5FVFdPUktfV0lGSSA9ICdORVRXT1JLX1dJRkknLFxuICAgIE5FVFdPUktfNEcgPSAnNEcnLFxuICAgIE5FVFdPUktfM0cgPSAnM0cnLFxuICAgIE5FVFdPUktfMkcgPSAnMkcnLFxuICAgIE5FVFdPUktfVU5LTk9XTiA9ICdVTktOT1dOJyxcbiAgICAvKirml6DnvZHnu5wgKi9cbiAgICBORVRXT1JLX05PID0gJydcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSHR0cEVycm9yIHtcbiAgICB0eXBlOiBIdHRwRXJyb3JUeXBlLFxuICAgIHJlYXNvbjogYW55XG59XG5cbmxldCBodHRwSG9zdCA9IFwiaHR0cDovL2NvbXBvc2l0ZS5xdWZlbnFpYW4td2ViZ2FtZS53ZWItYXBwbGljYXRpb24uZ3oudmlwYy5tZVwiXG5cbmV4cG9ydCBjbGFzcyBodHRwQ2xpZW50IHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IGh0dHBDbGllbnQgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogaHR0cENsaWVudCB7XG4gICAgICAgIGlmIChodHRwQ2xpZW50Ll9pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBodHRwQ2xpZW50Ll9pbnN0YW5jZSA9IG5ldyBodHRwQ2xpZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGh0dHBDbGllbnQuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGVzdHJveUluc3RhbmNlKCk6IHZvaWQge1xuICAgICAgICBpZiAoaHR0cENsaWVudC5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIGh0dHBDbGllbnQuX2luc3RhbmNlID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcHVibGljIGh0dHBQb3N0KHVybDogSHR0cFVybENvbmZpZyxcbiAgICAgICAgZkRhdGEgPSB7fSxcbiAgICAgICAgY2FsbGJhY2s6IHwge1xuICAgICAgICAgICAgc3VjY2Vzcz86IEZ1bmN0aW9uLFxuICAgICAgICAgICAgdGltZU91dD86IEZ1bmN0aW9uLFxuICAgICAgICAgICAgZmFpbD86IEZ1bmN0aW9uLFxuICAgICAgICAgICAgZmluYWw/OiBGdW5jdGlvbixcbiAgICAgICAgfSB8IEZ1bmN0aW9uLFxuICAgICAgICByZUNvbm5ldGVkOiBib29sZWFuID0gdHJ1ZSkge1xuXG4gICAgICAgIGNvbnN0IHsgc3VjY2VzcywgZmFpbCwgZmluYWwsIHRpbWVPdXQgfSA9IDxhbnk+KCh0eXBlb2YgY2FsbGJhY2sgPT0gXCJmdW5jdGlvblwiICYmICgoPGFueT5jYWxsYmFjaykgPSB7IGNsaWNrOiBjYWxsYmFjayB9KSkgfHwgY2FsbGJhY2spO1xuICAgICAgICBjb25zdCBwYXJhbSA9IHsgdXJsOiB1cmwudXJsLCBwYXJhbTogZkRhdGEgfVxuXG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBmaW5hbERhdGEgPSBDb25maWcuUEhFQUQ7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oQ29uZmlnLlBIRUFELCBmRGF0YSk7XG4gICAgICAgIGNvbnN0IGZpbmFsdXJsID0gaHR0cEhvc3QgKyB1cmwudXJsO1xuICAgICAgICBjYy5sb2coXCLnvZHpobXor7fmsYItPj5cIiwgcGFyYW0pXG4gICAgICAgIHRoaXMucmVxdWVzdChmaW5hbHVybCwgZmluYWxEYXRhLFxuICAgICAgICAgICAgX3N1Y2Nlc3MgPT4geyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoX3N1Y2Nlc3MgJiYgX3N1Y2Nlc3Muc3RhdHVzY29kZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzICYmIHN1Y2Nlc3MoX3N1Y2Nlc3MuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsICYmIGZpbmFsKF9zdWNjZXNzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmYWlsICYmIGZhaWwoX3N1Y2Nlc3MpO1xuICAgICAgICAgICAgICAgICAgICBmaW5hbCAmJiBmaW5hbChfc3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIue9kemhteivt+axgjw8LVwiLCBwYXJhbSwgb2JqZWN0VXRpbHMuY2xvbmVPYmplY3QoX3N1Y2Nlc3MpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9mYWlsID0+IHsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZmFpbCAmJiBmYWlsKF9mYWlsKTtcbiAgICAgICAgICAgICAgICBmaW5hbCAmJiBmaW5hbChfZmFpbCk7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwi572R6aG16K+35rGCPDwtXCIsIHBhcmFtLCBfZmFpbClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfdGltZU91dCA9PiB7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRpbWVPdXQgJiYgdGltZU91dChfdGltZU91dCk7XG4gICAgICAgICAgICAgICAgZmluYWwgJiYgZmluYWwoX3RpbWVPdXQpO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVDb25uZXRlZFxuICAgICAgICApXG4gICAgfVxuXG4gICAgLyoqY29jb3Poh6rluKZodHRwICovXG4gICAgcHJpdmF0ZSByZXF1ZXN0KHVybDogc3RyaW5nLCBib2R5LCBfc3VjY2VzczogKGRhdGE6IGFueSkgPT4gdm9pZCwgX2ZhaWw/OiAoZXJyb3JEYXRhOiBIdHRwRXJyb3IpID0+IHZvaWQsIF90aW1lT3V0PzogKGVycm9yRGF0YTogSHR0cEVycm9yKSA9PiB2b2lkLCByZUNvbm5ldGVkOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvL01hbmFnZXIud2FpdC5zaG93KHVybClcbiAgICAgICAgfSwgMyAqIDEwMDApO1xuICAgICAgICBjb25zdCBjbGVhclRpbWVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIC8vTWFuYWdlci53YWl0LmhpZGUodXJsKVxuICAgICAgICB9XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgX3N1Y2Nlc3MocmVzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlc3BvbnNlVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZmFpbChyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2ZhaWwoeyB0eXBlOiBIdHRwRXJyb3JUeXBlLlJlcXVlc3RFcnJvciwgcmVhc29uOiBcIueKtuaAgeW8guW4uFwiIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgeGhyLm9uYWJvcnQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lcigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9mYWlsKSBfZmFpbCh7IHR5cGU6IEh0dHBFcnJvclR5cGUuQWJvcnQsIHJlYXNvbjogJ+ivt+axguiiq+S4reatoicgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGVycm9yKGVycm9yKVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHhoci5vbnRpbWVvdXQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lcigpO1xuICAgICAgICAgICAgeGhyLmFib3J0KCk7Ly/nvZHnu5zotoXml7bvvIzmlq3lvIDov57mjqVcbiAgICAgICAgICAgIC8vIGlmIChyZUNvbm5ldGVkKVxuICAgICAgICAgICAgLy8gICAgIE1hbmFnZXIucmVDb25uZXRlZC5zaG93KCgpID0+IHRoaXMucmVxdWVzdCh1cmwsIGJvZHksIF9zdWNjZXNzLCBfZmFpbCwgX3RpbWVPdXQsIHJlQ29ubmV0ZWQpKVxuICAgICAgICAgICAgaWYgKENDX0RFQlVHKSBjb25zb2xlLndhcm4oYHJlcXVlc3QgdGltZW91dCA6ICR7dXJsfWApO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX3RpbWVPdXQpIF90aW1lT3V0KHsgdHlwZTogSHR0cEVycm9yVHlwZS5UaW1lT3V0LCByZWFzb246IFwi6L+e5o6l6LaF5pe2XCIgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGVycm9yKGVycm9yKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG4gICAgICAgIHhoci5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZXIoKTtcblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgcmVxdWVzdCBlcnJvciA6ICR7dXJsfSBgKTtcbiAgICAgICAgICAgIC8vIGlmIChyZUNvbm5ldGVkKVxuICAgICAgICAgICAgLy8gICAgIE1hbmFnZXIucmVDb25uZXRlZC5zaG93KCgpID0+IHRoaXMucmVxdWVzdCh1cmwsIGJvZHksIF9zdWNjZXNzLCBfZmFpbCwgX3RpbWVPdXQsIHJlQ29ubmV0ZWQpKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2ZhaWwpIF9mYWlsKHsgdHlwZTogSHR0cEVycm9yVHlwZS5SZXF1ZXN0RXJyb3IsIHJlYXNvbjogXCLor7fmsYLplJnor69cIiB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCk7XG4gICAgICAgIHhoci50aW1lb3V0ID0gMTAgKiAxMDAwOyAvL+i2heaXtjEw56eSXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04XCIpO1xuICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShib2R5KSk7XG5cbiAgICB9XG5cbn1cblxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/platform/WebViewPlatform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0a04gRMd5HFoO9o0f5UfoD', 'WebViewPlatform');
// scripts/platform/WebViewPlatform.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebViewPlatform = /** @class */ (function () {
    function WebViewPlatform() {
    }
    WebViewPlatform.getInstance = function () {
        if (WebViewPlatform._instance == null) {
            WebViewPlatform._instance = new WebViewPlatform();
        }
        return WebViewPlatform._instance;
    };
    /**JS调用 */
    WebViewPlatform.prototype.jsCall = function (methodName, args, cb) {
        cc.log("调用原生方法" + methodName, args);
        var info = window["Xmiles"] && window["Xmiles"][methodName] && window["Xmiles"][methodName](JSON.stringify(args));
        cc.log("原生方法返回值", info);
        return info;
    };
    /**
    * 与SDK交互通信
    * @param funcName 方法名
    * @param params 参数
    * @param callback 回调
    */
    WebViewPlatform.prototype.call = function (funcName, params, callback) {
        return this.callWebView(funcName, params, callback);
    };
    ;
    WebViewPlatform.prototype.callWebView = function (methodName, args, cb) {
        var ret = '';
        if (typeof args == 'function') {
            cb = args;
            args = {};
        }
        if (typeof cb == 'function') {
            window['dscb'] = window['dscb'] || 0;
            var cbName = 'dscb' + window['dscb']++;
            window[cbName] = cb;
            args['_dscbstub'] = cbName;
        }
        args = JSON.stringify(args || {});
        cc.log("原生调用 _methodName: " + methodName + " args: " + args);
        if (window['_dswk']) {
            ret = prompt(window['_dswk'] + methodName, args);
        }
        else {
            if (typeof window['_dsbridge'] == 'function') {
                ret = window['_dsbridge'](methodName, args);
            }
            else if (window['_dsbridge']) {
                ret = window['_dsbridge'].call(methodName, args);
            }
            else {
                cc.log('找不到_dsbridge');
                this.callBrowser(methodName, args);
            }
        }
        return ret;
    };
    ;
    WebViewPlatform.prototype.callBrowser = function (method, args) {
        if (method == 'launch') {
            var object = JSON.parse(args);
            var param = object.param;
            var html = this.getParameterByName(param, 'htmlUrl');
            location.href = html;
        }
    };
    ;
    WebViewPlatform.prototype.getParameterByName = function (url, name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(url);
        return results == null ? "" : decodeURIComponent(results[1]);
    };
    ;
    WebViewPlatform.prototype.getQueryString = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return unescape(r[2]);
        return null;
    };
    WebViewPlatform.prototype.getHost = function () {
        return this.call("getHost");
    };
    WebViewPlatform.prototype.showNoNetworkDialog = function () {
        this.call("showNoNetworkDialog");
    };
    WebViewPlatform.prototype.getNotchHeight = function () {
        var str = this.call("getNotchHeight");
        return JSON.parse(str);
    };
    WebViewPlatform.prototype.getStatusBarHeight = function () {
        var str = this.call("getStatusBarHeight");
        return JSON.parse(str);
    };
    WebViewPlatform.prototype.finishCocosLaunch = function () {
        this.call("finishCocosLaunch");
    };
    WebViewPlatform.prototype.bind = function (cb) {
        this.call('bind', cb);
    };
    WebViewPlatform.prototype.isTest = function () {
        return 'true' === (this.call("isTest"));
    };
    WebViewPlatform.prototype.enableOnResumeOnPause = function (enable) {
        this.call('enableOnResumeOnPause', { enable: enable });
    };
    WebViewPlatform.prototype.launchH5Page = function (url, title) {
        this.call('launchH5Page', { url: url, title: title });
    };
    WebViewPlatform.prototype.launchPromoteLinkPage = function (taskId) {
        this.call('launchPromoteLinkPage', { taskId: taskId });
    };
    /**
     * 提交埋点
     * @param obj 神策参数
     * @param callback 回调
     */
    WebViewPlatform.prototype.track = function (obj, callback) {
        this.jsCall('track', obj, callback);
    };
    WebViewPlatform._instance = null;
    return WebViewPlatform;
}());
exports.default = WebViewPlatform;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxhdGZvcm1cXFdlYlZpZXdQbGF0Zm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFtSUEsQ0FBQztJQWhJaUIsMkJBQVcsR0FBekI7UUFDSSxJQUFJLGVBQWUsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ25DLGVBQWUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztTQUNyRDtRQUNELE9BQU8sZUFBZSxDQUFDLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBSUQsVUFBVTtJQUNGLGdDQUFNLEdBQWQsVUFBZSxVQUFrQixFQUFFLElBQUksRUFBRSxFQUFHO1FBQ3hDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNuQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDakgsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdkIsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDRiw4QkFBSSxHQUFKLFVBQUssUUFBZ0IsRUFBRSxNQUFZLEVBQUUsUUFBbUI7UUFDcEQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUFBLENBQUM7SUFFTSxxQ0FBVyxHQUFuQixVQUFvQixVQUFrQixFQUFFLElBQUksRUFBRSxFQUFHO1FBQzdDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksT0FBTyxJQUFJ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QyxDQUFBO0lBQzFELENBQUM7SUFDRCxzQ0FBWSxHQUFaLFVBQWEsR0FBVyxFQUFFLEtBQWE7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBQ3pELENBQUM7SUFDRCwrQ0FBcUIsR0FBckIsVUFBc0IsTUFBYztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDMUQsQ0FBQztJQUVEOzs7O09BSUc7SUFDRiwrQkFBSyxHQUFMLFVBQU0sR0FBUSxFQUFFLFFBQW1CO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBaEljLHlCQUFTLEdBQW9CLElBQUksQ0FBQztJQWtJckQsc0JBQUM7Q0FuSUQsQUFtSUMsSUFBQTtrQkFuSW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJWaWV3UGxhdGZvcm0ge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBXZWJWaWV3UGxhdGZvcm0gPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogV2ViVmlld1BsYXRmb3JtIHtcclxuICAgICAgICBpZiAoV2ViVmlld1BsYXRmb3JtLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFdlYlZpZXdQbGF0Zm9ybS5faW5zdGFuY2UgPSBuZXcgV2ViVmlld1BsYXRmb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBXZWJWaWV3UGxhdGZvcm0uX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqSlPosIPnlKggKi9cclxuICAgIHByaXZhdGUganNDYWxsKG1ldGhvZE5hbWU6IHN0cmluZywgYXJncywgY2I/KTogYW55IHtcclxuICAgICAgICBjYy5sb2coXCLosIPnlKjljp/nlJ/mlrnms5VcIiArIG1ldGhvZE5hbWUsIGFyZ3MpXHJcbiAgICAgICAgbGV0IGluZm8gPSB3aW5kb3dbXCJYbWlsZXNcIl0gJiYgd2luZG93W1wiWG1pbGVzXCJdW21ldGhvZE5hbWVdICYmIHdpbmRvd1tcIlhtaWxlc1wiXVttZXRob2ROYW1lXShKU09OLnN0cmluZ2lmeShhcmdzKSlcclxuICAgICAgICBjYy5sb2coXCLljp/nlJ/mlrnms5Xov5Tlm57lgLxcIiwgaW5mbylcclxuICAgICAgICByZXR1cm4gaW5mb1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDkuI5TREvkuqTkupLpgJrkv6FcclxuICAgICogQHBhcmFtIGZ1bmNOYW1lIOaWueazleWQjVxyXG4gICAgKiBAcGFyYW0gcGFyYW1zIOWPguaVsFxyXG4gICAgKiBAcGFyYW0gY2FsbGJhY2sg5Zue6LCDXHJcbiAgICAqL1xyXG4gICAgY2FsbChmdW5jTmFtZTogc3RyaW5nLCBwYXJhbXM/OiBhbnksIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWxsV2ViVmlldyhmdW5jTmFtZSwgcGFyYW1zLCBjYWxsYmFjayk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgY2FsbFdlYlZpZXcobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzLCBjYj8pIHtcclxuICAgICAgICBsZXQgcmV0ID0gJyc7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgY2IgPSBhcmdzO1xyXG4gICAgICAgICAgICBhcmdzID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgY2IgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB3aW5kb3dbJ2RzY2InXSA9IHdpbmRvd1snZHNjYiddIHx8IDA7XHJcbiAgICAgICAgICAgIGxldCBjYk5hbWUgPSAnZHNjYicgKyB3aW5kb3dbJ2RzY2InXSsrO1xyXG4gICAgICAgICAgICB3aW5kb3dbY2JOYW1lXSA9IGNiO1xyXG4gICAgICAgICAgICBhcmdzWydfZHNjYnN0dWInXSA9IGNiTmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXJncyA9IEpTT04uc3RyaW5naWZ5KGFyZ3MgfHwge30pXHJcbiAgICAgICAgY2MubG9nKFwi5Y6f55Sf6LCD55SoIF9tZXRob2ROYW1lOiBcIiArIG1ldGhvZE5hbWUgKyBcIiBhcmdzOiBcIiArIGFyZ3MpXHJcbiAgICAgICAgaWYgKHdpbmRvd1snX2Rzd2snXSkge1xyXG4gICAgICAgICAgICByZXQgPSBwcm9tcHQod2luZG93WydfZHN3ayddICsgbWV0aG9kTmFtZSwgYXJncyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbJ19kc2JyaWRnZSddID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHJldCA9IHdpbmRvd1snX2RzYnJpZGdlJ10obWV0aG9kTmFtZSwgYXJncyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93WydfZHNicmlkZ2UnXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0ID0gd2luZG93WydfZHNicmlkZ2UnXS5jYWxsKG1ldGhvZE5hbWUsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKCfmib7kuI3liLBfZHNicmlkZ2UnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbEJyb3dzZXIobWV0aG9kTmFtZSwgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsQnJvd3NlcihtZXRob2QsIGFyZ3MpIHtcclxuICAgICAgICBpZiAobWV0aG9kID09ICdsYXVuY2gnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IEpTT04ucGFyc2UoYXJncyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtID0gb2JqZWN0LnBhcmFtO1xyXG4gICAgICAgICAgICBjb25zdCBodG1sID0gdGhpcy5nZXRQYXJhbWV0ZXJCeU5hbWUocGFyYW0sICdodG1sVXJsJyk7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBodG1sO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQYXJhbWV0ZXJCeU5hbWUodXJsLCBuYW1lKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW10vLCBcIlxcXFxcXFtcIikucmVwbGFjZSgvW1xcXV0vLCBcIlxcXFxcXF1cIik7XHJcbiAgICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIltcXFxcPyZdXCIgKyBuYW1lICsgXCI9KFteJiNdKilcIiksXHJcbiAgICAgICAgICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMgPT0gbnVsbCA/IFwiXCIgOiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1sxXSk7XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRRdWVyeVN0cmluZyhuYW1lKTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIihefCYpXCIgKyBuYW1lICsgXCI9KFteJl0qKSgmfCQpXCIpO1xyXG4gICAgICAgIHZhciByID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkubWF0Y2gocmVnKTtcclxuICAgICAgICBpZiAociAhPSBudWxsKSByZXR1cm4gdW5lc2NhcGUoclsyXSk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SG9zdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWxsKFwiZ2V0SG9zdFwiKTtcclxuICAgIH1cclxuICAgIHNob3dOb05ldHdvcmtEaWFsb2coKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsKFwic2hvd05vTmV0d29ya0RpYWxvZ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROb3RjaEhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IHRoaXMuY2FsbChcImdldE5vdGNoSGVpZ2h0XCIpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdHVzQmFySGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3Qgc3RyID0gdGhpcy5jYWxsKFwiZ2V0U3RhdHVzQmFySGVpZ2h0XCIpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XHJcbiAgICB9XHJcbiAgICBmaW5pc2hDb2Nvc0xhdW5jaCgpIHtcclxuICAgICAgICB0aGlzLmNhbGwoXCJmaW5pc2hDb2Nvc0xhdW5jaFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kKGNiOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuY2FsbCgnYmluZCcsIGNiKVxyXG4gICAgfVxyXG5cclxuICAgIGlzVGVzdCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gJ3RydWUnID09PSAodGhpcy5jYWxsKFwiaXNUZXN0XCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGVPblJlc3VtZU9uUGF1c2UoZW5hYmxlKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsKCdlbmFibGVPblJlc3VtZU9uUGF1c2UnLCB7IGVuYWJsZTogZW5hYmxlIH0pXHJcbiAgICB9XHJcbiAgICBsYXVuY2hINVBhZ2UodXJsOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNhbGwoJ2xhdW5jaEg1UGFnZScsIHsgdXJsOiB1cmwsIHRpdGxlOiB0aXRsZSB9KVxyXG4gICAgfVxyXG4gICAgbGF1bmNoUHJvbW90ZUxpbmtQYWdlKHRhc2tJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsKCdsYXVuY2hQcm9tb3RlTGlua1BhZ2UnLCB7IHRhc2tJZDogdGFza0lkIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmj5DkuqTln4vngrlcclxuICAgICAqIEBwYXJhbSBvYmog56We562W5Y+C5pWwXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sg5Zue6LCDXHJcbiAgICAgKi9cclxuICAgICB0cmFjayhvYmo6IGFueSwgY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuanNDYWxsKCd0cmFjaycsIG9iaiwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/saveManager/Save.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1a39dLaO1lGHpGLdkaoNDuy', 'Save');
// scripts/saveManager/Save.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Save = void 0;
var SaveConfig = /** @class */ (function () {
    function SaveConfig() {
        /**记录当天日期 */
        this.todayInfo = {
            key: "todayInfo",
            type: "number",
            default: 0
        };
        /**游戏版本 */
        this.gameVersion = {
            key: "gameVersion",
            type: "number",
            default: 0
        };
        /**玩家登陆ID */
        this.phoneid = {
            key: "phoneid",
            type: "string",
            default: null
        };
        /**bgm开关 */
        this.bgmVolume = {
            key: "bgmVolume",
            type: "number",
            default: 0.8
        };
        /**音效音量 */
        this.effectVolume = {
            key: "effectVolume",
            type: "number",
            default: 0.8
        };
        /**游戏时间 */
        this.gameDate = {
            key: "gameDate",
            type: "number",
            default: 100
        };
        /**球原始位置 */
        this.fruitsPos = {
            key: "fruitsPos",
            type: "object",
            default: []
        };
        /**当前游戏分数 */
        this.gameScores = {
            key: "gameScores",
            type: "number",
            default: 0
        };
    }
    return SaveConfig;
}());
exports.Save = new SaveConfig();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2F2ZU1hbmFnZXJcXFNhdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7SUFBQTtRQUNJLFlBQVk7UUFDWixjQUFTLEdBQWtCO1lBQ3ZCLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLENBQUM7U0FDYixDQUFBO1FBQ0QsVUFBVTtRQUNWLGdCQUFXLEdBQWtCO1lBQ3pCLEdBQUcsRUFBRSxhQUFhO1lBQ2xCLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLENBQUM7U0FDYixDQUFBO1FBQ0QsWUFBWTtRQUNaLFlBQU8sR0FBa0I7WUFDckIsR0FBRyxFQUFFLFNBQVM7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxJQUFJO1NBQ2hCLENBQUE7UUFDRCxXQUFXO1FBQ1gsY0FBUyxHQUFrQjtZQUN2QixHQUFHLEVBQUUsV0FBVztZQUNoQixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxHQUFHO1NBQ2YsQ0FBQTtRQUNELFVBQVU7UUFDVixpQkFBWSxHQUFrQjtZQUMxQixHQUFHLEVBQUUsY0FBYztZQUNuQixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxHQUFHO1NBQ2YsQ0FBQTtRQUVELFVBQVU7UUFDVixhQUFRLEdBQWtCO1lBQ3RCLEdBQUcsRUFBRSxVQUFVO1lBQ2YsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsR0FBRztTQUNmLENBQUE7UUFFRCxXQUFXO1FBQ1gsY0FBUyxHQUFrQjtZQUN2QixHQUFHLEVBQUUsV0FBVztZQUNoQixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxFQUFFO1NBQ2QsQ0FBQTtRQUVELFlBQVk7UUFDWixlQUFVLEdBQWtCO1lBQ3hCLEdBQUcsRUFBRSxZQUFZO1lBQ2pCLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLENBQUM7U0FDYixDQUFBO0lBRUwsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FyREEsQUFxREMsSUFBQTtBQUNZLFFBQUEsSUFBSSxHQUFlLElBQUksVUFBVSxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmnKzlnLDmlbDmja7lrZjlgqjvvIzkuLrkuoblkI7pnaLlj6/og73pnIDopoHlr7nmlbDmja7ov5vlhaXliqDlr4bkv53lrZjnrYnvvIzmiopjb2Nvc+eahOWwgemXreS4gOWxglxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTYXZlSXRlbUNvbmlnIHtcclxuICAgIC8qKuWtmOaho+WQjeWtlyAqL1xyXG4gICAga2V5OiBzdHJpbmdcclxuICAgIC8qKuaVsOaNruexu+WeiyAqL1xyXG4gICAgdHlwZTogU3RvcmFnZVZhdWxlVHlwZVxyXG4gICAgLyoq6buY6K6k5YC8ICovXHJcbiAgICBkZWZhdWx0OiBhbnlcclxuICAgIGlzRGF5VXBkYXRlPzogYm9vbGVhbixcclxufVxyXG50eXBlIFN0b3JhZ2VWYXVsZVR5cGUgPSBcIm51bWJlclwiIHwgXCJzdHJpbmdcIiB8IFwiYm9vbGVhblwiIHwgXCJvYmplY3RcIjtcclxuXHJcbmNsYXNzIFNhdmVDb25maWcge1xyXG4gICAgLyoq6K6w5b2V5b2T5aSp5pel5pyfICovXHJcbiAgICB0b2RheUluZm86IFNhdmVJdGVtQ29uaWcgPSB7XHJcbiAgICAgICAga2V5OiBcInRvZGF5SW5mb1wiLFxyXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgZGVmYXVsdDogMFxyXG4gICAgfVxyXG4gICAgLyoq5ri45oiP54mI5pysICovXHJcbiAgICBnYW1lVmVyc2lvbjogU2F2ZUl0ZW1Db25pZyA9IHtcclxuICAgICAgICBrZXk6IFwiZ2FtZVZlcnNpb25cIixcclxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgIGRlZmF1bHQ6IDBcclxuICAgIH1cclxuICAgIC8qKueOqeWutueZu+mZhklEICovXHJcbiAgICBwaG9uZWlkOiBTYXZlSXRlbUNvbmlnID0ge1xyXG4gICAgICAgIGtleTogXCJwaG9uZWlkXCIsXHJcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICB9XHJcbiAgICAvKipiZ23lvIDlhbMgKi9cclxuICAgIGJnbVZvbHVtZTogU2F2ZUl0ZW1Db25pZyA9IHtcclxuICAgICAgICBrZXk6IFwiYmdtVm9sdW1lXCIsXHJcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICBkZWZhdWx0OiAwLjhcclxuICAgIH1cclxuICAgIC8qKumfs+aViOmfs+mHjyAqL1xyXG4gICAgZWZmZWN0Vm9sdW1lOiBTYXZlSXRlbUNvbmlnID0ge1xyXG4gICAgICAgIGtleTogXCJlZmZlY3RWb2x1bWVcIixcclxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgIGRlZmF1bHQ6IDAuOFxyXG4gICAgfVxyXG5cclxuICAgIC8qKua4uOaIj+aXtumXtCAqL1xyXG4gICAgZ2FtZURhdGU6IFNhdmVJdGVtQ29uaWcgPSB7XHJcbiAgICAgICAga2V5OiBcImdhbWVEYXRlXCIsXHJcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICBkZWZhdWx0OiAxMDBcclxuICAgIH1cclxuXHJcbiAgICAvKirnkIPljp/lp4vkvY3nva4gKi9cclxuICAgIGZydWl0c1BvczogU2F2ZUl0ZW1Db25pZyA9IHtcclxuICAgICAgICBrZXk6IFwiZnJ1aXRzUG9zXCIsXHJcbiAgICAgICAgdHlwZTogXCJvYmplY3RcIixcclxuICAgICAgICBkZWZhdWx0OiBbXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuW9k+WJjea4uOaIj+WIhuaVsCAqL1xyXG4gICAgZ2FtZVNjb3JlczogU2F2ZUl0ZW1Db25pZyA9IHtcclxuICAgICAgICBrZXk6IFwiZ2FtZVNjb3Jlc1wiLFxyXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgZGVmYXVsdDogMFxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgY29uc3QgU2F2ZTogU2F2ZUNvbmZpZyA9IG5ldyBTYXZlQ29uZmlnKCk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/platform/TestHttp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd555fplljVIgI4stvywO8ek', 'TestHttp');
// scripts/platform/TestHttp.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var domainMap = {
    // dr: "http://nb2.qufenqian.vip",
    // qfq: "http://nb.qufenqian.vip",
    pot: 'http://nb-common.qufenqian.vip',
    award: 'https://nb4.qufenqian.vip',
    api1: 'https://nb.qufenqian.vip/v2',
    api2: 'http://beta.qufenqian-hongbao2.web-application.vipc.me',
    apiGame: 'https://nbs1.qufenqian.vip',
    ws: "wss://nbs1.qufenqian.vip"
};
var testHttp = /** @class */ (function () {
    function testHttp() {
    }
    return testHttp;
}());
exports.default = testHttp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxhdGZvcm1cXFRlc3RIdHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBSSxTQUFTLEdBQUc7SUFDWixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLEdBQUcsRUFBRSxnQ0FBZ0M7SUFDckMsS0FBSyxFQUFFLDJCQUEyQjtJQUNsQyxJQUFJLEVBQUUsNkJBQTZCO0lBQ25DLElBQUksRUFBRSx3REFBd0Q7SUFDOUQsT0FBTyxFQUFFLDRCQUE0QjtJQUNyQyxFQUFFLEVBQUUsMEJBQTBCO0NBQ2pDLENBQUM7QUFJRjtJQUFBO0lBS0EsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJSHR0cFJlcXVlc3RPcHRpb25zIHtcclxuICAgIGJhc2VVcmw/OiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHFzPzogT2JqZWN0O1xyXG4gICAgbWV0aG9kPzogc3RyaW5nIHwgXCJHRVRcIiB8IFwiUE9TVFwiIHwgXCJQVVRcIiB8IFwiVVBEQVRFXCIgfCBcIkRFTEVURVwiIHwgXCJPUFRJT05TXCI7XHJcbiAgICBkYXRhPzogc3RyaW5nIHwgT2JqZWN0O1xyXG4gICAgdGltZW91dD86IG51bWJlcjtcclxuICAgIHVzZUpzb24/OiBib29sZWFuO1xyXG59XHJcblxyXG5sZXQgZG9tYWluTWFwID0ge1xyXG4gICAgLy8gZHI6IFwiaHR0cDovL25iMi5xdWZlbnFpYW4udmlwXCIsXHJcbiAgICAvLyBxZnE6IFwiaHR0cDovL25iLnF1ZmVucWlhbi52aXBcIixcclxuICAgIHBvdDogJ2h0dHA6Ly9uYi1jb21tb24ucXVmZW5xaWFuLnZpcCcsXHJcbiAgICBhd2FyZDogJ2h0dHBzOi8vbmI0LnF1ZmVucWlhbi52aXAnLFxyXG4gICAgYXBpMTogJ2h0dHBzOi8vbmIucXVmZW5xaWFuLnZpcC92MicsXHJcbiAgICBhcGkyOiAnaHR0cDovL2JldGEucXVmZW5xaWFuLWhvbmdiYW8yLndlYi1hcHBsaWNhdGlvbi52aXBjLm1lJyxcclxuICAgIGFwaUdhbWU6ICdodHRwczovL25iczEucXVmZW5xaWFuLnZpcCcsXHJcbiAgICB3czogXCJ3c3M6Ly9uYnMxLnF1ZmVucWlhbi52aXBcIlxyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0ZXN0SHR0cCB7XHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/platform/Config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7442eTdvQ1Knq9B1cbS2TQi', 'Config');
// scripts/platform/Config.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
var Config;
(function (Config) {
    /**游戏版本 */
    Config.version = " 1.195";
    /**服务器配置项 */
    Config.serverUrlConfig = {
        /**开发服 */
        dev: "https://testapi.jidiandian.cn",
        /**测试服 */
        test: "https://testgame.quzhuanxiang.com",
        /**预正式服务器 */
        prerelease: "https://pregame.quzhuanxiang.com",
        /**正式服 */
        release: "https://game.yingzhongshare.com",
    };
    /**服务器地址 */
    Config.serverUrl = CC_DEBUG ? Config.serverUrlConfig.test : Config.serverUrlConfig.release;
    /**预览开发配置项 */
    Config.PHEAD = {
        _ts: +new Date().getTime(),
        _appid: "1071201",
        _sign: "c034e764dfefd8d2af90b57eb037872d",
        _ch: "300010",
        _av: '1.0.0',
        _sv: "2.4.1.2-in",
        _imei: "imei1",
        _imei2: "imei2",
        _sk: "sk",
        _token: "ID2WgKCGaTgBrlHphd51O2HexnEl5aMM33SXmqOWDwQ=",
        dv: '1.0.0.0',
    };
})(Config = exports.Config || (exports.Config = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxhdGZvcm1cXENvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsSUFBaUIsTUFBTSxDQWlDdEI7QUFqQ0QsV0FBaUIsTUFBTTtJQUNuQixVQUFVO0lBQ0MsY0FBTyxHQUFHLFFBQVEsQ0FBQztJQUU5QixZQUFZO0lBQ0Qsc0JBQWUsR0FBRztRQUN6QixTQUFTO1FBQ1QsR0FBRyxFQUFFLCtCQUErQjtRQUNwQyxTQUFTO1FBQ1QsSUFBSSxFQUFFLG1DQUFtQztRQUN6QyxZQUFZO1FBQ1osVUFBVSxFQUFFLGtDQUFrQztRQUM5QyxTQUFTO1FBQ1QsT0FBTyxFQUFFLGlDQUFpQztLQUM3QyxDQUFBO0lBRUQsV0FBVztJQUNBLGdCQUFTLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFBLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQUEsZUFBZSxDQUFDLE9BQU8sQ0FBQztJQUVqRixhQUFhO0lBQ0YsWUFBSyxHQUFHO1FBQ2YsR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7UUFDMUIsTUFBTSxFQUFFLFNBQVM7UUFDakIsS0FBSyxFQUFFLGtDQUFrQztRQUN6QyxHQUFHLEVBQUUsUUFBUTtRQUNiLEdBQUcsRUFBRSxPQUFPO1FBQ1osR0FBRyxFQUFFLFlBQVk7UUFDakIsS0FBSyxFQUFFLE9BQU87UUFDZCxNQUFNLEVBQUUsT0FBTztRQUNmLEdBQUcsRUFBRSxJQUFJO1FBQ1QsTUFBTSxFQUFFLDhDQUE4QztRQUN0RCxFQUFFLEVBQUUsU0FBUztLQUNoQixDQUFBO0FBQ0wsQ0FBQyxFQWpDZ0IsTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBaUN0QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgcGhlYWRUeXBlIHtcclxuICAgIHB2ZXJzaW9uLFxyXG4gICAgcGhvbmVpZCxcclxuICAgIC8qKuS6p+WTgeWPtyAqL1xyXG4gICAgcHJkaWQsXHJcbiAgICBjaGFubmVsLFxyXG4gICAgZWNwbTogbnVtYmVyLFxyXG4gICAgZHBpOiBzdHJpbmcsXHJcbiAgICBzaWduYXR1cmVEOiBzdHJpbmcsXHJcbiAgICAvKirlronljZPniYjmnKwg6buY6K6kMTAwMOW8gOWniyAqL1xyXG4gICAgY3ZlcnNpb24sXHJcbiAgICAvKirmtYvor5XliIbnu4QgKi9cclxuICAgIGVpZ2h0X3VzZXJfdHlwZSxcclxuICAgIC8qKkFC5rWL6K+VICovXHJcbiAgICBhYl91c2VyX3R5cGUsXHJcbiAgICBhcGtfY2hhbm5lbD8vL+aIkOivreWkmuWkmuKAlOKAlOWwj+exs+a4oOmBk+W6lOWvueaWueazlSBwdmVyc2lvbj49MTA35omN5pyJXHJcbn1cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgQ29uZmlnIHtcclxuICAgIC8qKua4uOaIj+eJiOacrCAqL1xyXG4gICAgZXhwb3J0IGxldCB2ZXJzaW9uID0gXCIgMS4xOTVcIjtcclxuXHJcbiAgICAvKirmnI3liqHlmajphY3nva7pobkgKi9cclxuICAgIGV4cG9ydCBsZXQgc2VydmVyVXJsQ29uZmlnID0ge1xyXG4gICAgICAgIC8qKuW8gOWPkeacjSAqL1xyXG4gICAgICAgIGRldjogXCJodHRwczovL3Rlc3RhcGkuamlkaWFuZGlhbi5jblwiLFxyXG4gICAgICAgIC8qKua1i+ivleacjSAqL1xyXG4gICAgICAgIHRlc3Q6IFwiaHR0cHM6Ly90ZXN0Z2FtZS5xdXpodWFueGlhbmcuY29tXCIsXHJcbiAgICAgICAgLyoq6aKE5q2j5byP5pyN5Yqh5ZmoICovXHJcbiAgICAgICAgcHJlcmVsZWFzZTogXCJodHRwczovL3ByZWdhbWUucXV6aHVhbnhpYW5nLmNvbVwiLFxyXG4gICAgICAgIC8qKuato+W8j+acjSAqL1xyXG4gICAgICAgIHJlbGVhc2U6IFwiaHR0cHM6Ly9nYW1lLnlpbmd6aG9uZ3NoYXJlLmNvbVwiLFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuacjeWKoeWZqOWcsOWdgCAqL1xyXG4gICAgZXhwb3J0IGxldCBzZXJ2ZXJVcmwgPSBDQ19ERUJVRyA/IHNlcnZlclVybENvbmZpZy50ZXN0IDogc2VydmVyVXJsQ29uZmlnLnJlbGVhc2U7XHJcblxyXG4gICAgLyoq6aKE6KeI5byA5Y+R6YWN572u6aG5ICovXHJcbiAgICBleHBvcnQgbGV0IFBIRUFEID0ge1xyXG4gICAgICAgIF90czogK25ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgICAgIF9hcHBpZDogXCIxMDcxMjAxXCIsXHJcbiAgICAgICAgX3NpZ246IFwiYzAzNGU3NjRkZmVmZDhkMmFmOTBiNTdlYjAzNzg3MmRcIixcclxuICAgICAgICBfY2g6IFwiMzAwMDEwXCIsXHJcbiAgICAgICAgX2F2OiAnMS4wLjAnLFxyXG4gICAgICAgIF9zdjogXCIyLjQuMS4yLWluXCIsXHJcbiAgICAgICAgX2ltZWk6IFwiaW1laTFcIixcclxuICAgICAgICBfaW1laTI6IFwiaW1laTJcIixcclxuICAgICAgICBfc2s6IFwic2tcIixcclxuICAgICAgICBfdG9rZW46IFwiSUQyV2dLQ0dhVGdCcmxIcGhkNTFPMkhleG5FbDVhTU0zM1NYbXFPV0R3UT1cIixcclxuICAgICAgICBkdjogJzEuMC4wLjAnLCAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/UIUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac32ePHNchHhqLObr3flLIN', 'UIUtils');
// scripts/ui/UIUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIUtils = void 0;
var App_1 = require("../app/App");
var QuickClickCfg_1 = require("../cfg/QuickClickCfg");
var UIUtils = /** @class */ (function () {
    function UIUtils() {
    }
    /**
     * 注册按钮点击事件
     * @param node
     * @param func
     * @param target
     * @param delay
     */
    UIUtils.addClickEvent = function (node, func, target, delay) {
        if (delay === void 0) { delay = QuickClickCfg_1.QuickClickCfg.DEFAULT; }
        if (node && func && typeof (func) == 'function') {
            node.on('click', function () {
                // 防止连续点击
                if (delay > 0) {
                    if (node && cc.isValid(node)) {
                        var lastClickTime = node['__last_click_time__'];
                        if (lastClickTime && (new Date().getTime() - lastClickTime) <= delay * 1000) {
                            cc.log('连点');
                            return;
                        }
                        node['__last_click_time__'] = new Date().getTime();
                    }
                }
                func.call(target, node);
                App_1.App.soundMgr.playClickSound();
            }, this);
        }
    };
    /**
     * 全屏缩放
     * @param node
     */
    UIUtils.fullScreenNode = function (node) {
        if (node) {
            var scaleX = Math.max(1, cc.winSize.width) / Math.max(1, node.width);
            var scaleY = Math.max(1, cc.winSize.height) / Math.max(1, node.height);
            node.scale = Math.max(scaleX, scaleY);
        }
    };
    return UIUtils;
}());
exports.UIUtils = UIUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlcXFVJVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0NBQWlDO0FBQ2pDLHNEQUFxRDtBQUdyRDtJQUFBO0lBd0NBLENBQUM7SUF0Q0c7Ozs7OztPQU1HO0lBQ1cscUJBQWEsR0FBM0IsVUFBNEIsSUFBYSxFQUFFLElBQTZCLEVBQUUsTUFBVyxFQUFFLEtBQXFDO1FBQXJDLHNCQUFBLEVBQUEsUUFBZ0IsNkJBQWEsQ0FBQyxPQUFPO1FBQ3hILElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxPQUFNLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVSxFQUFFO1lBQzVDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO2dCQUNiLFNBQVM7Z0JBQ1QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO29CQUNYLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQzFCLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO3dCQUNsRCxJQUFJLGFBQWEsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsYUFBYSxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksRUFBRTs0QkFDekUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDYixPQUFPO3lCQUNWO3dCQUNELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7cUJBQ3REO2lCQUNKO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN4QixTQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNaO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNXLHNCQUFjLEdBQTVCLFVBQTZCLElBQWE7UUFDdEMsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2RSxJQUFNLE1BQU0sR0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQXhDQSxBQXdDQyxJQUFBO0FBeENZLDBCQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uL2FwcC9BcHBcIjtcclxuaW1wb3J0IHsgUXVpY2tDbGlja0NmZyB9IGZyb20gXCIuLi9jZmcvUXVpY2tDbGlja0NmZ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBVSVV0aWxzIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOazqOWGjOaMiemSrueCueWHu+S6i+S7tlxyXG4gICAgICogQHBhcmFtIG5vZGUgXHJcbiAgICAgKiBAcGFyYW0gZnVuYyBcclxuICAgICAqIEBwYXJhbSB0YXJnZXQgXHJcbiAgICAgKiBAcGFyYW0gZGVsYXkgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYWRkQ2xpY2tFdmVudChub2RlOiBjYy5Ob2RlLCBmdW5jOiAobm9kZTogY2MuTm9kZSkgPT4gdm9pZCwgdGFyZ2V0OiBhbnksIGRlbGF5OiBudW1iZXIgPSBRdWlja0NsaWNrQ2ZnLkRFRkFVTFQpOiB2b2lkIHtcclxuICAgICAgICBpZiAobm9kZSAmJiBmdW5jICYmIHR5cGVvZihmdW5jKSA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIG5vZGUub24oJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgICAgIC8vIOmYsuatoui/nue7reeCueWHu1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlbGF5ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlICYmIGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdENsaWNrVGltZSA9IG5vZGVbJ19fbGFzdF9jbGlja190aW1lX18nXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RDbGlja1RpbWUgJiYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbGFzdENsaWNrVGltZSkgPD0gZGVsYXkgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ+i/nueCuScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbJ19fbGFzdF9jbGlja190aW1lX18nXSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmMuY2FsbCh0YXJnZXQsIG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgQXBwLnNvdW5kTWdyLnBsYXlDbGlja1NvdW5kKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFqOWxj+e8qeaUvlxyXG4gICAgICogQHBhcmFtIG5vZGUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZnVsbFNjcmVlbk5vZGUobm9kZTogY2MuTm9kZSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWCA9IE1hdGgubWF4KDEsIGNjLndpblNpemUud2lkdGgpIC8gTWF0aC5tYXgoMSwgbm9kZS53aWR0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWSA9ICBNYXRoLm1heCgxLCBjYy53aW5TaXplLmhlaWdodCkgLyBNYXRoLm1heCgxLCBub2RlLmhlaWdodCk7XHJcbiAgICAgICAgICAgIG5vZGUuc2NhbGUgPSBNYXRoLm1heChzY2FsZVgsIHNjYWxlWSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/object-utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4868bY2JkFHTrP95V1SoT3Q', 'object-utils');
// scripts/utils/object-utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectUtils = void 0;
var animate_utils_1 = require("./animate-utils");
var math_utils_1 = require("./math-utils");
var random_1 = require("./random");
/**
 * 对象工具类
 */
exports.objectUtils = {
    /**
     * 深拷贝
     * @param Obj 对象
     */
    cloneObject: function (Obj) {
        var buf;
        if (Obj instanceof Array) {
            buf = [];
            for (var i = 0; i < Obj.length; i++) {
                buf[i] = exports.objectUtils.cloneObject(Obj[i]);
            }
            return buf;
        }
        else if (Obj instanceof Object) {
            buf = {};
            for (var k = 0; k < Object.keys(Obj).length; k++) {
                buf[Object.keys(Obj)[k]] = exports.objectUtils.cloneObject(Obj[Object.keys(Obj)[k]]);
            }
            return buf;
        }
        else {
            return Obj;
        }
    },
    loadRes: function (path, type, options) {
        if (options === void 0) { options = {}; }
        var _a = options.onComplete, onComplete = _a === void 0 ? null : _a, _b = options.onProgress, onProgress = _b === void 0 ? null : _b;
        // if (CC_DEBUG) {
        //     cc.log(`${this.logTag} loadRes path : ${path}`)
        // }
        if (onProgress) {
            cc.assetManager.resources.load(path, type, onProgress, onComplete);
        }
        else {
            cc.assetManager.resources.load(path, type, onComplete);
        }
    },
    palyCoinJump: function (startNode, endNode, parent) {
        this.loadRes("prefabs/coinAnimation", cc.Prefab, {
            onComplete: function (error, assest) {
                var num = 5;
                var finish = null;
                var stepTime = 0.1;
                var start = null;
                if (!parent) {
                    parent = cc.Canvas.instance.node;
                }
                var _loop_1 = function (index) {
                    var redPack = cc.instantiate(assest);
                    redPack.parent = parent;
                    var startV2 = math_utils_1.mathUtils.convertToParent(startNode, parent);
                    var endV2 = math_utils_1.mathUtils.convertToParent(endNode, parent);
                    cc.tween(redPack)
                        .set({ position: cc.v3(startV2.x + random_1.random.findRandomBase(-75, 75), startV2.y), scale: 1 })
                        .delay(index * stepTime)
                        .by(0.3, { position: cc.v3(0, 100) })
                        .parallel(cc.tween(redPack).then(animate_utils_1.animateUtils.getBezier(0.5, startV2, endV2, 100, 60)), cc.tween(redPack).to(0.8, { scale: 0.5 }))
                        .delay(0.1)
                        .call(function () {
                        redPack.destroy();
                        if (index == num - 1) {
                            finish && finish();
                        }
                        if (index == 0) {
                            start && start();
                        }
                    })
                        .start();
                };
                for (var index = 0; index < num; index++) {
                    _loop_1(index);
                }
            }
        });
    }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdXRpbHNcXG9iamVjdC11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBK0M7QUFDL0MsMkNBQXlDO0FBQ3pDLG1DQUFrQztBQUVsQzs7R0FFRztBQUNVLFFBQUEsV0FBVyxHQUFHO0lBQ3ZCOzs7T0FHRztJQUNILFdBQVcsWUFBQyxHQUFHO1FBQ1gsSUFBSSxHQUFHLENBQUM7UUFDUixJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7WUFDdEIsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNULEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUM7WUFFRCxPQUFPLEdBQUcsQ0FBQztTQUNkO2FBQU0sSUFBSSxHQUFHLFlBQVksTUFBTSxFQUFFO1lBQzlCLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDVCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzlDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hGO1lBQ0QsT0FBTyxHQUFHLENBQUM7U0FDZDthQUFNO1lBQ0gsT0FBTyxHQUFHLENBQUM7U0FDZDtJQUNMLENBQUM7SUFFRCxPQUFPLEVBQVAsVUFBUSxJQUFZ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TCxDQUFDLENBQUM7eUJBQ0QsS0FBSyxFQUFFLENBQUE7O2dCQXJCaEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUU7NEJBQS9CLEtBQUs7aUJBc0JiO1lBQ0wsQ0FBQztTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FFSixDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZVV0aWxzIH0gZnJvbSBcIi4vYW5pbWF0ZS11dGlsc1wiO1xuaW1wb3J0IHsgbWF0aFV0aWxzIH0gZnJvbSBcIi4vbWF0aC11dGlsc1wiO1xuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSBcIi4vcmFuZG9tXCI7XG5cbi8qKlxuICog5a+56LGh5bel5YW357G7XG4gKi9cbmV4cG9ydCBjb25zdCBvYmplY3RVdGlscyA9IHtcbiAgICAvKipcbiAgICAgKiDmt7Hmi7fotJ1cbiAgICAgKiBAcGFyYW0gT2JqIOWvueixoVxuICAgICAqL1xuICAgIGNsb25lT2JqZWN0KE9iaikge1xuICAgICAgICB2YXIgYnVmO1xuICAgICAgICBpZiAoT2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGJ1ZiA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBidWZbaV0gPSBvYmplY3RVdGlscy5jbG9uZU9iamVjdChPYmpbaV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYnVmO1xuICAgICAgICB9IGVsc2UgaWYgKE9iaiBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgYnVmID0ge307XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IE9iamVjdC5rZXlzKE9iaikubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICBidWZbT2JqZWN0LmtleXMoT2JqKVtrXV0gPSBvYmplY3RVdGlscy5jbG9uZU9iamVjdChPYmpbT2JqZWN0LmtleXMoT2JqKVtrXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBPYmo7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbG9hZFJlcyhwYXRoOiBzdHJpbmcsIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgb25Qcm9ncmVzcz86IChmaW5pc2g6IG51bWJlciwgdG90YWw6IG51bWJlciwgaXRlbTogY2MuQXNzZXRNYW5hZ2VyLlJlcXVlc3RJdGVtKSA9PiB2b2lkLFxuICAgICAgICAgICAgb25Db21wbGV0ZT86IChlcnJvcjogRXJyb3IsIGFzc2V0czogY2MuQXNzZXQgfCBjYy5Bc3NldFtdKSA9PiB2b2lkLFxuICAgICAgICB9ID0ge30pOiB2b2lkIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIG9uQ29tcGxldGUgPSBudWxsLFxuICAgICAgICAgICAgb25Qcm9ncmVzcyA9IG51bGwsXG4gICAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICAgIC8vIGlmIChDQ19ERUJVRykge1xuICAgICAgICAvLyAgICAgY2MubG9nKGAke3RoaXMubG9nVGFnfSBsb2FkUmVzIHBhdGggOiAke3BhdGh9YClcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAob25Qcm9ncmVzcykge1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLnJlc291cmNlcy5sb2FkKHBhdGgsIHR5cGUsIG9uUHJvZ3Jlc3MsIG9uQ29tcGxldGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIucmVzb3VyY2VzLmxvYWQocGF0aCwgdHlwZSwgb25Db21wbGV0ZSlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBwYWx5Q29pbkp1bXAoc3RhcnROb2RlOiBjYy5Ob2RlLCBlbmROb2RlOiBjYy5Ob2RlLCBwYXJlbnQ/OiBjYy5Ob2RlKSB7XG4gICAgICAgIHRoaXMubG9hZFJlcyhgcHJlZmFicy9jb2luQW5pbWF0aW9uYCwgY2MuUHJlZmFiLCB7XG4gICAgICAgICAgICBvbkNvbXBsZXRlOiAoZXJyb3IsIGFzc2VzdDogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IDU7XG4gICAgICAgICAgICAgICAgbGV0IGZpbmlzaCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IHN0ZXBUaW1lID0gMC4xO1xuICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZighcGFyZW50KXtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG51bTsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVkUGFjazogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKGFzc2VzdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVkUGFjay5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VjIgPSBtYXRoVXRpbHMuY29udmVydFRvUGFyZW50KHN0YXJ0Tm9kZSwgcGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kVjIgPSBtYXRoVXRpbHMuY29udmVydFRvUGFyZW50KGVuZE5vZGUsIHBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHJlZFBhY2spXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0KHsgcG9zaXRpb246IGNjLnYzKHN0YXJ0VjIueCArIHJhbmRvbS5maW5kUmFuZG9tQmFzZSgtNzUsIDc1KSwgc3RhcnRWMi55KSwgc2NhbGU6IDEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheShpbmRleCAqIHN0ZXBUaW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMywgeyBwb3NpdGlvbjogY2MudjMoMCwgMTAwKSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmFsbGVsKGNjLnR3ZWVuKHJlZFBhY2spLnRoZW4oYW5pbWF0ZVV0aWxzLmdldEJlemllcigwLjUsIHN0YXJ0VjIsIGVuZFYyLCAxMDAsIDYwKSksIGNjLnR3ZWVuKHJlZFBhY2spLnRvKDAuOCwgeyBzY2FsZTogMC41IH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRQYWNrLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gbnVtIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2ggJiYgZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ICYmIHN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/UIBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a01ffAhSLlH759H/vMq7BVy', 'UIBase');
// scripts/ui/UIBase.ts

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
var App_1 = require("../app/App");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIBase = /** @class */ (function (_super) {
    __extends(UIBase, _super);
    function UIBase() {
        var _this = _super.call(this) || this;
        _this.nodeMask = null;
        _this.nodeBox = null;
        _this._uiName = null;
        return _this;
    }
    UIBase.prototype.onLoad = function () {
        this.addUIEvent();
        this.addEventListener();
    };
    UIBase.prototype.onDestroy = function () {
        this.removeEventListener();
    };
    UIBase.prototype.addUIEvent = function () { };
    UIBase.prototype.addEventListener = function () { };
    UIBase.prototype.removeEventListener = function () { };
    UIBase.prototype.show = function (afterAni) {
        this.node.active = true;
        if (afterAni) {
            afterAni(this);
        }
    };
    UIBase.prototype.hide = function (afterAni) {
        if (afterAni) {
            this.node.active = false;
            afterAni(this);
        }
        else {
            this.node.active = false;
        }
    };
    UIBase.prototype.close = function () {
        App_1.App.uiMgr.closeUI(this._uiName);
    };
    UIBase.prototype.onCloseClick = function () {
        this.close();
    };
    __decorate([
        property(cc.Node)
    ], UIBase.prototype, "nodeMask", void 0);
    __decorate([
        property(cc.Node)
    ], UIBase.prototype, "nodeBox", void 0);
    UIBase = __decorate([
        ccclass
    ], UIBase);
    return UIBase;
}(cc.Component));
exports.default = UIBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlcXFVJQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrQ0FBaUM7QUFHM0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFVNUM7UUFBQSxZQUNJLGlCQUFPLFNBQ1Y7UUFURCxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFZCxhQUFPLEdBQVcsSUFBSSxDQUFDOztJQUlqQyxDQUFDO0lBRUQsdUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsMEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFUywyQkFBVSxHQUFwQixjQUE4QixDQUFDO0lBRXJCLGlDQUFnQixHQUExQixjQUFvQyxDQUFDO0lBRTNCLG9DQUFtQixHQUE3QixjQUF1QyxDQUFDO0lBRWpDLHFCQUFJLEdBQVgsVUFBWSxRQUFrQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxRQUFRLEVBQUU7WUFDVixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBRU0scUJBQUksR0FBWCxVQUFZLFFBQWtDO1FBQzFDLElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQjthQUFNO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQztJQUVTLHNCQUFLLEdBQWY7UUFDSSxTQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVTLDZCQUFZLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFoREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDTztJQUd6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNNO0lBTlAsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQW9EMUI7SUFBRCxhQUFDO0NBcERELEFBb0RDLENBcERtQyxFQUFFLENBQUMsU0FBUyxHQW9EL0M7a0JBcERvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uL2FwcC9BcHBcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlCYXNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vZGVNYXNrOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG5vZGVCb3g6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByb3RlY3RlZCBfdWlOYW1lOiBzdHJpbmcgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuYWRkVUlFdmVudCgpO1xyXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgYWRkVUlFdmVudCgpOiB2b2lkIHt9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFkZEV2ZW50TGlzdGVuZXIoKTogdm9pZCB7fVxyXG5cclxuICAgIHByb3RlY3RlZCByZW1vdmVFdmVudExpc3RlbmVyKCk6IHZvaWQge31cclxuXHJcbiAgICBwdWJsaWMgc2hvdyhhZnRlckFuaTogKHVpQmFzZTogVUlCYXNlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKGFmdGVyQW5pKSB7XHJcbiAgICAgICAgICAgIGFmdGVyQW5pKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZShhZnRlckFuaTogKHVpQmFzZTogVUlCYXNlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGFmdGVyQW5pKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYWZ0ZXJBbmkodGhpcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY2xvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgQXBwLnVpTWdyLmNsb3NlVUkodGhpcy5fdWlOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DbG9zZUNsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/DialogBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f01c8k3MMJGL4JCAEecgse2', 'DialogBase');
// scripts/ui/DialogBase.ts

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
exports.DialogClickType = void 0;
var App_1 = require("../app/App");
var UIBase_1 = require("./UIBase");
var UIUtils_1 = require("./UIUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DialogClickType;
(function (DialogClickType) {
    DialogClickType[DialogClickType["CLOSE"] = 0] = "CLOSE";
    DialogClickType[DialogClickType["SURE"] = 1] = "SURE";
    DialogClickType[DialogClickType["CANCEL"] = 2] = "CANCEL";
})(DialogClickType = exports.DialogClickType || (exports.DialogClickType = {}));
var DialogBase = /** @class */ (function (_super) {
    __extends(DialogBase, _super);
    function DialogBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rtContent = null;
        _this.lblTitle = null;
        _this.spTitle = null;
        _this.btnClose = null;
        _this.btnSure = null;
        _this.btnCancel = null;
        _this._dialogId = 0;
        _this._callback = null;
        _this._atlas = null;
        return _this;
    }
    Object.defineProperty(DialogBase.prototype, "content", {
        set: function (content) {
            this.rtContent && (this.rtContent.string = content);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DialogBase.prototype, "title", {
        set: function (title) {
            this.lblTitle && (this.lblTitle.string = title);
            if (this.spTitle) {
                if (!this._atlas) {
                    this._atlas = cc.loader.getRes('common/atlas/common', cc.SpriteAtlas);
                }
                if (this._atlas) {
                    var spriteFrame = null;
                    switch (title) {
                        case '提示':
                            spriteFrame = this._atlas.getSpriteFrame('alert_title_tips');
                            break;
                        case '规则说明':
                            spriteFrame = this._atlas.getSpriteFrame('alert_title_rule');
                            break;
                        default:
                            spriteFrame = this._atlas.getSpriteFrame('alert_title_tips');
                            break;
                    }
                    spriteFrame && (this.spTitle.spriteFrame = spriteFrame);
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DialogBase.prototype, "dialogId", {
        get: function () {
            return this._dialogId;
        },
        set: function (dialogId) {
            this._dialogId = dialogId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DialogBase.prototype, "horizontalAlign", {
        set: function (align) {
            this.rtContent.horizontalAlign = align;
        },
        enumerable: false,
        configurable: true
    });
    DialogBase.prototype.setClickCallback = function (callback) {
        if (callback && typeof (callback) == 'function') {
            this._callback = callback;
        }
    };
    DialogBase.prototype.addUIEvent = function () {
        this.btnClose && UIUtils_1.UIUtils.addClickEvent(this.btnClose.node, this.onCloseClick, this);
        this.btnSure && UIUtils_1.UIUtils.addClickEvent(this.btnSure.node, this.onSureClick, this);
        this.btnCancel && UIUtils_1.UIUtils.addClickEvent(this.btnCancel.node, this.onCancelClick, this);
    };
    DialogBase.prototype.onSureClick = function () {
        this._callback && this._callback(DialogClickType.SURE);
        App_1.App.dialogMgr.closeDialogById(this.dialogId);
    };
    DialogBase.prototype.onCancelClick = function () {
        this._callback && this._callback(DialogClickType.CANCEL);
        App_1.App.dialogMgr.closeDialogById(this.dialogId);
    };
    DialogBase.prototype.onCloseClick = function () {
        this._callback && this._callback(DialogClickType.CLOSE);
        App_1.App.dialogMgr.closeDialogById(this.dialogId);
    };
    __decorate([
        property(cc.RichText)
    ], DialogBase.prototype, "rtContent", void 0);
    __decorate([
        property(cc.Label)
    ], DialogBase.prototype, "lblTitle", void 0);
    __decorate([
        property(cc.Sprite)
    ], DialogBase.prototype, "spTitle", void 0);
    __decorate([
        property(cc.Button)
    ], DialogBase.prototype, "btnClose", void 0);
    __decorate([
        property(cc.Button)
    ], DialogBase.prototype, "btnSure", void 0);
    __decorate([
        property(cc.Button)
    ], DialogBase.prototype, "btnCancel", void 0);
    DialogBase = __decorate([
        ccclass
    ], DialogBase);
    return DialogBase;
}(UIBase_1.default));
exports.default = DialogBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlcXERpYWxvZ0Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtDQUFpQztBQUNqQyxtQ0FBOEI7QUFDOUIscUNBQW9DO0FBQzlCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLElBQWtCLGVBSWpCO0FBSkQsV0FBa0IsZUFBZTtJQUM3Qix1REFBUyxDQUFBO0lBQ1QscURBQUksQ0FBQTtJQUNKLHlEQUFNLENBQUE7QUFDVixDQUFDLEVBSmlCLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBSWhDO0FBR0Q7SUFBd0MsOEJBQU07SUFBOUM7UUFBQSxxRUE2RkM7UUExRkcsZUFBUyxHQUFnQixJQUFJLENBQUM7UUFHOUIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUcxQixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFHM0IsYUFBTyxHQUFjLElBQUksQ0FBQztRQUcxQixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRWxCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsZUFBUyxHQUFvQyxJQUFJLENBQUM7UUFDbEQsWUFBTSxHQUFtQixJQUFJLENBQUM7O0lBdUU1QyxDQUFDO0lBckVHLHNCQUFXLCtCQUFPO2FBQWxCLFVBQW1CLE9BQWU7WUFDOUIsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELENBQUM7OztPQUFBO0lBRUQsc0JBQVcsNkJBQUs7YUFBaEIsVUFBaUIsS0FBYTtZQUMxQixJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDaEQsSUFBSSxJQUFJ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O0lBQ2pELENBQUM7SUF2RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztpREFDUTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNPO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ007SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDTztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ1E7SUFsQlgsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTZGOUI7SUFBRCxpQkFBQztDQTdGRCxBQTZGQyxDQTdGdUMsZ0JBQU0sR0E2RjdDO2tCQTdGb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcCB9IGZyb20gXCIuLi9hcHAvQXBwXCI7XHJcbmltcG9ydCBVSUJhc2UgZnJvbSBcIi4vVUlCYXNlXCI7XHJcbmltcG9ydCB7IFVJVXRpbHMgfSBmcm9tIFwiLi9VSVV0aWxzXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBEaWFsb2dDbGlja1R5cGUgIHtcclxuICAgIENMT1NFID0gMCxcclxuICAgIFNVUkUsXHJcbiAgICBDQU5DRUxcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nQmFzZSBleHRlbmRzIFVJQmFzZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlJpY2hUZXh0KVxyXG4gICAgcnRDb250ZW50OiBjYy5SaWNoVGV4dCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGJsVGl0bGU6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlKVxyXG4gICAgc3BUaXRsZTogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgYnRuQ2xvc2U6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJ0blN1cmU6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIGJ0bkNhbmNlbDogY2MuQnV0dG9uID0gbnVsbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2RpYWxvZ0lkOiBudW1iZXIgPSAwO1xyXG4gICAgcHJvdGVjdGVkIF9jYWxsYmFjazogKGNvZGU6IERpYWxvZ0NsaWNrVHlwZSkgPT4gdm9pZCA9IG51bGw7XHJcbiAgICBwcm90ZWN0ZWQgX2F0bGFzOiBjYy5TcHJpdGVBdGxhcyA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHNldCBjb250ZW50KGNvbnRlbnQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMucnRDb250ZW50ICYmICh0aGlzLnJ0Q29udGVudC5zdHJpbmcgPSBjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmxibFRpdGxlICYmICh0aGlzLmxibFRpdGxlLnN0cmluZyA9IHRpdGxlKTtcclxuICAgICAgICBpZiAodGhpcy5zcFRpdGxlKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fYXRsYXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2F0bGFzID0gY2MubG9hZGVyLmdldFJlcygnY29tbW9uL2F0bGFzL2NvbW1vbicsIGNjLlNwcml0ZUF0bGFzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fYXRsYXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ+aPkOekuic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lID0gdGhpcy5fYXRsYXMuZ2V0U3ByaXRlRnJhbWUoJ2FsZXJ0X3RpdGxlX3RpcHMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAn6KeE5YiZ6K+05piOJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlRnJhbWUgPSB0aGlzLl9hdGxhcy5nZXRTcHJpdGVGcmFtZSgnYWxlcnRfdGl0bGVfcnVsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVGcmFtZSA9IHRoaXMuX2F0bGFzLmdldFNwcml0ZUZyYW1lKCdhbGVydF90aXRsZV90aXBzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3ByaXRlRnJhbWUgJiYgKHRoaXMuc3BUaXRsZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZGlhbG9nSWQoZGlhbG9nSWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2RpYWxvZ0lkID0gZGlhbG9nSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBkaWFsb2dJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaWFsb2dJZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGhvcml6b250YWxBbGlnbihhbGlnbjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5ydENvbnRlbnQuaG9yaXpvbnRhbEFsaWduID0gYWxpZ247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldENsaWNrQ2FsbGJhY2soY2FsbGJhY2s6IChjb2RlOiBEaWFsb2dDbGlja1R5cGUpPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YoY2FsbGJhY2spID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGFkZFVJRXZlbnQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5idG5DbG9zZSAmJiBVSVV0aWxzLmFkZENsaWNrRXZlbnQodGhpcy5idG5DbG9zZS5ub2RlLCB0aGlzLm9uQ2xvc2VDbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5idG5TdXJlICYmIFVJVXRpbHMuYWRkQ2xpY2tFdmVudCh0aGlzLmJ0blN1cmUubm9kZSwgdGhpcy5vblN1cmVDbGljaywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5idG5DYW5jZWwgJiYgVUlVdGlscy5hZGRDbGlja0V2ZW50KHRoaXMuYnRuQ2FuY2VsLm5vZGUsIHRoaXMub25DYW5jZWxDbGljaywgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uU3VyZUNsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrICYmIHRoaXMuX2NhbGxiYWNrKERpYWxvZ0NsaWNrVHlwZS5TVVJFKTtcclxuICAgICAgICBBcHAuZGlhbG9nTWdyLmNsb3NlRGlhbG9nQnlJZCh0aGlzLmRpYWxvZ0lkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DYW5jZWxDbGljaygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jYWxsYmFjayAmJiB0aGlzLl9jYWxsYmFjayhEaWFsb2dDbGlja1R5cGUuQ0FOQ0VMKTtcclxuICAgICAgICBBcHAuZGlhbG9nTWdyLmNsb3NlRGlhbG9nQnlJZCh0aGlzLmRpYWxvZ0lkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DbG9zZUNsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrICYmIHRoaXMuX2NhbGxiYWNrKERpYWxvZ0NsaWNrVHlwZS5DTE9TRSk7XHJcbiAgICAgICAgQXBwLmRpYWxvZ01nci5jbG9zZURpYWxvZ0J5SWQodGhpcy5kaWFsb2dJZCk7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/random.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7860fqfkcJERrnDR1vszchF', 'random');
// scripts/utils/random.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
/**
 * 随机数工具类
 */
exports.random = {
    /**
     * 获取[min,max)之间的随机数
     * @param area
     */
    findRandomBase: function (min, max) {
        return Math.random() * (max - min) + min;
    },
    /**
     * 获取[min,max)之间的随机整数
     * @param min
     * @param max
     */
    findRandomInteger: function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },
    /**
     * 按照arr获取权重值，arr为权重列表
     * @param arr
     */
    findRandomArray: function (arr) {
        if (arr === void 0) { arr = []; }
        var count = 0;
        for (var m in arr) {
            if (arr[m]) {
                count += arr[m];
            }
        }
        var ran = this.findRandomBase() * count;
        for (var m in arr) {
            if (ran <= arr[m]) {
                return m;
            }
        }
        return 0;
    },
    /**
     * 从数组data中取出cout个随机值
     * @param count
     * @param data
     */
    findListFromArray: function (count, data) {
        if (data === void 0) { data = []; }
        if (count >= data.length) {
            return data;
        }
        else if (count < data.length) {
            var temp = [];
            var arr = this.randomNumBoth(data.length, count);
            for (var m in arr) {
                if (data[arr[m]]) {
                    temp.push(data[arr[m]]);
                }
            }
            return temp;
        }
    },
    /**
    * 从数组data中取出cout个随机值
    * @param count
    * @param data
    */
    findListFromObject: function (count, data) {
        var obj = Object.keys(data);
        if (count >= obj.length) {
            return data;
        }
        else if (count < obj.length) {
            var temp = {};
            var arr = this.randomNumBoth(obj.length, count);
            for (var m in arr) {
                if (data[arr[m]]) {
                    temp[arr[m]] = data[arr[m]];
                }
            }
            return temp;
        }
    },
    isCheckOk: function (limit, max) {
        var random = this.findRandomBase(0, max);
        console.error("ischeckOk:", limit, max, random, random <= limit);
        return random <= limit;
    },
    //取出0，maxLen内的maxNum个数字
    randomNumBoth: function (maxLen, maxNum) {
        var arr = [];
        for (var i = 0; i < maxLen; i++) {
            arr.push(i);
        }
        var numArr = [];
        //最大的循环次数
        var arrLength = arr.length;
        for (var i = 0; i < arrLength; i++) {
            //取出随机数 
            var number = Math.floor(Math.random() * arr.length); //生成随机数num
            //往新建的数组里面传入数值
            numArr.push(arr[number]);
            //传入一个删除一个，避免重复
            arr.splice(number, 1);
            if (arr.length <= arrLength - maxNum) {
                return numArr;
            }
        }
    }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdXRpbHNcXHJhbmRvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNVLFFBQUEsTUFBTSxHQUFHO0lBRWxCOzs7T0FHRztJQUNILGNBQWMsRUFBZCxVQUFlLEdBQVcsRUFBRSxHQUFXO1FBQ25DLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtJQUM1QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGlCQUFpQixFQUFqQixVQUFrQixHQUFXLEVBQUUsR0FBVztRQUN0QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlLEVBQWYsVUFBZ0IsR0FBdUI7UUFBdkIsb0JBQUEsRUFBQSxRQUF1QjtRQUNuQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUE7UUFDYixLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRTtZQUNmLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNSLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDbEI7U0FDSjtRQUNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxLQUFLLENBQUE7UUFDdkMsS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7WUFDZixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLENBQUE7YUFDWDtTQUNKO1FBQ0QsT0FBTyxDQUFDLENBQUE7SUFDWixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILGlCQUFpQixFQUFqQixVQUFrQixLQUFhLEVBQUUsSUFBcUI7UUFB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LEdBQUcsQ0FBQyxNQUFNLElBQUksU0FBUyxHQUFHLE1BQU0sRUFBRTtnQkFDbEMsT0FBTyxNQUFNLENBQUM7YUFDakI7U0FDSjtJQUVMLENBQUM7Q0FFSixDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDpmo/mnLrmlbDlt6XlhbfnsbtcbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IHtcblxuICAgIC8qKlxuICAgICAqIOiOt+WPllttaW4sbWF4KeS5i+mXtOeahOmaj+acuuaVsFxuICAgICAqIEBwYXJhbSBhcmVhIFxuICAgICAqL1xuICAgIGZpbmRSYW5kb21CYXNlKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiOt+WPllttaW4sbWF4KeS5i+mXtOeahOmaj+acuuaVtOaVsFxuICAgICAqIEBwYXJhbSBtaW4gXG4gICAgICogQHBhcmFtIG1heCBcbiAgICAgKi9cbiAgICBmaW5kUmFuZG9tSW50ZWdlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmjInnhadhcnLojrflj5bmnYPph43lgLzvvIxhcnLkuLrmnYPph43liJfooahcbiAgICAgKiBAcGFyYW0gYXJyIFxuICAgICAqL1xuICAgIGZpbmRSYW5kb21BcnJheShhcnI6IEFycmF5PG51bWJlcj4gPSBbXSkge1xuICAgICAgICBsZXQgY291bnQgPSAwXG4gICAgICAgIGZvciAobGV0IG0gaW4gYXJyKSB7XG4gICAgICAgICAgICBpZiAoYXJyW21dKSB7XG4gICAgICAgICAgICAgICAgY291bnQgKz0gYXJyW21dXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJhbiA9IHRoaXMuZmluZFJhbmRvbUJhc2UoKSAqIGNvdW50XG4gICAgICAgIGZvciAobGV0IG0gaW4gYXJyKSB7XG4gICAgICAgICAgICBpZiAocmFuIDw9IGFyclttXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDBcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOS7juaVsOe7hGRhdGHkuK3lj5blh7pjb3V05Liq6ZqP5py65YC8XG4gICAgICogQHBhcmFtIGNvdW50IFxuICAgICAqIEBwYXJhbSBkYXRhIFxuICAgICAqL1xuICAgIGZpbmRMaXN0RnJvbUFycmF5KGNvdW50OiBudW1iZXIsIGRhdGE6IEFycmF5PGFueT4gPSBbXSkge1xuICAgICAgICBpZiAoY291bnQgPj0gZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgIH0gZWxzZSBpZiAoY291bnQgPCBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHRlbXA6IEFycmF5PGFueT4gPSBbXVxuICAgICAgICAgICAgbGV0IGFyciA9IHRoaXMucmFuZG9tTnVtQm90aChkYXRhLmxlbmd0aCwgY291bnQpXG4gICAgICAgICAgICBmb3IgKGxldCBtIGluIGFycikge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhW2FyclttXV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcC5wdXNoKGRhdGFbYXJyW21dXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGVtcFxuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAqIOS7juaVsOe7hGRhdGHkuK3lj5blh7pjb3V05Liq6ZqP5py65YC8XG4gICAgKiBAcGFyYW0gY291bnQgXG4gICAgKiBAcGFyYW0gZGF0YSBcbiAgICAqL1xuICAgIGZpbmRMaXN0RnJvbU9iamVjdChjb3VudDogbnVtYmVyLCBkYXRhOiBvYmplY3QpIHtcbiAgICAgICAgbGV0IG9iaiA9IE9iamVjdC5rZXlzKGRhdGEpXG4gICAgICAgIGlmIChjb3VudCA+PSBvYmoubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICB9IGVsc2UgaWYgKGNvdW50IDwgb2JqLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHRlbXA6IG9iamVjdCA9IHt9XG4gICAgICAgICAgICBsZXQgYXJyID0gdGhpcy5yYW5kb21OdW1Cb3RoKG9iai5sZW5ndGgsIGNvdW50KVxuICAgICAgICAgICAgZm9yIChsZXQgbSBpbiBhcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVthcnJbbV1dKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBbYXJyW21dXSA9IGRhdGFbYXJyW21dXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0ZW1wXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGlzQ2hlY2tPayhsaW1pdCwgbWF4KSB7XG4gICAgICAgIGxldCByYW5kb20gPSB0aGlzLmZpbmRSYW5kb21CYXNlKDAsIG1heClcbiAgICAgICAgY29uc29sZS5lcnJvcihcImlzY2hlY2tPazpcIiwgbGltaXQsIG1heCwgcmFuZG9tLCByYW5kb20gPD0gbGltaXQpXG4gICAgICAgIHJldHVybiByYW5kb20gPD0gbGltaXRcbiAgICB9LFxuICAgIC8v5Y+W5Ye6MO+8jG1heExlbuWGheeahG1heE51beS4quaVsOWtl1xuICAgIHJhbmRvbU51bUJvdGgobWF4TGVuLCBtYXhOdW0pIHtcbiAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heExlbjsgaSsrKSB7XG4gICAgICAgICAgICBhcnIucHVzaChpKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG51bUFyciA9IFtdO1xuICAgICAgICAvL+acgOWkp+eahOW+queOr+asoeaVsFxuICAgICAgICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy/lj5blh7rpmo/mnLrmlbAgXG4gICAgICAgICAgICB2YXIgbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCk7IC8v55Sf5oiQ6ZqP5py65pWwbnVtXG4gICAgICAgICAgICAvL+W+gOaWsOW7uueahOaVsOe7hOmHjOmdouS8oOWFpeaVsOWAvFxuICAgICAgICAgICAgbnVtQXJyLnB1c2goYXJyW251bWJlcl0pO1xuICAgICAgICAgICAgLy/kvKDlhaXkuIDkuKrliKDpmaTkuIDkuKrvvIzpgb/lhY3ph43lpI1cbiAgICAgICAgICAgIGFyci5zcGxpY2UobnVtYmVyLCAxKTtcbiAgICAgICAgICAgIGlmIChhcnIubGVuZ3RoIDw9IGFyckxlbmd0aCAtIG1heE51bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudW1BcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/animate-utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd36dbIIzohLZ5glWF8qELi0', 'animate-utils');
// scripts/utils/animate-utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animateUtils = void 0;
/**
 * 动画工具类
 */
exports.animateUtils = {
    /**动态播放帧动画
     @param playNode 播放帧动画的节点
     @param resUrl 资源图集或散图所在的文件夹(图片名称随意,播放顺序为图片名称的数字和字母从小到大),bundle为null则从路径“resources/”开始
     @param resType 资源类型[1:散图  2:图集]
     @param bundle bundle包,可以为null
     @param config 参数配置对象{ }
     @param config.playTime 播放时间  默认不循环
     @param config.loopNum 循环次数  默认一次
     @param config.playInterval 播放间隔 默认0.12秒
     @param config.loopPause 每次循环停顿帧数[最终时间=播放间隔*次数] 默认0
     @param config.oppositePlayback 是否反向播放[即顺序播放一次,再倒着播放一次,算一个循环] 默认否
     @param config.endToHide 播放完毕后是否隐藏动画  默认隐藏
     @param cb 动画播放完毕后的回调
     */
    playFrameAnim: function (playNode, resUrl, resType, bundle, config, cb) {
        if (config == null)
            config = {};
        if (config.playTime == null)
            config.playTime = 99999;
        if (config.loopNum == null)
            config.loopNum = 1;
        if (config.playInterval == null)
            config.playInterval = 0.12;
        if (config.loopPause == null)
            config.loopPause = 0;
        if (config.oppositePlayback == null)
            config.oppositePlayback = false;
        if (config.endToHide == null)
            config.endToHide = true;
        var sprite = playNode.getComponent(cc.Sprite);
        if (!sprite) {
            sprite = playNode.addComponent(cc.Sprite);
        }
        sprite.sizeMode = cc.Sprite.SizeMode.RAW;
        sprite.trim = false;
        sprite.unscheduleAllCallbacks();
        if (config.endToHide)
            sprite.spriteFrame = null;
        var fun = function (assets) {
            //按照数字和字母从小到大排序
            var data = [];
            var p = 1;
            while (assets.length > 0) {
                var l = [];
                for (var i = assets.length - 1; i > -1; i--) {
                    if (assets[i].name.length == p) {
                        l.push(assets[i]);
                        assets.splice(i, 1);
                    }
                }
                l.reverse();
                data = data.concat(l);
                p++;
            }
            assets = data;
            var assetsOpposite = null; //反向帧
            if (config.oppositePlayback) {
                //是否反向播放
                assetsOpposite = [];
                for (var i = assets.length - 1; i > -1; i--) {
                    assetsOpposite.push(assets[i]);
                }
                assets = assets.concat(assetsOpposite);
            }
            if (config.loopPause > 0) {
                //每个循环播放的停顿次数
                for (var i = 0; i < config.loopPause; i++) {
                    assets[assets.length] = null;
                }
            }
            var m = 0;
            var n = config.loopNum * assets.length;
            sprite.node.active = true;
            sprite.schedule(function () {
                if (assets[m % assets.length]) {
                    sprite.spriteFrame = assets[m % assets.length];
                }
                m++;
                if (m == n) {
                    sprite.unscheduleAllCallbacks();
                    if (config.endToHide) {
                        sprite.spriteFrame = null;
                        sprite.node.active = false;
                    }
                    cb && cb();
                }
            }, config.playInterval, config.loopNum * assets.length - 1);
            sprite.scheduleOnce(function () {
                sprite.unscheduleAllCallbacks();
                if (config.endToHide) {
                    sprite.spriteFrame = null;
                    sprite.node.active = false;
                }
                cb && cb();
            }, config.playTime);
        };
        if (resType == 1) {
            this.loadDir(bundle, resUrl, cc.SpriteFrame, function (err, assets) {
                if (err)
                    return cc.warn(err);
                if (!sprite || !sprite.node || !sprite.node.isValid)
                    return;
                fun(assets);
            });
        }
        else if (resType == 2) {
            this.loadDir(bundle, resUrl, cc.SpriteAtlas, function (err, atlas) {
                if (err)
                    return cc.warn(err);
                if (!sprite || !sprite.node || !sprite.node.isValid)
                    return;
                fun(atlas.getSpriteFrames());
            });
        }
        else {
            cc.warn("动画类型未实现", resType);
        }
    },
    /**
   * 播放一个贝塞尔曲线的播放轨迹,用于金币，砖石，道具飞入背包
   * @param spriteFrame
   * @param startNode
   * @param target
   * @param callback
   * @param scale
   */
    playAnimate: function (spriteFrame, startNode, targetNode, callback) {
        var canvasNode = cc.director.getScene().getChildByName('Canvas');
        var startPos = canvasNode.convertToNodeSpaceAR(startNode.convertToWorldSpaceAR(cc.v2(0, 0)));
        var endPos = canvasNode.convertToNodeSpaceAR(targetNode.convertToWorldSpaceAR(cc.v2(0, 0)));
        var node = new cc.Node();
        node.setContentSize(136, 136);
        node.zIndex = 2001;
        node.setPosition(startPos);
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
        sprite.type = cc.Sprite.Type.SIMPLE;
        sprite.sizeMode = cc.Sprite.SizeMode.RAW;
        sprite.trim = false;
        node.parent = canvasNode;
        var actions = [];
        var midPos = cc.v2(startPos.x + 150, startPos.y - 150);
        var bezier = [startPos, midPos, endPos];
        var bezierTo = cc.bezierTo(0.5, bezier);
        var scaleTo = cc.scaleTo(0.5, 0.3, 0.3);
        actions.push(cc.delayTime(0.3));
        actions.push(cc.spawn(scaleTo, bezierTo));
        actions.push(cc.fadeOut(0.2));
        actions.push(cc.callFunc(function () {
            node.destroy();
            callback && callback(targetNode);
        }));
        node.runAction(cc.sequence(actions));
    },
    /**
     * 获取金币运动的曲线
     * @param time 时间
     * @param startPoint 开始坐标
     * @param endPoint 结束坐标
     * @param height 高度
     * @param angle 角度
     * @returns
     */
    getBezier: function (time, startPoint, endPoint, height, angle) {
        // 把角度转换为弧度
        var radian = angle * 3.14159 / 180;
        // 第一个控制点为抛物线左半弧的中点
        var q1x = startPoint.x + (endPoint.x - startPoint.x) / 4;
        var q1 = cc.v2(q1x, height + startPoint.y + Math.cos(radian) * q1x);
        // 第二个控制点为整个抛物线的中点
        var q2x = startPoint.x + (endPoint.x - startPoint.x) / 2;
        var q2 = cc.v2(q2x, height + startPoint.y + Math.cos(radian) * q2x);
        // 曲线配置
        return cc.bezierTo(time, [q1, q2, endPoint]);
    }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdXRpbHNcXGFuaW1hdGUtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0dBRUc7QUFDVSxRQUFBLFlBQVksR0FBRztJQUV4Qjs7Ozs7Ozs7Ozs7OztPQWFHO0lBQ0gsYUFBYSxFQUFiLFVBQ0ksUUFBaUIsRUFDakIsTUFBYyxFQUNkLE9BQWUsRUFDZixNQUE4QixFQUM5QixNQUF5RixFQUN6RixFQUFhO1FBRWIsSUFBSSxNQUFNLElBQUksSUFBSTtZQUFFLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEMsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUk7WUFBRSxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNyRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSTtZQUFFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUksTUFBTSxDQUFDLFlBQVksSUFBSSxJQUFJO1lBQUUsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDNUQsSUFBSSxNQUFNLENBQUMsU0FBUyxJQUFJLElBQUk7WUFBRSxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuRCxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJO1lBQUUsTUFBTSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNyRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSTtZQUFFLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRELElBQUksTUFBTSxHQUFjLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCxNQUFNLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0M7UUFFRCxNQUFNLENBQUMsUUFB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bHMgfSBmcm9tIFwiLi9tYXRoLXV0aWxzXCI7XHJcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gXCIuL3JhbmRvbVwiO1xyXG5cclxuLyoqXHJcbiAqIOWKqOeUu+W3peWFt+exu1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFuaW1hdGVVdGlscyA9IHtcclxuXHJcbiAgICAvKirliqjmgIHmkq3mlL7luKfliqjnlLtcclxuICAgICBAcGFyYW0gcGxheU5vZGUg5pKt5pS+5bin5Yqo55S755qE6IqC54K5XHJcbiAgICAgQHBhcmFtIHJlc1VybCDotYTmupDlm77pm4bmiJbmlaPlm77miYDlnKjnmoTmlofku7blpLko5Zu+54mH5ZCN56ew6ZqP5oSPLOaSreaUvumhuuW6j+S4uuWbvueJh+WQjeensOeahOaVsOWtl+WSjOWtl+avjeS7juWwj+WIsOWkpyksYnVuZGxl5Li6bnVsbOWImeS7jui3r+W+hOKAnHJlc291cmNlcy/igJ3lvIDlp4tcclxuICAgICBAcGFyYW0gcmVzVHlwZSDotYTmupDnsbvlnotbMTrmlaPlm74gIDI65Zu+6ZuGXVxyXG4gICAgIEBwYXJhbSBidW5kbGUgYnVuZGxl5YyFLOWPr+S7peS4um51bGxcclxuICAgICBAcGFyYW0gY29uZmlnIOWPguaVsOmFjee9ruWvueixoXsgfVxyXG4gICAgIEBwYXJhbSBjb25maWcucGxheVRpbWUg5pKt5pS+5pe26Ze0ICDpu5jorqTkuI3lvqrnjq9cclxuICAgICBAcGFyYW0gY29uZmlnLmxvb3BOdW0g5b6q546v5qyh5pWwICDpu5jorqTkuIDmrKFcclxuICAgICBAcGFyYW0gY29uZmlnLnBsYXlJbnRlcnZhbCDmkq3mlL7pl7TpmpQg6buY6K6kMC4xMuenklxyXG4gICAgIEBwYXJhbSBjb25maWcubG9vcFBhdXNlIOavj+asoeW+queOr+WBnOmhv+W4p+aVsFvmnIDnu4jml7bpl7Q95pKt5pS+6Ze06ZqUKuasoeaVsF0g6buY6K6kMFxyXG4gICAgIEBwYXJhbSBjb25maWcub3Bwb3NpdGVQbGF5YmFjayDmmK/lkKblj43lkJHmkq3mlL5b5Y2z6aG65bqP5pKt5pS+5LiA5qyhLOWGjeWAkuedgOaSreaUvuS4gOasoSznrpfkuIDkuKrlvqrnjq9dIOm7mOiupOWQplxyXG4gICAgIEBwYXJhbSBjb25maWcuZW5kVG9IaWRlIOaSreaUvuWujOavleWQjuaYr+WQpumakOiXj+WKqOeUuyAg6buY6K6k6ZqQ6JePXHJcbiAgICAgQHBhcmFtIGNiIOWKqOeUu+aSreaUvuWujOavleWQjueahOWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwbGF5RnJhbWVBbmltKFxyXG4gICAgICAgIHBsYXlOb2RlOiBjYy5Ob2RlLFxyXG4gICAgICAgIHJlc1VybDogc3RyaW5nLFxyXG4gICAgICAgIHJlc1R5cGU6IG51bWJlcixcclxuICAgICAgICBidW5kbGU6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUsXHJcbiAgICAgICAgY29uZmlnPzogeyBwbGF5VGltZT8sIGxvb3BOdW0/LCBwbGF5SW50ZXJ2YWw/LCBsb29wUGF1c2U/LCBvcHBvc2l0ZVBsYXliYWNrPywgZW5kVG9IaWRlP30sXHJcbiAgICAgICAgY2I/OiBGdW5jdGlvblxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZyA9PSBudWxsKSBjb25maWcgPSB7fTtcclxuICAgICAgICBpZiAoY29uZmlnLnBsYXlUaW1lID09IG51bGwpIGNvbmZpZy5wbGF5VGltZSA9IDk5OTk5O1xyXG4gICAgICAgIGlmIChjb25maWcubG9vcE51bSA9PSBudWxsKSBjb25maWcubG9vcE51bSA9IDE7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5wbGF5SW50ZXJ2YWwgPT0gbnVsbCkgY29uZmlnLnBsYXlJbnRlcnZhbCA9IDAuMTI7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5sb29wUGF1c2UgPT0gbnVsbCkgY29uZmlnLmxvb3BQYXVzZSA9IDA7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5vcHBvc2l0ZVBsYXliYWNrID09IG51bGwpIGNvbmZpZy5vcHBvc2l0ZVBsYXliYWNrID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5lbmRUb0hpZGUgPT0gbnVsbCkgY29uZmlnLmVuZFRvSGlkZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBzcHJpdGU6IGNjLlNwcml0ZSA9IHBsYXlOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIGlmICghc3ByaXRlKSB7XHJcbiAgICAgICAgICAgIHNwcml0ZSA9IHBsYXlOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3ByaXRlLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLlJBVztcclxuICAgICAgICBzcHJpdGUudHJpbSA9IGZhbHNlO1xyXG4gICAgICAgIHNwcml0ZS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcblxyXG4gICAgICAgIGlmIChjb25maWcuZW5kVG9IaWRlKSBzcHJpdGUuc3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgICAgICBsZXQgZnVuID0gKGFzc2V0cykgPT4ge1xyXG4gICAgICAgICAgICAvL+aMieeFp+aVsOWtl+WSjOWtl+avjeS7juWwj+WIsOWkp+aOkuW6j1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgcCA9IDE7XHJcbiAgICAgICAgICAgIHdoaWxlIChhc3NldHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGwgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBhc3NldHMubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXNzZXRzW2ldLm5hbWUubGVuZ3RoID09IHApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbC5wdXNoKGFzc2V0c1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbC5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gZGF0YS5jb25jYXQobCk7XHJcbiAgICAgICAgICAgICAgICBwKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXNzZXRzID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgIGxldCBhc3NldHNPcHBvc2l0ZSA9IG51bGw7IC8v5Y+N5ZCR5binXHJcblxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLm9wcG9zaXRlUGxheWJhY2spIHtcclxuICAgICAgICAgICAgICAgIC8v5piv5ZCm5Y+N5ZCR5pKt5pS+XHJcbiAgICAgICAgICAgICAgICBhc3NldHNPcHBvc2l0ZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGFzc2V0cy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0c09wcG9zaXRlLnB1c2goYXNzZXRzW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFzc2V0cyA9IGFzc2V0cy5jb25jYXQoYXNzZXRzT3Bwb3NpdGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmxvb3BQYXVzZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8v5q+P5Liq5b6q546v5pKt5pS+55qE5YGc6aG/5qyh5pWwXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmZpZy5sb29wUGF1c2U7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0c1thc3NldHMubGVuZ3RoXSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBtID0gMDtcclxuICAgICAgICAgICAgbGV0IG4gPSBjb25maWcubG9vcE51bSAqIGFzc2V0cy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHNwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNwcml0ZS5zY2hlZHVsZShcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXNzZXRzW20gJSBhc3NldHMubGVuZ3RoXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBhc3NldHNbbSAlIGFzc2V0cy5sZW5ndGhdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBtKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG0gPT0gbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGUudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmVuZFRvSGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiICYmIGNiKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5wbGF5SW50ZXJ2YWwsXHJcbiAgICAgICAgICAgICAgICBjb25maWcubG9vcE51bSAqIGFzc2V0cy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBzcHJpdGUuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNwcml0ZS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmVuZFRvSGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgICAgICB9LCBjb25maWcucGxheVRpbWUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChyZXNUeXBlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkRGlyKGJ1bmRsZSwgcmVzVXJsLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgYXNzZXRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2Mud2FybihlcnIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzcHJpdGUgfHwgIXNwcml0ZS5ub2RlIHx8ICFzcHJpdGUubm9kZS5pc1ZhbGlkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBmdW4oYXNzZXRzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXNUeXBlID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkRGlyKGJ1bmRsZSwgcmVzVXJsLCBjYy5TcHJpdGVBdGxhcywgKGVyciwgYXRsYXM6IGNjLlNwcml0ZUF0bGFzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2Mud2FybihlcnIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzcHJpdGUgfHwgIXNwcml0ZS5ub2RlIHx8ICFzcHJpdGUubm9kZS5pc1ZhbGlkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBmdW4oYXRsYXMuZ2V0U3ByaXRlRnJhbWVzKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwi5Yqo55S757G75Z6L5pyq5a6e546wXCIsIHJlc1R5cGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgKiDmkq3mlL7kuIDkuKrotJ3loZ7lsJTmm7Lnur/nmoTmkq3mlL7ovajov7ks55So5LqO6YeR5biB77yM56CW55+z77yM6YGT5YW36aOe5YWl6IOM5YyFXHJcbiAgICogQHBhcmFtIHNwcml0ZUZyYW1lIFxyXG4gICAqIEBwYXJhbSBzdGFydE5vZGUgXHJcbiAgICogQHBhcmFtIHRhcmdldCBcclxuICAgKiBAcGFyYW0gY2FsbGJhY2sgXHJcbiAgICogQHBhcmFtIHNjYWxlIFxyXG4gICAqL1xyXG4gICAgcGxheUFuaW1hdGUoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lLCBzdGFydE5vZGU6IGNjLk5vZGUsIHRhcmdldE5vZGU6IGNjLk5vZGUsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGxldCBjYW52YXNOb2RlID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnQ2FudmFzJyk7XHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zID0gY2FudmFzTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzdGFydE5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKSk7XHJcbiAgICAgICAgbGV0IGVuZFBvcyA9IGNhbnZhc05vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodGFyZ2V0Tm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpKTtcclxuXHJcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIG5vZGUuc2V0Q29udGVudFNpemUoMTM2LCAxMzYpO1xyXG4gICAgICAgIG5vZGUuekluZGV4ID0gMjAwMTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKHN0YXJ0UG9zKTtcclxuICAgICAgICBsZXQgc3ByaXRlID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICBzcHJpdGUudHlwZSA9IGNjLlNwcml0ZS5UeXBlLlNJTVBMRTtcclxuICAgICAgICBzcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuUkFXO1xyXG4gICAgICAgIHNwcml0ZS50cmltID0gZmFsc2U7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSBjYW52YXNOb2RlO1xyXG4gICAgICAgIGxldCBhY3Rpb25zID0gW107XHJcbiAgICAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKHN0YXJ0UG9zLnggKyAxNTAsIHN0YXJ0UG9zLnkgLSAxNTApO1xyXG4gICAgICAgIGxldCBiZXppZXIgPSBbc3RhcnRQb3MsIG1pZFBvcywgZW5kUG9zXTtcclxuICAgICAgICBsZXQgYmV6aWVyVG8gPSBjYy5iZXppZXJUbygwLjUsIGJlemllcik7XHJcbiAgICAgICAgbGV0IHNjYWxlVG8gPSBjYy5zY2FsZVRvKDAuNSwgMC4zLCAwLjMpXHJcbiAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmRlbGF5VGltZSgwLjMpKTtcclxuICAgICAgICBhY3Rpb25zLnB1c2goY2Muc3Bhd24oc2NhbGVUbywgYmV6aWVyVG8pKTtcclxuICAgICAgICBhY3Rpb25zLnB1c2goY2MuZmFkZU91dCgwLjIpKVxyXG4gICAgICAgIGFjdGlvbnMucHVzaChjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh0YXJnZXROb2RlKTtcclxuICAgICAgICB9KSlcclxuXHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0aW9ucykpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumHkeW4gei/kOWKqOeahOabsue6v1xyXG4gICAgICogQHBhcmFtIHRpbWUg5pe26Ze0IFxyXG4gICAgICogQHBhcmFtIHN0YXJ0UG9pbnQg5byA5aeL5Z2Q5qCHXHJcbiAgICAgKiBAcGFyYW0gZW5kUG9pbnQg57uT5p2f5Z2Q5qCHXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IOmrmOW6plxyXG4gICAgICogQHBhcmFtIGFuZ2xlIOinkuW6plxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIGdldEJlemllcih0aW1lLCBzdGFydFBvaW50LCBlbmRQb2ludCwgaGVpZ2h0LCBhbmdsZSkge1xyXG4gICAgICAgIC8vIOaKiuinkuW6pui9rOaNouS4uuW8p+W6plxyXG4gICAgICAgIGxldCByYWRpYW4gPSBhbmdsZSAqIDMuMTQxNTkgLyAxODA7XHJcbiAgICAgICAgLy8g56ys5LiA5Liq5o6n5Yi254K55Li65oqb54mp57q/5bem5Y2K5byn55qE5Lit54K5XHJcbiAgICAgICAgbGV0IHExeCA9IHN0YXJ0UG9pbnQueCArIChlbmRQb2ludC54IC0gc3RhcnRQb2ludC54KSAvIDQ7XHJcbiAgICAgICAgbGV0IHExID0gY2MudjIocTF4LCBoZWlnaHQgKyBzdGFydFBvaW50LnkgKyBNYXRoLmNvcyhyYWRpYW4pICogcTF4KTtcclxuICAgICAgICAvLyDnrKzkuozkuKrmjqfliLbngrnkuLrmlbTkuKrmipvniannur/nmoTkuK3ngrlcclxuICAgICAgICBsZXQgcTJ4ID0gc3RhcnRQb2ludC54ICsgKGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpIC8gMjtcclxuICAgICAgICBsZXQgcTIgPSBjYy52MihxMngsIGhlaWdodCArIHN0YXJ0UG9pbnQueSArIE1hdGguY29zKHJhZGlhbikgKiBxMngpO1xyXG4gICAgICAgIC8vIOabsue6v+mFjee9rlxyXG4gICAgICAgIHJldHVybiBjYy5iZXppZXJUbyh0aW1lLCBbcTEsIHEyLCBlbmRQb2ludF0pO1xyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/List.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b413dGbLNdPjb12nI9/OPz+', 'List');
// scripts/ui/List.ts

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
/******************************************
 * @author kL <klk0@qq.com>
 * @date 2019/6/6
 * @doc 列表组件.
 * @end
 ******************************************/
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, disallowMultiple = _a.disallowMultiple, menu = _a.menu, executionOrder = _a.executionOrder, requireComponent = _a.requireComponent;
var ListItem_1 = require("./ListItem");
var TemplateType;
(function (TemplateType) {
    TemplateType[TemplateType["NODE"] = 1] = "NODE";
    TemplateType[TemplateType["PREFAB"] = 2] = "PREFAB";
})(TemplateType || (TemplateType = {}));
var SlideType;
(function (SlideType) {
    SlideType[SlideType["NORMAL"] = 1] = "NORMAL";
    SlideType[SlideType["ADHERING"] = 2] = "ADHERING";
    SlideType[SlideType["PAGE"] = 3] = "PAGE";
})(SlideType || (SlideType = {}));
var SelectedType;
(function (SelectedType) {
    SelectedType[SelectedType["NONE"] = 0] = "NONE";
    SelectedType[SelectedType["SINGLE"] = 1] = "SINGLE";
    SelectedType[SelectedType["MULT"] = 2] = "MULT";
})(SelectedType || (SelectedType = {}));
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //模板类型
        _this.templateType = TemplateType.NODE;
        //模板Item（Node）
        _this.tmpNode = null;
        //模板Item（Prefab）
        _this.tmpPrefab = null;
        //滑动模式
        _this._slideMode = SlideType.NORMAL;
        //翻页作用距离
        _this.pageDistance = .3;
        //页面改变事件
        _this.pageChangeEvent = new cc.Component.EventHandler();
        //是否为虚拟列表（动态列表）
        _this._virtual = true;
        //是否为循环列表
        _this.cyclic = false;
        //缺省居中
        _this.lackCenter = false;
        //缺省可滑动
        _this.lackSlide = false;
        //刷新频率
        _this._updateRate = 0;
        //分帧渲染（每帧渲染的Item数量（<=0时关闭分帧渲染））
        _this.frameByFrameRenderNum = 0;
        //渲染事件（渲染器）
        _this.renderEvent = new cc.Component.EventHandler();
        //选择模式
        _this.selectedMode = SelectedType.NONE;
        _this.repeatEventSingle = false;
        //触发选择事件
        _this.selectedEvent = null; //new cc.Component.EventHandler();
        //当前选择id
        _this._selectedId = -1;
        _this._forceUpdate = false;
        _this._updateDone = true;
        //列表数量
        _this._numItems = 0;
        _this._inited = false;
        _this._needUpdateWidget = false;
        _this._aniDelRuning = false;
        _this._doneAfterUpdate = false;
        _this.adhering = false;
        _this._adheringBarrier = false;
        _this.curPageNum = 0;
        return _this;
    }
    Object.defineProperty(List.prototype, "slideMode", {
        get: function () {
            return this._slideMode;
        },
        set: function (val) {
            this._slideMode = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "virtual", {
        get: function () {
            return this._virtual;
        },
        set: function (val) {
            if (val != null)
                this._virtual = val;
            if (!CC_DEV && this._numItems != 0) {
                this._onScrolling();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "updateRate", {
        get: function () {
            return this._updateRate;
        },
        set: function (val) {
            if (val >= 0 && val <= 6) {
                this._updateRate = val;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "selectedId", {
        get: function () {
            return this._selectedId;
        },
        set: function (val) {
            var t = this;
            var item;
            switch (t.selectedMode) {
                case SelectedType.SINGLE: {
                    if (!t.repeatEventSingle && val == t._selectedId)
                        return;
                    item = t.getItemByListId(val);
                    // if (!item && val >= 0)
                    //     return;
                    var listItem = void 0;
                    if (t._selectedId >= 0)
                        t._lastSelectedId = t._selectedId;
                    else //如果＜0则取消选择，把_lastSelectedId也置空吧，如果以后有特殊需求再改吧。
                        t._lastSelectedId = null;
                    t._selectedId = val;
                    if (item) {
                        listItem = item.getComponent(ListItem_1.default);
                        listItem.selected = true;
                    }
                    if (t._lastSelectedId >= 0 && t._lastSelectedId != t._selectedId) {
                        var lastItem = t.getItemByListId(t._lastSelectedId);
                        if (lastItem) {
                            lastItem.getComponent(ListItem_1.default).selected = false;
                        }
                    }
                    if (t.selectedEvent) {
                        cc.Component.EventHandler.emitEvents([t.selectedEvent], item, val % this._actualNumItems, t._lastSelectedId == null ? null : (t._lastSelectedId % this._actualNumItems));
                    }
                    break;
                }
                case SelectedType.MULT: {
                    item = t.getItemByListId(val);
                    if (!item)
                        return;
                    var listItem = item.getComponent(ListItem_1.default);
                    if (t._selectedId >= 0)
                        t._lastSelectedId = t._selectedId;
                    t._selectedId = val;
                    var bool = !listItem.selected;
                    listItem.selected = bool;
                    var sub = t.multSelected.indexOf(val);
                    if (bool && sub < 0) {
                        t.multSelected.push(val);
                    }
                    else if (!bool && sub >= 0) {
                        t.multSelected.splice(sub, 1);
                    }
                    if (t.selectedEvent) {
                        cc.Component.EventHandler.emitEvents([t.selectedEvent], item, val % this._actualNumItems, t._lastSelectedId == null ? null : (t._lastSelectedId % this._actualNumItems), bool);
                    }
                    break;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "numItems", {
        get: function () {
            return this._actualNumItems;
        },
        set: function (val) {
            var t = this;
            if (!t.checkInited(false))
                return;
            if (val == null || val < 0) {
                cc.error('numItems set the wrong::', val);
                return;
            }
            t._actualNumItems = t._numItems = val;
            t._forceUpdate = true;
            if (t._virtual) {
                t._resizeContent();
                if (t.cyclic) {
                    t._numItems = t._cyclicNum * t._numItems;
                }
                t._onScrolling();
                if (!t.frameByFrameRenderNum && t.slideMode == SlideType.PAGE)
                    t.curPageNum = t.nearestListId;
            }
            else {
                var layout = t.content.getComponent(cc.Layout);
                if (layout) {
                    layout.enabled = true;
                }
                t._delRedundantItem();
                t.firstListId = 0;
                if (t.frameByFrameRenderNum > 0) {
                    //先渲染几个出来
                    var len = t.frameByFrameRenderNum > t._numItems ? t._numItems : t.frameByFrameRenderNum;
                    for (var n = 0; n < len; n++) {
                        t._createOrUpdateItem2(n);
                    }
                    if (t.frameByFrameRenderNum < t._numItems) {
                        t._updateCounter = t.frameByFrameRenderNum;
                        t._updateDone = false;
                    }
                }
                else {
                    for (var n = 0; n < val; n++) {
                        t._createOrUpdateItem2(n);
                    }
                    t.displayItemNum = val;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(List.prototype, "scrollView", {
        get: function () {
            return this._scrollView;
        },
        enumerable: false,
        configurable: true
    });
    //----------------------------------------------------------------------------
    List.prototype.onLoad = function () {
        this._init();
    };
    List.prototype.onDestroy = function () {
        var t = this;
        if (t._itemTmp && t._itemTmp.isValid)
            t._itemTmp.destroy();
        if (t.tmpNode && t.tmpNode.isValid)
            t.tmpNode.destroy();
        // let total = t._pool.size();
        while (t._pool.size()) {
            var node = t._pool.get();
            node.destroy();
        }
        // if (total)
        //     cc.log('-----------------' + t.node.name + '<List> destroy node total num. =>', total);
    };
    List.prototype.onEnable = function () {
        // if (!CC_EDITOR) 
        this._registerEvent();
        this._init();
    };
    List.prototype.onDisable = function () {
        // if (!CC_EDITOR) 
        this._unregisterEvent();
    };
    //注册事件
    List.prototype._registerEvent = function () {
        var t = this;
        t.node.on(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, true);
        t.node.on('touch-up', t._onTouchUp, t);
        t.node.on(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, true);
        t.node.on('scroll-began', t._onScrollBegan, t, true);
        t.node.on('scroll-ended', t._onScrollEnded, t, true);
        t.node.on('scrolling', t._onScrolling, t, true);
        t.node.on(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
    };
    //卸载事件
    List.prototype._unregisterEvent = function () {
        var t = this;
        t.node.off(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, true);
        t.node.off('touch-up', t._onTouchUp, t);
        t.node.off(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, true);
        t.node.off('scroll-began', t._onScrollBegan, t, true);
        t.node.off('scroll-ended', t._onScrollEnded, t, true);
        t.node.off('scrolling', t._onScrolling, t, true);
        t.node.off(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t);
    };
    //初始化各种..
    List.prototype._init = function () {
        var t = this;
        if (t._inited)
            return;
        t._scrollView = t.node.getComponent(cc.ScrollView);
        t.content = t._scrollView.content;
        if (!t.content) {
            cc.error(t.node.name + "'s cc.ScrollView unset content!");
            return;
        }
        t._layout = t.content.getComponent(cc.Layout);
        t._align = t._layout.type; //排列模式
        t._resizeMode = t._layout.resizeMode; //自适应模式
        t._startAxis = t._layout.startAxis;
        t._topGap = t._layout.paddingTop; //顶边距
        t._rightGap = t._layout.paddingRight; //右边距
        t._bottomGap = t._layout.paddingBottom; //底边距
        t._leftGap = t._layout.paddingLeft; //左边距
        t._columnGap = t._layout.spacingX; //列距
        t._lineGap = t._layout.spacingY; //行距
        t._colLineNum; //列数或行数（非GRID模式则=1，表示单列或单行）;
        t._verticalDir = t._layout.verticalDirection; //垂直排列子节点的方向
        t._horizontalDir = t._layout.horizontalDirection; //水平排列子节点的方向
        t.setTemplateItem(cc.instantiate(t.templateType == TemplateType.PREFAB ? t.tmpPrefab : t.tmpNode));
        // 特定的滑动模式处理
        if (t._slideMode == SlideType.ADHERING || t._slideMode == SlideType.PAGE) {
            t._scrollView.inertia = false;
            t._scrollView._onMouseWheel = function () {
                return;
            };
        }
        if (!t.virtual) // lackCenter 仅支持 Virtual 模式
            t.lackCenter = false;
        t._lastDisplayData = []; //最后一次刷新的数据
        t.displayData = []; //当前数据
        t._pool = new cc.NodePool(); //这是个池子..
        t._forceUpdate = false; //是否强制更新
        t._updateCounter = 0; //当前分帧渲染帧数
        t._updateDone = true; //分帧渲染是否完成
        t.curPageNum = 0; //当前页数
        if (t.cyclic || 0) {
            t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t);
            t._scrollView._startBounceBackIfNeeded = function () {
                return false;
            };
            // t._scrollView._scrollChildren = function () {
            //     return false;
            // }
        }
        switch (t._align) {
            case cc.Layout.Type.HORIZONTAL: {
                switch (t._horizontalDir) {
                    case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                        t._alignCalcType = 1;
                        break;
                    case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                        t._alignCalcType = 2;
                        break;
                }
                break;
            }
            case cc.Layout.Type.VERTICAL: {
                switch (t._verticalDir) {
                    case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                        t._alignCalcType = 3;
                        break;
                    case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                        t._alignCalcType = 4;
                        break;
                }
                break;
            }
            case cc.Layout.Type.GRID: {
                switch (t._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL:
                        switch (t._verticalDir) {
                            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                t._alignCalcType = 3;
                                break;
                            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                t._alignCalcType = 4;
                                break;
                        }
                        break;
                    case cc.Layout.AxisDirection.VERTICAL:
                        switch (t._horizontalDir) {
                            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                t._alignCalcType = 1;
                                break;
                            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                t._alignCalcType = 2;
                                break;
                        }
                        break;
                }
                break;
            }
        }
        // 清空 content
        // t.content.children.forEach((child: cc.Node) => {
        //     child.removeFromParent();
        //     if (child != t.tmpNode && child.isValid)
        //         child.destroy();
        // });
        t.content.removeAllChildren();
        t._inited = true;
    };
    /**
     * 为了实现循环列表，必须覆写cc.ScrollView的某些函数
     * @param {Number} dt
     */
    List.prototype._processAutoScrolling = function (dt) {
        // let isAutoScrollBrake = this._scrollView._isNecessaryAutoScrollBrake();
        var brakingFactor = 1;
        this._scrollView['_autoScrollAccumulatedTime'] += dt * (1 / brakingFactor);
        var percentage = Math.min(1, this._scrollView['_autoScrollAccumulatedTime'] / this._scrollView['_autoScrollTotalTime']);
        if (this._scrollView['_autoScrollAttenuate']) {
            var time = percentage - 1;
            percentage = time * time * time * time * time + 1;
        }
        var newPosition = this._scrollView['_autoScrollStartPosition'].add(this._scrollView['_autoScrollTargetDelta'].mul(percentage));
        var EPSILON = this._scrollView['getScrollEndedEventTiming']();
        var reachedEnd = Math.abs(percentage - 1) <= EPSILON;
        // cc.log(reachedEnd, Math.abs(percentage - 1), EPSILON)
        var fireEvent = Math.abs(percentage - 1) <= this._scrollView['getScrollEndedEventTiming']();
        if (fireEvent && !this._scrollView['_isScrollEndedWithThresholdEventFired']) {
            this._scrollView['_dispatchEvent']('scroll-ended-with-threshold');
            this._scrollView['_isScrollEndedWithThresholdEventFired'] = true;
        }
        // if (this._scrollView.elastic && !reachedEnd) {
        //     let brakeOffsetPosition = newPosition.sub(this._scrollView._autoScrollBrakingStartPosition);
        //     if (isAutoScrollBrake) {
        //         brakeOffsetPosition = brakeOffsetPosition.mul(brakingFactor);
        //     }
        //     newPosition = this._scrollView._autoScrollBrakingStartPosition.add(brakeOffsetPosition);
        // } else {
        //     let moveDelta = newPosition.sub(this._scrollView.getContentPosition());
        //     let outOfBoundary = this._scrollView._getHowMuchOutOfBoundary(moveDelta);
        //     if (!outOfBoundary.fuzzyEquals(cc.v2(0, 0), EPSILON)) {
        //         newPosition = newPosition.add(outOfBoundary);
        //         reachedEnd = true;
        //     }
        // }
        if (reachedEnd) {
            this._scrollView['_autoScrolling'] = false;
        }
        var deltaMove = newPosition.sub(this._scrollView.getContentPosition());
        // cc.log(deltaMove)
        this._scrollView['_moveContent'](this._scrollView['_clampDelta'](deltaMove), reachedEnd);
        this._scrollView['_dispatchEvent']('scrolling');
        // scollTo API controll move
        if (!this._scrollView['_autoScrolling']) {
            this._scrollView['_isBouncing'] = false;
            this._scrollView['_scrolling'] = false;
            this._scrollView['_dispatchEvent']('scroll-ended');
        }
    };
    //设置模板Item
    List.prototype.setTemplateItem = function (item) {
        if (!item)
            return;
        var t = this;
        t._itemTmp = item;
        if (t._resizeMode == cc.Layout.ResizeMode.CHILDREN)
            t._itemSize = t._layout.cellSize;
        else
            t._itemSize = cc.size(item.width, item.height);
        //获取ListItem，如果没有就取消选择模式
        var com = item.getComponent(ListItem_1.default);
        var remove = false;
        if (!com)
            remove = true;
        // if (com) {
        //     if (!com._btnCom && !item.getComponent(cc.Button)) {
        //         remove = true;
        //     }
        // }
        if (remove) {
            t.selectedMode = SelectedType.NONE;
        }
        com = item.getComponent(cc.Widget);
        if (com && com.enabled) {
            t._needUpdateWidget = true;
        }
        if (t.selectedMode == SelectedType.MULT)
            t.multSelected = [];
        switch (t._align) {
            case cc.Layout.Type.HORIZONTAL:
                t._colLineNum = 1;
                t._sizeType = false;
                break;
            case cc.Layout.Type.VERTICAL:
                t._colLineNum = 1;
                t._sizeType = true;
                break;
            case cc.Layout.Type.GRID:
                switch (t._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL:
                        //计算列数
                        var trimW = t.content.width - t._leftGap - t._rightGap;
                        t._colLineNum = Math.floor((trimW + t._columnGap) / (t._itemSize.width + t._columnGap));
                        t._sizeType = true;
                        break;
                    case cc.Layout.AxisDirection.VERTICAL:
                        //计算行数
                        var trimH = t.content.height - t._topGap - t._bottomGap;
                        t._colLineNum = Math.floor((trimH + t._lineGap) / (t._itemSize.height + t._lineGap));
                        t._sizeType = false;
                        break;
                }
                break;
        }
    };
    /**
     * 检查是否初始化
     * @param {Boolean} printLog 是否打印错误信息
     * @returns
     */
    List.prototype.checkInited = function (printLog) {
        if (printLog === void 0) { printLog = true; }
        if (!this._inited) {
            if (printLog)
                cc.error('List initialization not completed!');
            return false;
        }
        return true;
    };
    //禁用 Layout 组件，自行计算 Content Size
    List.prototype._resizeContent = function () {
        var t = this;
        var result;
        switch (t._align) {
            case cc.Layout.Type.HORIZONTAL: {
                if (t._customSize) {
                    var fixed = t._getFixedSize(null);
                    result = t._leftGap + fixed.val + (t._itemSize.width * (t._numItems - fixed.count)) + (t._columnGap * (t._numItems - 1)) + t._rightGap;
                }
                else {
                    result = t._leftGap + (t._itemSize.width * t._numItems) + (t._columnGap * (t._numItems - 1)) + t._rightGap;
                }
                break;
            }
            case cc.Layout.Type.VERTICAL: {
                if (t._customSize) {
                    var fixed = t._getFixedSize(null);
                    result = t._topGap + fixed.val + (t._itemSize.height * (t._numItems - fixed.count)) + (t._lineGap * (t._numItems - 1)) + t._bottomGap;
                }
                else {
                    result = t._topGap + (t._itemSize.height * t._numItems) + (t._lineGap * (t._numItems - 1)) + t._bottomGap;
                }
                break;
            }
            case cc.Layout.Type.GRID: {
                //网格模式不支持居中
                if (t.lackCenter)
                    t.lackCenter = false;
                switch (t._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL:
                        var lineNum = Math.ceil(t._numItems / t._colLineNum);
                        result = t._topGap + (t._itemSize.height * lineNum) + (t._lineGap * (lineNum - 1)) + t._bottomGap;
                        break;
                    case cc.Layout.AxisDirection.VERTICAL:
                        var colNum = Math.ceil(t._numItems / t._colLineNum);
                        result = t._leftGap + (t._itemSize.width * colNum) + (t._columnGap * (colNum - 1)) + t._rightGap;
                        break;
                }
                break;
            }
        }
        var layout = t.content.getComponent(cc.Layout);
        if (layout)
            layout.enabled = false;
        t._allItemSize = result;
        t._allItemSizeNoEdge = t._allItemSize - (t._sizeType ? (t._topGap + t._bottomGap) : (t._leftGap + t._rightGap));
        if (t.cyclic) {
            var totalSize = (t._sizeType ? t.node.height : t.node.width);
            t._cyclicPos1 = 0;
            totalSize -= t._cyclicPos1;
            t._cyclicNum = Math.ceil(totalSize / t._allItemSizeNoEdge) + 1;
            var spacing = t._sizeType ? t._lineGap : t._columnGap;
            t._cyclicPos2 = t._cyclicPos1 + t._allItemSizeNoEdge + spacing;
            t._cyclicAllItemSize = t._allItemSize + (t._allItemSizeNoEdge * (t._cyclicNum - 1)) + (spacing * (t._cyclicNum - 1));
            t._cycilcAllItemSizeNoEdge = t._allItemSizeNoEdge * t._cyclicNum;
            t._cycilcAllItemSizeNoEdge += spacing * (t._cyclicNum - 1);
            // cc.log('_cyclicNum ->', t._cyclicNum, t._allItemSizeNoEdge, t._allItemSize, t._cyclicPos1, t._cyclicPos2);
        }
        t._lack = !t.cyclic && t._allItemSize < (t._sizeType ? t.node.height : t.node.width);
        var slideOffset = ((!t._lack || !t.lackCenter) && t.lackSlide) ? 0 : .1;
        var targetWH = t._lack ? ((t._sizeType ? t.node.height : t.node.width) - slideOffset) : (t.cyclic ? t._cyclicAllItemSize : t._allItemSize);
        if (targetWH < 0)
            targetWH = 0;
        if (t._sizeType) {
            t.content.height = targetWH;
        }
        else {
            t.content.width = targetWH;
        }
        // cc.log('_resizeContent()  numItems =', t._numItems, '，content =', t.content);
    };
    //滚动进行时...
    List.prototype._onScrolling = function (ev) {
        if (ev === void 0) { ev = null; }
        if (this.frameCount == null)
            this.frameCount = this._updateRate;
        if (!this._forceUpdate && (ev && ev.type != 'scroll-ended') && this.frameCount > 0) {
            this.frameCount--;
            return;
        }
        else
            this.frameCount = this._updateRate;
        if (this._aniDelRuning)
            return;
        //循环列表处理
        if (this.cyclic) {
            var scrollPos = this.content.getPosition();
            scrollPos = this._sizeType ? scrollPos.y : scrollPos.x;
            var addVal = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap);
            var add = this._sizeType ? cc.v2(0, addVal) : cc.v2(addVal, 0);
            switch (this._alignCalcType) {
                case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                    if (scrollPos > -this._cyclicPos1) {
                        this.content.x = -this._cyclicPos2;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].sub(add);
                        }
                        // if (this._beganPos) {
                        //     this._beganPos += add;
                        // }
                    }
                    else if (scrollPos < -this._cyclicPos2) {
                        this.content.x = -this._cyclicPos1;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                        }
                        // if (this._beganPos) {
                        //     this._beganPos -= add;
                        // }
                    }
                    break;
                case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                    if (scrollPos < this._cyclicPos1) {
                        this.content.x = this._cyclicPos2;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                        }
                    }
                    else if (scrollPos > this._cyclicPos2) {
                        this.content.x = this._cyclicPos1;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].sub(add);
                        }
                    }
                    break;
                case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                    if (scrollPos < this._cyclicPos1) {
                        this.content.y = this._cyclicPos2;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                        }
                    }
                    else if (scrollPos > this._cyclicPos2) {
                        this.content.y = this._cyclicPos1;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].sub(add);
                        }
                    }
                    break;
                case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                    if (scrollPos > -this._cyclicPos1) {
                        this.content.y = -this._cyclicPos2;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].sub(add);
                        }
                    }
                    else if (scrollPos < -this._cyclicPos2) {
                        this.content.y = -this._cyclicPos1;
                        if (this._scrollView.isAutoScrolling()) {
                            this._scrollView['_autoScrollStartPosition'] = this._scrollView['_autoScrollStartPosition'].add(add);
                        }
                    }
                    break;
            }
        }
        this._calcViewPos();
        var vTop, vRight, vBottom, vLeft;
        if (this._sizeType) {
            vTop = this.viewTop;
            vBottom = this.viewBottom;
        }
        else {
            vRight = this.viewRight;
            vLeft = this.viewLeft;
        }
        if (this._virtual) {
            this.displayData = [];
            var itemPos = void 0;
            var curId = 0;
            var endId = this._numItems - 1;
            if (this._customSize) {
                var breakFor = false;
                //如果该item的位置在可视区域内，就推入displayData
                for (; curId <= endId && !breakFor; curId++) {
                    itemPos = this._calcItemPos(curId);
                    switch (this._align) {
                        case cc.Layout.Type.HORIZONTAL:
                            if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                                this.displayData.push(itemPos);
                            }
                            else if (curId != 0 && this.displayData.length > 0) {
                                breakFor = true;
                            }
                            break;
                        case cc.Layout.Type.VERTICAL:
                            if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                                this.displayData.push(itemPos);
                            }
                            else if (curId != 0 && this.displayData.length > 0) {
                                breakFor = true;
                            }
                            break;
                        case cc.Layout.Type.GRID:
                            switch (this._startAxis) {
                                case cc.Layout.AxisDirection.HORIZONTAL:
                                    if (itemPos.bottom <= vTop && itemPos.top >= vBottom) {
                                        this.displayData.push(itemPos);
                                    }
                                    else if (curId != 0 && this.displayData.length > 0) {
                                        breakFor = true;
                                    }
                                    break;
                                case cc.Layout.AxisDirection.VERTICAL:
                                    if (itemPos.right >= vLeft && itemPos.left <= vRight) {
                                        this.displayData.push(itemPos);
                                    }
                                    else if (curId != 0 && this.displayData.length > 0) {
                                        breakFor = true;
                                    }
                                    break;
                            }
                            break;
                    }
                }
            }
            else {
                var ww = this._itemSize.width + this._columnGap;
                var hh = this._itemSize.height + this._lineGap;
                switch (this._alignCalcType) {
                    case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                        curId = (vLeft + this._leftGap) / ww;
                        endId = (vRight + this._rightGap) / ww;
                        break;
                    case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                        curId = (-vRight - this._rightGap) / ww;
                        endId = (-vLeft - this._leftGap) / ww;
                        break;
                    case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                        curId = (-vTop - this._topGap) / hh;
                        endId = (-vBottom - this._bottomGap) / hh;
                        break;
                    case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                        curId = (vBottom + this._bottomGap) / hh;
                        endId = (vTop + this._topGap) / hh;
                        break;
                }
                curId = Math.floor(curId) * this._colLineNum;
                endId = Math.ceil(endId) * this._colLineNum;
                endId--;
                if (curId < 0)
                    curId = 0;
                if (endId >= this._numItems)
                    endId = this._numItems - 1;
                for (; curId <= endId; curId++) {
                    this.displayData.push(this._calcItemPos(curId));
                }
            }
            this._delRedundantItem();
            if (this.displayData.length <= 0 || !this._numItems) { //if none, delete all.
                this._lastDisplayData = [];
                return;
            }
            this.firstListId = this.displayData[0].id;
            this.displayItemNum = this.displayData.length;
            var len = this._lastDisplayData.length;
            var haveDataChange = this.displayItemNum != len;
            if (haveDataChange) {
                // 如果是逐帧渲染，需要排序
                if (this.frameByFrameRenderNum > 0) {
                    this._lastDisplayData.sort(function (a, b) { return a - b; });
                }
                // 因List的显示数据是有序的，所以只需要判断数组长度是否相等，以及头、尾两个元素是否相等即可。
                haveDataChange = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[len - 1];
            }
            if (this._forceUpdate || haveDataChange) { //如果是强制更新
                if (this.frameByFrameRenderNum > 0) {
                    // if (this._updateDone) {
                    // this._lastDisplayData = [];
                    //逐帧渲染
                    if (this._numItems > 0) {
                        if (!this._updateDone) {
                            this._doneAfterUpdate = true;
                        }
                        else {
                            this._updateCounter = 0;
                        }
                        this._updateDone = false;
                    }
                    else {
                        this._updateCounter = 0;
                        this._updateDone = true;
                    }
                    // }
                }
                else {
                    //直接渲染
                    this._lastDisplayData = [];
                    // cc.log('List Display Data II::', this.displayData);
                    for (var c = 0; c < this.displayItemNum; c++) {
                        this._createOrUpdateItem(this.displayData[c]);
                    }
                    this._forceUpdate = false;
                }
            }
            this._calcNearestItem();
        }
    };
    //计算可视范围
    List.prototype._calcViewPos = function () {
        var scrollPos = this.content.getPosition();
        switch (this._alignCalcType) {
            case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                this.elasticLeft = scrollPos.x > 0 ? scrollPos.x : 0;
                this.viewLeft = (scrollPos.x < 0 ? -scrollPos.x : 0) - this.elasticLeft;
                this.viewRight = this.viewLeft + this.node.width;
                this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0;
                this.viewRight += this.elasticRight;
                // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);
                break;
            case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                this.elasticRight = scrollPos.x < 0 ? -scrollPos.x : 0;
                this.viewRight = (scrollPos.x > 0 ? -scrollPos.x : 0) + this.elasticRight;
                this.viewLeft = this.viewRight - this.node.width;
                this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0;
                this.viewLeft -= this.elasticLeft;
                // cc.log(this.elasticLeft, this.elasticRight, this.viewLeft, this.viewRight);
                break;
            case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                this.elasticTop = scrollPos.y < 0 ? Math.abs(scrollPos.y) : 0;
                this.viewTop = (scrollPos.y > 0 ? -scrollPos.y : 0) + this.elasticTop;
                this.viewBottom = this.viewTop - this.node.height;
                this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0;
                this.viewBottom += this.elasticBottom;
                // cc.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);
                break;
            case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                this.elasticBottom = scrollPos.y > 0 ? Math.abs(scrollPos.y) : 0;
                this.viewBottom = (scrollPos.y < 0 ? -scrollPos.y : 0) - this.elasticBottom;
                this.viewTop = this.viewBottom + this.node.height;
                this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0;
                this.viewTop -= this.elasticTop;
                // cc.log(this.elasticTop, this.elasticBottom, this.viewTop, this.viewBottom);
                break;
        }
    };
    //计算位置 根据id
    List.prototype._calcItemPos = function (id) {
        var width, height, top, bottom, left, right, itemX, itemY;
        switch (this._align) {
            case cc.Layout.Type.HORIZONTAL:
                switch (this._horizontalDir) {
                    case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                        if (this._customSize) {
                            var fixed = this._getFixedSize(id);
                            left = this._leftGap + ((this._itemSize.width + this._columnGap) * (id - fixed.count)) + (fixed.val + (this._columnGap * fixed.count));
                            var cs = this._customSize[id];
                            width = (cs > 0 ? cs : this._itemSize.width);
                        }
                        else {
                            left = this._leftGap + ((this._itemSize.width + this._columnGap) * id);
                            width = this._itemSize.width;
                        }
                        right = left + width;
                        if (this.lackCenter) {
                            var offset = (this.content.width / 2) - (this._allItemSizeNoEdge / 2);
                            left += offset;
                            right += offset;
                        }
                        return {
                            id: id,
                            left: left,
                            right: right,
                            x: left + (this._itemTmp.anchorX * width),
                            y: this._itemTmp.y,
                        };
                    }
                    case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                        if (this._customSize) {
                            var fixed = this._getFixedSize(id);
                            right = -this._rightGap - ((this._itemSize.width + this._columnGap) * (id - fixed.count)) - (fixed.val + (this._columnGap * fixed.count));
                            var cs = this._customSize[id];
                            width = (cs > 0 ? cs : this._itemSize.width);
                        }
                        else {
                            right = -this._rightGap - ((this._itemSize.width + this._columnGap) * id);
                            width = this._itemSize.width;
                        }
                        left = right - width;
                        if (this.lackCenter) {
                            var offset = (this.content.width / 2) - (this._allItemSizeNoEdge / 2);
                            left -= offset;
                            right -= offset;
                        }
                        return {
                            id: id,
                            right: right,
                            left: left,
                            x: left + (this._itemTmp.anchorX * width),
                            y: this._itemTmp.y,
                        };
                    }
                }
                break;
            case cc.Layout.Type.VERTICAL: {
                switch (this._verticalDir) {
                    case cc.Layout.VerticalDirection.TOP_TO_BOTTOM: {
                        if (this._customSize) {
                            var fixed = this._getFixedSize(id);
                            top = -this._topGap - ((this._itemSize.height + this._lineGap) * (id - fixed.count)) - (fixed.val + (this._lineGap * fixed.count));
                            var cs = this._customSize[id];
                            height = (cs > 0 ? cs : this._itemSize.height);
                        }
                        else {
                            top = -this._topGap - ((this._itemSize.height + this._lineGap) * id);
                            height = this._itemSize.height;
                        }
                        bottom = top - height;
                        if (this.lackCenter) {
                            var offset = (this.content.height / 2) - (this._allItemSizeNoEdge / 2);
                            top -= offset;
                            bottom -= offset;
                        }
                        return {
                            id: id,
                            top: top,
                            bottom: bottom,
                            x: this._itemTmp.x,
                            y: bottom + (this._itemTmp.anchorY * height),
                        };
                    }
                    case cc.Layout.VerticalDirection.BOTTOM_TO_TOP: {
                        if (this._customSize) {
                            var fixed = this._getFixedSize(id);
                            bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * (id - fixed.count)) + (fixed.val + (this._lineGap * fixed.count));
                            var cs = this._customSize[id];
                            height = (cs > 0 ? cs : this._itemSize.height);
                        }
                        else {
                            bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * id);
                            height = this._itemSize.height;
                        }
                        top = bottom + height;
                        if (this.lackCenter) {
                            var offset = (this.content.height / 2) - (this._allItemSizeNoEdge / 2);
                            top += offset;
                            bottom += offset;
                        }
                        return {
                            id: id,
                            top: top,
                            bottom: bottom,
                            x: this._itemTmp.x,
                            y: bottom + (this._itemTmp.anchorY * height),
                        };
                        break;
                    }
                }
            }
            case cc.Layout.Type.GRID: {
                var colLine = Math.floor(id / this._colLineNum);
                switch (this._startAxis) {
                    case cc.Layout.AxisDirection.HORIZONTAL: {
                        switch (this._verticalDir) {
                            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM: {
                                top = -this._topGap - ((this._itemSize.height + this._lineGap) * colLine);
                                bottom = top - this._itemSize.height;
                                itemY = bottom + (this._itemTmp.anchorY * this._itemSize.height);
                                break;
                            }
                            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP: {
                                bottom = this._bottomGap + ((this._itemSize.height + this._lineGap) * colLine);
                                top = bottom + this._itemSize.height;
                                itemY = bottom + (this._itemTmp.anchorY * this._itemSize.height);
                                break;
                            }
                        }
                        itemX = this._leftGap + ((id % this._colLineNum) * (this._itemSize.width + this._columnGap));
                        switch (this._horizontalDir) {
                            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                                itemX += (this._itemTmp.anchorX * this._itemSize.width);
                                itemX -= (this.content.anchorX * this.content.width);
                                break;
                            }
                            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                                itemX += ((1 - this._itemTmp.anchorX) * this._itemSize.width);
                                itemX -= ((1 - this.content.anchorX) * this.content.width);
                                itemX *= -1;
                                break;
                            }
                        }
                        return {
                            id: id,
                            top: top,
                            bottom: bottom,
                            x: itemX,
                            y: itemY,
                        };
                    }
                    case cc.Layout.AxisDirection.VERTICAL: {
                        switch (this._horizontalDir) {
                            case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT: {
                                left = this._leftGap + ((this._itemSize.width + this._columnGap) * colLine);
                                right = left + this._itemSize.width;
                                itemX = left + (this._itemTmp.anchorX * this._itemSize.width);
                                itemX -= (this.content.anchorX * this.content.width);
                                break;
                            }
                            case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT: {
                                right = -this._rightGap - ((this._itemSize.width + this._columnGap) * colLine);
                                left = right - this._itemSize.width;
                                itemX = left + (this._itemTmp.anchorX * this._itemSize.width);
                                itemX += ((1 - this.content.anchorX) * this.content.width);
                                break;
                            }
                        }
                        itemY = -this._topGap - ((id % this._colLineNum) * (this._itemSize.height + this._lineGap));
                        switch (this._verticalDir) {
                            case cc.Layout.VerticalDirection.TOP_TO_BOTTOM: {
                                itemY -= ((1 - this._itemTmp.anchorY) * this._itemSize.height);
                                itemY += ((1 - this.content.anchorY) * this.content.height);
                                break;
                            }
                            case cc.Layout.VerticalDirection.BOTTOM_TO_TOP: {
                                itemY -= ((this._itemTmp.anchorY) * this._itemSize.height);
                                itemY += (this.content.anchorY * this.content.height);
                                itemY *= -1;
                                break;
                            }
                        }
                        return {
                            id: id,
                            left: left,
                            right: right,
                            x: itemX,
                            y: itemY,
                        };
                    }
                }
                break;
            }
        }
    };
    //计算已存在的Item的位置
    List.prototype._calcExistItemPos = function (id) {
        var item = this.getItemByListId(id);
        if (!item)
            return null;
        var data = {
            id: id,
            x: item.x,
            y: item.y,
        };
        if (this._sizeType) {
            data.top = item.y + (item.height * (1 - item.anchorY));
            data.bottom = item.y - (item.height * item.anchorY);
        }
        else {
            data.left = item.x - (item.width * item.anchorX);
            data.right = item.x + (item.width * (1 - item.anchorX));
        }
        return data;
    };
    //获取Item位置
    List.prototype.getItemPos = function (id) {
        if (this._virtual)
            return this._calcItemPos(id);
        else {
            if (this.frameByFrameRenderNum)
                return this._calcItemPos(id);
            else
                return this._calcExistItemPos(id);
        }
    };
    //获取固定尺寸
    List.prototype._getFixedSize = function (listId) {
        if (!this._customSize)
            return null;
        if (listId == null)
            listId = this._numItems;
        var fixed = 0;
        var count = 0;
        for (var id in this._customSize) {
            if (parseInt(id) < listId) {
                fixed += this._customSize[id];
                count++;
            }
        }
        return {
            val: fixed,
            count: count,
        };
    };
    //滚动结束时..
    List.prototype._onScrollBegan = function () {
        this._beganPos = this._sizeType ? this.viewTop : this.viewLeft;
    };
    //滚动结束时..
    List.prototype._onScrollEnded = function () {
        var t = this;
        if (t.scrollToListId != null) {
            var item = t.getItemByListId(t.scrollToListId);
            t.scrollToListId = null;
            if (item) {
                item.runAction(cc.sequence(cc.scaleTo(.1, 1.06), cc.scaleTo(.1, 1)));
            }
        }
        t._onScrolling();
        if (t._slideMode == SlideType.ADHERING &&
            !t.adhering) {
            //cc.log(t.adhering, t._scrollView.isAutoScrolling(), t._scrollView.isScrolling());
            t.adhere();
        }
        else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null) {
                this._pageAdhere();
            }
            else {
                t.adhere();
            }
        }
    };
    // 触摸时
    List.prototype._onTouchStart = function (ev, captureListeners) {
        if (this._scrollView['_hasNestedViewGroup'](ev, captureListeners))
            return;
        var isMe = ev.eventPhase === cc.Event.AT_TARGET && ev.target === this.node;
        if (!isMe) {
            var itemNode = ev.target;
            while (itemNode._listId == null && itemNode.parent)
                itemNode = itemNode.parent;
            this._scrollItem = itemNode._listId != null ? itemNode : ev.target;
        }
    };
    //触摸抬起时..
    List.prototype._onTouchUp = function () {
        var t = this;
        t._scrollPos = null;
        if (t._slideMode == SlideType.ADHERING) {
            if (this.adhering)
                this._adheringBarrier = true;
            t.adhere();
        }
        else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null) {
                this._pageAdhere();
            }
            else {
                t.adhere();
            }
        }
        this._scrollItem = null;
    };
    List.prototype._onTouchCancelled = function (ev, captureListeners) {
        var t = this;
        if (t._scrollView['_hasNestedViewGroup'](ev, captureListeners) || ev.simulate)
            return;
        t._scrollPos = null;
        if (t._slideMode == SlideType.ADHERING) {
            if (t.adhering)
                t._adheringBarrier = true;
            t.adhere();
        }
        else if (t._slideMode == SlideType.PAGE) {
            if (t._beganPos != null) {
                t._pageAdhere();
            }
            else {
                t.adhere();
            }
        }
        this._scrollItem = null;
    };
    //当尺寸改变
    List.prototype._onSizeChanged = function () {
        if (this.checkInited(false))
            this._onScrolling();
    };
    //当Item自适应
    List.prototype._onItemAdaptive = function (item) {
        // if (this.checkInited(false)) {
        if ((!this._sizeType && item.width != this._itemSize.width)
            || (this._sizeType && item.height != this._itemSize.height)) {
            if (!this._customSize)
                this._customSize = {};
            var val = this._sizeType ? item.height : item.width;
            if (this._customSize[item._listId] != val) {
                this._customSize[item._listId] = val;
                this._resizeContent();
                // this.content.children.forEach((child: cc.Node) => {
                //     this._updateItemPos(child);
                // });
                this.updateAll();
                // 如果当前正在运行 scrollTo，肯定会不准确，在这里做修正
                if (this._scrollToListId != null) {
                    this._scrollPos = null;
                    this.unschedule(this._scrollToSo);
                    this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - ((new Date()).getTime() / 1000)));
                }
            }
        }
        // }
    };
    //PAGE粘附
    List.prototype._pageAdhere = function () {
        var t = this;
        if (!t.cyclic && (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0))
            return;
        var curPos = t._sizeType ? t.viewTop : t.viewLeft;
        var dis = (t._sizeType ? t.node.height : t.node.width) * t.pageDistance;
        var canSkip = Math.abs(t._beganPos - curPos) > dis;
        if (canSkip) {
            var timeInSecond = .5;
            switch (t._alignCalcType) {
                case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                    if (t._beganPos > curPos) {
                        t.prePage(timeInSecond);
                        // cc.log('_pageAdhere   PPPPPPPPPPPPPPP');
                    }
                    else {
                        t.nextPage(timeInSecond);
                        // cc.log('_pageAdhere   NNNNNNNNNNNNNNN');
                    }
                    break;
                case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                    if (t._beganPos < curPos) {
                        t.prePage(timeInSecond);
                    }
                    else {
                        t.nextPage(timeInSecond);
                    }
                    break;
            }
        }
        else if (t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0) {
            t.adhere();
        }
        t._beganPos = null;
    };
    //粘附
    List.prototype.adhere = function () {
        var t = this;
        if (!t.checkInited())
            return;
        if (t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)
            return;
        t.adhering = true;
        t._calcNearestItem();
        var offset = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t.node.height : t.node.width);
        var timeInSecond = .7;
        t.scrollTo(t.nearestListId, timeInSecond, offset);
    };
    //Update..
    List.prototype.update = function () {
        if (this.frameByFrameRenderNum <= 0 || this._updateDone)
            return;
        // cc.log(this.displayData.length, this._updateCounter, this.displayData[this._updateCounter]);
        if (this._virtual) {
            var len = (this._updateCounter + this.frameByFrameRenderNum) > this.displayItemNum ? this.displayItemNum : (this._updateCounter + this.frameByFrameRenderNum);
            for (var n = this._updateCounter; n < len; n++) {
                var data = this.displayData[n];
                if (data) {
                    this._createOrUpdateItem(data);
                }
            }
            if (this._updateCounter >= this.displayItemNum - 1) { //最后一个
                if (this._doneAfterUpdate) {
                    this._updateCounter = 0;
                    this._updateDone = false;
                    // if (!this._scrollView.isScrolling())
                    this._doneAfterUpdate = false;
                }
                else {
                    this._updateDone = true;
                    this._delRedundantItem();
                    this._forceUpdate = false;
                    this._calcNearestItem();
                    if (this.slideMode == SlideType.PAGE)
                        this.curPageNum = this.nearestListId;
                }
            }
            else {
                this._updateCounter += this.frameByFrameRenderNum;
            }
        }
        else {
            if (this._updateCounter < this._numItems) {
                var len = (this._updateCounter + this.frameByFrameRenderNum) > this._numItems ? this._numItems : (this._updateCounter + this.frameByFrameRenderNum);
                for (var n = this._updateCounter; n < len; n++) {
                    this._createOrUpdateItem2(n);
                }
                this._updateCounter += this.frameByFrameRenderNum;
            }
            else {
                this._updateDone = true;
                this._calcNearestItem();
                if (this.slideMode == SlideType.PAGE)
                    this.curPageNum = this.nearestListId;
            }
        }
    };
    /**
     * 创建或更新Item（虚拟列表用）
     * @param {Object} data 数据
     */
    List.prototype._createOrUpdateItem = function (data) {
        var item = this.getItemByListId(data.id);
        if (!item) { //如果不存在
            var canGet = this._pool.size() > 0;
            if (canGet) {
                item = this._pool.get();
                // cc.log('从池中取出::   旧id =', item['_listId'], '，新id =', data.id, item);
            }
            else {
                item = cc.instantiate(this._itemTmp);
                // cc.log('新建::', data.id, item);
            }
            if (item._listId != data.id) {
                item._listId = data.id;
                item.setContentSize(this._itemSize);
            }
            item.setPosition(cc.v2(data.x, data.y));
            this._resetItemSize(item);
            this.content.addChild(item);
            if (canGet && this._needUpdateWidget) {
                var widget = item.getComponent(cc.Widget);
                if (widget)
                    widget.updateAlignment();
            }
            item.setSiblingIndex(this.content.childrenCount - 1);
            var listItem = item.getComponent(ListItem_1.default);
            item['listItem'] = listItem;
            if (listItem) {
                listItem.listId = data.id;
                listItem.list = this;
                listItem._registerEvent();
            }
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, data.id % this._actualNumItems);
            }
        }
        else if (this._forceUpdate && this.renderEvent) { //强制更新
            item.setPosition(cc.v2(data.x, data.y));
            this._resetItemSize(item);
            // cc.log('ADD::', data.id, item);
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, data.id % this._actualNumItems);
            }
        }
        this._resetItemSize(item);
        this._updateListItem(item['listItem']);
        if (this._lastDisplayData.indexOf(data.id) < 0) {
            this._lastDisplayData.push(data.id);
        }
    };
    //创建或更新Item（非虚拟列表用）
    List.prototype._createOrUpdateItem2 = function (listId) {
        var item = this.content.children[listId];
        var listItem;
        if (!item) { //如果不存在
            item = cc.instantiate(this._itemTmp);
            item._listId = listId;
            this.content.addChild(item);
            listItem = item.getComponent(ListItem_1.default);
            item['listItem'] = listItem;
            if (listItem) {
                listItem.listId = listId;
                listItem.list = this;
                listItem._registerEvent();
            }
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId);
            }
        }
        else if (this._forceUpdate && this.renderEvent) { //强制更新
            item._listId = listId;
            if (listItem)
                listItem.listId = listId;
            if (this.renderEvent) {
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId);
            }
        }
        this._updateListItem(listItem);
        if (this._lastDisplayData.indexOf(listId) < 0) {
            this._lastDisplayData.push(listId);
        }
    };
    List.prototype._updateListItem = function (listItem) {
        if (!listItem)
            return;
        if (this.selectedMode > SelectedType.NONE) {
            var item = listItem.node;
            switch (this.selectedMode) {
                case SelectedType.SINGLE:
                    listItem.selected = this.selectedId == item._listId;
                    break;
                case SelectedType.MULT:
                    listItem.selected = this.multSelected.indexOf(item._listId) >= 0;
                    break;
            }
        }
    };
    //仅虚拟列表用
    List.prototype._resetItemSize = function (item) {
        return;
        var size;
        if (this._customSize && this._customSize[item._listId]) {
            size = this._customSize[item._listId];
        }
        else {
            if (this._colLineNum > 1)
                item.setContentSize(this._itemSize);
            else
                size = this._sizeType ? this._itemSize.height : this._itemSize.width;
        }
        if (size) {
            if (this._sizeType)
                item.height = size;
            else
                item.width = size;
        }
    };
    /**
     * 更新Item位置
     * @param {Number||Node} listIdOrItem
     */
    List.prototype._updateItemPos = function (listIdOrItem) {
        var item = isNaN(listIdOrItem) ? listIdOrItem : this.getItemByListId(listIdOrItem);
        var pos = this.getItemPos(item._listId);
        item.setPosition(pos.x, pos.y);
    };
    /**
     * 设置多选
     * @param {Array} args 可以是单个listId，也可是个listId数组
     * @param {Boolean} bool 值，如果为null的话，则直接用args覆盖
     */
    List.prototype.setMultSelected = function (args, bool) {
        var t = this;
        if (!t.checkInited())
            return;
        if (!Array.isArray(args)) {
            args = [args];
        }
        if (bool == null) {
            t.multSelected = args;
        }
        else {
            var listId = void 0, sub = void 0;
            if (bool) {
                for (var n = args.length - 1; n >= 0; n--) {
                    listId = args[n];
                    sub = t.multSelected.indexOf(listId);
                    if (sub < 0) {
                        t.multSelected.push(listId);
                    }
                }
            }
            else {
                for (var n = args.length - 1; n >= 0; n--) {
                    listId = args[n];
                    sub = t.multSelected.indexOf(listId);
                    if (sub >= 0) {
                        t.multSelected.splice(sub, 1);
                    }
                }
            }
        }
        t._forceUpdate = true;
        t._onScrolling();
    };
    /**
     * 更新指定的Item
     * @param {Array} args 单个listId，或者数组
     * @returns
     */
    List.prototype.updateItem = function (args) {
        if (!this.checkInited())
            return;
        if (!Array.isArray(args)) {
            args = [args];
        }
        for (var n = 0, len = args.length; n < len; n++) {
            var listId = args[n];
            var item = this.getItemByListId(listId);
            if (item)
                cc.Component.EventHandler.emitEvents([this.renderEvent], item, listId % this._actualNumItems);
        }
    };
    /**
     * 更新全部
     */
    List.prototype.updateAll = function () {
        if (!this.checkInited())
            return;
        this.numItems = this.numItems;
    };
    /**
     * 根据ListID获取Item
     * @param {Number} listId
     * @returns
     */
    List.prototype.getItemByListId = function (listId) {
        if (this.content) {
            for (var n = this.content.childrenCount - 1; n >= 0; n--) {
                var item = this.content.children[n];
                if (item._listId == listId)
                    return item;
            }
        }
    };
    /**
     * 获取在显示区域外的Item
     * @returns
     */
    List.prototype._getOutsideItem = function () {
        var item;
        var result = [];
        for (var n = this.content.childrenCount - 1; n >= 0; n--) {
            item = this.content.children[n];
            if (!this.displayData.find(function (d) { return d.id == item._listId; })) {
                result.push(item);
            }
        }
        return result;
    };
    //删除显示区域以外的Item
    List.prototype._delRedundantItem = function () {
        if (this._virtual) {
            var arr = this._getOutsideItem();
            for (var n = arr.length - 1; n >= 0; n--) {
                var item = arr[n];
                if (this._scrollItem && item._listId == this._scrollItem._listId)
                    continue;
                this._pool.put(item);
                for (var m = this._lastDisplayData.length - 1; m >= 0; m--) {
                    if (this._lastDisplayData[m] == item._listId) {
                        this._lastDisplayData.splice(m, 1);
                        break;
                    }
                }
            }
            // cc.log('存入::', str, '    pool.length =', this._pool.length);
        }
        else {
            while (this.content.childrenCount > this._numItems) {
                this._delSingleItem(this.content.children[this.content.childrenCount - 1]);
            }
        }
    };
    //删除单个Item
    List.prototype._delSingleItem = function (item) {
        // cc.log('DEL::', item['_listId'], item);
        item.removeFromParent();
        if (item.destroy)
            item.destroy();
        item = null;
    };
    /**
     *  动效删除Item（此方法只适用于虚拟列表，即_virtual=true）
     *  一定要在回调函数里重新设置新的numItems进行刷新，毕竟本List是靠数据驱动的。
     * @param listId
     * @param callFunc 回调
     * @param aniType
     */
    List.prototype.aniDelItem = function (listId, callFunc, aniType) {
        var t = this;
        if (!t.checkInited() || t.cyclic || !t._virtual)
            return cc.error('This function is not allowed to be called!');
        if (t._aniDelRuning)
            return cc.warn('Please wait for the current deletion to finish!');
        var item = t.getItemByListId(listId);
        var listItem;
        if (!item) {
            callFunc(listId);
            return;
        }
        else {
            listItem = item.getComponent(ListItem_1.default);
        }
        t._aniDelRuning = true;
        var curLastId = t.displayData[t.displayData.length - 1].id;
        var resetSelectedId = listItem.selected;
        listItem.showAni(aniType, function () {
            //判断有没有下一个，如果有的话，创建粗来
            var newId;
            if (curLastId < t._numItems - 2) {
                newId = curLastId + 1;
            }
            if (newId != null) {
                var newData = t._calcItemPos(newId);
                t.displayData.push(newData);
                if (t._virtual)
                    t._createOrUpdateItem(newData);
                else
                    t._createOrUpdateItem2(newId);
            }
            else
                t._numItems--;
            if (t.selectedMode == SelectedType.SINGLE) {
                if (resetSelectedId) {
                    t._selectedId = -1;
                }
                else if (t._selectedId - 1 >= 0) {
                    t._selectedId--;
                }
            }
            else if (t.selectedMode == SelectedType.MULT && t.multSelected.length) {
                var sub = t.multSelected.indexOf(listId);
                if (sub >= 0) {
                    t.multSelected.splice(sub, 1);
                }
                //多选的数据，在其后的全部减一
                for (var n = t.multSelected.length - 1; n >= 0; n--) {
                    var id = t.multSelected[n];
                    if (id >= listId)
                        t.multSelected[n]--;
                }
            }
            if (t._customSize) {
                if (t._customSize[listId])
                    delete t._customSize[listId];
                var newCustomSize = {};
                var size = void 0;
                for (var id in t._customSize) {
                    size = t._customSize[id];
                    var idNumber = parseInt(id);
                    newCustomSize[idNumber - (idNumber >= listId ? 1 : 0)] = size;
                }
                t._customSize = newCustomSize;
            }
            //后面的Item向前怼的动效
            var sec = .2333;
            var acts, haveCB;
            for (var n = newId != null ? newId : curLastId; n >= listId + 1; n--) {
                item = t.getItemByListId(n);
                if (item) {
                    var posData = t._calcItemPos(n - 1);
                    acts = [
                        cc.moveTo(sec, cc.v2(posData.x, posData.y)),
                    ];
                    if (n <= listId + 1) {
                        haveCB = true;
                        acts.push(cc.callFunc(function () {
                            t._aniDelRuning = false;
                            callFunc(listId);
                        }));
                    }
                    if (acts.length > 1)
                        item.runAction(cc.sequence(acts));
                    else
                        item.runAction(acts[0]);
                }
            }
            if (!haveCB) {
                t._aniDelRuning = false;
                callFunc(listId);
            }
        }, true);
    };
    /**
     * 滚动到..
     * @param {Number} listId 索引（如果<0，则滚到首个Item位置，如果>=_numItems，则滚到最末Item位置）
     * @param {Number} timeInSecond 时间
     * @param {Number} offset 索引目标位置偏移，0-1
     * @param {Boolean} overStress 滚动后是否强调该Item（这只是个实验功能）
     */
    List.prototype.scrollTo = function (listId, timeInSecond, offset, overStress) {
        if (timeInSecond === void 0) { timeInSecond = .5; }
        if (offset === void 0) { offset = null; }
        if (overStress === void 0) { overStress = false; }
        var t = this;
        if (!t.checkInited(false))
            return;
        // t._scrollView.stopAutoScroll();
        if (timeInSecond == null) //默认0.5
            timeInSecond = .5;
        else if (timeInSecond < 0)
            timeInSecond = 0;
        if (listId < 0)
            listId = 0;
        else if (listId >= t._numItems)
            listId = t._numItems - 1;
        // 以防设置了numItems之后layout的尺寸还未更新
        if (!t._virtual && t._layout && t._layout.enabled)
            t._layout.updateLayout();
        var pos = t.getItemPos(listId);
        var targetX, targetY;
        switch (t._alignCalcType) {
            case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                targetX = pos.left;
                if (offset != null)
                    targetX -= t.node.width * offset;
                else
                    targetX -= t._leftGap;
                pos = cc.v2(targetX, 0);
                break;
            case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                targetX = pos.right - t.node.width;
                if (offset != null)
                    targetX += t.node.width * offset;
                else
                    targetX += t._rightGap;
                pos = cc.v2(targetX + t.content.width, 0);
                break;
            case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                targetY = pos.top;
                if (offset != null)
                    targetY += t.node.height * offset;
                else
                    targetY += t._topGap;
                pos = cc.v2(0, -targetY);
                break;
            case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                targetY = pos.bottom + t.node.height;
                if (offset != null)
                    targetY -= t.node.height * offset;
                else
                    targetY -= t._bottomGap;
                pos = cc.v2(0, -targetY + t.content.height);
                break;
        }
        var viewPos = t.content.getPosition();
        viewPos = Math.abs(t._sizeType ? viewPos.y : viewPos.x);
        var comparePos = t._sizeType ? pos.y : pos.x;
        var runScroll = Math.abs((t._scrollPos != null ? t._scrollPos : viewPos) - comparePos) > .5;
        // cc.log(runScroll, t._scrollPos, viewPos, comparePos)
        // t._scrollView.stopAutoScroll();
        if (runScroll) {
            t._scrollView.scrollToOffset(pos, timeInSecond);
            t._scrollToListId = listId;
            t._scrollToEndTime = ((new Date()).getTime() / 1000) + timeInSecond;
            // cc.log(listId, t.content.width, t.content.getPosition(), pos);
            t._scrollToSo = t.scheduleOnce(function () {
                if (!t._adheringBarrier) {
                    t.adhering = t._adheringBarrier = false;
                }
                t._scrollPos =
                    t._scrollToListId =
                        t._scrollToEndTime =
                            t._scrollToSo =
                                null;
                //cc.log('2222222222', t._adheringBarrier)
                if (overStress) {
                    // t.scrollToListId = listId;
                    var item = t.getItemByListId(listId);
                    if (item) {
                        item.runAction(cc.sequence(cc.scaleTo(.1, 1.05), cc.scaleTo(.1, 1)));
                    }
                }
            }, timeInSecond + .1);
            if (timeInSecond <= 0) {
                t._onScrolling();
            }
        }
    };
    /**
     * 计算当前滚动窗最近的Item
     */
    List.prototype._calcNearestItem = function () {
        var t = this;
        t.nearestListId = null;
        var data, center;
        if (t._virtual)
            t._calcViewPos();
        var vTop, vRight, vBottom, vLeft;
        vTop = t.viewTop;
        vRight = t.viewRight;
        vBottom = t.viewBottom;
        vLeft = t.viewLeft;
        var breakFor = false;
        for (var n = 0; n < t.content.childrenCount && !breakFor; n += t._colLineNum) {
            data = t._virtual ? t.displayData[n] : t._calcExistItemPos(n);
            if (data) {
                center = t._sizeType ? ((data.top + data.bottom) / 2) : (center = (data.left + data.right) / 2);
                switch (t._alignCalcType) {
                    case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                        if (data.right >= vLeft) {
                            t.nearestListId = data.id;
                            if (vLeft > center)
                                t.nearestListId += t._colLineNum;
                            breakFor = true;
                        }
                        break;
                    case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                        if (data.left <= vRight) {
                            t.nearestListId = data.id;
                            if (vRight < center)
                                t.nearestListId += t._colLineNum;
                            breakFor = true;
                        }
                        break;
                    case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                        if (data.bottom <= vTop) {
                            t.nearestListId = data.id;
                            if (vTop < center)
                                t.nearestListId += t._colLineNum;
                            breakFor = true;
                        }
                        break;
                    case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                        if (data.top >= vBottom) {
                            t.nearestListId = data.id;
                            if (vBottom > center)
                                t.nearestListId += t._colLineNum;
                            breakFor = true;
                        }
                        break;
                }
            }
        }
        //判断最后一个Item。。。（哎，这些判断真心恶心，判断了前面的还要判断最后一个。。。一开始呢，就只有一个布局（单列布局），那时候代码才三百行，后来就想着完善啊，艹..这坑真深，现在这行数都一千五了= =||）
        data = t._virtual ? t.displayData[t.displayItemNum - 1] : t._calcExistItemPos(t._numItems - 1);
        if (data && data.id == t._numItems - 1) {
            center = t._sizeType ? ((data.top + data.bottom) / 2) : (center = (data.left + data.right) / 2);
            switch (t._alignCalcType) {
                case 1: //单行HORIZONTAL（LEFT_TO_RIGHT）、网格VERTICAL（LEFT_TO_RIGHT）
                    if (vRight > center)
                        t.nearestListId = data.id;
                    break;
                case 2: //单行HORIZONTAL（RIGHT_TO_LEFT）、网格VERTICAL（RIGHT_TO_LEFT）
                    if (vLeft < center)
                        t.nearestListId = data.id;
                    break;
                case 3: //单列VERTICAL（TOP_TO_BOTTOM）、网格HORIZONTAL（TOP_TO_BOTTOM）
                    if (vBottom < center)
                        t.nearestListId = data.id;
                    break;
                case 4: //单列VERTICAL（BOTTOM_TO_TOP）、网格HORIZONTAL（BOTTOM_TO_TOP）
                    if (vTop > center)
                        t.nearestListId = data.id;
                    break;
            }
        }
        // cc.log('t.nearestListId =', t.nearestListId);
    };
    //上一页
    List.prototype.prePage = function (timeInSecond) {
        if (timeInSecond === void 0) { timeInSecond = .5; }
        // cc.log('👈');
        if (!this.checkInited())
            return;
        this.skipPage(this.curPageNum - 1, timeInSecond);
    };
    //下一页
    List.prototype.nextPage = function (timeInSecond) {
        if (timeInSecond === void 0) { timeInSecond = .5; }
        // cc.log('👉');
        if (!this.checkInited())
            return;
        this.skipPage(this.curPageNum + 1, timeInSecond);
    };
    //跳转到第几页
    List.prototype.skipPage = function (pageNum, timeInSecond) {
        var t = this;
        if (!t.checkInited())
            return;
        if (t._slideMode != SlideType.PAGE)
            return cc.error('This function is not allowed to be called, Must SlideMode = PAGE!');
        if (pageNum < 0 || pageNum >= t._numItems)
            return;
        if (t.curPageNum == pageNum)
            return;
        // cc.log(pageNum);
        t.curPageNum = pageNum;
        if (t.pageChangeEvent) {
            cc.Component.EventHandler.emitEvents([t.pageChangeEvent], pageNum);
        }
        t.scrollTo(pageNum, timeInSecond);
    };
    //计算 CustomSize（这个函数还是保留吧，某些罕见的情况的确还是需要手动计算customSize的）
    List.prototype.calcCustomSize = function (numItems) {
        var t = this;
        if (!t.checkInited())
            return;
        if (!t._itemTmp)
            return cc.error('Unset template item!');
        if (!t.renderEvent)
            return cc.error('Unset Render-Event!');
        t._customSize = {};
        var temp = cc.instantiate(t._itemTmp);
        t.content.addChild(temp);
        for (var n = 0; n < numItems; n++) {
            cc.Component.EventHandler.emitEvents([t.renderEvent], temp, n);
            if (temp.height != t._itemSize.height || temp.width != t._itemSize.width) {
                t._customSize[n] = t._sizeType ? temp.height : temp.width;
            }
        }
        if (!Object.keys(t._customSize).length)
            t._customSize = null;
        temp.removeFromParent();
        if (temp.destroy)
            temp.destroy();
        return t._customSize;
    };
    __decorate([
        property({ type: cc.Enum(TemplateType), tooltip: CC_DEV && '模板类型\n - NODE节点\n - PREFAB预制体', })
    ], List.prototype, "templateType", void 0);
    __decorate([
        property({
            type: cc.Node,
            tooltip: CC_DEV && '模板Item:Node',
            visible: function () { return this.templateType == TemplateType.NODE; }
        })
    ], List.prototype, "tmpNode", void 0);
    __decorate([
        property({
            type: cc.Prefab,
            tooltip: CC_DEV && '模板Item:Prefab预制体',
            visible: function () { return this.templateType == TemplateType.PREFAB; }
        })
    ], List.prototype, "tmpPrefab", void 0);
    __decorate([
        property()
    ], List.prototype, "_slideMode", void 0);
    __decorate([
        property({
            type: cc.Enum(SlideType),
            tooltip: CC_DEV && '滑动模式\n - NORMAL 普通\n - ADHERING 粘附模式，将强制关闭滚动惯性\n - PAGE 页面模式，将强制关闭滚动惯性'
        })
    ], List.prototype, "slideMode", null);
    __decorate([
        property({
            type: cc.Float,
            range: [0, 1, .1],
            tooltip: CC_DEV && '翻页作用距离',
            slide: true,
            visible: function () { return this._slideMode == SlideType.PAGE; }
        })
    ], List.prototype, "pageDistance", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            tooltip: CC_DEV && '页面改变事件',
            visible: function () { return this._slideMode == SlideType.PAGE; }
        })
    ], List.prototype, "pageChangeEvent", void 0);
    __decorate([
        property()
    ], List.prototype, "_virtual", void 0);
    __decorate([
        property({
            type: cc.Boolean,
            tooltip: CC_DEV && '是否为虚拟列表（动态列表）'
        })
    ], List.prototype, "virtual", null);
    __decorate([
        property({
            tooltip: CC_DEV && '是否为循环列表',
            visible: function () {
                var val = this.virtual && this.slideMode == SlideType.NORMAL;
                if (!val)
                    this.cyclic = false;
                return val;
            }
        })
    ], List.prototype, "cyclic", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && 'Item数量不足以填满Content时，是否居中显示Item（不支持Grid布局）',
            visible: function () { return this.virtual; }
        })
    ], List.prototype, "lackCenter", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && 'Item数量不足以填满Content时，是否可滑动',
            visible: function () {
                var val = this.virtual && !this.lackCenter;
                if (!val)
                    this.lackSlide = false;
                return val;
            }
        })
    ], List.prototype, "lackSlide", void 0);
    __decorate([
        property({ type: cc.Integer })
    ], List.prototype, "_updateRate", void 0);
    __decorate([
        property({
            type: cc.Integer,
            range: [0, 6, 1],
            tooltip: CC_DEV && '刷新频率（值越大刷新频率越低、性能越高）',
            slide: true,
        })
    ], List.prototype, "updateRate", null);
    __decorate([
        property({
            type: cc.Integer,
            range: [0, 12, 1],
            tooltip: CC_DEV && '逐帧渲染时，每帧渲染的Item数量（<=0时关闭分帧渲染）',
            slide: true,
        })
    ], List.prototype, "frameByFrameRenderNum", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            tooltip: CC_DEV && '渲染事件（渲染器）',
        })
    ], List.prototype, "renderEvent", void 0);
    __decorate([
        property({
            type: cc.Enum(SelectedType),
            tooltip: CC_DEV && '选择模式\nNONE 无 \nSINGLE 单选 \nMULT 多选'
        })
    ], List.prototype, "selectedMode", void 0);
    __decorate([
        property({
            tooltip: CC_DEV && '是否重复响应单选事件',
            visible: function () { return this.selectedMode == SelectedType.SINGLE; }
        })
    ], List.prototype, "repeatEventSingle", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            tooltip: CC_DEV && '触发选择事件',
            visible: function () { return this.selectedMode > SelectedType.NONE; }
        })
    ], List.prototype, "selectedEvent", void 0);
    __decorate([
        property({
            serializable: false
        })
    ], List.prototype, "_numItems", void 0);
    List = __decorate([
        ccclass,
        disallowMultiple(),
        menu('自定义组件/List'),
        requireComponent(cc.ScrollView)
        //脚本生命周期回调的执行优先级。小于 0 的脚本将优先执行，大于 0 的脚本将最后执行。该优先级只对 onLoad, onEnable, start, update 和 lateUpdate 有效，对 onDisable 和 onDestroy 无效。
        ,
        executionOrder(-5000)
    ], List);
    return List;
}(cc.Component));
exports.default = List;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlcXExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OzRDQUs0QztBQUN0QyxJQUFBLEtBQWtGLEVBQUUsQ0FBQyxVQUFVLEVBQTdGLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGdCQUFnQixzQkFBQSxFQUFFLElBQUksVUFBQSxFQUFFLGNBQWMsb0JBQUEsRUFBRSxnQkFBZ0Isc0JBQWtCLENBQUM7QUFFdEcsdUNBQWtDO0FBRWxDLElBQUssWUFHSjtBQUhELFdBQUssWUFBWTtJQUNiLCtDQUFRLENBQUE7SUFDUixtREFBVSxDQUFBO0FBQ2QsQ0FBQyxFQUhJLFlBQVksS0FBWixZQUFZLFFBR2hCO0FBRUQsSUFBSyxTQUlKO0FBSkQsV0FBSyxTQUFTO0lBQ1YsNkNBQVUsQ0FBQTtJQUNWLGlEQUFZLENBQUE7SUFDWix5Q0FBUSxDQUFBO0FBQ1osQ0FBQyxFQUpJLFNBQVMsS0FBVCxTQUFTLFFBSWI7QUFFRCxJQUFLLFlBSUo7QUFKRCxXQUFLLFlBQVk7SUFDYiwrQ0FBUSxDQUFBO0lBQ1IsbURBQVUsQ0FBQTtJQUNWLCtDQUFRLENBQUE7QUFDWixDQUFDLEVBSkksWUFBWSxLQUFaLFlBQVksUUFJaEI7QUFRRDtJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQXUrREM7UUF0K0RHLE1BQU07UUFFRSxrQkFBWSxHQUFpQixZQUFZLENBQUMsSUFBSSxDQUFDO1FBQ3ZELGNBQWM7UUFNZCxhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGdCQUFnQjtRQU1oQixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBQzVCLE1BQU07UUFFRSxnQkFBVSxHQUFjLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFXakQsUUFBUTtRQVFELGtCQUFZLEdBQVcsRUFBRSxDQUFDO1FBQ2pDLFFBQVE7UUFNQSxxQkFBZSxHQUE4QixJQUFJLEVBQUUsQ0FBQyxTQUFTLENB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RTtJQU1qRjtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUMzQixPQUFPLEVBQUUsTUFBTSxJQUFJLG9DQUFvQztTQUMxRCxDQUFDOzhDQUNvRDtJQUt0RDtRQUpDLFFBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxNQUFNLElBQUksWUFBWTtZQUMvQixPQUFPLGdCQUFLLE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUNqRSxDQUFDO21EQUN3QztJQU8xQztRQUxDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVk7WUFDL0IsT0FBTyxFQUFFLE1BQU0sSUFBSSxRQUFRO1lBQzNCLE9BQU8sZ0JBQUssT0FBTyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzlELENBQUM7K0NBQ3FEO0lBaUZ2RDtRQUhDLFFBQVEsQ0FBQztZQUNOLFlBQVksRUFBRSxLQUFLO1NBQ3RCLENBQUM7MkNBQzRCO0lBN05iLElBQUk7UUFOeEIsT0FBTztRQUNQLGdCQUFnQixFQUFFO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDbEIsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztRQUNoQywrSEFBK0g7O1FBQzlILGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQztPQUNELElBQUksQ0F1K0R4QjtJQUFELFdBQUM7Q0F2K0RELEFBdStEQyxDQXYrRGlDLEVBQUUsQ0FBQyxTQUFTLEdBdStEN0M7a0JBditEb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogQGF1dGhvciBrTCA8a2xrMEBxcS5jb20+XHJcbiAqIEBkYXRlIDIwMTkvNi82XHJcbiAqIEBkb2Mg5YiX6KGo57uE5Lu2LlxyXG4gKiBAZW5kXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGRpc2FsbG93TXVsdGlwbGUsIG1lbnUsIGV4ZWN1dGlvbk9yZGVyLCByZXF1aXJlQ29tcG9uZW50IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4vTGlzdEl0ZW0nO1xyXG5cclxuZW51bSBUZW1wbGF0ZVR5cGUge1xyXG4gICAgTk9ERSA9IDEsXHJcbiAgICBQUkVGQUIgPSAyLFxyXG59XHJcblxyXG5lbnVtIFNsaWRlVHlwZSB7XHJcbiAgICBOT1JNQUwgPSAxLC8v5pmu6YCaXHJcbiAgICBBREhFUklORyA9IDIsLy/nspjpmYTmqKHlvI/vvIzlsIblvLrliLblhbPpl63mu5rliqjmg6/mgKdcclxuICAgIFBBR0UgPSAzLC8v6aG16Z2i5qih5byP77yM5bCG5by65Yi25YWz6Zet5rua5Yqo5oOv5oCnXHJcbn1cclxuXHJcbmVudW0gU2VsZWN0ZWRUeXBlIHtcclxuICAgIE5PTkUgPSAwLFxyXG4gICAgU0lOR0xFID0gMSwvL+WNlemAiVxyXG4gICAgTVVMVCA9IDIsLy/lpJrpgIlcclxufVxyXG5cclxuQGNjY2xhc3NcclxuQGRpc2FsbG93TXVsdGlwbGUoKVxyXG5AbWVudSgn6Ieq5a6a5LmJ57uE5Lu2L0xpc3QnKVxyXG5AcmVxdWlyZUNvbXBvbmVudChjYy5TY3JvbGxWaWV3KVxyXG4vL+iEmuacrOeUn+WRveWRqOacn+Wbnuiwg+eahOaJp+ihjOS8mOWFiOe6p+OAguWwj+S6jiAwIOeahOiEmuacrOWwhuS8mOWFiOaJp+ihjO+8jOWkp+S6jiAwIOeahOiEmuacrOWwhuacgOWQjuaJp+ihjOOAguivpeS8mOWFiOe6p+WPquWvuSBvbkxvYWQsIG9uRW5hYmxlLCBzdGFydCwgdXBkYXRlIOWSjCBsYXRlVXBkYXRlIOacieaViO+8jOWvuSBvbkRpc2FibGUg5ZKMIG9uRGVzdHJveSDml6DmlYjjgIJcclxuQGV4ZWN1dGlvbk9yZGVyKC01MDAwKVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIC8v5qih5p2/57G75Z6LXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKFRlbXBsYXRlVHlwZSksIHRvb2x0aXA6IENDX0RFViAmJiAn5qih5p2/57G75Z6LXFxuIC0gTk9EReiKgueCuVxcbiAtIFBSRUZBQumihOWItuS9kycsIH0pXHJcbiAgICBwcml2YXRlIHRlbXBsYXRlVHlwZTogVGVtcGxhdGVUeXBlID0gVGVtcGxhdGVUeXBlLk5PREU7XHJcbiAgICAvL+aooeadv0l0ZW3vvIhOb2Rl77yJXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfmqKHmnb9JdGVtOk5vZGUnLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnRlbXBsYXRlVHlwZSA9PSBUZW1wbGF0ZVR5cGUuTk9ERTsgfVxyXG4gICAgfSlcclxuICAgIHRtcE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy/mqKHmnb9JdGVt77yIUHJlZmFi77yJXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+aooeadv0l0ZW06UHJlZmFi6aKE5Yi25L2TJyxcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy50ZW1wbGF0ZVR5cGUgPT0gVGVtcGxhdGVUeXBlLlBSRUZBQjsgfVxyXG4gICAgfSlcclxuICAgIHRtcFByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcclxuICAgIC8v5ruR5Yqo5qih5byPXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgcHJpdmF0ZSBfc2xpZGVNb2RlOiBTbGlkZVR5cGUgPSBTbGlkZVR5cGUuTk9STUFMO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5FbnVtKFNsaWRlVHlwZSksXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfmu5HliqjmqKHlvI9cXG4gLSBOT1JNQUwg5pmu6YCaXFxuIC0gQURIRVJJTkcg57KY6ZmE5qih5byP77yM5bCG5by65Yi25YWz6Zet5rua5Yqo5oOv5oCnXFxuIC0gUEFHRSDpobXpnaLmqKHlvI/vvIzlsIblvLrliLblhbPpl63mu5rliqjmg6/mgKcnXHJcbiAgICB9KVxyXG4gICAgc2V0IHNsaWRlTW9kZSh2YWw6IFNsaWRlVHlwZSkge1xyXG4gICAgICAgIHRoaXMuX3NsaWRlTW9kZSA9IHZhbDtcclxuICAgIH1cclxuICAgIGdldCBzbGlkZU1vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NsaWRlTW9kZTtcclxuICAgIH1cclxuICAgIC8v57+76aG15L2c55So6Led56a7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkZsb2F0LFxyXG4gICAgICAgIHJhbmdlOiBbMCwgMSwgLjFdLFxyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn57+76aG15L2c55So6Led56a7JyxcclxuICAgICAgICBzbGlkZTogdHJ1ZSxcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFOyB9XHJcbiAgICB9KVxyXG4gICAgcHVibGljIHBhZ2VEaXN0YW5jZTogbnVtYmVyID0gLjM7XHJcbiAgICAvL+mhtemdouaUueWPmOS6i+S7tlxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn6aG16Z2i5pS55Y+Y5LqL5Lu2JyxcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFOyB9XHJcbiAgICB9KVxyXG4gICAgcHJpdmF0ZSBwYWdlQ2hhbmdlRXZlbnQ6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgLy/mmK/lkKbkuLromZrmi5/liJfooajvvIjliqjmgIHliJfooajvvIlcclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBwcml2YXRlIF92aXJ0dWFsOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuQm9vbGVhbixcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+aYr+WQpuS4uuiZmuaLn+WIl+ihqO+8iOWKqOaAgeWIl+ihqO+8iSdcclxuICAgIH0pXHJcbiAgICBzZXQgdmlydHVhbCh2YWw6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAodmFsICE9IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuX3ZpcnR1YWwgPSB2YWw7XHJcbiAgICAgICAgaWYgKCFDQ19ERVYgJiYgdGhpcy5fbnVtSXRlbXMgIT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9vblNjcm9sbGluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCB2aXJ0dWFsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92aXJ0dWFsO1xyXG4gICAgfVxyXG4gICAgLy/mmK/lkKbkuLrlvqrnjq/liJfooahcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfmmK/lkKbkuLrlvqrnjq/liJfooagnLFxyXG4gICAgICAgIHZpc2libGUoKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWw6IGJvb2xlYW4gPSB0aGlzLnZpcnR1YWwgJiYgdGhpcy5zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLk5PUk1BTDtcclxuICAgICAgICAgICAgaWYgKCF2YWwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN5Y2xpYyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBwdWJsaWMgY3ljbGljOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvL+e8uuecgeWxheS4rVxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ0l0ZW3mlbDph4/kuI3otrPku6Xloavmu6FDb250ZW505pe277yM5piv5ZCm5bGF5Lit5pi+56S6SXRlbe+8iOS4jeaUr+aMgUdyaWTluIPlsYDvvIknLFxyXG4gICAgICAgIHZpc2libGUoKSB7IHJldHVybiB0aGlzLnZpcnR1YWw7IH1cclxuICAgIH0pXHJcbiAgICBwdWJsaWMgbGFja0NlbnRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy/nvLrnnIHlj6/mu5HliqhcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICdJdGVt5pWw6YeP5LiN6Laz5Lul5aGr5ruhQ29udGVudOaXtu+8jOaYr+WQpuWPr+a7keWKqCcsXHJcbiAgICAgICAgdmlzaWJsZSgpIHtcclxuICAgICAgICAgICAgbGV0IHZhbDogYm9vbGVhbiA9IHRoaXMudmlydHVhbCAmJiAhdGhpcy5sYWNrQ2VudGVyO1xyXG4gICAgICAgICAgICBpZiAoIXZhbClcclxuICAgICAgICAgICAgICAgIHRoaXMubGFja1NsaWRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBsYWNrU2xpZGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8v5Yi35paw6aKR546HXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5JbnRlZ2VyIH0pXHJcbiAgICBwcml2YXRlIF91cGRhdGVSYXRlOiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5JbnRlZ2VyLFxyXG4gICAgICAgIHJhbmdlOiBbMCwgNiwgMV0sXHJcbiAgICAgICAgdG9vbHRpcDogQ0NfREVWICYmICfliLfmlrDpopHnjofvvIjlgLzotorlpKfliLfmlrDpopHnjofotorkvY7jgIHmgKfog73otorpq5jvvIknLFxyXG4gICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgfSlcclxuICAgIHNldCB1cGRhdGVSYXRlKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHZhbCA+PSAwICYmIHZhbCA8PSA2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVJhdGUgPSB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHVwZGF0ZVJhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VwZGF0ZVJhdGU7XHJcbiAgICB9XHJcbiAgICAvL+WIhuW4p+a4suafk++8iOavj+W4p+a4suafk+eahEl0ZW3mlbDph4/vvIg8PTDml7blhbPpl63liIbluKfmuLLmn5PvvInvvIlcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuSW50ZWdlcixcclxuICAgICAgICByYW5nZTogWzAsIDEyLCAxXSxcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+mAkOW4p+a4suafk+aXtu+8jOavj+W4p+a4suafk+eahEl0ZW3mlbDph4/vvIg8PTDml7blhbPpl63liIbluKfmuLLmn5PvvIknLFxyXG4gICAgICAgIHNsaWRlOiB0cnVlLFxyXG4gICAgfSlcclxuICAgIHB1YmxpYyBmcmFtZUJ5RnJhbWVSZW5kZXJOdW06IG51bWJlciA9IDA7XHJcbiAgICAvL+a4suafk+S6i+S7tu+8iOa4suafk+WZqO+8iVxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn5riy5p+T5LqL5Lu277yI5riy5p+T5Zmo77yJJyxcclxuICAgIH0pXHJcbiAgICBwcml2YXRlIHJlbmRlckV2ZW50OiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgIC8v6YCJ5oup5qih5byPXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IGNjLkVudW0oU2VsZWN0ZWRUeXBlKSxcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+mAieaLqeaooeW8j1xcbk5PTkUg5pegIFxcblNJTkdMRSDljZXpgIkgXFxuTVVMVCDlpJrpgIknXHJcbiAgICB9KVxyXG4gICAgcHVibGljIHNlbGVjdGVkTW9kZTogU2VsZWN0ZWRUeXBlID0gU2VsZWN0ZWRUeXBlLk5PTkU7XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHRvb2x0aXA6IENDX0RFViAmJiAn5piv5ZCm6YeN5aSN5ZON5bqU5Y2V6YCJ5LqL5Lu2JyxcclxuICAgICAgICB2aXNpYmxlKCkgeyByZXR1cm4gdGhpcy5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLlNJTkdMRTsgfVxyXG4gICAgfSlcclxuICAgIHB1YmxpYyByZXBlYXRFdmVudFNpbmdsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy/op6blj5HpgInmi6nkuovku7ZcclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcixcclxuICAgICAgICB0b29sdGlwOiBDQ19ERVYgJiYgJ+inpuWPkemAieaLqeS6i+S7ticsXHJcbiAgICAgICAgdmlzaWJsZSgpIHsgcmV0dXJuIHRoaXMuc2VsZWN0ZWRNb2RlID4gU2VsZWN0ZWRUeXBlLk5PTkU7IH1cclxuICAgIH0pXHJcbiAgICBwcml2YXRlIHNlbGVjdGVkRXZlbnQ6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIgPSBudWxsLy9uZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgLy/lvZPliY3pgInmi6lpZFxyXG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJZDogbnVtYmVyID0gLTE7XHJcbiAgICBwcml2YXRlIF9sYXN0U2VsZWN0ZWRJZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBtdWx0U2VsZWN0ZWQ6IG51bWJlcltdO1xyXG4gICAgc2V0IHNlbGVjdGVkSWQodmFsOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICBsZXQgaXRlbTogYW55O1xyXG4gICAgICAgIHN3aXRjaCAodC5zZWxlY3RlZE1vZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuU0lOR0xFOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXQucmVwZWF0RXZlbnRTaW5nbGUgJiYgdmFsID09IHQuX3NlbGVjdGVkSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHQuZ2V0SXRlbUJ5TGlzdElkKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoIWl0ZW0gJiYgdmFsID49IDApXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpc3RJdGVtOiBMaXN0SXRlbTtcclxuICAgICAgICAgICAgICAgIGlmICh0Ll9zZWxlY3RlZElkID49IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdC5fbGFzdFNlbGVjdGVkSWQgPSB0Ll9zZWxlY3RlZElkO1xyXG4gICAgICAgICAgICAgICAgZWxzZSAvL+WmguaenO+8nDDliJnlj5bmtojpgInmi6nvvIzmiopfbGFzdFNlbGVjdGVkSWTkuZ/nva7nqbrlkKfvvIzlpoLmnpzku6XlkI7mnInnibnmrorpnIDmsYLlho3mlLnlkKfjgIJcclxuICAgICAgICAgICAgICAgICAgICB0Ll9sYXN0U2VsZWN0ZWRJZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0Ll9zZWxlY3RlZElkID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KExpc3RJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodC5fbGFzdFNlbGVjdGVkSWQgPj0gMCAmJiB0Ll9sYXN0U2VsZWN0ZWRJZCAhPSB0Ll9zZWxlY3RlZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3RJdGVtOiBhbnkgPSB0LmdldEl0ZW1CeUxpc3RJZCh0Ll9sYXN0U2VsZWN0ZWRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RJdGVtLmdldENvbXBvbmVudChMaXN0SXRlbSkuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodC5zZWxlY3RlZEV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0LnNlbGVjdGVkRXZlbnRdLCBpdGVtLCB2YWwgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcywgdC5fbGFzdFNlbGVjdGVkSWQgPT0gbnVsbCA/IG51bGwgOiAodC5fbGFzdFNlbGVjdGVkSWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBTZWxlY3RlZFR5cGUuTVVMVDoge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHQuZ2V0SXRlbUJ5TGlzdElkKHZhbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpc3RJdGVtID0gaXRlbS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuX3NlbGVjdGVkSWQgPj0gMClcclxuICAgICAgICAgICAgICAgICAgICB0Ll9sYXN0U2VsZWN0ZWRJZCA9IHQuX3NlbGVjdGVkSWQ7XHJcbiAgICAgICAgICAgICAgICB0Ll9zZWxlY3RlZElkID0gdmFsO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJvb2w6IGJvb2xlYW4gPSAhbGlzdEl0ZW0uc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5zZWxlY3RlZCA9IGJvb2w7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3ViOiBudW1iZXIgPSB0Lm11bHRTZWxlY3RlZC5pbmRleE9mKHZhbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYm9vbCAmJiBzdWIgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5tdWx0U2VsZWN0ZWQucHVzaCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghYm9vbCAmJiBzdWIgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkLnNwbGljZShzdWIsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHQuc2VsZWN0ZWRFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdC5zZWxlY3RlZEV2ZW50XSwgaXRlbSwgdmFsICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMsIHQuX2xhc3RTZWxlY3RlZElkID09IG51bGwgPyBudWxsIDogKHQuX2xhc3RTZWxlY3RlZElkICUgdGhpcy5fYWN0dWFsTnVtSXRlbXMpLCBib29sKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHNlbGVjdGVkSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSWQ7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9mb3JjZVVwZGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBfYWxpZ246IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2hvcml6b250YWxEaXI6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3ZlcnRpY2FsRGlyOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zdGFydEF4aXM6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2FsaWduQ2FsY1R5cGU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb250ZW50OiBjYy5Ob2RlO1xyXG4gICAgcHJpdmF0ZSBmaXJzdExpc3RJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGRpc3BsYXlJdGVtTnVtOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF91cGRhdGVEb25lOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX3VwZGF0ZUNvdW50ZXI6IG51bWJlcjtcclxuICAgIHB1YmxpYyBfYWN0dWFsTnVtSXRlbXM6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2N5Y2xpY051bTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfY3ljbGljUG9zMTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfY3ljbGljUG9zMjogbnVtYmVyO1xyXG4gICAgLy/liJfooajmlbDph49cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgc2VyaWFsaXphYmxlOiBmYWxzZVxyXG4gICAgfSlcclxuICAgIHByaXZhdGUgX251bUl0ZW1zOiBudW1iZXIgPSAwO1xyXG4gICAgc2V0IG51bUl0ZW1zKHZhbDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZChmYWxzZSkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAodmFsID09IG51bGwgfHwgdmFsIDwgMCkge1xyXG4gICAgICAgICAgICBjYy5lcnJvcignbnVtSXRlbXMgc2V0IHRoZSB3cm9uZzo6JywgdmFsKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0Ll9hY3R1YWxOdW1JdGVtcyA9IHQuX251bUl0ZW1zID0gdmFsO1xyXG4gICAgICAgIHQuX2ZvcmNlVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKHQuX3ZpcnR1YWwpIHtcclxuICAgICAgICAgICAgdC5fcmVzaXplQ29udGVudCgpO1xyXG4gICAgICAgICAgICBpZiAodC5jeWNsaWMpIHtcclxuICAgICAgICAgICAgICAgIHQuX251bUl0ZW1zID0gdC5fY3ljbGljTnVtICogdC5fbnVtSXRlbXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdC5fb25TY3JvbGxpbmcoKTtcclxuICAgICAgICAgICAgaWYgKCF0LmZyYW1lQnlGcmFtZVJlbmRlck51bSAmJiB0LnNsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSlcclxuICAgICAgICAgICAgICAgIHQuY3VyUGFnZU51bSA9IHQubmVhcmVzdExpc3RJZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgbGF5b3V0OiBjYy5MYXlvdXQgPSB0LmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcbiAgICAgICAgICAgIGlmIChsYXlvdXQpIHtcclxuICAgICAgICAgICAgICAgIGxheW91dC5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0Ll9kZWxSZWR1bmRhbnRJdGVtKCk7XHJcblxyXG4gICAgICAgICAgICB0LmZpcnN0TGlzdElkID0gMDtcclxuICAgICAgICAgICAgaWYgKHQuZnJhbWVCeUZyYW1lUmVuZGVyTnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy/lhYjmuLLmn5Plh6DkuKrlh7rmnaVcclxuICAgICAgICAgICAgICAgIGxldCBsZW46IG51bWJlciA9IHQuZnJhbWVCeUZyYW1lUmVuZGVyTnVtID4gdC5fbnVtSXRlbXMgPyB0Ll9udW1JdGVtcyA6IHQuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gMDsgbiA8IGxlbjsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fY3JlYXRlT3JVcGRhdGVJdGVtMihuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0LmZyYW1lQnlGcmFtZVJlbmRlck51bSA8IHQuX251bUl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fdXBkYXRlQ291bnRlciA9IHQuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHQuX3VwZGF0ZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IDA7IG4gPCB2YWw7IG4rKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuX2NyZWF0ZU9yVXBkYXRlSXRlbTIobik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0LmRpc3BsYXlJdGVtTnVtID0gdmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IG51bUl0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY3R1YWxOdW1JdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbml0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX3Njcm9sbFZpZXc6IGNjLlNjcm9sbFZpZXc7XHJcbiAgICBnZXQgc2Nyb2xsVmlldygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsVmlldztcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2xheW91dDogY2MuTGF5b3V0O1xyXG4gICAgcHJpdmF0ZSBfcmVzaXplTW9kZTogY2MuTGF5b3V0LlJlc2l6ZU1vZGU7XHJcbiAgICBwcml2YXRlIF90b3BHYXA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3JpZ2h0R2FwOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9ib3R0b21HYXA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2xlZnRHYXA6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9jb2x1bW5HYXA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2xpbmVHYXA6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2NvbExpbmVOdW06IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9sYXN0RGlzcGxheURhdGE6IG51bWJlcltdO1xyXG4gICAgcHVibGljIGRpc3BsYXlEYXRhOiBhbnlbXTtcclxuICAgIHByaXZhdGUgX3Bvb2w6IGNjLk5vZGVQb29sO1xyXG5cclxuICAgIHByaXZhdGUgX2l0ZW1UbXA6IGFueTtcclxuICAgIHByaXZhdGUgX25lZWRVcGRhdGVXaWRnZXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2l0ZW1TaXplOiBjYy5TaXplO1xyXG4gICAgcHJpdmF0ZSBfc2l6ZVR5cGU6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIF9jdXN0b21TaXplOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBmcmFtZUNvdW50OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9hbmlEZWxSdW5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgdmlld1RvcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB2aWV3UmlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdmlld0JvdHRvbTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB2aWV3TGVmdDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX2RvbmVBZnRlclVwZGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgZWxhc3RpY1RvcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBlbGFzdGljUmlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZWxhc3RpY0JvdHRvbTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBlbGFzdGljTGVmdDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgc2Nyb2xsVG9MaXN0SWQ6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGFkaGVyaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfYWRoZXJpbmdCYXJyaWVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG5lYXJlc3RMaXN0SWQ6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY3VyUGFnZU51bTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgX2JlZ2FuUG9zOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zY3JvbGxQb3M6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIF9zY3JvbGxUb0xpc3RJZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG9FbmRUaW1lOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zY3JvbGxUb1NvOiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBfbGFjazogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2FsbEl0ZW1TaXplOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9hbGxJdGVtU2l6ZU5vRWRnZTogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgX3Njcm9sbEl0ZW06IGFueTsvL+W9k+WJjeaOp+WItiBTY3JvbGxWaWV3IOa7muWKqOeahCBJdGVtXHJcblxyXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHQuX2l0ZW1UbXAgJiYgdC5faXRlbVRtcC5pc1ZhbGlkKVxyXG4gICAgICAgICAgICB0Ll9pdGVtVG1wLmRlc3Ryb3koKTtcclxuICAgICAgICBpZiAodC50bXBOb2RlICYmIHQudG1wTm9kZS5pc1ZhbGlkKVxyXG4gICAgICAgICAgICB0LnRtcE5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vIGxldCB0b3RhbCA9IHQuX3Bvb2wuc2l6ZSgpO1xyXG4gICAgICAgIHdoaWxlICh0Ll9wb29sLnNpemUoKSkge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHQuX3Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAodG90YWwpXHJcbiAgICAgICAgLy8gICAgIGNjLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0nICsgdC5ub2RlLm5hbWUgKyAnPExpc3Q+IGRlc3Ryb3kgbm9kZSB0b3RhbCBudW0uID0+JywgdG90YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIC8vIGlmICghQ0NfRURJVE9SKSBcclxuICAgICAgICB0aGlzLl9yZWdpc3RlckV2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICAvLyBpZiAoIUNDX0VESVRPUikgXHJcbiAgICAgICAgdGhpcy5fdW5yZWdpc3RlckV2ZW50KCk7XHJcbiAgICB9XHJcbiAgICAvL+azqOWGjOS6i+S7tlxyXG4gICAgX3JlZ2lzdGVyRXZlbnQoKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgdC5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0Ll9vblRvdWNoU3RhcnQsIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vbigndG91Y2gtdXAnLCB0Ll9vblRvdWNoVXAsIHQpO1xyXG4gICAgICAgIHQubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHQuX29uVG91Y2hDYW5jZWxsZWQsIHQsIHRydWUpO1xyXG4gICAgICAgIHQubm9kZS5vbignc2Nyb2xsLWJlZ2FuJywgdC5fb25TY3JvbGxCZWdhbiwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9uKCdzY3JvbGwtZW5kZWQnLCB0Ll9vblNjcm9sbEVuZGVkLCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub24oJ3Njcm9sbGluZycsIHQuX29uU2Nyb2xsaW5nLCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0Ll9vblNpemVDaGFuZ2VkLCB0KTtcclxuICAgIH1cclxuICAgIC8v5Y246L295LqL5Lu2XHJcbiAgICBfdW5yZWdpc3RlckV2ZW50KCkge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIHQubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHQuX29uVG91Y2hTdGFydCwgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9mZigndG91Y2gtdXAnLCB0Ll9vblRvdWNoVXAsIHQpO1xyXG4gICAgICAgIHQubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0Ll9vblRvdWNoQ2FuY2VsbGVkLCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub2ZmKCdzY3JvbGwtYmVnYW4nLCB0Ll9vblNjcm9sbEJlZ2FuLCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub2ZmKCdzY3JvbGwtZW5kZWQnLCB0Ll9vblNjcm9sbEVuZGVkLCB0LCB0cnVlKTtcclxuICAgICAgICB0Lm5vZGUub2ZmKCdzY3JvbGxpbmcnLCB0Ll9vblNjcm9sbGluZywgdCwgdHJ1ZSk7XHJcbiAgICAgICAgdC5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHQuX29uU2l6ZUNoYW5nZWQsIHQpO1xyXG4gICAgfVxyXG4gICAgLy/liJ3lp4vljJblkITnp40uLlxyXG4gICAgX2luaXQoKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHQuX2luaXRlZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB0Ll9zY3JvbGxWaWV3ID0gdC5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcclxuXHJcbiAgICAgICAgdC5jb250ZW50ID0gdC5fc2Nyb2xsVmlldy5jb250ZW50O1xyXG4gICAgICAgIGlmICghdC5jb250ZW50KSB7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKHQubm9kZS5uYW1lICsgXCIncyBjYy5TY3JvbGxWaWV3IHVuc2V0IGNvbnRlbnQhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0Ll9sYXlvdXQgPSB0LmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCk7XHJcblxyXG4gICAgICAgIHQuX2FsaWduID0gdC5fbGF5b3V0LnR5cGU7IC8v5o6S5YiX5qih5byPXHJcbiAgICAgICAgdC5fcmVzaXplTW9kZSA9IHQuX2xheW91dC5yZXNpemVNb2RlOyAvL+iHqumAguW6lOaooeW8j1xyXG4gICAgICAgIHQuX3N0YXJ0QXhpcyA9IHQuX2xheW91dC5zdGFydEF4aXM7XHJcblxyXG4gICAgICAgIHQuX3RvcEdhcCA9IHQuX2xheW91dC5wYWRkaW5nVG9wOyAvL+mhtui+uei3nVxyXG4gICAgICAgIHQuX3JpZ2h0R2FwID0gdC5fbGF5b3V0LnBhZGRpbmdSaWdodDsgLy/lj7Povrnot51cclxuICAgICAgICB0Ll9ib3R0b21HYXAgPSB0Ll9sYXlvdXQucGFkZGluZ0JvdHRvbTsgLy/lupXovrnot51cclxuICAgICAgICB0Ll9sZWZ0R2FwID0gdC5fbGF5b3V0LnBhZGRpbmdMZWZ0OyAvL+W3pui+uei3nVxyXG5cclxuICAgICAgICB0Ll9jb2x1bW5HYXAgPSB0Ll9sYXlvdXQuc3BhY2luZ1g7IC8v5YiX6LedXHJcbiAgICAgICAgdC5fbGluZUdhcCA9IHQuX2xheW91dC5zcGFjaW5nWTsgLy/ooYzot51cclxuXHJcbiAgICAgICAgdC5fY29sTGluZU51bTsgLy/liJfmlbDmiJbooYzmlbDvvIjpnZ5HUklE5qih5byP5YiZPTHvvIzooajnpLrljZXliJfmiJbljZXooYzvvIk7XHJcblxyXG4gICAgICAgIHQuX3ZlcnRpY2FsRGlyID0gdC5fbGF5b3V0LnZlcnRpY2FsRGlyZWN0aW9uOyAvL+WeguebtOaOkuWIl+WtkOiKgueCueeahOaWueWQkVxyXG4gICAgICAgIHQuX2hvcml6b250YWxEaXIgPSB0Ll9sYXlvdXQuaG9yaXpvbnRhbERpcmVjdGlvbjsgLy/msLTlubPmjpLliJflrZDoioLngrnnmoTmlrnlkJFcclxuXHJcbiAgICAgICAgdC5zZXRUZW1wbGF0ZUl0ZW0oY2MuaW5zdGFudGlhdGUodC50ZW1wbGF0ZVR5cGUgPT0gVGVtcGxhdGVUeXBlLlBSRUZBQiA/IHQudG1wUHJlZmFiIDogdC50bXBOb2RlKSk7XHJcblxyXG4gICAgICAgIC8vIOeJueWumueahOa7keWKqOaooeW8j+WkhOeQhlxyXG4gICAgICAgIGlmICh0Ll9zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLkFESEVSSU5HIHx8IHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuUEFHRSkge1xyXG4gICAgICAgICAgICB0Ll9zY3JvbGxWaWV3LmluZXJ0aWEgPSBmYWxzZTtcclxuICAgICAgICAgICAgdC5fc2Nyb2xsVmlldy5fb25Nb3VzZVdoZWVsID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXQudmlydHVhbCkgICAgICAgICAvLyBsYWNrQ2VudGVyIOS7heaUr+aMgSBWaXJ0dWFsIOaooeW8j1xyXG4gICAgICAgICAgICB0LmxhY2tDZW50ZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdC5fbGFzdERpc3BsYXlEYXRhID0gW107IC8v5pyA5ZCO5LiA5qyh5Yi35paw55qE5pWw5o2uXHJcbiAgICAgICAgdC5kaXNwbGF5RGF0YSA9IFtdOyAvL+W9k+WJjeaVsOaNrlxyXG4gICAgICAgIHQuX3Bvb2wgPSBuZXcgY2MuTm9kZVBvb2woKTsgICAgLy/ov5nmmK/kuKrmsaDlrZAuLlxyXG4gICAgICAgIHQuX2ZvcmNlVXBkYXRlID0gZmFsc2U7ICAgICAgICAgLy/mmK/lkKblvLrliLbmm7TmlrBcclxuICAgICAgICB0Ll91cGRhdGVDb3VudGVyID0gMDsgICAgICAgICAgIC8v5b2T5YmN5YiG5bin5riy5p+T5bin5pWwXHJcbiAgICAgICAgdC5fdXBkYXRlRG9uZSA9IHRydWU7ICAgICAgICAgICAvL+WIhuW4p+a4suafk+aYr+WQpuWujOaIkFxyXG5cclxuICAgICAgICB0LmN1clBhZ2VOdW0gPSAwOyAgICAgICAgICAgICAgIC8v5b2T5YmN6aG15pWwXHJcblxyXG4gICAgICAgIGlmICh0LmN5Y2xpYyB8fCAwKSB7XHJcbiAgICAgICAgICAgIHQuX3Njcm9sbFZpZXcuX3Byb2Nlc3NBdXRvU2Nyb2xsaW5nID0gdGhpcy5fcHJvY2Vzc0F1dG9TY3JvbGxpbmcuYmluZCh0KTtcclxuICAgICAgICAgICAgdC5fc2Nyb2xsVmlldy5fc3RhcnRCb3VuY2VCYWNrSWZOZWVkZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdC5fc2Nyb2xsVmlldy5fc2Nyb2xsQ2hpbGRyZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAodC5fYWxpZ24pIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX2hvcml6b250YWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2FsaWduQ2FsY1R5cGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6IHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fdmVydGljYWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uQk9UVE9NX1RPX1RPUDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5HUklEOiB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX3N0YXJ0QXhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0Ll92ZXJ0aWNhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVmVydGljYWxEaXJlY3Rpb24uVE9QX1RPX0JPVFRPTTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbGlnbkNhbGNUeXBlID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLkJPVFRPTV9UT19UT1A6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0Ll9ob3Jpem9udGFsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5fYWxpZ25DYWxjVHlwZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmuIXnqbogY29udGVudFxyXG4gICAgICAgIC8vIHQuY29udGVudC5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZDogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjaGlsZC5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgLy8gICAgIGlmIChjaGlsZCAhPSB0LnRtcE5vZGUgJiYgY2hpbGQuaXNWYWxpZClcclxuICAgICAgICAvLyAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICB0LmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICB0Ll9pbml0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDkuLrkuoblrp7njrDlvqrnjq/liJfooajvvIzlv4XpobvopoblhpljYy5TY3JvbGxWaWV355qE5p+Q5Lqb5Ye95pWwXHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZHRcclxuICAgICAqL1xyXG4gICAgX3Byb2Nlc3NBdXRvU2Nyb2xsaW5nKGR0OiBudW1iZXIpIHtcclxuICAgICAgICAvLyBsZXQgaXNBdXRvU2Nyb2xsQnJha2UgPSB0aGlzLl9zY3JvbGxWaWV3Ll9pc05lY2Vzc2FyeUF1dG9TY3JvbGxCcmFrZSgpO1xyXG4gICAgICAgIGxldCBicmFraW5nRmFjdG9yOiBudW1iZXIgPSAxO1xyXG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsQWNjdW11bGF0ZWRUaW1lJ10gKz0gZHQgKiAoMSAvIGJyYWtpbmdGYWN0b3IpO1xyXG5cclxuICAgICAgICBsZXQgcGVyY2VudGFnZTogbnVtYmVyID0gTWF0aC5taW4oMSwgdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxBY2N1bXVsYXRlZFRpbWUnXSAvIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsVG90YWxUaW1lJ10pO1xyXG4gICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbEF0dGVudWF0ZSddKSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lOiBudW1iZXIgPSBwZXJjZW50YWdlIC0gMTtcclxuICAgICAgICAgICAgcGVyY2VudGFnZSA9IHRpbWUgKiB0aW1lICogdGltZSAqIHRpbWUgKiB0aW1lICsgMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBuZXdQb3NpdGlvbjogYW55ID0gdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10uYWRkKHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsVGFyZ2V0RGVsdGEnXS5tdWwocGVyY2VudGFnZSkpO1xyXG4gICAgICAgIGxldCBFUFNJTE9OOiBudW1iZXIgPSB0aGlzLl9zY3JvbGxWaWV3WydnZXRTY3JvbGxFbmRlZEV2ZW50VGltaW5nJ10oKTtcclxuICAgICAgICBsZXQgcmVhY2hlZEVuZDogYm9vbGVhbiA9IE1hdGguYWJzKHBlcmNlbnRhZ2UgLSAxKSA8PSBFUFNJTE9OO1xyXG4gICAgICAgIC8vIGNjLmxvZyhyZWFjaGVkRW5kLCBNYXRoLmFicyhwZXJjZW50YWdlIC0gMSksIEVQU0lMT04pXHJcblxyXG4gICAgICAgIGxldCBmaXJlRXZlbnQ6IGJvb2xlYW4gPSBNYXRoLmFicyhwZXJjZW50YWdlIC0gMSkgPD0gdGhpcy5fc2Nyb2xsVmlld1snZ2V0U2Nyb2xsRW5kZWRFdmVudFRpbWluZyddKCk7XHJcbiAgICAgICAgaWYgKGZpcmVFdmVudCAmJiAhdGhpcy5fc2Nyb2xsVmlld1snX2lzU2Nyb2xsRW5kZWRXaXRoVGhyZXNob2xkRXZlbnRGaXJlZCddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19kaXNwYXRjaEV2ZW50J10oJ3Njcm9sbC1lbmRlZC13aXRoLXRocmVzaG9sZCcpO1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfaXNTY3JvbGxFbmRlZFdpdGhUaHJlc2hvbGRFdmVudEZpcmVkJ10gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuX3Njcm9sbFZpZXcuZWxhc3RpYyAmJiAhcmVhY2hlZEVuZCkge1xyXG4gICAgICAgIC8vICAgICBsZXQgYnJha2VPZmZzZXRQb3NpdGlvbiA9IG5ld1Bvc2l0aW9uLnN1Yih0aGlzLl9zY3JvbGxWaWV3Ll9hdXRvU2Nyb2xsQnJha2luZ1N0YXJ0UG9zaXRpb24pO1xyXG4gICAgICAgIC8vICAgICBpZiAoaXNBdXRvU2Nyb2xsQnJha2UpIHtcclxuICAgICAgICAvLyAgICAgICAgIGJyYWtlT2Zmc2V0UG9zaXRpb24gPSBicmFrZU9mZnNldFBvc2l0aW9uLm11bChicmFraW5nRmFjdG9yKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBuZXdQb3NpdGlvbiA9IHRoaXMuX3Njcm9sbFZpZXcuX2F1dG9TY3JvbGxCcmFraW5nU3RhcnRQb3NpdGlvbi5hZGQoYnJha2VPZmZzZXRQb3NpdGlvbik7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgbGV0IG1vdmVEZWx0YSA9IG5ld1Bvc2l0aW9uLnN1Yih0aGlzLl9zY3JvbGxWaWV3LmdldENvbnRlbnRQb3NpdGlvbigpKTtcclxuICAgICAgICAvLyAgICAgbGV0IG91dE9mQm91bmRhcnkgPSB0aGlzLl9zY3JvbGxWaWV3Ll9nZXRIb3dNdWNoT3V0T2ZCb3VuZGFyeShtb3ZlRGVsdGEpO1xyXG4gICAgICAgIC8vICAgICBpZiAoIW91dE9mQm91bmRhcnkuZnV6enlFcXVhbHMoY2MudjIoMCwgMCksIEVQU0lMT04pKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBuZXdQb3NpdGlvbiA9IG5ld1Bvc2l0aW9uLmFkZChvdXRPZkJvdW5kYXJ5KTtcclxuICAgICAgICAvLyAgICAgICAgIHJlYWNoZWRFbmQgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBpZiAocmVhY2hlZEVuZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbGluZyddID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGVsdGFNb3ZlOiBhbnkgPSBuZXdQb3NpdGlvbi5zdWIodGhpcy5fc2Nyb2xsVmlldy5nZXRDb250ZW50UG9zaXRpb24oKSk7XHJcbiAgICAgICAgLy8gY2MubG9nKGRlbHRhTW92ZSlcclxuICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfbW92ZUNvbnRlbnQnXSh0aGlzLl9zY3JvbGxWaWV3WydfY2xhbXBEZWx0YSddKGRlbHRhTW92ZSksIHJlYWNoZWRFbmQpO1xyXG4gICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19kaXNwYXRjaEV2ZW50J10oJ3Njcm9sbGluZycpO1xyXG5cclxuICAgICAgICAvLyBzY29sbFRvIEFQSSBjb250cm9sbCBtb3ZlXHJcbiAgICAgICAgaWYgKCF0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbGluZyddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19pc0JvdW5jaW5nJ10gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX3Njcm9sbGluZyddID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19kaXNwYXRjaEV2ZW50J10oJ3Njcm9sbC1lbmRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6K6+572u5qih5p2/SXRlbVxyXG4gICAgc2V0VGVtcGxhdGVJdGVtKGl0ZW06IGFueSkge1xyXG4gICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIHQuX2l0ZW1UbXAgPSBpdGVtO1xyXG5cclxuICAgICAgICBpZiAodC5fcmVzaXplTW9kZSA9PSBjYy5MYXlvdXQuUmVzaXplTW9kZS5DSElMRFJFTilcclxuICAgICAgICAgICAgdC5faXRlbVNpemUgPSB0Ll9sYXlvdXQuY2VsbFNpemU7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0Ll9pdGVtU2l6ZSA9IGNjLnNpemUoaXRlbS53aWR0aCwgaXRlbS5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvL+iOt+WPlkxpc3RJdGVt77yM5aaC5p6c5rKh5pyJ5bCx5Y+W5raI6YCJ5oup5qih5byPXHJcbiAgICAgICAgbGV0IGNvbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KExpc3RJdGVtKTtcclxuICAgICAgICBsZXQgcmVtb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCFjb20pXHJcbiAgICAgICAgICAgIHJlbW92ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gaWYgKGNvbSkge1xyXG4gICAgICAgIC8vICAgICBpZiAoIWNvbS5fYnRuQ29tICYmICFpdGVtLmdldENvbXBvbmVudChjYy5CdXR0b24pKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZW1vdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmIChyZW1vdmUpIHtcclxuICAgICAgICAgICAgdC5zZWxlY3RlZE1vZGUgPSBTZWxlY3RlZFR5cGUuTk9ORTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29tID0gaXRlbS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICBpZiAoY29tICYmIGNvbS5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHQuX25lZWRVcGRhdGVXaWRnZXQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodC5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLk1VTFQpXHJcbiAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkID0gW107XHJcblxyXG4gICAgICAgIHN3aXRjaCAodC5fYWxpZ24pIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5IT1JJWk9OVEFMOlxyXG4gICAgICAgICAgICAgICAgdC5fY29sTGluZU51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICB0Ll9zaXplVHlwZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6XHJcbiAgICAgICAgICAgICAgICB0Ll9jb2xMaW5lTnVtID0gMTtcclxuICAgICAgICAgICAgICAgIHQuX3NpemVUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkdSSUQ6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHQuX3N0YXJ0QXhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/orqHnrpfliJfmlbBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRyaW1XOiBudW1iZXIgPSB0LmNvbnRlbnQud2lkdGggLSB0Ll9sZWZ0R2FwIC0gdC5fcmlnaHRHYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2NvbExpbmVOdW0gPSBNYXRoLmZsb29yKCh0cmltVyArIHQuX2NvbHVtbkdhcCkgLyAodC5faXRlbVNpemUud2lkdGggKyB0Ll9jb2x1bW5HYXApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fc2l6ZVR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5BeGlzRGlyZWN0aW9uLlZFUlRJQ0FMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+iuoeeul+ihjOaVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdHJpbUg6IG51bWJlciA9IHQuY29udGVudC5oZWlnaHQgLSB0Ll90b3BHYXAgLSB0Ll9ib3R0b21HYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQuX2NvbExpbmVOdW0gPSBNYXRoLmZsb29yKCh0cmltSCArIHQuX2xpbmVHYXApIC8gKHQuX2l0ZW1TaXplLmhlaWdodCArIHQuX2xpbmVHYXApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5fc2l6ZVR5cGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOajgOafpeaYr+WQpuWIneWni+WMllxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBwcmludExvZyDmmK/lkKbmiZPljbDplJnor6/kv6Hmga9cclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGNoZWNrSW5pdGVkKHByaW50TG9nOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5pdGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChwcmludExvZylcclxuICAgICAgICAgICAgICAgIGNjLmVycm9yKCdMaXN0IGluaXRpYWxpemF0aW9uIG5vdCBjb21wbGV0ZWQhJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICAvL+emgeeUqCBMYXlvdXQg57uE5Lu277yM6Ieq6KGM6K6h566XIENvbnRlbnQgU2l6ZVxyXG4gICAgX3Jlc2l6ZUNvbnRlbnQoKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogbnVtYmVyO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHQuX2FsaWduKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTDoge1xyXG4gICAgICAgICAgICAgICAgaWYgKHQuX2N1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQ6IGFueSA9IHQuX2dldEZpeGVkU2l6ZShudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0Ll9sZWZ0R2FwICsgZml4ZWQudmFsICsgKHQuX2l0ZW1TaXplLndpZHRoICogKHQuX251bUl0ZW1zIC0gZml4ZWQuY291bnQpKSArICh0Ll9jb2x1bW5HYXAgKiAodC5fbnVtSXRlbXMgLSAxKSkgKyB0Ll9yaWdodEdhcDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdC5fbGVmdEdhcCArICh0Ll9pdGVtU2l6ZS53aWR0aCAqIHQuX251bUl0ZW1zKSArICh0Ll9jb2x1bW5HYXAgKiAodC5fbnVtSXRlbXMgLSAxKSkgKyB0Ll9yaWdodEdhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6IHtcclxuICAgICAgICAgICAgICAgIGlmICh0Ll9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpeGVkOiBhbnkgPSB0Ll9nZXRGaXhlZFNpemUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdC5fdG9wR2FwICsgZml4ZWQudmFsICsgKHQuX2l0ZW1TaXplLmhlaWdodCAqICh0Ll9udW1JdGVtcyAtIGZpeGVkLmNvdW50KSkgKyAodC5fbGluZUdhcCAqICh0Ll9udW1JdGVtcyAtIDEpKSArIHQuX2JvdHRvbUdhcDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdC5fdG9wR2FwICsgKHQuX2l0ZW1TaXplLmhlaWdodCAqIHQuX251bUl0ZW1zKSArICh0Ll9saW5lR2FwICogKHQuX251bUl0ZW1zIC0gMSkpICsgdC5fYm90dG9tR2FwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuVHlwZS5HUklEOiB7XHJcbiAgICAgICAgICAgICAgICAvL+e9keagvOaooeW8j+S4jeaUr+aMgeWxheS4rVxyXG4gICAgICAgICAgICAgICAgaWYgKHQubGFja0NlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICB0LmxhY2tDZW50ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fc3RhcnRBeGlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5IT1JJWk9OVEFMOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGluZU51bTogbnVtYmVyID0gTWF0aC5jZWlsKHQuX251bUl0ZW1zIC8gdC5fY29sTGluZU51bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHQuX3RvcEdhcCArICh0Ll9pdGVtU2l6ZS5oZWlnaHQgKiBsaW5lTnVtKSArICh0Ll9saW5lR2FwICogKGxpbmVOdW0gLSAxKSkgKyB0Ll9ib3R0b21HYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uVkVSVElDQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xOdW06IG51bWJlciA9IE1hdGguY2VpbCh0Ll9udW1JdGVtcyAvIHQuX2NvbExpbmVOdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0Ll9sZWZ0R2FwICsgKHQuX2l0ZW1TaXplLndpZHRoICogY29sTnVtKSArICh0Ll9jb2x1bW5HYXAgKiAoY29sTnVtIC0gMSkpICsgdC5fcmlnaHRHYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsYXlvdXQ6IGNjLkxheW91dCA9IHQuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KTtcclxuICAgICAgICBpZiAobGF5b3V0KVxyXG4gICAgICAgICAgICBsYXlvdXQuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0Ll9hbGxJdGVtU2l6ZSA9IHJlc3VsdDtcclxuICAgICAgICB0Ll9hbGxJdGVtU2l6ZU5vRWRnZSA9IHQuX2FsbEl0ZW1TaXplIC0gKHQuX3NpemVUeXBlID8gKHQuX3RvcEdhcCArIHQuX2JvdHRvbUdhcCkgOiAodC5fbGVmdEdhcCArIHQuX3JpZ2h0R2FwKSk7XHJcblxyXG4gICAgICAgIGlmICh0LmN5Y2xpYykge1xyXG4gICAgICAgICAgICBsZXQgdG90YWxTaXplOiBudW1iZXIgPSAodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKTtcclxuXHJcbiAgICAgICAgICAgIHQuX2N5Y2xpY1BvczEgPSAwO1xyXG4gICAgICAgICAgICB0b3RhbFNpemUgLT0gdC5fY3ljbGljUG9zMTtcclxuICAgICAgICAgICAgdC5fY3ljbGljTnVtID0gTWF0aC5jZWlsKHRvdGFsU2l6ZSAvIHQuX2FsbEl0ZW1TaXplTm9FZGdlKSArIDE7XHJcbiAgICAgICAgICAgIGxldCBzcGFjaW5nOiBudW1iZXIgPSB0Ll9zaXplVHlwZSA/IHQuX2xpbmVHYXAgOiB0Ll9jb2x1bW5HYXA7XHJcbiAgICAgICAgICAgIHQuX2N5Y2xpY1BvczIgPSB0Ll9jeWNsaWNQb3MxICsgdC5fYWxsSXRlbVNpemVOb0VkZ2UgKyBzcGFjaW5nO1xyXG4gICAgICAgICAgICB0Ll9jeWNsaWNBbGxJdGVtU2l6ZSA9IHQuX2FsbEl0ZW1TaXplICsgKHQuX2FsbEl0ZW1TaXplTm9FZGdlICogKHQuX2N5Y2xpY051bSAtIDEpKSArIChzcGFjaW5nICogKHQuX2N5Y2xpY051bSAtIDEpKTtcclxuICAgICAgICAgICAgdC5fY3ljaWxjQWxsSXRlbVNpemVOb0VkZ2UgPSB0Ll9hbGxJdGVtU2l6ZU5vRWRnZSAqIHQuX2N5Y2xpY051bTtcclxuICAgICAgICAgICAgdC5fY3ljaWxjQWxsSXRlbVNpemVOb0VkZ2UgKz0gc3BhY2luZyAqICh0Ll9jeWNsaWNOdW0gLSAxKTtcclxuICAgICAgICAgICAgLy8gY2MubG9nKCdfY3ljbGljTnVtIC0+JywgdC5fY3ljbGljTnVtLCB0Ll9hbGxJdGVtU2l6ZU5vRWRnZSwgdC5fYWxsSXRlbVNpemUsIHQuX2N5Y2xpY1BvczEsIHQuX2N5Y2xpY1BvczIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdC5fbGFjayA9ICF0LmN5Y2xpYyAmJiB0Ll9hbGxJdGVtU2l6ZSA8ICh0Ll9zaXplVHlwZSA/IHQubm9kZS5oZWlnaHQgOiB0Lm5vZGUud2lkdGgpO1xyXG4gICAgICAgIGxldCBzbGlkZU9mZnNldDogbnVtYmVyID0gKCghdC5fbGFjayB8fCAhdC5sYWNrQ2VudGVyKSAmJiB0LmxhY2tTbGlkZSkgPyAwIDogLjE7XHJcblxyXG4gICAgICAgIGxldCB0YXJnZXRXSDogbnVtYmVyID0gdC5fbGFjayA/ICgodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKSAtIHNsaWRlT2Zmc2V0KSA6ICh0LmN5Y2xpYyA/IHQuX2N5Y2xpY0FsbEl0ZW1TaXplIDogdC5fYWxsSXRlbVNpemUpO1xyXG4gICAgICAgIGlmICh0YXJnZXRXSCA8IDApXHJcbiAgICAgICAgICAgIHRhcmdldFdIID0gMDtcclxuXHJcbiAgICAgICAgaWYgKHQuX3NpemVUeXBlKSB7XHJcbiAgICAgICAgICAgIHQuY29udGVudC5oZWlnaHQgPSB0YXJnZXRXSDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0LmNvbnRlbnQud2lkdGggPSB0YXJnZXRXSDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNjLmxvZygnX3Jlc2l6ZUNvbnRlbnQoKSAgbnVtSXRlbXMgPScsIHQuX251bUl0ZW1zLCAn77yMY29udGVudCA9JywgdC5jb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+a7muWKqOi/m+ihjOaXti4uLlxyXG4gICAgX29uU2Nyb2xsaW5nKGV2OiBjYy5FdmVudCA9IG51bGwpIHtcclxuICAgICAgICBpZiAodGhpcy5mcmFtZUNvdW50ID09IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVDb3VudCA9IHRoaXMuX3VwZGF0ZVJhdGU7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9mb3JjZVVwZGF0ZSAmJiAoZXYgJiYgZXYudHlwZSAhPSAnc2Nyb2xsLWVuZGVkJykgJiYgdGhpcy5mcmFtZUNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lQ291bnQtLTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmZyYW1lQ291bnQgPSB0aGlzLl91cGRhdGVSYXRlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fYW5pRGVsUnVuaW5nKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8v5b6q546v5YiX6KGo5aSE55CGXHJcbiAgICAgICAgaWYgKHRoaXMuY3ljbGljKSB7XHJcbiAgICAgICAgICAgIGxldCBzY3JvbGxQb3M6IGFueSA9IHRoaXMuY29udGVudC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBzY3JvbGxQb3MgPSB0aGlzLl9zaXplVHlwZSA/IHNjcm9sbFBvcy55IDogc2Nyb2xsUG9zLng7XHJcblxyXG4gICAgICAgICAgICBsZXQgYWRkVmFsID0gdGhpcy5fYWxsSXRlbVNpemVOb0VkZ2UgKyAodGhpcy5fc2l6ZVR5cGUgPyB0aGlzLl9saW5lR2FwIDogdGhpcy5fY29sdW1uR2FwKTtcclxuICAgICAgICAgICAgbGV0IGFkZDogYW55ID0gdGhpcy5fc2l6ZVR5cGUgPyBjYy52MigwLCBhZGRWYWwpIDogY2MudjIoYWRkVmFsLCAwKTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iExFRlRfVE9fUklHSFTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iExFRlRfVE9fUklHSFTvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsUG9zID4gLXRoaXMuX2N5Y2xpY1BvczEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnggPSAtdGhpcy5fY3ljbGljUG9zMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddID0gdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10uc3ViKGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuX2JlZ2FuUG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLl9iZWdhblBvcyArPSBhZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbFBvcyA8IC10aGlzLl9jeWNsaWNQb3MyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC54ID0gLXRoaXMuX2N5Y2xpY1BvczE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXSA9IHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddLmFkZChhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLl9iZWdhblBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5fYmVnYW5Qb3MgLT0gYWRkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iFJJR0hUX1RPX0xFRlTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iFJJR0hUX1RPX0xFRlTvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsUG9zIDwgdGhpcy5fY3ljbGljUG9zMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueCA9IHRoaXMuX2N5Y2xpY1BvczI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXSA9IHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddLmFkZChhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxQb3MgPiB0aGlzLl9jeWNsaWNQb3MyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC54ID0gdGhpcy5fY3ljbGljUG9zMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddID0gdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10uc3ViKGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY3JvbGxQb3MgPCB0aGlzLl9jeWNsaWNQb3MxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC55ID0gdGhpcy5fY3ljbGljUG9zMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXcuaXNBdXRvU2Nyb2xsaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddID0gdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10uYWRkKGFkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbFBvcyA+IHRoaXMuX2N5Y2xpY1BvczIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnkgPSB0aGlzLl9jeWNsaWNQb3MxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10gPSB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXS5zdWIoYWRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDovL+WNleWIl1ZFUlRJQ0FM77yIQk9UVE9NX1RPX1RPUO+8ieOAgee9keagvEhPUklaT05UQUzvvIhCT1RUT01fVE9fVE9Q77yJXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFBvcyA+IC10aGlzLl9jeWNsaWNQb3MxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC55ID0gLXRoaXMuX2N5Y2xpY1BvczI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXSA9IHRoaXMuX3Njcm9sbFZpZXdbJ19hdXRvU2Nyb2xsU3RhcnRQb3NpdGlvbiddLnN1YihhZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxQb3MgPCAtdGhpcy5fY3ljbGljUG9zMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQueSA9IC10aGlzLl9jeWNsaWNQb3MxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVmlldy5pc0F1dG9TY3JvbGxpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVmlld1snX2F1dG9TY3JvbGxTdGFydFBvc2l0aW9uJ10gPSB0aGlzLl9zY3JvbGxWaWV3WydfYXV0b1Njcm9sbFN0YXJ0UG9zaXRpb24nXS5hZGQoYWRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fY2FsY1ZpZXdQb3MoKTtcclxuXHJcbiAgICAgICAgbGV0IHZUb3A6IG51bWJlciwgdlJpZ2h0OiBudW1iZXIsIHZCb3R0b206IG51bWJlciwgdkxlZnQ6IG51bWJlcjtcclxuICAgICAgICBpZiAodGhpcy5fc2l6ZVR5cGUpIHtcclxuICAgICAgICAgICAgdlRvcCA9IHRoaXMudmlld1RvcDtcclxuICAgICAgICAgICAgdkJvdHRvbSA9IHRoaXMudmlld0JvdHRvbTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2UmlnaHQgPSB0aGlzLnZpZXdSaWdodDtcclxuICAgICAgICAgICAgdkxlZnQgPSB0aGlzLnZpZXdMZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3ZpcnR1YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgaXRlbVBvczogYW55O1xyXG5cclxuICAgICAgICAgICAgbGV0IGN1cklkOiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICBsZXQgZW5kSWQ6IG51bWJlciA9IHRoaXMuX251bUl0ZW1zIC0gMTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnJlYWtGb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c6K+laXRlbeeahOS9jee9ruWcqOWPr+inhuWMuuWfn+WGhe+8jOWwseaOqOWFpWRpc3BsYXlEYXRhXHJcbiAgICAgICAgICAgICAgICBmb3IgKDsgY3VySWQgPD0gZW5kSWQgJiYgIWJyZWFrRm9yOyBjdXJJZCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVBvcyA9IHRoaXMuX2NhbGNJdGVtUG9zKGN1cklkKTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2FsaWduKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtUG9zLnJpZ2h0ID49IHZMZWZ0ICYmIGl0ZW1Qb3MubGVmdCA8PSB2UmlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhLnB1c2goaXRlbVBvcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cklkICE9IDAgJiYgdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVBvcy5ib3R0b20gPD0gdlRvcCAmJiBpdGVtUG9zLnRvcCA+PSB2Qm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKGl0ZW1Qb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJJZCAhPSAwICYmIHRoaXMuZGlzcGxheURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkdSSUQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3N0YXJ0QXhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1Qb3MuYm90dG9tIDw9IHZUb3AgJiYgaXRlbVBvcy50b3AgPj0gdkJvdHRvbSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKGl0ZW1Qb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cklkICE9IDAgJiYgdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1Qb3MucmlnaHQgPj0gdkxlZnQgJiYgaXRlbVBvcy5sZWZ0IDw9IHZSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKGl0ZW1Qb3MpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cklkICE9IDAgJiYgdGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd3c6IG51bWJlciA9IHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGhoOiBudW1iZXIgPSB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbkNhbGNUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iExFRlRfVE9fUklHSFTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iExFRlRfVE9fUklHSFTvvIlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VySWQgPSAodkxlZnQgKyB0aGlzLl9sZWZ0R2FwKSAvIHd3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJZCA9ICh2UmlnaHQgKyB0aGlzLl9yaWdodEdhcCkgLyB3dztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iFJJR0hUX1RPX0xFRlTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iFJJR0hUX1RPX0xFRlTvvIlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VySWQgPSAoLXZSaWdodCAtIHRoaXMuX3JpZ2h0R2FwKSAvIHd3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRJZCA9ICgtdkxlZnQgLSB0aGlzLl9sZWZ0R2FwKSAvIHd3O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJJZCA9ICgtdlRvcCAtIHRoaXMuX3RvcEdhcCkgLyBoaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWQgPSAoLXZCb3R0b20gLSB0aGlzLl9ib3R0b21HYXApIC8gaGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDovL+WNleWIl1ZFUlRJQ0FM77yIQk9UVE9NX1RPX1RPUO+8ieOAgee9keagvEhPUklaT05UQUzvvIhCT1RUT01fVE9fVE9Q77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cklkID0gKHZCb3R0b20gKyB0aGlzLl9ib3R0b21HYXApIC8gaGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZElkID0gKHZUb3AgKyB0aGlzLl90b3BHYXApIC8gaGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY3VySWQgPSBNYXRoLmZsb29yKGN1cklkKSAqIHRoaXMuX2NvbExpbmVOdW07XHJcbiAgICAgICAgICAgICAgICBlbmRJZCA9IE1hdGguY2VpbChlbmRJZCkgKiB0aGlzLl9jb2xMaW5lTnVtO1xyXG4gICAgICAgICAgICAgICAgZW5kSWQtLTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJJZCA8IDApXHJcbiAgICAgICAgICAgICAgICAgICAgY3VySWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVuZElkID49IHRoaXMuX251bUl0ZW1zKVxyXG4gICAgICAgICAgICAgICAgICAgIGVuZElkID0gdGhpcy5fbnVtSXRlbXMgLSAxO1xyXG4gICAgICAgICAgICAgICAgZm9yICg7IGN1cklkIDw9IGVuZElkOyBjdXJJZCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YS5wdXNoKHRoaXMuX2NhbGNJdGVtUG9zKGN1cklkKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fZGVsUmVkdW5kYW50SXRlbSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXNwbGF5RGF0YS5sZW5ndGggPD0gMCB8fCAhdGhpcy5fbnVtSXRlbXMpIHsgLy9pZiBub25lLCBkZWxldGUgYWxsLlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGFzdERpc3BsYXlEYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5maXJzdExpc3RJZCA9IHRoaXMuZGlzcGxheURhdGFbMF0uaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUl0ZW1OdW0gPSB0aGlzLmRpc3BsYXlEYXRhLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIGxldCBsZW46IG51bWJlciA9IHRoaXMuX2xhc3REaXNwbGF5RGF0YS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICBsZXQgaGF2ZURhdGFDaGFuZ2U6IGJvb2xlYW4gPSB0aGlzLmRpc3BsYXlJdGVtTnVtICE9IGxlbjtcclxuICAgICAgICAgICAgaWYgKGhhdmVEYXRhQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK/pgJDluKfmuLLmn5PvvIzpnIDopoHmjpLluo9cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEuc29ydCgoYSwgYikgPT4geyByZXR1cm4gYSAtIGIgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyDlm6BMaXN055qE5pi+56S65pWw5o2u5piv5pyJ5bqP55qE77yM5omA5Lul5Y+q6ZyA6KaB5Yik5pat5pWw57uE6ZW/5bqm5piv5ZCm55u4562J77yM5Lul5Y+K5aS044CB5bC+5Lik5Liq5YWD57Sg5piv5ZCm55u4562J5Y2z5Y+v44CCXHJcbiAgICAgICAgICAgICAgICBoYXZlRGF0YUNoYW5nZSA9IHRoaXMuZmlyc3RMaXN0SWQgIT0gdGhpcy5fbGFzdERpc3BsYXlEYXRhWzBdIHx8IHRoaXMuZGlzcGxheURhdGFbdGhpcy5kaXNwbGF5SXRlbU51bSAtIDFdLmlkICE9IHRoaXMuX2xhc3REaXNwbGF5RGF0YVtsZW4gLSAxXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2ZvcmNlVXBkYXRlIHx8IGhhdmVEYXRhQ2hhbmdlKSB7ICAgIC8v5aaC5p6c5piv5by65Yi25pu05pawXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuX3VwZGF0ZURvbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9sYXN0RGlzcGxheURhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAvL+mAkOW4p+a4suafk1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9udW1JdGVtcyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl91cGRhdGVEb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb25lQWZ0ZXJVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+ebtOaOpea4suafk1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZygnTGlzdCBEaXNwbGF5IERhdGEgSUk6OicsIHRoaXMuZGlzcGxheURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgdGhpcy5kaXNwbGF5SXRlbU51bTsgYysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU9yVXBkYXRlSXRlbSh0aGlzLmRpc3BsYXlEYXRhW2NdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9yY2VVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9jYWxjTmVhcmVzdEl0ZW0oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+iuoeeul+WPr+inhuiMg+WbtFxyXG4gICAgX2NhbGNWaWV3UG9zKCkge1xyXG4gICAgICAgIGxldCBzY3JvbGxQb3M6IGFueSA9IHRoaXMuY29udGVudC5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6Ly/ljZXooYxIT1JJWk9OVEFM77yITEVGVF9UT19SSUdIVO+8ieOAgee9keagvFZFUlRJQ0FM77yITEVGVF9UT19SSUdIVO+8iVxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljTGVmdCA9IHNjcm9sbFBvcy54ID4gMCA/IHNjcm9sbFBvcy54IDogMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld0xlZnQgPSAoc2Nyb2xsUG9zLnggPCAwID8gLXNjcm9sbFBvcy54IDogMCkgLSB0aGlzLmVsYXN0aWNMZWZ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3UmlnaHQgPSB0aGlzLnZpZXdMZWZ0ICsgdGhpcy5ub2RlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljUmlnaHQgPSB0aGlzLnZpZXdSaWdodCA+IHRoaXMuY29udGVudC53aWR0aCA/IE1hdGguYWJzKHRoaXMudmlld1JpZ2h0IC0gdGhpcy5jb250ZW50LndpZHRoKSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdSaWdodCArPSB0aGlzLmVsYXN0aWNSaWdodDtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLmVsYXN0aWNMZWZ0LCB0aGlzLmVsYXN0aWNSaWdodCwgdGhpcy52aWV3TGVmdCwgdGhpcy52aWV3UmlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsYXN0aWNSaWdodCA9IHNjcm9sbFBvcy54IDwgMCA/IC1zY3JvbGxQb3MueCA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdSaWdodCA9IChzY3JvbGxQb3MueCA+IDAgPyAtc2Nyb2xsUG9zLnggOiAwKSArIHRoaXMuZWxhc3RpY1JpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TGVmdCA9IHRoaXMudmlld1JpZ2h0IC0gdGhpcy5ub2RlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljTGVmdCA9IHRoaXMudmlld0xlZnQgPCAtdGhpcy5jb250ZW50LndpZHRoID8gTWF0aC5hYnModGhpcy52aWV3TGVmdCArIHRoaXMuY29udGVudC53aWR0aCkgOiAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3TGVmdCAtPSB0aGlzLmVsYXN0aWNMZWZ0O1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMuZWxhc3RpY0xlZnQsIHRoaXMuZWxhc3RpY1JpZ2h0LCB0aGlzLnZpZXdMZWZ0LCB0aGlzLnZpZXdSaWdodCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOi8v5Y2V5YiXVkVSVElDQUzvvIhUT1BfVE9fQk9UVE9N77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iFRPUF9UT19CT1RUT03vvIlcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY1RvcCA9IHNjcm9sbFBvcy55IDwgMCA/IE1hdGguYWJzKHNjcm9sbFBvcy55KSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdUb3AgPSAoc2Nyb2xsUG9zLnkgPiAwID8gLXNjcm9sbFBvcy55IDogMCkgKyB0aGlzLmVsYXN0aWNUb3A7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdCb3R0b20gPSB0aGlzLnZpZXdUb3AgLSB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljQm90dG9tID0gdGhpcy52aWV3Qm90dG9tIDwgLXRoaXMuY29udGVudC5oZWlnaHQgPyBNYXRoLmFicyh0aGlzLnZpZXdCb3R0b20gKyB0aGlzLmNvbnRlbnQuaGVpZ2h0KSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdCb3R0b20gKz0gdGhpcy5lbGFzdGljQm90dG9tO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMuZWxhc3RpY1RvcCwgdGhpcy5lbGFzdGljQm90dG9tLCB0aGlzLnZpZXdUb3AsIHRoaXMudmlld0JvdHRvbSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0Oi8v5Y2V5YiXVkVSVElDQUzvvIhCT1RUT01fVE9fVE9Q77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iEJPVFRPTV9UT19UT1DvvIlcclxuICAgICAgICAgICAgICAgIHRoaXMuZWxhc3RpY0JvdHRvbSA9IHNjcm9sbFBvcy55ID4gMCA/IE1hdGguYWJzKHNjcm9sbFBvcy55KSA6IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdCb3R0b20gPSAoc2Nyb2xsUG9zLnkgPCAwID8gLXNjcm9sbFBvcy55IDogMCkgLSB0aGlzLmVsYXN0aWNCb3R0b207XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdUb3AgPSB0aGlzLnZpZXdCb3R0b20gKyB0aGlzLm5vZGUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbGFzdGljVG9wID0gdGhpcy52aWV3VG9wID4gdGhpcy5jb250ZW50LmhlaWdodCA/IE1hdGguYWJzKHRoaXMudmlld1RvcCAtIHRoaXMuY29udGVudC5oZWlnaHQpIDogMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlld1RvcCAtPSB0aGlzLmVsYXN0aWNUb3A7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2codGhpcy5lbGFzdGljVG9wLCB0aGlzLmVsYXN0aWNCb3R0b20sIHRoaXMudmlld1RvcCwgdGhpcy52aWV3Qm90dG9tKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6K6h566X5L2N572uIOagueaNrmlkXHJcbiAgICBfY2FsY0l0ZW1Qb3MoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgdG9wOiBudW1iZXIsIGJvdHRvbTogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGl0ZW1YOiBudW1iZXIsIGl0ZW1ZOiBudW1iZXI7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9hbGlnbikge1xyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkhPUklaT05UQUw6XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2hvcml6b250YWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLkxFRlRfVE9fUklHSFQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXhlZDogYW55ID0gdGhpcy5fZ2V0Rml4ZWRTaXplKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSB0aGlzLl9sZWZ0R2FwICsgKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiAoaWQgLSBmaXhlZC5jb3VudCkpICsgKGZpeGVkLnZhbCArICh0aGlzLl9jb2x1bW5HYXAgKiBmaXhlZC5jb3VudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNzOiBudW1iZXIgPSB0aGlzLl9jdXN0b21TaXplW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gKGNzID4gMCA/IGNzIDogdGhpcy5faXRlbVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHRoaXMuX2xlZnRHYXAgKyAoKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSAqIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gdGhpcy5faXRlbVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgPSBsZWZ0ICsgd2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhY2tDZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZmZzZXQ6IG51bWJlciA9ICh0aGlzLmNvbnRlbnQud2lkdGggLyAyKSAtICh0aGlzLl9hbGxJdGVtU2l6ZU5vRWRnZSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogcmlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBsZWZ0ICsgKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWCAqIHdpZHRoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuX2l0ZW1UbXAueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVF9UT19MRUZUOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQ6IGFueSA9IHRoaXMuX2dldEZpeGVkU2l6ZShpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IC10aGlzLl9yaWdodEdhcCAtICgodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogKGlkIC0gZml4ZWQuY291bnQpKSAtIChmaXhlZC52YWwgKyAodGhpcy5fY29sdW1uR2FwICogZml4ZWQuY291bnQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjczogbnVtYmVyID0gdGhpcy5fY3VzdG9tU2l6ZVtpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IChjcyA+IDAgPyBjcyA6IHRoaXMuX2l0ZW1TaXplLndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gLXRoaXMuX3JpZ2h0R2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiBpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IHRoaXMuX2l0ZW1TaXplLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSByaWdodCAtIHdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5sYWNrQ2VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0OiBudW1iZXIgPSAodGhpcy5jb250ZW50LndpZHRoIC8gMikgLSAodGhpcy5fYWxsSXRlbVNpemVOb0VkZ2UgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgLT0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQgLT0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogcmlnaHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogbGVmdCArICh0aGlzLl9pdGVtVG1wLmFuY2hvclggKiB3aWR0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiB0aGlzLl9pdGVtVG1wLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlR5cGUuVkVSVElDQUw6IHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fdmVydGljYWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZml4ZWQ6IGFueSA9IHRoaXMuX2dldEZpeGVkU2l6ZShpZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSAtdGhpcy5fdG9wR2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIChpZCAtIGZpeGVkLmNvdW50KSkgLSAoZml4ZWQudmFsICsgKHRoaXMuX2xpbmVHYXAgKiBmaXhlZC5jb3VudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNzOiBudW1iZXIgPSB0aGlzLl9jdXN0b21TaXplW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IChjcyA+IDAgPyBjcyA6IHRoaXMuX2l0ZW1TaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSAtdGhpcy5fdG9wR2FwIC0gKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPSB0b3AgLSBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhY2tDZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZmZzZXQ6IG51bWJlciA9ICh0aGlzLmNvbnRlbnQuaGVpZ2h0IC8gMikgLSAodGhpcy5fYWxsSXRlbVNpemVOb0VkZ2UgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCAtPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gLT0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5faXRlbVRtcC54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogYm90dG9tICsgKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWSAqIGhlaWdodCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLkJPVFRPTV9UT19UT1A6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXhlZDogYW55ID0gdGhpcy5fZ2V0Rml4ZWRTaXplKGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbSA9IHRoaXMuX2JvdHRvbUdhcCArICgodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiAoaWQgLSBmaXhlZC5jb3VudCkpICsgKGZpeGVkLnZhbCArICh0aGlzLl9saW5lR2FwICogZml4ZWQuY291bnQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjczogbnVtYmVyID0gdGhpcy5fY3VzdG9tU2l6ZVtpZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgPSAoY3MgPiAwID8gY3MgOiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tID0gdGhpcy5fYm90dG9tR2FwICsgKCh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSAqIGlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuX2l0ZW1TaXplLmhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSBib3R0b20gKyBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxhY2tDZW50ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvZmZzZXQ6IG51bWJlciA9ICh0aGlzLmNvbnRlbnQuaGVpZ2h0IC8gMikgLSAodGhpcy5fYWxsSXRlbVNpemVOb0VkZ2UgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcCArPSBvZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gKz0gb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdGhpcy5faXRlbVRtcC54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogYm90dG9tICsgKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWSAqIGhlaWdodCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGNjLkxheW91dC5UeXBlLkdSSUQ6IHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2xMaW5lOiBudW1iZXIgPSBNYXRoLmZsb29yKGlkIC8gdGhpcy5fY29sTGluZU51bSk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3N0YXJ0QXhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LkF4aXNEaXJlY3Rpb24uSE9SSVpPTlRBTDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3ZlcnRpY2FsRGlyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5WZXJ0aWNhbERpcmVjdGlvbi5UT1BfVE9fQk9UVE9NOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wID0gLXRoaXMuX3RvcEdhcCAtICgodGhpcy5faXRlbVNpemUuaGVpZ2h0ICsgdGhpcy5fbGluZUdhcCkgKiBjb2xMaW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPSB0b3AgLSB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVkgPSBib3R0b20gKyAodGhpcy5faXRlbVRtcC5hbmNob3JZICogdGhpcy5faXRlbVNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLkJPVFRPTV9UT19UT1A6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b20gPSB0aGlzLl9ib3R0b21HYXAgKyAoKHRoaXMuX2l0ZW1TaXplLmhlaWdodCArIHRoaXMuX2xpbmVHYXApICogY29sTGluZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wID0gYm90dG9tICsgdGhpcy5faXRlbVNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZID0gYm90dG9tICsgKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWSAqIHRoaXMuX2l0ZW1TaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggPSB0aGlzLl9sZWZ0R2FwICsgKChpZCAlIHRoaXMuX2NvbExpbmVOdW0pICogKHRoaXMuX2l0ZW1TaXplLndpZHRoICsgdGhpcy5fY29sdW1uR2FwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5faG9yaXpvbnRhbERpcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5MRUZUX1RPX1JJR0hUOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggKz0gKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWCAqIHRoaXMuX2l0ZW1TaXplLndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCAtPSAodGhpcy5jb250ZW50LmFuY2hvclggKiB0aGlzLmNvbnRlbnQud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuSG9yaXpvbnRhbERpcmVjdGlvbi5SSUdIVF9UT19MRUZUOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggKz0gKCgxIC0gdGhpcy5faXRlbVRtcC5hbmNob3JYKSAqIHRoaXMuX2l0ZW1TaXplLndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCAtPSAoKDEgLSB0aGlzLmNvbnRlbnQuYW5jaG9yWCkgKiB0aGlzLmNvbnRlbnQud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHRvcCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogYm90dG9tLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogaXRlbVgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBpdGVtWSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBjYy5MYXlvdXQuQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX2hvcml6b250YWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0Lkhvcml6b250YWxEaXJlY3Rpb24uTEVGVF9UT19SSUdIVDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSB0aGlzLl9sZWZ0R2FwICsgKCh0aGlzLl9pdGVtU2l6ZS53aWR0aCArIHRoaXMuX2NvbHVtbkdhcCkgKiBjb2xMaW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IGxlZnQgKyB0aGlzLl9pdGVtU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCA9IGxlZnQgKyAodGhpcy5faXRlbVRtcC5hbmNob3JYICogdGhpcy5faXRlbVNpemUud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1YIC09ICh0aGlzLmNvbnRlbnQuYW5jaG9yWCAqIHRoaXMuY29udGVudC53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGNjLkxheW91dC5Ib3Jpem9udGFsRGlyZWN0aW9uLlJJR0hUX1RPX0xFRlQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodCA9IC10aGlzLl9yaWdodEdhcCAtICgodGhpcy5faXRlbVNpemUud2lkdGggKyB0aGlzLl9jb2x1bW5HYXApICogY29sTGluZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCA9IHJpZ2h0IC0gdGhpcy5faXRlbVNpemUud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVggPSBsZWZ0ICsgKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWCAqIHRoaXMuX2l0ZW1TaXplLndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWCArPSAoKDEgLSB0aGlzLmNvbnRlbnQuYW5jaG9yWCkgKiB0aGlzLmNvbnRlbnQud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZID0gLXRoaXMuX3RvcEdhcCAtICgoaWQgJSB0aGlzLl9jb2xMaW5lTnVtKSAqICh0aGlzLl9pdGVtU2l6ZS5oZWlnaHQgKyB0aGlzLl9saW5lR2FwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fdmVydGljYWxEaXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLlRPUF9UT19CT1RUT006IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSAtPSAoKDEgLSB0aGlzLl9pdGVtVG1wLmFuY2hvclkpICogdGhpcy5faXRlbVNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSArPSAoKDEgLSB0aGlzLmNvbnRlbnQuYW5jaG9yWSkgKiB0aGlzLmNvbnRlbnQuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgY2MuTGF5b3V0LlZlcnRpY2FsRGlyZWN0aW9uLkJPVFRPTV9UT19UT1A6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWSAtPSAoKHRoaXMuX2l0ZW1UbXAuYW5jaG9yWSkgKiB0aGlzLl9pdGVtU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZICs9ICh0aGlzLmNvbnRlbnQuYW5jaG9yWSAqIHRoaXMuY29udGVudC5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ZICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBsZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogaXRlbVgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBpdGVtWSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v6K6h566X5bey5a2Y5Zyo55qESXRlbeeahOS9jee9rlxyXG4gICAgX2NhbGNFeGlzdEl0ZW1Qb3MoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBpdGVtOiBhbnkgPSB0aGlzLmdldEl0ZW1CeUxpc3RJZChpZCk7XHJcbiAgICAgICAgaWYgKCFpdGVtKVxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgZGF0YTogYW55ID0ge1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHg6IGl0ZW0ueCxcclxuICAgICAgICAgICAgeTogaXRlbS55LFxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fc2l6ZVR5cGUpIHtcclxuICAgICAgICAgICAgZGF0YS50b3AgPSBpdGVtLnkgKyAoaXRlbS5oZWlnaHQgKiAoMSAtIGl0ZW0uYW5jaG9yWSkpO1xyXG4gICAgICAgICAgICBkYXRhLmJvdHRvbSA9IGl0ZW0ueSAtIChpdGVtLmhlaWdodCAqIGl0ZW0uYW5jaG9yWSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YS5sZWZ0ID0gaXRlbS54IC0gKGl0ZW0ud2lkdGggKiBpdGVtLmFuY2hvclgpO1xyXG4gICAgICAgICAgICBkYXRhLnJpZ2h0ID0gaXRlbS54ICsgKGl0ZW0ud2lkdGggKiAoMSAtIGl0ZW0uYW5jaG9yWCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIC8v6I635Y+WSXRlbeS9jee9rlxyXG4gICAgZ2V0SXRlbVBvcyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3ZpcnR1YWwpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWxjSXRlbVBvcyhpZCk7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWxjSXRlbVBvcyhpZCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9jYWxjRXhpc3RJdGVtUG9zKGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+iOt+WPluWbuuWumuWwuuWvuFxyXG4gICAgX2dldEZpeGVkU2l6ZShsaXN0SWQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5fY3VzdG9tU2l6ZSlcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgaWYgKGxpc3RJZCA9PSBudWxsKVxyXG4gICAgICAgICAgICBsaXN0SWQgPSB0aGlzLl9udW1JdGVtcztcclxuICAgICAgICBsZXQgZml4ZWQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGNvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMuX2N1c3RvbVNpemUpIHtcclxuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGlkKSA8IGxpc3RJZCkge1xyXG4gICAgICAgICAgICAgICAgZml4ZWQgKz0gdGhpcy5fY3VzdG9tU2l6ZVtpZF07XHJcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHZhbDogZml4ZWQsXHJcbiAgICAgICAgICAgIGNvdW50OiBjb3VudCxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+a7muWKqOe7k+adn+aXti4uXHJcbiAgICBfb25TY3JvbGxCZWdhbigpIHtcclxuICAgICAgICB0aGlzLl9iZWdhblBvcyA9IHRoaXMuX3NpemVUeXBlID8gdGhpcy52aWV3VG9wIDogdGhpcy52aWV3TGVmdDtcclxuICAgIH1cclxuICAgIC8v5rua5Yqo57uT5p2f5pe2Li5cclxuICAgIF9vblNjcm9sbEVuZGVkKCkge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0LnNjcm9sbFRvTGlzdElkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW06IGFueSA9IHQuZ2V0SXRlbUJ5TGlzdElkKHQuc2Nyb2xsVG9MaXN0SWQpO1xyXG4gICAgICAgICAgICB0LnNjcm9sbFRvTGlzdElkID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjEsIDEuMDYpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oLjEsIDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vbmV3IGNjLmNhbGxGdW5jKGZ1bmN0aW9uIChydW5Ob2RlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0Ll9vblNjcm9sbGluZygpO1xyXG5cclxuICAgICAgICBpZiAodC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5BREhFUklORyAmJlxyXG4gICAgICAgICAgICAhdC5hZGhlcmluZ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICAvL2NjLmxvZyh0LmFkaGVyaW5nLCB0Ll9zY3JvbGxWaWV3LmlzQXV0b1Njcm9sbGluZygpLCB0Ll9zY3JvbGxWaWV3LmlzU2Nyb2xsaW5nKCkpO1xyXG4gICAgICAgICAgICB0LmFkaGVyZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFKSB7XHJcbiAgICAgICAgICAgIGlmICh0Ll9iZWdhblBvcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWdlQWRoZXJlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0LmFkaGVyZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g6Kem5pG45pe2XHJcbiAgICBfb25Ub3VjaFN0YXJ0KGV2LCBjYXB0dXJlTGlzdGVuZXJzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFZpZXdbJ19oYXNOZXN0ZWRWaWV3R3JvdXAnXShldiwgY2FwdHVyZUxpc3RlbmVycykpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgaXNNZSA9IGV2LmV2ZW50UGhhc2UgPT09IGNjLkV2ZW50LkFUX1RBUkdFVCAmJiBldi50YXJnZXQgPT09IHRoaXMubm9kZTtcclxuICAgICAgICBpZiAoIWlzTWUpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Ob2RlOiBhbnkgPSBldi50YXJnZXQ7XHJcbiAgICAgICAgICAgIHdoaWxlIChpdGVtTm9kZS5fbGlzdElkID09IG51bGwgJiYgaXRlbU5vZGUucGFyZW50KVxyXG4gICAgICAgICAgICAgICAgaXRlbU5vZGUgPSBpdGVtTm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbEl0ZW0gPSBpdGVtTm9kZS5fbGlzdElkICE9IG51bGwgPyBpdGVtTm9kZSA6IGV2LnRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+inpuaRuOaKrOi1t+aXti4uXHJcbiAgICBfb25Ub3VjaFVwKCkge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIHQuX3Njcm9sbFBvcyA9IG51bGw7XHJcbiAgICAgICAgaWYgKHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuQURIRVJJTkcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWRoZXJpbmcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGhlcmluZ0JhcnJpZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0LmFkaGVyZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFKSB7XHJcbiAgICAgICAgICAgIGlmICh0Ll9iZWdhblBvcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWdlQWRoZXJlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0LmFkaGVyZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Njcm9sbEl0ZW0gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIF9vblRvdWNoQ2FuY2VsbGVkKGV2LCBjYXB0dXJlTGlzdGVuZXJzKSB7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0Ll9zY3JvbGxWaWV3WydfaGFzTmVzdGVkVmlld0dyb3VwJ10oZXYsIGNhcHR1cmVMaXN0ZW5lcnMpIHx8IGV2LnNpbXVsYXRlKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIHQuX3Njcm9sbFBvcyA9IG51bGw7XHJcbiAgICAgICAgaWYgKHQuX3NsaWRlTW9kZSA9PSBTbGlkZVR5cGUuQURIRVJJTkcpIHtcclxuICAgICAgICAgICAgaWYgKHQuYWRoZXJpbmcpXHJcbiAgICAgICAgICAgICAgICB0Ll9hZGhlcmluZ0JhcnJpZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0LmFkaGVyZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodC5fc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFKSB7XHJcbiAgICAgICAgICAgIGlmICh0Ll9iZWdhblBvcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0Ll9wYWdlQWRoZXJlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0LmFkaGVyZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3Njcm9sbEl0ZW0gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgLy/lvZPlsLrlr7jmlLnlj5hcclxuICAgIF9vblNpemVDaGFuZ2VkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrSW5pdGVkKGZhbHNlKSlcclxuICAgICAgICAgICAgdGhpcy5fb25TY3JvbGxpbmcoKTtcclxuICAgIH1cclxuICAgIC8v5b2TSXRlbeiHqumAguW6lFxyXG4gICAgX29uSXRlbUFkYXB0aXZlKGl0ZW0pIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5jaGVja0luaXRlZChmYWxzZSkpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICghdGhpcy5fc2l6ZVR5cGUgJiYgaXRlbS53aWR0aCAhPSB0aGlzLl9pdGVtU2l6ZS53aWR0aClcclxuICAgICAgICAgICAgfHwgKHRoaXMuX3NpemVUeXBlICYmIGl0ZW0uaGVpZ2h0ICE9IHRoaXMuX2l0ZW1TaXplLmhlaWdodClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9jdXN0b21TaXplKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VzdG9tU2l6ZSA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgdmFsID0gdGhpcy5fc2l6ZVR5cGUgPyBpdGVtLmhlaWdodCA6IGl0ZW0ud2lkdGg7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXN0b21TaXplW2l0ZW0uX2xpc3RJZF0gIT0gdmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXN0b21TaXplW2l0ZW0uX2xpc3RJZF0gPSB2YWw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNpemVDb250ZW50KCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNvbnRlbnQuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQ6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLl91cGRhdGVJdGVtUG9zKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBbGwoKTtcclxuICAgICAgICAgICAgICAgIC8vIOWmguaenOW9k+WJjeato+WcqOi/kOihjCBzY3JvbGxUb++8jOiCr+WumuS8muS4jeWHhuehru+8jOWcqOi/memHjOWBmuS/ruato1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbFRvTGlzdElkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxQb3MgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLl9zY3JvbGxUb1NvKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvKHRoaXMuX3Njcm9sbFRvTGlzdElkLCBNYXRoLm1heCgwLCB0aGlzLl9zY3JvbGxUb0VuZFRpbWUgLSAoKG5ldyBEYXRlKCkpLmdldFRpbWUoKSAvIDEwMDApKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgLy9QQUdF57KY6ZmEXHJcbiAgICBfcGFnZUFkaGVyZSgpIHtcclxuICAgICAgICBsZXQgdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0LmN5Y2xpYyAmJiAodC5lbGFzdGljVG9wID4gMCB8fCB0LmVsYXN0aWNSaWdodCA+IDAgfHwgdC5lbGFzdGljQm90dG9tID4gMCB8fCB0LmVsYXN0aWNMZWZ0ID4gMCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgY3VyUG9zID0gdC5fc2l6ZVR5cGUgPyB0LnZpZXdUb3AgOiB0LnZpZXdMZWZ0O1xyXG4gICAgICAgIGxldCBkaXMgPSAodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKSAqIHQucGFnZURpc3RhbmNlO1xyXG4gICAgICAgIGxldCBjYW5Ta2lwID0gTWF0aC5hYnModC5fYmVnYW5Qb3MgLSBjdXJQb3MpID4gZGlzO1xyXG4gICAgICAgIGlmIChjYW5Ta2lwKSB7XHJcbiAgICAgICAgICAgIGxldCB0aW1lSW5TZWNvbmQgPSAuNTtcclxuICAgICAgICAgICAgc3dpdGNoICh0Ll9hbGlnbkNhbGNUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6Ly/ljZXooYxIT1JJWk9OVEFM77yITEVGVF9UT19SSUdIVO+8ieOAgee9keagvFZFUlRJQ0FM77yITEVGVF9UT19SSUdIVO+8iVxyXG4gICAgICAgICAgICAgICAgY2FzZSA0Oi8v5Y2V5YiXVkVSVElDQUzvvIhCT1RUT01fVE9fVE9Q77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iEJPVFRPTV9UT19UT1DvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgPiBjdXJQb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5wcmVQYWdlKHRpbWVJblNlY29uZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZygnX3BhZ2VBZGhlcmUgICBQUFBQUFBQUFBQUFBQUFAnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5leHRQYWdlKHRpbWVJblNlY29uZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZygnX3BhZ2VBZGhlcmUgICBOTk5OTk5OTk5OTk5OTk4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDI6Ly/ljZXooYxIT1JJWk9OVEFM77yIUklHSFRfVE9fTEVGVO+8ieOAgee9keagvFZFUlRJQ0FM77yIUklHSFRfVE9fTEVGVO+8iVxyXG4gICAgICAgICAgICAgICAgY2FzZSAzOi8v5Y2V5YiXVkVSVElDQUzvvIhUT1BfVE9fQk9UVE9N77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iFRPUF9UT19CT1RUT03vvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodC5fYmVnYW5Qb3MgPCBjdXJQb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5wcmVQYWdlKHRpbWVJblNlY29uZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5uZXh0UGFnZSh0aW1lSW5TZWNvbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodC5lbGFzdGljVG9wIDw9IDAgJiYgdC5lbGFzdGljUmlnaHQgPD0gMCAmJiB0LmVsYXN0aWNCb3R0b20gPD0gMCAmJiB0LmVsYXN0aWNMZWZ0IDw9IDApIHtcclxuICAgICAgICAgICAgdC5hZGhlcmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdC5fYmVnYW5Qb3MgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgLy/nspjpmYRcclxuICAgIGFkaGVyZSgpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0LmVsYXN0aWNUb3AgPiAwIHx8IHQuZWxhc3RpY1JpZ2h0ID4gMCB8fCB0LmVsYXN0aWNCb3R0b20gPiAwIHx8IHQuZWxhc3RpY0xlZnQgPiAwKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdC5hZGhlcmluZyA9IHRydWU7XHJcbiAgICAgICAgdC5fY2FsY05lYXJlc3RJdGVtKCk7XHJcbiAgICAgICAgbGV0IG9mZnNldDogbnVtYmVyID0gKHQuX3NpemVUeXBlID8gdC5fdG9wR2FwIDogdC5fbGVmdEdhcCkgLyAodC5fc2l6ZVR5cGUgPyB0Lm5vZGUuaGVpZ2h0IDogdC5ub2RlLndpZHRoKTtcclxuICAgICAgICBsZXQgdGltZUluU2Vjb25kOiBudW1iZXIgPSAuNztcclxuICAgICAgICB0LnNjcm9sbFRvKHQubmVhcmVzdExpc3RJZCwgdGltZUluU2Vjb25kLCBvZmZzZXQpO1xyXG4gICAgfVxyXG4gICAgLy9VcGRhdGUuLlxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSA8PSAwIHx8IHRoaXMuX3VwZGF0ZURvbmUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyBjYy5sb2codGhpcy5kaXNwbGF5RGF0YS5sZW5ndGgsIHRoaXMuX3VwZGF0ZUNvdW50ZXIsIHRoaXMuZGlzcGxheURhdGFbdGhpcy5fdXBkYXRlQ291bnRlcl0pO1xyXG4gICAgICAgIGlmICh0aGlzLl92aXJ0dWFsKSB7XHJcbiAgICAgICAgICAgIGxldCBsZW46IG51bWJlciA9ICh0aGlzLl91cGRhdGVDb3VudGVyICsgdGhpcy5mcmFtZUJ5RnJhbWVSZW5kZXJOdW0pID4gdGhpcy5kaXNwbGF5SXRlbU51bSA/IHRoaXMuZGlzcGxheUl0ZW1OdW0gOiAodGhpcy5fdXBkYXRlQ291bnRlciArIHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gdGhpcy5fdXBkYXRlQ291bnRlcjsgbiA8IGxlbjsgbisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YTogYW55ID0gdGhpcy5kaXNwbGF5RGF0YVtuXTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlT3JVcGRhdGVJdGVtKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fdXBkYXRlQ291bnRlciA+PSB0aGlzLmRpc3BsYXlJdGVtTnVtIC0gMSkgeyAvL+acgOWQjuS4gOS4qlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RvbmVBZnRlclVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvdW50ZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoIXRoaXMuX3Njcm9sbFZpZXcuaXNTY3JvbGxpbmcoKSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb25lQWZ0ZXJVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGVsUmVkdW5kYW50SXRlbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ZvcmNlVXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FsY05lYXJlc3RJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2xpZGVNb2RlID09IFNsaWRlVHlwZS5QQUdFKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1clBhZ2VOdW0gPSB0aGlzLm5lYXJlc3RMaXN0SWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDb3VudGVyICs9IHRoaXMuZnJhbWVCeUZyYW1lUmVuZGVyTnVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUNvdW50ZXIgPCB0aGlzLl9udW1JdGVtcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxlbjogbnVtYmVyID0gKHRoaXMuX3VwZGF0ZUNvdW50ZXIgKyB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSkgPiB0aGlzLl9udW1JdGVtcyA/IHRoaXMuX251bUl0ZW1zIDogKHRoaXMuX3VwZGF0ZUNvdW50ZXIgKyB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuOiBudW1iZXIgPSB0aGlzLl91cGRhdGVDb3VudGVyOyBuIDwgbGVuOyBuKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVPclVwZGF0ZUl0ZW0yKG4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQ291bnRlciArPSB0aGlzLmZyYW1lQnlGcmFtZVJlbmRlck51bTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FsY05lYXJlc3RJdGVtKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zbGlkZU1vZGUgPT0gU2xpZGVUeXBlLlBBR0UpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJQYWdlTnVtID0gdGhpcy5uZWFyZXN0TGlzdElkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rmiJbmm7TmlrBJdGVt77yI6Jma5ouf5YiX6KGo55So77yJXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSDmlbDmja5cclxuICAgICAqL1xyXG4gICAgX2NyZWF0ZU9yVXBkYXRlSXRlbShkYXRhOiBhbnkpIHtcclxuICAgICAgICBsZXQgaXRlbTogYW55ID0gdGhpcy5nZXRJdGVtQnlMaXN0SWQoZGF0YS5pZCk7XHJcbiAgICAgICAgaWYgKCFpdGVtKSB7IC8v5aaC5p6c5LiN5a2Y5ZyoXHJcbiAgICAgICAgICAgIGxldCBjYW5HZXQ6IGJvb2xlYW4gPSB0aGlzLl9wb29sLnNpemUoKSA+IDA7XHJcbiAgICAgICAgICAgIGlmIChjYW5HZXQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLl9wb29sLmdldCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKCfku47msaDkuK3lj5blh7o6OiAgIOaXp2lkID0nLCBpdGVtWydfbGlzdElkJ10sICfvvIzmlrBpZCA9JywgZGF0YS5pZCwgaXRlbSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5faXRlbVRtcCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ+aWsOW7ujo6JywgZGF0YS5pZCwgaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGl0ZW0uX2xpc3RJZCAhPSBkYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLl9saXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRDb250ZW50U2l6ZSh0aGlzLl9pdGVtU2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbS5zZXRQb3NpdGlvbihjYy52MihkYXRhLngsIGRhdGEueSkpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNldEl0ZW1TaXplKGl0ZW0pO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChjYW5HZXQgJiYgdGhpcy5fbmVlZFVwZGF0ZVdpZGdldCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdpZGdldDogY2MuV2lkZ2V0ID0gaXRlbS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICAgICAgICAgIGlmICh3aWRnZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnVwZGF0ZUFsaWdubWVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW0uc2V0U2libGluZ0luZGV4KHRoaXMuY29udGVudC5jaGlsZHJlbkNvdW50IC0gMSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbGlzdEl0ZW06IExpc3RJdGVtID0gaXRlbS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICBpdGVtWydsaXN0SXRlbSddID0gbGlzdEl0ZW07XHJcbiAgICAgICAgICAgIGlmIChsaXN0SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0ubGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgIGxpc3RJdGVtLmxpc3QgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0uX3JlZ2lzdGVyRXZlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0aGlzLnJlbmRlckV2ZW50XSwgaXRlbSwgZGF0YS5pZCAlIHRoaXMuX2FjdHVhbE51bUl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZm9yY2VVcGRhdGUgJiYgdGhpcy5yZW5kZXJFdmVudCkgeyAvL+W8uuWItuabtOaWsFxyXG4gICAgICAgICAgICBpdGVtLnNldFBvc2l0aW9uKGNjLnYyKGRhdGEueCwgZGF0YS55KSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc2V0SXRlbVNpemUoaXRlbSk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZygnQUREOjonLCBkYXRhLmlkLCBpdGVtKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVuZGVyRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdGhpcy5yZW5kZXJFdmVudF0sIGl0ZW0sIGRhdGEuaWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVzZXRJdGVtU2l6ZShpdGVtKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdXBkYXRlTGlzdEl0ZW0oaXRlbVsnbGlzdEl0ZW0nXSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xhc3REaXNwbGF5RGF0YS5pbmRleE9mKGRhdGEuaWQpIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sYXN0RGlzcGxheURhdGEucHVzaChkYXRhLmlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+WIm+W7uuaIluabtOaWsEl0ZW3vvIjpnZ7omZrmi5/liJfooajnlKjvvIlcclxuICAgIF9jcmVhdGVPclVwZGF0ZUl0ZW0yKGxpc3RJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGl0ZW06IGFueSA9IHRoaXMuY29udGVudC5jaGlsZHJlbltsaXN0SWRdO1xyXG4gICAgICAgIGxldCBsaXN0SXRlbTogTGlzdEl0ZW07XHJcbiAgICAgICAgaWYgKCFpdGVtKSB7IC8v5aaC5p6c5LiN5a2Y5ZyoXHJcbiAgICAgICAgICAgIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLl9pdGVtVG1wKTtcclxuICAgICAgICAgICAgaXRlbS5fbGlzdElkID0gbGlzdElkO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgIGxpc3RJdGVtID0gaXRlbS5nZXRDb21wb25lbnQoTGlzdEl0ZW0pO1xyXG4gICAgICAgICAgICBpdGVtWydsaXN0SXRlbSddID0gbGlzdEl0ZW07XHJcbiAgICAgICAgICAgIGlmIChsaXN0SXRlbSkge1xyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0ubGlzdElkID0gbGlzdElkO1xyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0ubGlzdCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICBsaXN0SXRlbS5fcmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlckV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBpdGVtLCBsaXN0SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9mb3JjZVVwZGF0ZSAmJiB0aGlzLnJlbmRlckV2ZW50KSB7IC8v5by65Yi25pu05pawXHJcbiAgICAgICAgICAgIGl0ZW0uX2xpc3RJZCA9IGxpc3RJZDtcclxuICAgICAgICAgICAgaWYgKGxpc3RJdGVtKVxyXG4gICAgICAgICAgICAgICAgbGlzdEl0ZW0ubGlzdElkID0gbGlzdElkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0aGlzLnJlbmRlckV2ZW50XSwgaXRlbSwgbGlzdElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91cGRhdGVMaXN0SXRlbShsaXN0SXRlbSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xhc3REaXNwbGF5RGF0YS5pbmRleE9mKGxpc3RJZCkgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3REaXNwbGF5RGF0YS5wdXNoKGxpc3RJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF91cGRhdGVMaXN0SXRlbShsaXN0SXRlbTogTGlzdEl0ZW0pIHtcclxuICAgICAgICBpZiAoIWxpc3RJdGVtKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRNb2RlID4gU2VsZWN0ZWRUeXBlLk5PTkUpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW06IGFueSA9IGxpc3RJdGVtLm5vZGU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RlZE1vZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgU2VsZWN0ZWRUeXBlLlNJTkdMRTpcclxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbS5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRJZCA9PSBpdGVtLl9saXN0SWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFNlbGVjdGVkVHlwZS5NVUxUOlxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtLnNlbGVjdGVkID0gdGhpcy5tdWx0U2VsZWN0ZWQuaW5kZXhPZihpdGVtLl9saXN0SWQpID49IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+S7heiZmuaLn+WIl+ihqOeUqFxyXG4gICAgX3Jlc2V0SXRlbVNpemUoaXRlbTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzaXplOiBudW1iZXI7XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1c3RvbVNpemUgJiYgdGhpcy5fY3VzdG9tU2l6ZVtpdGVtLl9saXN0SWRdKSB7XHJcbiAgICAgICAgICAgIHNpemUgPSB0aGlzLl9jdXN0b21TaXplW2l0ZW0uX2xpc3RJZF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2NvbExpbmVOdW0gPiAxKVxyXG4gICAgICAgICAgICAgICAgaXRlbS5zZXRDb250ZW50U2l6ZSh0aGlzLl9pdGVtU2l6ZSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHNpemUgPSB0aGlzLl9zaXplVHlwZSA/IHRoaXMuX2l0ZW1TaXplLmhlaWdodCA6IHRoaXMuX2l0ZW1TaXplLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2l6ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2l6ZVR5cGUpXHJcbiAgICAgICAgICAgICAgICBpdGVtLmhlaWdodCA9IHNpemU7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGl0ZW0ud2lkdGggPSBzaXplO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pu05pawSXRlbeS9jee9rlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8fE5vZGV9IGxpc3RJZE9ySXRlbVxyXG4gICAgICovXHJcbiAgICBfdXBkYXRlSXRlbVBvcyhsaXN0SWRPckl0ZW06IGFueSkge1xyXG4gICAgICAgIGxldCBpdGVtOiBhbnkgPSBpc05hTihsaXN0SWRPckl0ZW0pID8gbGlzdElkT3JJdGVtIDogdGhpcy5nZXRJdGVtQnlMaXN0SWQobGlzdElkT3JJdGVtKTtcclxuICAgICAgICBsZXQgcG9zOiBhbnkgPSB0aGlzLmdldEl0ZW1Qb3MoaXRlbS5fbGlzdElkKTtcclxuICAgICAgICBpdGVtLnNldFBvc2l0aW9uKHBvcy54LCBwb3MueSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuvue9ruWkmumAiVxyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJncyDlj6/ku6XmmK/ljZXkuKpsaXN0SWTvvIzkuZ/lj6/mmK/kuKpsaXN0SWTmlbDnu4RcclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gYm9vbCDlgLzvvIzlpoLmnpzkuLpudWxs55qE6K+d77yM5YiZ55u05o6l55SoYXJnc+imhuebllxyXG4gICAgICovXHJcbiAgICBzZXRNdWx0U2VsZWN0ZWQoYXJnczogYW55LCBib29sOiBib29sZWFuKSB7XHJcbiAgICAgICAgbGV0IHQ6IGFueSA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCF0LmNoZWNrSW5pdGVkKCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJncykpIHtcclxuICAgICAgICAgICAgYXJncyA9IFthcmdzXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvb2wgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0Lm11bHRTZWxlY3RlZCA9IGFyZ3M7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGxpc3RJZDogbnVtYmVyLCBzdWI6IG51bWJlcjtcclxuICAgICAgICAgICAgaWYgKGJvb2wpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IGFyZ3MubGVuZ3RoIC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0SWQgPSBhcmdzW25dO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YiA9IHQubXVsdFNlbGVjdGVkLmluZGV4T2YobGlzdElkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ViIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm11bHRTZWxlY3RlZC5wdXNoKGxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gYXJncy5sZW5ndGggLSAxOyBuID49IDA7IG4tLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJZCA9IGFyZ3Nbbl07XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViID0gdC5tdWx0U2VsZWN0ZWQuaW5kZXhPZihsaXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWIgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm11bHRTZWxlY3RlZC5zcGxpY2Uoc3ViLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdC5fZm9yY2VVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIHQuX29uU2Nyb2xsaW5nKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOaMh+WumueahEl0ZW1cclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyZ3Mg5Y2V5LiqbGlzdElk77yM5oiW6ICF5pWw57uEXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICB1cGRhdGVJdGVtKGFyZ3M6IGFueSkge1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVja0luaXRlZCgpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFyZ3MpKSB7XHJcbiAgICAgICAgICAgIGFyZ3MgPSBbYXJnc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IDAsIGxlbjogbnVtYmVyID0gYXJncy5sZW5ndGg7IG4gPCBsZW47IG4rKykge1xyXG4gICAgICAgICAgICBsZXQgbGlzdElkOiBudW1iZXIgPSBhcmdzW25dO1xyXG4gICAgICAgICAgICBsZXQgaXRlbTogYW55ID0gdGhpcy5nZXRJdGVtQnlMaXN0SWQobGlzdElkKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0pXHJcbiAgICAgICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHMoW3RoaXMucmVuZGVyRXZlbnRdLCBpdGVtLCBsaXN0SWQgJSB0aGlzLl9hY3R1YWxOdW1JdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDlhajpg6hcclxuICAgICAqL1xyXG4gICAgdXBkYXRlQWxsKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jaGVja0luaXRlZCgpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5udW1JdGVtcyA9IHRoaXMubnVtSXRlbXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOagueaNrkxpc3RJROiOt+WPlkl0ZW1cclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBsaXN0SWRcclxuICAgICAqIEByZXR1cm5zXHJcbiAgICAgKi9cclxuICAgIGdldEl0ZW1CeUxpc3RJZChsaXN0SWQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnRlbnQpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gdGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQgLSAxOyBuID49IDA7IG4tLSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW06IGFueSA9IHRoaXMuY29udGVudC5jaGlsZHJlbltuXTtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLl9saXN0SWQgPT0gbGlzdElkKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blnKjmmL7npLrljLrln5/lpJbnmoRJdGVtXHJcbiAgICAgKiBAcmV0dXJuc1xyXG4gICAgICovXHJcbiAgICBfZ2V0T3V0c2lkZUl0ZW0oKSB7XHJcbiAgICAgICAgbGV0IGl0ZW06IGFueTtcclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IHRoaXMuY29udGVudC5jaGlsZHJlbkNvdW50IC0gMTsgbiA+PSAwOyBuLS0pIHtcclxuICAgICAgICAgICAgaXRlbSA9IHRoaXMuY29udGVudC5jaGlsZHJlbltuXTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRpc3BsYXlEYXRhLmZpbmQoZCA9PiBkLmlkID09IGl0ZW0uX2xpc3RJZCkpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICAvL+WIoOmZpOaYvuekuuWMuuWfn+S7peWklueahEl0ZW1cclxuICAgIF9kZWxSZWR1bmRhbnRJdGVtKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl92aXJ0dWFsKSB7XHJcbiAgICAgICAgICAgIGxldCBhcnI6IGFueVtdID0gdGhpcy5fZ2V0T3V0c2lkZUl0ZW0oKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gYXJyLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTogYW55ID0gYXJyW25dO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3Njcm9sbEl0ZW0gJiYgaXRlbS5fbGlzdElkID09IHRoaXMuX3Njcm9sbEl0ZW0uX2xpc3RJZClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Bvb2wucHV0KGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbTogbnVtYmVyID0gdGhpcy5fbGFzdERpc3BsYXlEYXRhLmxlbmd0aCAtIDE7IG0gPj0gMDsgbS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xhc3REaXNwbGF5RGF0YVttXSA9PSBpdGVtLl9saXN0SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGFzdERpc3BsYXlEYXRhLnNwbGljZShtLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZygn5a2Y5YWlOjonLCBzdHIsICcgICAgcG9vbC5sZW5ndGggPScsIHRoaXMuX3Bvb2wubGVuZ3RoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQgPiB0aGlzLl9udW1JdGVtcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVsU2luZ2xlSXRlbSh0aGlzLmNvbnRlbnQuY2hpbGRyZW5bdGhpcy5jb250ZW50LmNoaWxkcmVuQ291bnQgLSAxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+WIoOmZpOWNleS4qkl0ZW1cclxuICAgIF9kZWxTaW5nbGVJdGVtKGl0ZW06IGFueSkge1xyXG4gICAgICAgIC8vIGNjLmxvZygnREVMOjonLCBpdGVtWydfbGlzdElkJ10sIGl0ZW0pO1xyXG4gICAgICAgIGl0ZW0ucmVtb3ZlRnJvbVBhcmVudCgpO1xyXG4gICAgICAgIGlmIChpdGVtLmRlc3Ryb3kpXHJcbiAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xyXG4gICAgICAgIGl0ZW0gPSBudWxsO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiAg5Yqo5pWI5Yig6ZmkSXRlbe+8iOatpOaWueazleWPqumAgueUqOS6juiZmuaLn+WIl+ihqO+8jOWNs192aXJ0dWFsPXRydWXvvIlcclxuICAgICAqICDkuIDlrpropoHlnKjlm57osIPlh73mlbDph4zph43mlrDorr7nva7mlrDnmoRudW1JdGVtc+i/m+ihjOWIt+aWsO+8jOavleern+acrExpc3TmmK/pnaDmlbDmja7pqbHliqjnmoTjgIJcclxuICAgICAqIEBwYXJhbSBsaXN0SWQgXHJcbiAgICAgKiBAcGFyYW0gY2FsbEZ1bmMg5Zue6LCDXHJcbiAgICAgKiBAcGFyYW0gYW5pVHlwZSBcclxuICAgICAqL1xyXG4gICAgYW5pRGVsSXRlbShsaXN0SWQ6IG51bWJlciwgY2FsbEZ1bmM6IEZ1bmN0aW9uLCBhbmlUeXBlOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKCF0LmNoZWNrSW5pdGVkKCkgfHwgdC5jeWNsaWMgfHwgIXQuX3ZpcnR1YWwpXHJcbiAgICAgICAgICAgIHJldHVybiBjYy5lcnJvcignVGhpcyBmdW5jdGlvbiBpcyBub3QgYWxsb3dlZCB0byBiZSBjYWxsZWQhJyk7XHJcblxyXG4gICAgICAgIGlmICh0Ll9hbmlEZWxSdW5pbmcpXHJcbiAgICAgICAgICAgIHJldHVybiBjYy53YXJuKCdQbGVhc2Ugd2FpdCBmb3IgdGhlIGN1cnJlbnQgZGVsZXRpb24gdG8gZmluaXNoIScpO1xyXG5cclxuICAgICAgICBsZXQgaXRlbTogYW55ID0gdC5nZXRJdGVtQnlMaXN0SWQobGlzdElkKTtcclxuICAgICAgICBsZXQgbGlzdEl0ZW06IExpc3RJdGVtO1xyXG4gICAgICAgIGlmICghaXRlbSkge1xyXG4gICAgICAgICAgICBjYWxsRnVuYyhsaXN0SWQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdEl0ZW0gPSBpdGVtLmdldENvbXBvbmVudChMaXN0SXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHQuX2FuaURlbFJ1bmluZyA9IHRydWU7XHJcbiAgICAgICAgbGV0IGN1ckxhc3RJZDogbnVtYmVyID0gdC5kaXNwbGF5RGF0YVt0LmRpc3BsYXlEYXRhLmxlbmd0aCAtIDFdLmlkO1xyXG4gICAgICAgIGxldCByZXNldFNlbGVjdGVkSWQ6IGJvb2xlYW4gPSBsaXN0SXRlbS5zZWxlY3RlZDtcclxuICAgICAgICBsaXN0SXRlbS5zaG93QW5pKGFuaVR5cGUsICgpID0+IHtcclxuICAgICAgICAgICAgLy/liKTmlq3mnInmsqHmnInkuIvkuIDkuKrvvIzlpoLmnpzmnInnmoTor53vvIzliJvlu7rnspfmnaVcclxuICAgICAgICAgICAgbGV0IG5ld0lkOiBudW1iZXI7XHJcbiAgICAgICAgICAgIGlmIChjdXJMYXN0SWQgPCB0Ll9udW1JdGVtcyAtIDIpIHtcclxuICAgICAgICAgICAgICAgIG5ld0lkID0gY3VyTGFzdElkICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobmV3SWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0RhdGE6IGFueSA9IHQuX2NhbGNJdGVtUG9zKG5ld0lkKTtcclxuICAgICAgICAgICAgICAgIHQuZGlzcGxheURhdGEucHVzaChuZXdEYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmICh0Ll92aXJ0dWFsKVxyXG4gICAgICAgICAgICAgICAgICAgIHQuX2NyZWF0ZU9yVXBkYXRlSXRlbShuZXdEYXRhKTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0Ll9jcmVhdGVPclVwZGF0ZUl0ZW0yKG5ld0lkKTtcclxuICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICB0Ll9udW1JdGVtcy0tO1xyXG4gICAgICAgICAgICBpZiAodC5zZWxlY3RlZE1vZGUgPT0gU2VsZWN0ZWRUeXBlLlNJTkdMRSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc2V0U2VsZWN0ZWRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuX3NlbGVjdGVkSWQgPSAtMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodC5fc2VsZWN0ZWRJZCAtIDEgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQuX3NlbGVjdGVkSWQtLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0LnNlbGVjdGVkTW9kZSA9PSBTZWxlY3RlZFR5cGUuTVVMVCAmJiB0Lm11bHRTZWxlY3RlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdWI6IG51bWJlciA9IHQubXVsdFNlbGVjdGVkLmluZGV4T2YobGlzdElkKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdWIgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHQubXVsdFNlbGVjdGVkLnNwbGljZShzdWIsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy/lpJrpgInnmoTmlbDmja7vvIzlnKjlhbblkI7nmoTlhajpg6jlh4/kuIBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG46IG51bWJlciA9IHQubXVsdFNlbGVjdGVkLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlkOiBudW1iZXIgPSB0Lm11bHRTZWxlY3RlZFtuXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPj0gbGlzdElkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm11bHRTZWxlY3RlZFtuXS0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0Ll9jdXN0b21TaXplKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodC5fY3VzdG9tU2l6ZVtsaXN0SWRdKVxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0Ll9jdXN0b21TaXplW2xpc3RJZF07XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3Q3VzdG9tU2l6ZTogYW55ID0ge307XHJcbiAgICAgICAgICAgICAgICBsZXQgc2l6ZTogbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaWQgaW4gdC5fY3VzdG9tU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemUgPSB0Ll9jdXN0b21TaXplW2lkXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaWROdW1iZXI6IG51bWJlciA9IHBhcnNlSW50KGlkKTtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDdXN0b21TaXplW2lkTnVtYmVyIC0gKGlkTnVtYmVyID49IGxpc3RJZCA/IDEgOiAwKV0gPSBzaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdC5fY3VzdG9tU2l6ZSA9IG5ld0N1c3RvbVNpemU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/lkI7pnaLnmoRJdGVt5ZCR5YmN5oC855qE5Yqo5pWIXHJcbiAgICAgICAgICAgIGxldCBzZWM6IG51bWJlciA9IC4yMzMzO1xyXG4gICAgICAgICAgICBsZXQgYWN0czogYW55W10sIGhhdmVDQjogYm9vbGVhbjtcclxuICAgICAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gbmV3SWQgIT0gbnVsbCA/IG5ld0lkIDogY3VyTGFzdElkOyBuID49IGxpc3RJZCArIDE7IG4tLSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHQuZ2V0SXRlbUJ5TGlzdElkKG4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zRGF0YTogYW55ID0gdC5fY2FsY0l0ZW1Qb3MobiAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdHMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLm1vdmVUbyhzZWMsIGNjLnYyKHBvc0RhdGEueCwgcG9zRGF0YS55KSksXHJcbiAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobiA8PSBsaXN0SWQgKyAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhdmVDQiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHMucHVzaChjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Ll9hbmlEZWxSdW5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxGdW5jKGxpc3RJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdHMubGVuZ3RoID4gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0cykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5ydW5BY3Rpb24oYWN0c1swXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFoYXZlQ0IpIHtcclxuICAgICAgICAgICAgICAgIHQuX2FuaURlbFJ1bmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2FsbEZ1bmMobGlzdElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRydWUpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmu5rliqjliLAuLlxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGxpc3RJZCDntKLlvJXvvIjlpoLmnpw8MO+8jOWImea7muWIsOmmluS4qkl0ZW3kvY3nva7vvIzlpoLmnpw+PV9udW1JdGVtc++8jOWImea7muWIsOacgOacq0l0ZW3kvY3nva7vvIlcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lSW5TZWNvbmQg5pe26Ze0XHJcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IOe0ouW8leebruagh+S9jee9ruWBj+enu++8jDAtMVxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvdmVyU3RyZXNzIOa7muWKqOWQjuaYr+WQpuW8uuiwg+ivpUl0ZW3vvIjov5nlj6rmmK/kuKrlrp7pqozlip/og73vvIlcclxuICAgICAqL1xyXG4gICAgc2Nyb2xsVG8obGlzdElkOiBudW1iZXIsIHRpbWVJblNlY29uZDogbnVtYmVyID0gLjUsIG9mZnNldDogbnVtYmVyID0gbnVsbCwgb3ZlclN0cmVzczogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IHQgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZChmYWxzZSkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyB0Ll9zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKCk7XHJcbiAgICAgICAgaWYgKHRpbWVJblNlY29uZCA9PSBudWxsKSAgIC8v6buY6K6kMC41XHJcbiAgICAgICAgICAgIHRpbWVJblNlY29uZCA9IC41O1xyXG4gICAgICAgIGVsc2UgaWYgKHRpbWVJblNlY29uZCA8IDApXHJcbiAgICAgICAgICAgIHRpbWVJblNlY29uZCA9IDA7XHJcbiAgICAgICAgaWYgKGxpc3RJZCA8IDApXHJcbiAgICAgICAgICAgIGxpc3RJZCA9IDA7XHJcbiAgICAgICAgZWxzZSBpZiAobGlzdElkID49IHQuX251bUl0ZW1zKVxyXG4gICAgICAgICAgICBsaXN0SWQgPSB0Ll9udW1JdGVtcyAtIDE7XHJcbiAgICAgICAgLy8g5Lul6Ziy6K6+572u5LqGbnVtSXRlbXPkuYvlkI5sYXlvdXTnmoTlsLrlr7jov5jmnKrmm7TmlrBcclxuICAgICAgICBpZiAoIXQuX3ZpcnR1YWwgJiYgdC5fbGF5b3V0ICYmIHQuX2xheW91dC5lbmFibGVkKVxyXG4gICAgICAgICAgICB0Ll9sYXlvdXQudXBkYXRlTGF5b3V0KCk7XHJcblxyXG4gICAgICAgIGxldCBwb3MgPSB0LmdldEl0ZW1Qb3MobGlzdElkKTtcclxuICAgICAgICBsZXQgdGFyZ2V0WDogbnVtYmVyLCB0YXJnZXRZOiBudW1iZXI7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodC5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6Ly/ljZXooYxIT1JJWk9OVEFM77yITEVGVF9UT19SSUdIVO+8ieOAgee9keagvFZFUlRJQ0FM77yITEVGVF9UT19SSUdIVO+8iVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0WCA9IHBvcy5sZWZ0O1xyXG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFggLT0gdC5ub2RlLndpZHRoICogb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFggLT0gdC5fbGVmdEdhcDtcclxuICAgICAgICAgICAgICAgIHBvcyA9IGNjLnYyKHRhcmdldFgsIDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRYID0gcG9zLnJpZ2h0IC0gdC5ub2RlLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9mZnNldCAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFggKz0gdC5ub2RlLndpZHRoICogb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFggKz0gdC5fcmlnaHRHYXA7XHJcbiAgICAgICAgICAgICAgICBwb3MgPSBjYy52Mih0YXJnZXRYICsgdC5jb250ZW50LndpZHRoLCAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0WSA9IHBvcy50b3A7XHJcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WSArPSB0Lm5vZGUuaGVpZ2h0ICogb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFkgKz0gdC5fdG9wR2FwO1xyXG4gICAgICAgICAgICAgICAgcG9zID0gY2MudjIoMCwgLXRhcmdldFkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDovL+WNleWIl1ZFUlRJQ0FM77yIQk9UVE9NX1RPX1RPUO+8ieOAgee9keagvEhPUklaT05UQUzvvIhCT1RUT01fVE9fVE9Q77yJXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRZID0gcG9zLmJvdHRvbSArIHQubm9kZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WSAtPSB0Lm5vZGUuaGVpZ2h0ICogb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFkgLT0gdC5fYm90dG9tR2FwO1xyXG4gICAgICAgICAgICAgICAgcG9zID0gY2MudjIoMCwgLXRhcmdldFkgKyB0LmNvbnRlbnQuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmlld1BvczogYW55ID0gdC5jb250ZW50LmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgdmlld1BvcyA9IE1hdGguYWJzKHQuX3NpemVUeXBlID8gdmlld1Bvcy55IDogdmlld1Bvcy54KTtcclxuXHJcbiAgICAgICAgbGV0IGNvbXBhcmVQb3MgPSB0Ll9zaXplVHlwZSA/IHBvcy55IDogcG9zLng7XHJcbiAgICAgICAgbGV0IHJ1blNjcm9sbCA9IE1hdGguYWJzKCh0Ll9zY3JvbGxQb3MgIT0gbnVsbCA/IHQuX3Njcm9sbFBvcyA6IHZpZXdQb3MpIC0gY29tcGFyZVBvcykgPiAuNTtcclxuICAgICAgICAvLyBjYy5sb2cocnVuU2Nyb2xsLCB0Ll9zY3JvbGxQb3MsIHZpZXdQb3MsIGNvbXBhcmVQb3MpXHJcblxyXG4gICAgICAgIC8vIHQuX3Njcm9sbFZpZXcuc3RvcEF1dG9TY3JvbGwoKTtcclxuICAgICAgICBpZiAocnVuU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgIHQuX3Njcm9sbFZpZXcuc2Nyb2xsVG9PZmZzZXQocG9zLCB0aW1lSW5TZWNvbmQpO1xyXG4gICAgICAgICAgICB0Ll9zY3JvbGxUb0xpc3RJZCA9IGxpc3RJZDtcclxuICAgICAgICAgICAgdC5fc2Nyb2xsVG9FbmRUaW1lID0gKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgLyAxMDAwKSArIHRpbWVJblNlY29uZDtcclxuICAgICAgICAgICAgLy8gY2MubG9nKGxpc3RJZCwgdC5jb250ZW50LndpZHRoLCB0LmNvbnRlbnQuZ2V0UG9zaXRpb24oKSwgcG9zKTtcclxuICAgICAgICAgICAgdC5fc2Nyb2xsVG9TbyA9IHQuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdC5fYWRoZXJpbmdCYXJyaWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdC5hZGhlcmluZyA9IHQuX2FkaGVyaW5nQmFycmllciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdC5fc2Nyb2xsUG9zID1cclxuICAgICAgICAgICAgICAgICAgICB0Ll9zY3JvbGxUb0xpc3RJZCA9XHJcbiAgICAgICAgICAgICAgICAgICAgdC5fc2Nyb2xsVG9FbmRUaW1lID1cclxuICAgICAgICAgICAgICAgICAgICB0Ll9zY3JvbGxUb1NvID1cclxuICAgICAgICAgICAgICAgICAgICBudWxsO1xyXG4gICAgICAgICAgICAgICAgLy9jYy5sb2coJzIyMjIyMjIyMjInLCB0Ll9hZGhlcmluZ0JhcnJpZXIpXHJcbiAgICAgICAgICAgICAgICBpZiAob3ZlclN0cmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHQuc2Nyb2xsVG9MaXN0SWQgPSBsaXN0SWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0LmdldEl0ZW1CeUxpc3RJZChsaXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbyguMSwgMS4wNSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKC4xLCAxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB0aW1lSW5TZWNvbmQgKyAuMSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGltZUluU2Vjb25kIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHQuX29uU2Nyb2xsaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOiuoeeul+W9k+WJjea7muWKqOeql+acgOi/keeahEl0ZW1cclxuICAgICAqL1xyXG4gICAgX2NhbGNOZWFyZXN0SXRlbSgpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBudWxsO1xyXG4gICAgICAgIGxldCBkYXRhOiBhbnksIGNlbnRlcjogbnVtYmVyO1xyXG5cclxuICAgICAgICBpZiAodC5fdmlydHVhbClcclxuICAgICAgICAgICAgdC5fY2FsY1ZpZXdQb3MoKTtcclxuXHJcbiAgICAgICAgbGV0IHZUb3A6IG51bWJlciwgdlJpZ2h0OiBudW1iZXIsIHZCb3R0b206IG51bWJlciwgdkxlZnQ6IG51bWJlcjtcclxuICAgICAgICB2VG9wID0gdC52aWV3VG9wO1xyXG4gICAgICAgIHZSaWdodCA9IHQudmlld1JpZ2h0O1xyXG4gICAgICAgIHZCb3R0b20gPSB0LnZpZXdCb3R0b207XHJcbiAgICAgICAgdkxlZnQgPSB0LnZpZXdMZWZ0O1xyXG5cclxuICAgICAgICBsZXQgYnJlYWtGb3I6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IHQuY29udGVudC5jaGlsZHJlbkNvdW50ICYmICFicmVha0ZvcjsgbiArPSB0Ll9jb2xMaW5lTnVtKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSB0Ll92aXJ0dWFsID8gdC5kaXNwbGF5RGF0YVtuXSA6IHQuX2NhbGNFeGlzdEl0ZW1Qb3Mobik7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjZW50ZXIgPSB0Ll9zaXplVHlwZSA/ICgoZGF0YS50b3AgKyBkYXRhLmJvdHRvbSkgLyAyKSA6IChjZW50ZXIgPSAoZGF0YS5sZWZ0ICsgZGF0YS5yaWdodCkgLyAyKTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAodC5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTovL+WNleihjEhPUklaT05UQUzvvIhMRUZUX1RPX1JJR0hU77yJ44CB572R5qC8VkVSVElDQUzvvIhMRUZUX1RPX1JJR0hU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnJpZ2h0ID49IHZMZWZ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZMZWZ0ID4gY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCArPSB0Ll9jb2xMaW5lTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjovL+WNleihjEhPUklaT05UQUzvvIhSSUdIVF9UT19MRUZU77yJ44CB572R5qC8VkVSVElDQUzvvIhSSUdIVF9UT19MRUZU77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlZnQgPD0gdlJpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZSaWdodCA8IGNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgKz0gdC5fY29sTGluZU51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrRm9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ib3R0b20gPD0gdlRvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2VG9wIDwgY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCArPSB0Ll9jb2xMaW5lTnVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtGb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDovL+WNleWIl1ZFUlRJQ0FM77yIQk9UVE9NX1RPX1RPUO+8ieOAgee9keagvEhPUklaT05UQUzvvIhCT1RUT01fVE9fVE9Q77yJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnRvcCA+PSB2Qm90dG9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZCb3R0b20gPiBjZW50ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5uZWFyZXN0TGlzdElkICs9IHQuX2NvbExpbmVOdW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha0ZvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mnIDlkI7kuIDkuKpJdGVt44CC44CC44CC77yI5ZOO77yM6L+Z5Lqb5Yik5pat55yf5b+D5oG25b+D77yM5Yik5pat5LqG5YmN6Z2i55qE6L+Y6KaB5Yik5pat5pyA5ZCO5LiA5Liq44CC44CC44CC5LiA5byA5aeL5ZGi77yM5bCx5Y+q5pyJ5LiA5Liq5biD5bGA77yI5Y2V5YiX5biD5bGA77yJ77yM6YKj5pe25YCZ5Luj56CB5omN5LiJ55m+6KGM77yM5ZCO5p2l5bCx5oOz552A5a6M5ZaE5ZWK77yM6Im5Li7ov5nlnZHnnJ/mt7HvvIznjrDlnKjov5nooYzmlbDpg73kuIDljYPkupTkuoY9ID18fO+8iVxyXG4gICAgICAgIGRhdGEgPSB0Ll92aXJ0dWFsID8gdC5kaXNwbGF5RGF0YVt0LmRpc3BsYXlJdGVtTnVtIC0gMV0gOiB0Ll9jYWxjRXhpc3RJdGVtUG9zKHQuX251bUl0ZW1zIC0gMSk7XHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5pZCA9PSB0Ll9udW1JdGVtcyAtIDEpIHtcclxuICAgICAgICAgICAgY2VudGVyID0gdC5fc2l6ZVR5cGUgPyAoKGRhdGEudG9wICsgZGF0YS5ib3R0b20pIC8gMikgOiAoY2VudGVyID0gKGRhdGEubGVmdCArIGRhdGEucmlnaHQpIC8gMik7XHJcbiAgICAgICAgICAgIHN3aXRjaCAodC5fYWxpZ25DYWxjVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iExFRlRfVE9fUklHSFTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iExFRlRfVE9fUklHSFTvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodlJpZ2h0ID4gY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAyOi8v5Y2V6KGMSE9SSVpPTlRBTO+8iFJJR0hUX1RPX0xFRlTvvInjgIHnvZHmoLxWRVJUSUNBTO+8iFJJR0hUX1RPX0xFRlTvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodkxlZnQgPCBjZW50ZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQubmVhcmVzdExpc3RJZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6Ly/ljZXliJdWRVJUSUNBTO+8iFRPUF9UT19CT1RUT03vvInjgIHnvZHmoLxIT1JJWk9OVEFM77yIVE9QX1RPX0JPVFRPTe+8iVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2Qm90dG9tIDwgY2VudGVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0Lm5lYXJlc3RMaXN0SWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0Oi8v5Y2V5YiXVkVSVElDQUzvvIhCT1RUT01fVE9fVE9Q77yJ44CB572R5qC8SE9SSVpPTlRBTO+8iEJPVFRPTV9UT19UT1DvvIlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodlRvcCA+IGNlbnRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5uZWFyZXN0TGlzdElkID0gZGF0YS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjYy5sb2coJ3QubmVhcmVzdExpc3RJZCA9JywgdC5uZWFyZXN0TGlzdElkKTtcclxuICAgIH1cclxuICAgIC8v5LiK5LiA6aG1XHJcbiAgICBwcmVQYWdlKHRpbWVJblNlY29uZDogbnVtYmVyID0gLjUpIHtcclxuICAgICAgICAvLyBjYy5sb2coJ/CfkYgnKTtcclxuICAgICAgICBpZiAoIXRoaXMuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2tpcFBhZ2UodGhpcy5jdXJQYWdlTnVtIC0gMSwgdGltZUluU2Vjb25kKTtcclxuICAgIH1cclxuICAgIC8v5LiL5LiA6aG1XHJcbiAgICBuZXh0UGFnZSh0aW1lSW5TZWNvbmQ6IG51bWJlciA9IC41KSB7XHJcbiAgICAgICAgLy8gY2MubG9nKCfwn5GJJyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrSW5pdGVkKCkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLnNraXBQYWdlKHRoaXMuY3VyUGFnZU51bSArIDEsIHRpbWVJblNlY29uZCk7XHJcbiAgICB9XHJcbiAgICAvL+i3s+i9rOWIsOesrOWHoOmhtVxyXG4gICAgc2tpcFBhZ2UocGFnZU51bTogbnVtYmVyLCB0aW1lSW5TZWNvbmQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0OiBhbnkgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdC5jaGVja0luaXRlZCgpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHQuX3NsaWRlTW9kZSAhPSBTbGlkZVR5cGUuUEFHRSlcclxuICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKCdUaGlzIGZ1bmN0aW9uIGlzIG5vdCBhbGxvd2VkIHRvIGJlIGNhbGxlZCwgTXVzdCBTbGlkZU1vZGUgPSBQQUdFIScpO1xyXG4gICAgICAgIGlmIChwYWdlTnVtIDwgMCB8fCBwYWdlTnVtID49IHQuX251bUl0ZW1zKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKHQuY3VyUGFnZU51bSA9PSBwYWdlTnVtKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gY2MubG9nKHBhZ2VOdW0pO1xyXG4gICAgICAgIHQuY3VyUGFnZU51bSA9IHBhZ2VOdW07XHJcbiAgICAgICAgaWYgKHQucGFnZUNoYW5nZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyhbdC5wYWdlQ2hhbmdlRXZlbnRdLCBwYWdlTnVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdC5zY3JvbGxUbyhwYWdlTnVtLCB0aW1lSW5TZWNvbmQpO1xyXG4gICAgfVxyXG4gICAgLy/orqHnrpcgQ3VzdG9tU2l6Ze+8iOi/meS4quWHveaVsOi/mOaYr+S/neeVmeWQp++8jOafkOS6m+e9leingeeahOaDheWGteeahOehrui/mOaYr+mcgOimgeaJi+WKqOiuoeeul2N1c3RvbVNpemXnmoTvvIlcclxuICAgIGNhbGNDdXN0b21TaXplKG51bUl0ZW1zOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdDogYW55ID0gdGhpcztcclxuICAgICAgICBpZiAoIXQuY2hlY2tJbml0ZWQoKSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICghdC5faXRlbVRtcClcclxuICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKCdVbnNldCB0ZW1wbGF0ZSBpdGVtIScpO1xyXG4gICAgICAgIGlmICghdC5yZW5kZXJFdmVudClcclxuICAgICAgICAgICAgcmV0dXJuIGNjLmVycm9yKCdVbnNldCBSZW5kZXItRXZlbnQhJyk7XHJcbiAgICAgICAgdC5fY3VzdG9tU2l6ZSA9IHt9O1xyXG4gICAgICAgIGxldCB0ZW1wOiBhbnkgPSBjYy5pbnN0YW50aWF0ZSh0Ll9pdGVtVG1wKTtcclxuICAgICAgICB0LmNvbnRlbnQuYWRkQ2hpbGQodGVtcCk7XHJcbiAgICAgICAgZm9yIChsZXQgbjogbnVtYmVyID0gMDsgbiA8IG51bUl0ZW1zOyBuKyspIHtcclxuICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKFt0LnJlbmRlckV2ZW50XSwgdGVtcCwgbik7XHJcbiAgICAgICAgICAgIGlmICh0ZW1wLmhlaWdodCAhPSB0Ll9pdGVtU2l6ZS5oZWlnaHQgfHwgdGVtcC53aWR0aCAhPSB0Ll9pdGVtU2l6ZS53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgdC5fY3VzdG9tU2l6ZVtuXSA9IHQuX3NpemVUeXBlID8gdGVtcC5oZWlnaHQgOiB0ZW1wLndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghT2JqZWN0LmtleXModC5fY3VzdG9tU2l6ZSkubGVuZ3RoKVxyXG4gICAgICAgICAgICB0Ll9jdXN0b21TaXplID0gbnVsbDtcclxuICAgICAgICB0ZW1wLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICBpZiAodGVtcC5kZXN0cm95KVxyXG4gICAgICAgICAgICB0ZW1wLmRlc3Ryb3koKTtcclxuICAgICAgICByZXR1cm4gdC5fY3VzdG9tU2l6ZTtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/pannels/PannelWheel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'caa92/5EVRJUYv/Vt+4iOgl', 'PannelWheel');
// scripts/pannels/PannelWheel.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var UICfg_1 = require("../cfg/UICfg");
var UIBase_1 = require("../ui/UIBase");
var UIUtils_1 = require("../ui/UIUtils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PannelWheel = /** @class */ (function (_super) {
    __extends(PannelWheel, _super);
    function PannelWheel() {
        var _this = _super.call(this) || this;
        _this.prizeFrameNode = null;
        _this.btnChou = null;
        _this.btnClose = null;
        _this.selectImg = [];
        _this.wheelIsRunning = false;
        _this.turnNumber = 0; // 转动格数
        _this.speed = 0; // 速度（多少帧跳一格）
        _this.currentFps = 0; // 与speed配合
        _this.turnId = 0; // 下发的要转到的坑位
        _this.hasWheelDraw = false; // 与turnId配合
        _this.getPrizeIndex = 0; // 当前选中坑位（实际坑位从1开始）    
        _this._uiName = UICfg_1.UICfg.PannelWheel.name;
        return _this;
    }
    PannelWheel.prototype.onLoad = function () {
        UIUtils_1.UIUtils.addClickEvent(this.btnChou.node, this.onClickChou, this);
        UIUtils_1.UIUtils.addClickEvent(this.btnClose.node, this.onCloseClick, this);
        this.maxPrizeIndex = this.prizeFrameNode.children.length;
    };
    PannelWheel.prototype.update = function (dt) {
        if (this.wheelIsRunning && (this.turnNumber > 0)) {
            this.currentFps++;
            if (this.currentFps >= this.speed) {
                // 转了一格
                this.turnNumber--;
                if (this.turnNumber <= 0) {
                    if (this.turnId >= 0) {
                        if (this.hasWheelDraw) {
                            this.wheelIsRunning = false;
                            this.hasWheelDraw = false;
                            this.openPrizeWin();
                        }
                        else {
                            this.hasWheelDraw = true;
                        }
                        this.turnNumber = this.maxPrizeIndex + (this.maxPrizeIndex - this.getPrizeIndex) + (this.getPrizeIndex + (this.turnId - this.getPrizeIndex));
                        if (this.turnNumber >= 16) {
                            this.turnNumber -= 8;
                        }
                    }
                }
                if (this.wheelIsRunning) {
                    // 转动效果
                    var child = this.prizeFrameNode.children[this.getPrizeIndex];
                    this.getPrizeIndex++;
                    if (this.getPrizeIndex >= this.maxPrizeIndex) {
                        this.getPrizeIndex = 0;
                    }
                    var childEnd = this.prizeFrameNode.children[this.getPrizeIndex];
                    if (child && childEnd) {
                        child.getComponent(cc.Sprite).spriteFrame = this.selectImg[0];
                        childEnd.getComponent(cc.Sprite).spriteFrame = this.selectImg[1];
                    }
                    // 调整速度
                    this.currentFps = 0;
                    if (this.hasWheelDraw) {
                        // this.speed++;
                        this.speed = Math.sqrt(Math.pow((this.speed + 1), 2) + 16);
                    }
                }
                else {
                    var child = this.prizeFrameNode.children[this.getPrizeIndex];
                    if (child) {
                        child.getComponent(cc.Sprite).spriteFrame = this.selectImg[1];
                    }
                }
            }
        }
    };
    PannelWheel.prototype.openPrizeWin = function () {
    };
    PannelWheel.prototype.onClickChou = function () {
        var self = this;
        this.turnId = Math.floor(Math.random() * 5);
        this.turnNumber = this.maxPrizeIndex * 2 - this.turnId;
        this.speed = 5;
        this.wheelIsRunning = true;
    };
    __decorate([
        property(cc.Node)
    ], PannelWheel.prototype, "prizeFrameNode", void 0);
    __decorate([
        property(cc.Button)
    ], PannelWheel.prototype, "btnChou", void 0);
    __decorate([
        property(cc.Button)
    ], PannelWheel.prototype, "btnClose", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], PannelWheel.prototype, "selectImg", void 0);
    PannelWheel = __decorate([
        ccclass
    ], PannelWheel);
    return PannelWheel;
}(UIBase_1.default));
exports.default = PannelWheel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGFubmVsc1xcUGFubmVsV2hlZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEYsc0NBQXFDO0FBQ3JDLHVDQUFrQztBQUNsQyx5Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQU07SUF3QjNDO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBeEJPLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBRy9CLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFHMUIsY0FBUSxHQUFjLElBQUksQ0FBQztRQUczQixlQUFTLEdBQXFCLEVBQUUsQ0FBQztRQUVqQyxvQkFBYyxHQUFHLEtBQUssQ0FBQztRQUV2QixnQkFBVSxHQUFHLENBQUMsQ0FBQyxDQUFBLE9BQU87UUFDdEIsV0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFBLGFBQWE7UUFDdkIsZ0JBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQSxXQUFXO1FBQzFCLFlBQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxZQUFZO1FBQ3ZCLGtCQUFZLEdBQUcsS0FBSyxDQUFDLENBQUEsWUFBWTtRQUNqQyxtQkFBYSxHQUFHLENBQUMsQ0FBQyxDQUFBLHVCQUF1QjtRQUs3QyxLQUFJLENBQUMsT0FBTyxHQUFHLGFBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDOztJQUMxQyxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNJLGlCQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsaUJBQU8s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LENBQUMsQ0FBQztvQkFDN0QsSUFBSSxLQUFLLEVBQUU7d0JBQ1AsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ2pFO2lCQUNKO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFTyxrQ0FBWSxHQUFwQjtJQUVBLENBQUM7SUFFTyxpQ0FBVyxHQUFuQjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2RCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQy9CLENBQUM7SUF2R0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1REFDcUI7SUFHdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDYztJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNlO0lBR25DO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7a0RBQ2dCO0lBWnhCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E4Ry9CO0lBQUQsa0JBQUM7Q0E5R0QsQUE4R0MsQ0E5R3dDLGdCQUFNLEdBOEc5QztrQkE5R29CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBVSUNmZyB9IGZyb20gXCIuLi9jZmcvVUlDZmdcIjtcclxuaW1wb3J0IFVJQmFzZSBmcm9tIFwiLi4vdWkvVUlCYXNlXCI7XHJcbmltcG9ydCB7IFVJVXRpbHMgfSBmcm9tIFwiLi4vdWkvVUlVdGlsc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbm5lbFdoZWVsIGV4dGVuZHMgVUlCYXNlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgcHJpemVGcmFtZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcml2YXRlIGJ0bkNob3U6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHByaXZhdGUgYnRuQ2xvc2U6IGNjLkJ1dHRvbiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgcHJpdmF0ZSBzZWxlY3RJbWc6IGNjLlNwcml0ZUZyYW1lW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIHdoZWVsSXNSdW5uaW5nID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG1heFByaXplSW5kZXg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdHVybk51bWJlciA9IDA7Ly8g6L2s5Yqo5qC85pWwXHJcbiAgICBwcml2YXRlIHNwZWVkID0gMDsvLyDpgJ/luqbvvIjlpJrlsJHluKfot7PkuIDmoLzvvIlcclxuICAgIHByaXZhdGUgY3VycmVudEZwcyA9IDA7Ly8g5LiOc3BlZWTphY3lkIhcclxuICAgIHByaXZhdGUgdHVybklkID0gMDsvLyDkuIvlj5HnmoTopoHovazliLDnmoTlnZHkvY1cclxuICAgIHByaXZhdGUgaGFzV2hlZWxEcmF3ID0gZmFsc2U7Ly8g5LiOdHVybklk6YWN5ZCIXHJcbiAgICBwcml2YXRlIGdldFByaXplSW5kZXggPSAwOy8vIOW9k+WJjemAieS4reWdkeS9je+8iOWunumZheWdkeS9jeS7jjHlvIDlp4vvvIkgICAgXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fdWlOYW1lID0gVUlDZmcuUGFubmVsV2hlZWwubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgVUlVdGlscy5hZGRDbGlja0V2ZW50KHRoaXMuYnRuQ2hvdS5ub2RlLCB0aGlzLm9uQ2xpY2tDaG91LCB0aGlzKTtcclxuICAgICAgICBVSVV0aWxzLmFkZENsaWNrRXZlbnQodGhpcy5idG5DbG9zZS5ub2RlLCB0aGlzLm9uQ2xvc2VDbGljaywgdGhpcyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLm1heFByaXplSW5kZXggPSB0aGlzLnByaXplRnJhbWVOb2RlLmNoaWxkcmVuLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy53aGVlbElzUnVubmluZyAmJiAodGhpcy50dXJuTnVtYmVyID4gMCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RnBzKys7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRGcHMgPj0gdGhpcy5zcGVlZCkge1xyXG4gICAgICAgICAgICAgICAgLy8g6L2s5LqG5LiA5qC8XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5OdW1iZXItLTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnR1cm5OdW1iZXIgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnR1cm5JZCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc1doZWVsRHJhdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aGVlbElzUnVubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNXaGVlbERyYXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlblByaXplV2luKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc1doZWVsRHJhdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJuTnVtYmVyID0gdGhpcy5tYXhQcml6ZUluZGV4ICsgKHRoaXMubWF4UHJpemVJbmRleCAtIHRoaXMuZ2V0UHJpemVJbmRleCkgKyAodGhpcy5nZXRQcml6ZUluZGV4ICsgKHRoaXMudHVybklkIC0gdGhpcy5nZXRQcml6ZUluZGV4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnR1cm5OdW1iZXIgPj0gMTYpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHVybk51bWJlciAtPSA4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLndoZWVsSXNSdW5uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6L2s5Yqo5pWI5p6cXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5wcml6ZUZyYW1lTm9kZS5jaGlsZHJlblt0aGlzLmdldFByaXplSW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFByaXplSW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRQcml6ZUluZGV4ID49IHRoaXMubWF4UHJpemVJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFByaXplSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkRW5kID0gdGhpcy5wcml6ZUZyYW1lTm9kZS5jaGlsZHJlblt0aGlzLmdldFByaXplSW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQgJiYgY2hpbGRFbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNlbGVjdEltZ1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRFbmQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNlbGVjdEltZ1sxXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6LCD5pW06YCf5bqmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RnBzID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNXaGVlbERyYXcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zcGVlZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gTWF0aC5zcXJ0KE1hdGgucG93KCh0aGlzLnNwZWVkICsgMSksIDIpICsgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IHRoaXMucHJpemVGcmFtZU5vZGUuY2hpbGRyZW5bdGhpcy5nZXRQcml6ZUluZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnNlbGVjdEltZ1sxXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvcGVuUHJpemVXaW4oKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja0Nob3UoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudHVybklkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSk7XHJcblxyXG4gICAgICAgIHRoaXMudHVybk51bWJlciA9IHRoaXMubWF4UHJpemVJbmRleCAqIDIgLSB0aGlzLnR1cm5JZDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gNTtcclxuXHJcbiAgICAgICAgdGhpcy53aGVlbElzUnVubmluZyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
