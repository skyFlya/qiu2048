"use strict";
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