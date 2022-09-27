
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mgrs/DataMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWdyc1xcRGF0YU1nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQUE7SUFvQkEsQ0FBQztnQkFwQm9CLE9BQU87SUFHeEIsc0JBQVcsbUJBQVE7YUFBbkI7WUFDSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUN6QjtZQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxTQUFPLEVBQUUsQ0FBQztZQUMvQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFTSxzQkFBSSxHQUFYO1FBQ0ksRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBRyxFQUFFLE9BQU87UUFFdkUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztJQWhCZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQW9CM0I7SUFBRCxjQUFDO0NBcEJELEFBb0JDLElBQUE7a0JBcEJvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhTWdyIHtcclxuICAgIHN0YXRpYyBfaW5zdGFuY2U6IERhdGFNZ3I7XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgRGF0YU1ncigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdCgpIHtcclxuICAgICAgICBjYy5hc3NldE1hbmFnZXIucmVzb3VyY2VzLmxvYWQoXCJqc29uL2Zpc2hcIiwgY2MuSnNvbkFzc2V0LCAoZXJyLCBjb250ZW50KSA9PiB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==