"use strict";
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