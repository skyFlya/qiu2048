"use strict";
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