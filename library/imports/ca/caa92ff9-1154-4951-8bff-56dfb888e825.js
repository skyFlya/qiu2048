"use strict";
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