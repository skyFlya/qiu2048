
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/app/App.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b5feqC8mpNtKLmPnOxYS4c', 'App');
// scripts/app/App.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var DialogMgr_1 = require("../mgrs/DialogMgr");
var SoundMgr_1 = require("../mgrs/SoundMgr");
var UICfgMgr_1 = require("../mgrs/UICfgMgr");
var UIMgr_1 = require("../mgrs/UIMgr");
var App = /** @class */ (function () {
    function App() {
    }
    Object.defineProperty(App, "uiMgr", {
        get: function () {
            return UIMgr_1.UIMgr.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(App, "uiCfgMgr", {
        get: function () {
            return UICfgMgr_1.UICfgMgr.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(App, "soundMgr", {
        get: function () {
            return SoundMgr_1.SoundMgr.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(App, "dialogMgr", {
        get: function () {
            return DialogMgr_1.DialogMgr.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    return App;
}());
exports.App = App;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYXBwXFxBcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBQzlDLDZDQUE0QztBQUM1Qyw2Q0FBNEM7QUFDNUMsdUNBQXNDO0FBR3RDO0lBQUE7SUFrQkEsQ0FBQztJQWhCRyxzQkFBa0IsWUFBSzthQUF2QjtZQUNJLE9BQU8sYUFBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBRUQsc0JBQWtCLGVBQVE7YUFBMUI7WUFDSSxPQUFPLG1CQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFHRCxzQkFBa0IsZUFBUTthQUExQjtZQUNJLE9BQU8sbUJBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFrQixnQkFBUzthQUEzQjtZQUNJLE9BQU8scUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUNMLFVBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLGtCQUFHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlhbG9nTWdyIH0gZnJvbSBcIi4uL21ncnMvRGlhbG9nTWdyXCI7XHJcbmltcG9ydCB7IFNvdW5kTWdyIH0gZnJvbSBcIi4uL21ncnMvU291bmRNZ3JcIjtcclxuaW1wb3J0IHsgVUlDZmdNZ3IgfSBmcm9tIFwiLi4vbWdycy9VSUNmZ01nclwiO1xyXG5pbXBvcnQgeyBVSU1nciB9IGZyb20gXCIuLi9tZ3JzL1VJTWdyXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgdWlNZ3IoKTogVUlNZ3Ige1xyXG4gICAgICAgIHJldHVybiBVSU1nci5nZXRJbnN0YW5jZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IHVpQ2ZnTWdyKCk6IFVJQ2ZnTWdyIHtcclxuICAgICAgICByZXR1cm4gVUlDZmdNZ3IuZ2V0SW5zdGFuY2UoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgc291bmRNZ3IoKTogU291bmRNZ3Ige1xyXG4gICAgICAgIHJldHVybiBTb3VuZE1nci5nZXRJbnN0YW5jZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGRpYWxvZ01ncigpOiBEaWFsb2dNZ3Ige1xyXG4gICAgICAgIHJldHVybiBEaWFsb2dNZ3IuZ2V0SW5zdGFuY2UoKTtcclxuICAgIH1cclxufSJdfQ==