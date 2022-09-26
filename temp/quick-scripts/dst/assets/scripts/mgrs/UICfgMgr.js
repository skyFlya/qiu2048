
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mgrs/UICfgMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWdyc1xcVUlDZmdNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtRQUlZLFVBQUssR0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBa0M5QyxDQUFDO0lBaENpQixvQkFBVyxHQUF6QjtRQUNJLElBQUksUUFBUSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDNUIsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFFYSx3QkFBZSxHQUE3QjtRQUNJLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUNwQixRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFTSx5QkFBTSxHQUFiLFVBQWMsSUFBWTtRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLHlCQUFNLEdBQWIsVUFBYyxJQUFZLEVBQUUsR0FBUTtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUMxQjthQUFNO1lBQ0gsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyQjtJQUNMLENBQUM7SUFFTSw0QkFBUyxHQUFoQixVQUFpQixHQUFRO1FBQ3JCLEtBQUssSUFBTSxHQUFHLElBQUksR0FBRyxFQUFFO1lBQ25CLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDN0I7U0FDSjtJQUNMLENBQUM7SUFuQ2Msa0JBQVMsR0FBYSxJQUFJLENBQUM7SUFvQzlDLGVBQUM7Q0F0Q0QsQUFzQ0MsSUFBQTtBQXRDWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVSUNmZ01nciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBVSUNmZ01nciA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfY2ZnczogT2JqZWN0ID0gY2MuanMuY3JlYXRlTWFwKCk7XHJcbiAgXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFVJQ2ZnTWdyIHtcclxuICAgICAgICBpZiAoVUlDZmdNZ3IuX2luc3RhbmNlID09IG51bGwpIHtcclxuICAgICAgICAgICAgVUlDZmdNZ3IuX2luc3RhbmNlID0gbmV3IFVJQ2ZnTWdyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBVSUNmZ01nci5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBkZXN0cm95SW5zdGFuY2UoKTp2b2lkIHtcclxuICAgICAgICBpZiAoVUlDZmdNZ3IuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFVJQ2ZnTWdyLl9pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDZmcobmFtZTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2Znc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQ2ZnKG5hbWU6IHN0cmluZywgY2ZnOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2NmZ3NbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fY2Znc1tuYW1lXSA9IGNmZztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coJ3Vp6YWN572u5bey5a2Y5ZyoJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0QnlDZmcoY2ZnOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjZmcpIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjZmcsIGtleSkpIHtcclxuICAgICAgICAgICAgICAgdGhpcy5hZGRDZmcoa2V5LCBjZmdba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=