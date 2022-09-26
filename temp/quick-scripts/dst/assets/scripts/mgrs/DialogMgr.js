
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