"use strict";
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