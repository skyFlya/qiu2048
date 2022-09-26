"use strict";
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