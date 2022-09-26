"use strict";
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