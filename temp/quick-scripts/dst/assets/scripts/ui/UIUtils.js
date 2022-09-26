
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/UIUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlcXFVJVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0NBQWlDO0FBQ2pDLHNEQUFxRDtBQUdyRDtJQUFBO0lBd0NBLENBQUM7SUF0Q0c7Ozs7OztPQU1HO0lBQ1cscUJBQWEsR0FBM0IsVUFBNEIsSUFBYSxFQUFFLElBQTZCLEVBQUUsTUFBVyxFQUFFLEtBQXFDO1FBQXJDLHNCQUFBLEVBQUEsUUFBZ0IsNkJBQWEsQ0FBQyxPQUFPO1FBQ3hILElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxPQUFNLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVSxFQUFFO1lBQzVDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO2dCQUNiLFNBQVM7Z0JBQ1QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO29CQUNYLElBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQzFCLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO3dCQUNsRCxJQUFJLGFBQWEsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsYUFBYSxDQUFDLElBQUksS0FBSyxHQUFHLElBQUksRUFBRTs0QkFDekUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDYixPQUFPO3lCQUNWO3dCQUNELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7cUJBQ3REO2lCQUNKO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN4QixTQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNaO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNXLHNCQUFjLEdBQTVCLFVBQTZCLElBQWE7UUFDdEMsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2RSxJQUFNLE1BQU0sR0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQXhDQSxBQXdDQyxJQUFBO0FBeENZLDBCQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwIH0gZnJvbSBcIi4uL2FwcC9BcHBcIjtcclxuaW1wb3J0IHsgUXVpY2tDbGlja0NmZyB9IGZyb20gXCIuLi9jZmcvUXVpY2tDbGlja0NmZ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBVSVV0aWxzIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOazqOWGjOaMiemSrueCueWHu+S6i+S7tlxyXG4gICAgICogQHBhcmFtIG5vZGUgXHJcbiAgICAgKiBAcGFyYW0gZnVuYyBcclxuICAgICAqIEBwYXJhbSB0YXJnZXQgXHJcbiAgICAgKiBAcGFyYW0gZGVsYXkgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgYWRkQ2xpY2tFdmVudChub2RlOiBjYy5Ob2RlLCBmdW5jOiAobm9kZTogY2MuTm9kZSkgPT4gdm9pZCwgdGFyZ2V0OiBhbnksIGRlbGF5OiBudW1iZXIgPSBRdWlja0NsaWNrQ2ZnLkRFRkFVTFQpOiB2b2lkIHtcclxuICAgICAgICBpZiAobm9kZSAmJiBmdW5jICYmIHR5cGVvZihmdW5jKSA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIG5vZGUub24oJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgICAgIC8vIOmYsuatoui/nue7reeCueWHu1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlbGF5ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlICYmIGNjLmlzVmFsaWQobm9kZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFzdENsaWNrVGltZSA9IG5vZGVbJ19fbGFzdF9jbGlja190aW1lX18nXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhc3RDbGlja1RpbWUgJiYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbGFzdENsaWNrVGltZSkgPD0gZGVsYXkgKiAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coJ+i/nueCuScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbJ19fbGFzdF9jbGlja190aW1lX18nXSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmMuY2FsbCh0YXJnZXQsIG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgQXBwLnNvdW5kTWdyLnBsYXlDbGlja1NvdW5kKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFqOWxj+e8qeaUvlxyXG4gICAgICogQHBhcmFtIG5vZGUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZnVsbFNjcmVlbk5vZGUobm9kZTogY2MuTm9kZSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWCA9IE1hdGgubWF4KDEsIGNjLndpblNpemUud2lkdGgpIC8gTWF0aC5tYXgoMSwgbm9kZS53aWR0aCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlWSA9ICBNYXRoLm1heCgxLCBjYy53aW5TaXplLmhlaWdodCkgLyBNYXRoLm1heCgxLCBub2RlLmhlaWdodCk7XHJcbiAgICAgICAgICAgIG5vZGUuc2NhbGUgPSBNYXRoLm1heChzY2FsZVgsIHNjYWxlWSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19