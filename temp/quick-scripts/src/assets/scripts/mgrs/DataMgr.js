"use strict";
cc._RF.push(module, '1c3d9+YNLZDxKSRdxDuvGPW', 'DataMgr');
// scripts/mgrs/DataMgr.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DataMgr = /** @class */ (function () {
    function DataMgr() {
    }
    DataMgr_1 = DataMgr;
    Object.defineProperty(DataMgr, "instance", {
        get: function () {
            if (this._instance) {
                return this._instance;
            }
            this._instance = new DataMgr_1();
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    DataMgr.prototype.init = function () {
        cc.assetManager.resources.load("json/fish", cc.JsonAsset, function (err, content) {
        });
    };
    var DataMgr_1;
    DataMgr = DataMgr_1 = __decorate([
        ccclass
    ], DataMgr);
    return DataMgr;
}());
exports.default = DataMgr;

cc._RF.pop();