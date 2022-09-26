import { TrackTaskAchievementProps, TrackCashOutProps, TrackDailyCashOutProps, TrackEnterProps, TrackGameLevelProps, TrackGuideProps, TrackMainProps, TrackPopupProps, TrackRedPacketProps, TrackSkillProps, TrackWeakGuideProps, TrackAntiProps } from "../misc/InterfaceDef";
import WebViewPlatform from "../platform/WebViewPlatform";

export class TrackMgr {

    private static _instance: TrackMgr = null;

    public static getInstance(): TrackMgr {
        if (TrackMgr._instance == null) {
            TrackMgr._instance = new TrackMgr();
        }
        return TrackMgr._instance;
    }

    public static destroyInstance():void {
        if (TrackMgr._instance) {
            TrackMgr._instance = null;
        }
    }

    public track(eventName: string, eventProps: any): void {
        WebViewPlatform.getInstance().track({
            eventName: eventName,
            props: eventProps
        });
    }


    public trackMain(eventProps: TrackMainProps): void {
        this.track('fruit_main', eventProps);
    }

    /**
     * 关卡
     * @param eventProps 
     */
    public trackGameLevel(eventProps: TrackGameLevelProps): void {
        this.track('game_pass', eventProps);
    }

    /**
     * 红包
     * @param eventProps 
     */
    public trackRedPakcet(eventProps: TrackRedPacketProps): void {
        this.track('redbag', eventProps);
    }

    /**
     * 技能
     * @param eventProps 
     */
    public trackSkill(eventProps: TrackSkillProps): void {
        this.track('SkillEvent', eventProps);
    }

    /**
     * 提现
     * @param eventProps 
     */
    public trackCashOut(eventProps: TrackCashOutProps): void {
        this.track('withdraw', eventProps);
    }

    /**
     * 每日提现
     * @param eventProps 
     */
    public trackDailyCashOut(eventProps: TrackDailyCashOutProps): void {
        this.track('dailyWithdraw', eventProps);
    }

    /**
     * 弹窗
     * @param eventProps 
     */
    public trackPopup(eventProps: TrackPopupProps): void {
        this.track('popshow', eventProps);
    }

    /**
     * 引导
     * @param eventProps 
     */
    public trackGuide(eventProps: TrackGuideProps): void {
        this.track('guide_main', eventProps);
    }

    /**
     * 弱引导
     * @param eventProps 
     */
     public trackWeakGuide(eventProps: TrackWeakGuideProps): void {
        this.track('weak_guide', eventProps);
    }


    /**
     * 主界面入口点击
     * @param eventProps 
     */
    public trackEnter(eventProps: TrackEnterProps): void {
        this.track('enterEvent', eventProps);
    }

    /**
     * 任务
     * @param eventProps 
     */
    public trackTaskAchievement(eventProps: TrackTaskAchievementProps): void {
        this.track('task_achievement', eventProps);
    }
}