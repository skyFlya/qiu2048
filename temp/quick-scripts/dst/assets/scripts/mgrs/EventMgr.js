
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mgrs/EventMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWdyc1xcRXZlbnRNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFBQTtJQTZCQSxDQUFDO0lBM0JpQixXQUFFLEdBQWhCLFVBQWlCLElBQVksRUFBRSxRQUFrQixFQUFFLE1BQVksRUFBRSxVQUFvQjtRQUNqRixFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRWEsWUFBRyxHQUFqQixVQUFrQixJQUFZLEVBQUUsUUFBa0IsRUFBRSxNQUFZO1FBQzVELEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVhLGFBQUksR0FBbEIsVUFBbUIsR0FBVyxFQUFFLElBQVUsRUFBRSxJQUFVLEVBQUUsSUFBVSxFQUFFLElBQVUsRUFBRSxJQUFVO1FBQ3RGLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVhLDRCQUFtQixHQUFqQyxVQUFrQyxHQUFXO1FBQ3pDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRWEsYUFBSSxHQUFsQixVQUFtQixJQUFZLEVBQUUsUUFBNkUsRUFBRSxNQUFZO1FBQ3hILEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVhLGtCQUFTLEdBQXZCLFVBQXdCLFdBQWdCO1FBQ3BDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFYSxrQkFBUyxHQUF2QixVQUF3QixNQUFXO1FBQy9CLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0E3QkEsQUE2QkMsSUFBQTtBQTdCWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgRXZlbnRNZ3Ige1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgb24odHlwZTogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24sIHRhcmdldD86IGFueSwgdXNlQ2FwdHVyZT86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBjYy5nYW1lLm9uKHR5cGUsIGNhbGxiYWNrLCB0YXJnZXQsIHVzZUNhcHR1cmUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgb2ZmKHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjYy5nYW1lLm9mZih0eXBlLCBjYWxsYmFjaywgdGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGVtaXQoa2V5OiBzdHJpbmcsIGFyZzE/OiBhbnksIGFyZzI/OiBhbnksIGFyZzM/OiBhbnksIGFyZzQ/OiBhbnksIGFyZzU/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjYy5nYW1lLmVtaXQoa2V5LCBhcmcxLCBhcmcyLCBhcmczLCBhcmc0LCBhcmc1KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGhhaGFzRXZlbnRMaXN0ZW5lcnMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gY2MuZ2FtZS5oYXNFdmVudExpc3RlbmVyKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBvbmNlKHR5cGU6IHN0cmluZywgY2FsbGJhY2s6IChhcmcxPzogYW55LCBhcmcyPzogYW55LCBhcmczPzogYW55LCBhcmc0PzogYW55LCBhcmc1PzogYW55KT0+IHZvaWQsIHRhcmdldD86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNjLmdhbWUub25jZSh0eXBlLCBjYWxsYmFjaywgdGFyZ2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHJlbW92ZUFsbChrZXlPclRhcmdldDogYW55KTp2b2lkIHtcclxuICAgICAgICBjYy5nYW1lLnJlbW92ZUFsbChrZXlPclRhcmdldCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyB0YXJnZXRPZmYodGFyZ2V0OiBhbnkpOnZvaWQge1xyXG4gICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRhcmdldCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==