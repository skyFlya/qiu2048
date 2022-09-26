"use strict";
cc._RF.push(module, 'fb0f9BI0TVEv6IEQe0/7Pik', 'UICfg');
// scripts/cfg/UICfg.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UICfg = void 0;
var UIZIndexCfg_1 = require("./UIZIndexCfg");
exports.UICfg = {
    /**
     * 玩法
     */
    'PannelAbout': {
        name: 'PannelAbout',
        preloadRes: [
            { url: 'common/pannels/PannelAbout', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelAbout',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    'PannelAdLoading': {
        name: 'PannelAdLoading',
        preloadRes: [
            { url: 'common/pannels/PannelAdLoading', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelAdLoading',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.AD_LOADING
    },
    /**
     * 提示框
     */
    'PannelAlert1': {
        name: 'PannelAlert1',
        preloadRes: [
            { url: 'common/pannels/PannelAlert1', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelAlert1',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 频繁点击
     */
    'PannelAlert2': {
        name: 'PannelAlert2',
        preloadRes: [
            { url: 'common/pannels/PannelAlert2', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelAlert2',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 提现
     */
    'PannelCashOut': {
        name: 'PannelCashOut',
        preloadRes: [
            { url: 'common/pannels/PannelCashOut', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelCashOut',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.CASHOUT,
    },
    /**
     * 限时合成奖励
     */
    'PannelCombineReward': {
        name: 'PannelCombineReward',
        preloadRes: [
            { url: 'common/pannels/PannelCombineReward', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelCombineReward',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 提现记录
     */
    'PannelCashOutRecord': {
        name: 'PannelCashOutRecord',
        preloadRes: [
            { url: 'common/pannels/PannelCashOutRecord', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelCashOutRecord',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.CASHOUT + 1,
    },
    /**
     * 提现成功弹窗
     */
    'PannelCashOutSuccess': {
        name: 'PannelCashOutSuccess',
        preloadRes: [
            { url: 'common/pannels/PannelCashOutSuccess', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelCashOutSuccess',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.CASHOUT + 2,
    },
    /**
     * 每日提现
     */
    'PannelDailyCashOut': {
        name: 'PannelDailyCashOut',
        preloadRes: [
            { url: 'common/pannels/PannelDailyCashOut', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelDailyCashOut',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 日常任務
     */
    'PannelDailyTask': {
        name: 'PannelDailyTask',
        preloadRes: [
            { url: 'common/pannels/PannelDailyTask', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelDailyTask',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT + 1,
    },
    /**
     * 游戲結束
     */
    'PannelGameOver': {
        name: 'PannelGameOver',
        preloadRes: [
            { url: 'game/pannels/PannelGameOver', type: cc.Prefab }
        ],
        ui: 'game/pannels/PannelGameOver',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * GM
     */
    'PannelGM': {
        name: 'PannelGM',
        preloadRes: [
            { url: 'common/pannels/PannelGM', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelGM',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 引导移动失败
     */
    'PannelGuideMoveFailed': {
        name: 'PannelGuideMoveFailed',
        preloadRes: [
            { url: 'common/pannels/PannelGuideMoveFailed', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelGuideMoveFailed',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 网络错误
     */
    'PannelNetworkError': {
        name: 'PannelNetworkError',
        preloadRes: [
            { url: 'common/pannels/PannelNetworkError', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelNetworkError',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.NETWORK_ERROR,
    },
    /**
     * 儲錢罐
     */
    'PannelPiggyBank': {
        name: 'PannelPiggyBank',
        preloadRes: [
            { url: 'common/pannels/PannelPiggyBank', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelPiggyBank',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 排行榜
     */
    'PannelRankList': {
        name: 'PannelRankList',
        preloadRes: [
            { url: 'common/pannels/PannelRankList', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelRankList',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 提现红包
     */
    'PannelRedPacketDailyCashOut': {
        name: 'PannelRedPacketDailyCashOut',
        preloadRes: [
            { url: 'common/pannels/PannelRedPacketDailyCashOut', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelRedPacketDailyCashOut',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.CASHOUT,
    },
    /**
     * 漂浮红包
     */
    'PannelRedPacketFloat': {
        name: 'PannelRedPacketFloat',
        preloadRes: [
            { url: 'common/pannels/PannelRedPacketFloat', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelRedPacketFloat',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 幸运红包
     */
    'PannelRedPacketLucky': {
        name: 'PannelRedPacketLucky',
        preloadRes: [
            { url: 'common/pannels/PannelRedPacketLucky', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelRedPacketLucky',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 新人奖励红包
     */
    'PannelRedPacketNew': {
        name: 'PannelRedPacketNew',
        preloadRes: [
            { url: 'common/pannels/PannelRedPacketNew', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelRedPacketNew',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 在线红包
     */
    'PannelRedPacketOnline': {
        name: 'PannelRedPacketOnline',
        preloadRes: [
            { url: 'common/pannels/PannelRedPacketOnline', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelRedPacketOnline',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 红包
     */
    'PannelRedPacketPassLevel': {
        name: 'PannelRedPacketPassLevel',
        preloadRes: [
            { url: 'common/pannels/PannelRedPacketPassLevel', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelRedPacketPassLevel',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 超级红包
     */
    'PannelRedPacketSuper': {
        name: 'PannelRedPacketSuper',
        preloadRes: [
            { url: 'common/pannels/PannelRedPacketSuper', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelRedPacketSuper',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 红包收取
     */
    'PannelReward': {
        name: 'PannelReward',
        preloadRes: [
            { url: 'common/pannels/PannelReward', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelReward',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.REWARD,
    },
    /**
     * 老虎机
     */
    'PannelSlotMachine': {
        name: 'PannelSlotMachine',
        preloadRes: [
            { url: 'common/pannels/PannelSlotMachine', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelSlotMachine',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 老虎机金币收下
     */
    'PannelSlotMachineCoinReceive': {
        name: 'PannelSlotMachineCoinReceive',
        preloadRes: [
            { url: 'common/pannels/PannelSlotMachineCoinReceive', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelSlotMachineCoinReceive',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 設置
     */
    'PannelSetting': {
        name: 'PannelSetting',
        preloadRes: [
            { url: 'common/pannels/PannelSetting', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelSetting',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 登錄
     */
    'PannelSignIn': {
        name: 'PannelSignIn',
        preloadRes: [
            { url: 'common/pannels/PannelSignIn', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelSignIn',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 任务成就
     */
    'PannelTask': {
        name: 'PannelTask',
        preloadRes: [
            { url: 'common/pannels/PannelTask', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelTask',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 警告
     */
    'PannelWarning': {
        name: 'PannelWarning',
        preloadRes: [
            { url: 'common/pannels/PannelWarning', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelWarning',
        needWait: false,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
    /**
     * 轉盤
     */
    'PannelWheel': {
        name: 'PannelWheel',
        preloadRes: [
            { url: 'common/pannels/PannelWheel', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelWheel',
        needWait: true,
        zIndex: UIZIndexCfg_1.UIZIndexCfg.DEFAULT,
    },
};

cc._RF.pop();