
export interface UpdateScore {
    score: number
}

export interface UpdateTargetBallNum {
    ballNum: number
}

export interface ServerConfig {
    url: string
    data?: any
    method?: string
    timeout?: number
    header?: object
    onSuccess: Function
    onFail?: Function
    onComplete?: Function
}

// 存档小球数据
export interface LocalStorageBall {
    position: cc.Vec3, // 位置
    num: number, // 大小
    angle: number // 角度
    isColorBall: boolean
}


// 打点数据
/**
 * 红包
 */
export interface TrackMainProps {
    activity_state: string
}

/**
 * 关卡
 */
export interface TrackGameLevelProps {
    game_level: number,
    game_state: string,
    game_duration: number,
    fruit_id: number,
    fruit_count: number
}

/**
 * 红包
 */
export interface TrackRedPacketProps {
    redbag_state: string,
    redbag_name: string,
    click_button?: string
}

/**
 * 技能
 */
export interface TrackSkillProps {
    skill_name: string,
    skill_state: string
}

/**
 * 提现
 */
export interface TrackCashOutProps {
    activity_state: string,
    activity_state_value: number,
    withdraw_num?: number,
    withdraw_state?: string,
    withdraw_state_num?: number
}

/**
 * 每日提现
 */
 export interface TrackDailyCashOutProps {
    dailywithdraw_state: string,
    dailywithdraw_name: string
}

/**
 * 弹窗
 */
 export interface TrackPopupProps {
    popshow_state: string,
    popshow_title: string,
    pop_button_element?: string
}

/**
 * 引导
 */
export interface TrackGuideProps {
    guide_state: string
}

/**
 * 引导
 */
export interface TrackWeakGuideProps {
    weak_guide_state: string
}


/**
 * 主界面入口
 */
 export interface TrackEnterProps {
    enter_button_element: string,
    event_state: string
}

/**
 * 任务成就
 */
export interface TrackTaskAchievementProps {
    task_achievement_element: string,
    task_name?: string,
    achievement_name?: string,
    withdraw_state?: string
}


/**
 * 广告作弊记录
 */
export interface AntiCheatData {
    clickAd: boolean,
    closeAd: boolean,
    rewardSuccess: boolean
}

/**
 * 广告作弊
 * 1.微信登陆
 * 2.存钱罐领取
 * 3.点击打开提现界面
 * 4.红包领取
 * 5.红包获得界面关闭
 * 6.点击红包
 */
export interface TrackAntiProps {
    anti_brushing_name: string,
    anti_brushing_state: number
}