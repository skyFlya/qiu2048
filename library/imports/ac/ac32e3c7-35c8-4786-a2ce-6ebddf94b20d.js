"use strict";
cc._RF.push(module, 'ac32ePHNchHhqLObr3flLIN', 'UIUtils');
// scripts/ui/UIUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIUtils = void 0;
var App_1 = require("../app/App");
var QuickClickCfg_1 = require("../cfg/QuickClickCfg");
var UIUtils = /** @class */ (function () {
    function UIUtils() {
    }
    /**
     * 注册按钮点击事件
     * @param node
     * @param func
     * @param target
     * @param delay
     */
    UIUtils.addClickEvent = function (node, func, target, delay) {
        if (delay === void 0) { delay = QuickClickCfg_1.QuickClickCfg.DEFAULT; }
        if (node && func && typeof (func) == 'function') {
            node.on('click', function () {
                // 防止连续点击
                if (delay > 0) {
                    if (node && cc.isValid(node)) {
                        var lastClickTime = node['__last_click_time__'];
                        if (lastClickTime && (new Date().getTime() - lastClickTime) <= delay * 1000) {
                            cc.log('连点');
                            return;
                        }
                        node['__last_click_time__'] = new Date().getTime();
                    }
                }
                func.call(target, node);
                App_1.App.soundMgr.playClickSound();
            }, this);
        }
    };
    /**
     * 全屏缩放
     * @param node
     */
    UIUtils.fullScreenNode = function (node) {
        if (node) {
            var scaleX = Math.max(1, cc.winSize.width) / Math.max(1, node.width);
            var scaleY = Math.max(1, cc.winSize.height) / Math.max(1, node.height);
            node.scale = Math.max(scaleX, scaleY);
        }
    };
    return UIUtils;
}());
exports.UIUtils = UIUtils;

cc._RF.pop();