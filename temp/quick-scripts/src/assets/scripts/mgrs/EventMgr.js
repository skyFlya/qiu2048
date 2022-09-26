"use strict";
cc._RF.push(module, '193e91uAPlJ/5W9m/7yyJz+', 'EventMgr');
// scripts/mgrs/EventMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventMgr = void 0;
var EventMgr = /** @class */ (function () {
    function EventMgr() {
    }
    EventMgr.on = function (type, callback, target, useCapture) {
        cc.game.on(type, callback, target, useCapture);
    };
    EventMgr.off = function (type, callback, target) {
        cc.game.off(type, callback, target);
    };
    EventMgr.emit = function (key, arg1, arg2, arg3, arg4, arg5) {
        cc.game.emit(key, arg1, arg2, arg3, arg4, arg5);
    };
    EventMgr.hahasEventListeners = function (key) {
        return cc.game.hasEventListener(key);
    };
    EventMgr.once = function (type, callback, target) {
        cc.game.once(type, callback, target);
    };
    EventMgr.removeAll = function (keyOrTarget) {
        cc.game.removeAll(keyOrTarget);
    };
    EventMgr.targetOff = function (target) {
        cc.game.targetOff(target);
    };
    return EventMgr;
}());
exports.EventMgr = EventMgr;

cc._RF.pop();