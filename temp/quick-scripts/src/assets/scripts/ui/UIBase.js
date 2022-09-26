"use strict";
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