
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mgrs/TrackMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8de10BJ/RdCR5qEhd1E6Ei3', 'TrackMgr');
// scripts/mgrs/TrackMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackMgr = void 0;
var WebViewPlatform_1 = require("../platform/WebViewPlatform");
var TrackMgr = /** @class */ (function () {
    function TrackMgr() {
    }
    TrackMgr.getInstance = function () {
        if (TrackMgr._instance == null) {
            TrackMgr._instance = new TrackMgr();
        }
        return TrackMgr._instance;
    };
    TrackMgr.destroyInstance = function () {
        if (TrackMgr._instance) {
            TrackMgr._instance = null;
        }
    };
    TrackMgr.prototype.track = function (eventName, eventProps) {
        WebViewPlatform_1.default.getInstance().track({
            eventName: eventName,
            props: eventProps
        });
    };
    TrackMgr.prototype.trackMain = function (eventProps) {
        this.track('fruit_main', eventProps);
    };
    /**
     * 关卡
     * @param eventProps
     */
    TrackMgr.prototype.trackGameLevel = function (eventProps) {
        this.track('game_pass', eventProps);
    };
    /**
     * 红包
     * @param eventProps
     */
    TrackMgr.prototype.trackRedPakcet = function (eventProps) {
        this.track('redbag', eventProps);
    };
    /**
     * 技能
     * @param eventProps
     */
    TrackMgr.prototype.trackSkill = function (eventProps) {
        this.track('SkillEvent', eventProps);
    };
    /**
     * 提现
     * @param eventProps
     */
    TrackMgr.prototype.trackCashOut = function (eventProps) {
        this.track('withdraw', eventProps);
    };
    /**
     * 每日提现
     * @param eventProps
     */
    TrackMgr.prototype.trackDailyCashOut = function (eventProps) {
        this.track('dailyWithdraw', eventProps);
    };
    /**
     * 弹窗
     * @param eventProps
     */
    TrackMgr.prototype.trackPopup = function (eventProps) {
        this.track('popshow', eventProps);
    };
    /**
     * 引导
     * @param eventProps
     */
    TrackMgr.prototype.trackGuide = function (eventProps) {
        this.track('guide_main', eventProps);
    };
    /**
     * 弱引导
     * @param eventProps
     */
    TrackMgr.prototype.trackWeakGuide = function (eventProps) {
        this.track('weak_guide', eventProps);
    };
    /**
     * 主界面入口点击
     * @param eventProps
     */
    TrackMgr.prototype.trackEnter = function (eventProps) {
        this.track('enterEvent', eventProps);
    };
    /**
     * 任务
     * @param eventProps
     */
    TrackMgr.prototype.trackTaskAchievement = function (eventProps) {
        this.track('task_achievement', eventProps);
    };
    TrackMgr._instance = null;
    return TrackMgr;
}());
exports.TrackMgr = TrackMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWdyc1xcVHJhY2tNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0RBQTBEO0FBRTFEO0lBQUE7SUE2R0EsQ0FBQztJQXpHaUIsb0JBQVcsR0FBekI7UUFDSSxJQUFJLFFBQVEsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQzVCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztTQUN2QztRQUNELE9BQU8sUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBRWEsd0JBQWUsR0FBN0I7UUFDSSxJQUFJLFFBQVEsQ0FBQyxTQUFTLEVBQUU7WUFDcEIsUUFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRU0sd0JBQUssR0FBWixVQUFhLFNBQWlCLEVBQUUsVUFBZTtRQUMzQyx5QkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNoQyxTQUFTLEVBQUUsU0FBUztZQUNwQixLQUFLLEVBQUUsVUFBVTtTQUNwQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBR00sNEJBQVMsR0FBaEIsVUFBaUIsVUFBMEI7UUFDdkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGlDQUFjLEdBQXJCLFVBQXNCLFVBQStCO1FBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxpQ0FBYyxHQUFyQixVQUFzQixVQUErQjtRQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNkJBQVUsR0FBakIsVUFBa0IsVUFBMkI7UUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLCtCQUFZLEdBQW5CLFVBQW9CLFVBQTZCO1FBQzdDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxvQ0FBaUIsR0FBeEIsVUFBeUIsVUFBa0M7UUFDdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDZCQUFVLEdBQWpCLFVBQWtCLFVBQTJCO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7O09BR0c7SUFDSSw2QkFBVSxHQUFqQixVQUFrQixVQUEyQjtRQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssaUNBQWMsR0FBckIsVUFBc0IsVUFBK0I7UUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUdEOzs7T0FHRztJQUNJLDZCQUFVLEdBQWpCLFVBQWtCLFVBQTJCO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7O09BR0c7SUFDSSx1Q0FBb0IsR0FBM0IsVUFBNEIsVUFBcUM7UUFDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBMUdjLGtCQUFTLEdBQWEsSUFBSSxDQUFDO0lBMkc5QyxlQUFDO0NBN0dELEFBNkdDLElBQUE7QUE3R1ksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFja1Rhc2tBY2hpZXZlbWVudFByb3BzLCBUcmFja0Nhc2hPdXRQcm9wcywgVHJhY2tEYWlseUNhc2hPdXRQcm9wcywgVHJhY2tFbnRlclByb3BzLCBUcmFja0dhbWVMZXZlbFByb3BzLCBUcmFja0d1aWRlUHJvcHMsIFRyYWNrTWFpblByb3BzLCBUcmFja1BvcHVwUHJvcHMsIFRyYWNrUmVkUGFja2V0UHJvcHMsIFRyYWNrU2tpbGxQcm9wcywgVHJhY2tXZWFrR3VpZGVQcm9wcywgVHJhY2tBbnRpUHJvcHMgfSBmcm9tIFwiLi4vbWlzYy9JbnRlcmZhY2VEZWZcIjtcclxuaW1wb3J0IFdlYlZpZXdQbGF0Zm9ybSBmcm9tIFwiLi4vcGxhdGZvcm0vV2ViVmlld1BsYXRmb3JtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhY2tNZ3Ige1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVHJhY2tNZ3IgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogVHJhY2tNZ3Ige1xyXG4gICAgICAgIGlmIChUcmFja01nci5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBUcmFja01nci5faW5zdGFuY2UgPSBuZXcgVHJhY2tNZ3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFRyYWNrTWdyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlc3Ryb3lJbnN0YW5jZSgpOnZvaWQge1xyXG4gICAgICAgIGlmIChUcmFja01nci5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgVHJhY2tNZ3IuX2luc3RhbmNlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyYWNrKGV2ZW50TmFtZTogc3RyaW5nLCBldmVudFByb3BzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBXZWJWaWV3UGxhdGZvcm0uZ2V0SW5zdGFuY2UoKS50cmFjayh7XHJcbiAgICAgICAgICAgIGV2ZW50TmFtZTogZXZlbnROYW1lLFxyXG4gICAgICAgICAgICBwcm9wczogZXZlbnRQcm9wc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgdHJhY2tNYWluKGV2ZW50UHJvcHM6IFRyYWNrTWFpblByb3BzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFjaygnZnJ1aXRfbWFpbicsIGV2ZW50UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YWz5Y2hXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRQcm9wcyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRyYWNrR2FtZUxldmVsKGV2ZW50UHJvcHM6IFRyYWNrR2FtZUxldmVsUHJvcHMpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRyYWNrKCdnYW1lX3Bhc3MnLCBldmVudFByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe6ouWMhVxyXG4gICAgICogQHBhcmFtIGV2ZW50UHJvcHMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFja1JlZFBha2NldChldmVudFByb3BzOiBUcmFja1JlZFBhY2tldFByb3BzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFjaygncmVkYmFnJywgZXZlbnRQcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmioDog71cclxuICAgICAqIEBwYXJhbSBldmVudFByb3BzIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdHJhY2tTa2lsbChldmVudFByb3BzOiBUcmFja1NraWxsUHJvcHMpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRyYWNrKCdTa2lsbEV2ZW50JywgZXZlbnRQcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmj5DnjrBcclxuICAgICAqIEBwYXJhbSBldmVudFByb3BzIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdHJhY2tDYXNoT3V0KGV2ZW50UHJvcHM6IFRyYWNrQ2FzaE91dFByb3BzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFjaygnd2l0aGRyYXcnLCBldmVudFByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOavj+aXpeaPkOeOsFxyXG4gICAgICogQHBhcmFtIGV2ZW50UHJvcHMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFja0RhaWx5Q2FzaE91dChldmVudFByb3BzOiBUcmFja0RhaWx5Q2FzaE91dFByb3BzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFjaygnZGFpbHlXaXRoZHJhdycsIGV2ZW50UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5by556qXXHJcbiAgICAgKiBAcGFyYW0gZXZlbnRQcm9wcyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRyYWNrUG9wdXAoZXZlbnRQcm9wczogVHJhY2tQb3B1cFByb3BzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFjaygncG9wc2hvdycsIGV2ZW50UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byV5a+8XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRQcm9wcyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRyYWNrR3VpZGUoZXZlbnRQcm9wczogVHJhY2tHdWlkZVByb3BzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFjaygnZ3VpZGVfbWFpbicsIGV2ZW50UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5byx5byV5a+8XHJcbiAgICAgKiBAcGFyYW0gZXZlbnRQcm9wcyBcclxuICAgICAqL1xyXG4gICAgIHB1YmxpYyB0cmFja1dlYWtHdWlkZShldmVudFByb3BzOiBUcmFja1dlYWtHdWlkZVByb3BzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFjaygnd2Vha19ndWlkZScsIGV2ZW50UHJvcHMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4u+eVjOmdouWFpeWPo+eCueWHu1xyXG4gICAgICogQHBhcmFtIGV2ZW50UHJvcHMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFja0VudGVyKGV2ZW50UHJvcHM6IFRyYWNrRW50ZXJQcm9wcyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHJhY2soJ2VudGVyRXZlbnQnLCBldmVudFByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS7u+WKoVxyXG4gICAgICogQHBhcmFtIGV2ZW50UHJvcHMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFja1Rhc2tBY2hpZXZlbWVudChldmVudFByb3BzOiBUcmFja1Rhc2tBY2hpZXZlbWVudFByb3BzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFjaygndGFza19hY2hpZXZlbWVudCcsIGV2ZW50UHJvcHMpO1xyXG4gICAgfVxyXG59Il19