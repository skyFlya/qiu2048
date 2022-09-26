
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