
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