
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/cfg/UICfg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2ZnXFxVSUNmZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFHL0IsUUFBQSxLQUFLLEdBQUc7SUFDakI7O09BRUc7SUFDSCxhQUFhLEVBQUU7UUFDWCxJQUFJLEVBQUUsYUFBYTtRQUNuQixVQUFVLEVBQUU7WUFDUixFQUFDLEdBQUcsRUFBRSw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBQztTQUN2RDtRQUNELEVBQUUsRUFBRSw0QkFBNEI7UUFDaEMsUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUseUJBQVcsQ0FBQyxPQUFPO0tBQzlCO0lBQ0QsaUJBQWlCLEVBQUU7UUFDZixJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLFVBQVUsRUFBRTtZQUNSLEVBQUMsR0FBRyxFQUFFLGdDQUFnQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFDO1NBQzNEO1FBQ0QsRUFBRSxFQUFFLGdDQUFnQztRQUNwQyxRQUFRLEVBQUUsS0FBSztRQUNmLE1BQU0sRUFBRSx5QkFBVyxDQUFDLFVBQVU7S0FDakM7SUFDRDs7T0FFRztJQUNILGNBQWMsRUFBRTtRQUNaLElBQUksRUFBRSxjQUFjO1FBQ3BCLFVBQVUsRUFBRTtZQUNSLEVBQUMsR0FBRyxFQUFFLDZCQUE2QixFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFDO1NBQ3hEO1FBQ0QsRUFBRSxFQUFFLDZCQUE2QjtRQUNqQyxRQUFRLEVBQUUsS0FBSztRQUNmLE1BQU0sRUFBRSx5QkFBVyxDQUFDLE9BQU87S0FDOUI7SUFDRDs7T0FFRztJQUNILGNBQWMsRUFBRTtRQUNaLElBQUksRUFBRSxjQUFjO1FBQ3BCLFVBQVUsRUFBRTtZQUNSLEVBQUMsR0FBRyxFQUFFLDZCQUE2QixFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFDO1NBQ3hEO1FBQ0QsRUFBRSxFQUFF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UUFDZixNQUFNLEVBQUUseUJBQVcsQ0FBQyxPQUFPO0tBQzlCO0lBRUQ7O09BRUc7SUFDSCxlQUFlLEVBQUU7UUFDYixJQUFJLEVBQUUsZUFBZTtRQUNyQixVQUFVLEVBQUU7WUFDUixFQUFDLEdBQUcsRUFBRSw4QkFBOEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBQztTQUN6RDtRQUNELEVBQUUsRUFBRSw4QkFBOEI7UUFDbEMsUUFBUSxFQUFFLEtBQUs7UUFDZixNQUFNLEVBQUUseUJBQVcsQ0FBQyxPQUFPO0tBQzlCO0lBQ0Q7O09BRUc7SUFDSCxhQUFhLEVBQUU7UUFDWCxJQUFJLEVBQUUsYUFBYTtRQUNuQixVQUFVLEVBQUU7WUFDUixFQUFDLEdBQUcsRUFBRSw0QkFBNEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBQztTQUN2RDtRQUNELEVBQUUsRUFBRSw0QkFBNEI7UUFDaEMsUUFBUSxFQUFFLElBQUk7UUFDZCxNQUFNLEVBQUUseUJBQVcsQ0FBQyxPQUFPO0tBQzlCO0NBQ0osQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJWkluZGV4Q2ZnIH0gZnJvbSBcIi4vVUlaSW5kZXhDZmdcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVUlDZmcgPSB7XHJcbiAgICAvKipcclxuICAgICAqIOeOqeazlVxyXG4gICAgICovXHJcbiAgICAnUGFubmVsQWJvdXQnOiB7XHJcbiAgICAgICAgbmFtZTogJ1Bhbm5lbEFib3V0JyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxBYm91dCcsIHR5cGU6IGNjLlByZWZhYn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVpOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsQWJvdXQnLFxyXG4gICAgICAgIG5lZWRXYWl0OiB0cnVlLFxyXG4gICAgICAgIHpJbmRleDogVUlaSW5kZXhDZmcuREVGQVVMVCxcclxuICAgIH0sXHJcbiAgICAnUGFubmVsQWRMb2FkaW5nJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxBZExvYWRpbmcnLFxyXG4gICAgICAgIHByZWxvYWRSZXM6IFtcclxuICAgICAgICAgICAge3VybDogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbEFkTG9hZGluZycsIHR5cGU6IGNjLlByZWZhYn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVpOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsQWRMb2FkaW5nJyxcclxuICAgICAgICBuZWVkV2FpdDogZmFsc2UsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5BRF9MT0FESU5HXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDmj5DnpLrmoYZcclxuICAgICAqL1xyXG4gICAgJ1Bhbm5lbEFsZXJ0MSc6IHtcclxuICAgICAgICBuYW1lOiAnUGFubmVsQWxlcnQxJyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxBbGVydDEnLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbEFsZXJ0MScsXHJcbiAgICAgICAgbmVlZFdhaXQ6IGZhbHNlLFxyXG4gICAgICAgIHpJbmRleDogVUlaSW5kZXhDZmcuREVGQVVMVCxcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOmikee5geeCueWHu1xyXG4gICAgICovXHJcbiAgICAnUGFubmVsQWxlcnQyJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxBbGVydDInLFxyXG4gICAgICAgIHByZWxvYWRSZXM6IFtcclxuICAgICAgICAgICAge3VybDogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbEFsZXJ0MicsIHR5cGU6IGNjLlByZWZhYn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVpOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsQWxlcnQyJyxcclxuICAgICAgICBuZWVkV2FpdDogZmFsc2UsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5o+Q546wXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxDYXNoT3V0Jzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxDYXNoT3V0JyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxDYXNoT3V0JywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxDYXNoT3V0JyxcclxuICAgICAgICBuZWVkV2FpdDogZmFsc2UsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5DQVNIT1VULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog6ZmQ5pe25ZCI5oiQ5aWW5YqxXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxDb21iaW5lUmV3YXJkJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxDb21iaW5lUmV3YXJkJyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxDb21iaW5lUmV3YXJkJywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxDb21iaW5lUmV3YXJkJyxcclxuICAgICAgICBuZWVkV2FpdDogZmFsc2UsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5o+Q546w6K6w5b2VXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxDYXNoT3V0UmVjb3JkJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxDYXNoT3V0UmVjb3JkJyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxDYXNoT3V0UmVjb3JkJywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxDYXNoT3V0UmVjb3JkJyxcclxuICAgICAgICBuZWVkV2FpdDogZmFsc2UsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5DQVNIT1VUICsgMSxcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOaPkOeOsOaIkOWKn+W8ueeql1xyXG4gICAgICovXHJcbiAgICAnUGFubmVsQ2FzaE91dFN1Y2Nlc3MnOiB7XHJcbiAgICAgICAgbmFtZTogJ1Bhbm5lbENhc2hPdXRTdWNjZXNzJyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxDYXNoT3V0U3VjY2VzcycsIHR5cGU6IGNjLlByZWZhYn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVpOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsQ2FzaE91dFN1Y2Nlc3MnLFxyXG4gICAgICAgIG5lZWRXYWl0OiBmYWxzZSxcclxuICAgICAgICB6SW5kZXg6IFVJWkluZGV4Q2ZnLkNBU0hPVVQgKyAyLFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5q+P5pel5o+Q546wXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxEYWlseUNhc2hPdXQnOiB7XHJcbiAgICAgICAgbmFtZTogJ1Bhbm5lbERhaWx5Q2FzaE91dCcsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsRGFpbHlDYXNoT3V0JywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxEYWlseUNhc2hPdXQnLFxyXG4gICAgICAgIG5lZWRXYWl0OiB0cnVlLFxyXG4gICAgICAgIHpJbmRleDogVUlaSW5kZXhDZmcuREVGQVVMVCxcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOaXpeW4uOS7u+WLmVxyXG4gICAgICovXHJcbiAgICAnUGFubmVsRGFpbHlUYXNrJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxEYWlseVRhc2snLFxyXG4gICAgICAgIHByZWxvYWRSZXM6IFtcclxuICAgICAgICAgICAge3VybDogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbERhaWx5VGFzaycsIHR5cGU6IGNjLlByZWZhYn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVpOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsRGFpbHlUYXNrJyxcclxuICAgICAgICBuZWVkV2FpdDogZmFsc2UsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxUICsgMSxcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOa4uOaIsue1kOadn1xyXG4gICAgICovXHJcbiAgICAnUGFubmVsR2FtZU92ZXInOiB7XHJcbiAgICAgICAgbmFtZTogJ1Bhbm5lbEdhbWVPdmVyJyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdnYW1lL3Bhbm5lbHMvUGFubmVsR2FtZU92ZXInLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2dhbWUvcGFubmVscy9QYW5uZWxHYW1lT3ZlcicsXHJcbiAgICAgICAgbmVlZFdhaXQ6IHRydWUsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogR01cclxuICAgICAqL1xyXG4gICAgJ1Bhbm5lbEdNJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxHTScsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsR00nLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbEdNJyxcclxuICAgICAgICBuZWVkV2FpdDogZmFsc2UsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5byV5a+856e75Yqo5aSx6LSlXHJcbiAgICAgKi9cclxuICAgICAnUGFubmVsR3VpZGVNb3ZlRmFpbGVkJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxHdWlkZU1vdmVGYWlsZWQnLFxyXG4gICAgICAgIHByZWxvYWRSZXM6IFtcclxuICAgICAgICAgICAge3VybDogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbEd1aWRlTW92ZUZhaWxlZCcsIHR5cGU6IGNjLlByZWZhYn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVpOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsR3VpZGVNb3ZlRmFpbGVkJyxcclxuICAgICAgICBuZWVkV2FpdDogZmFsc2UsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog572R57uc6ZSZ6K+vXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxOZXR3b3JrRXJyb3InOiB7XHJcbiAgICAgICAgbmFtZTogJ1Bhbm5lbE5ldHdvcmtFcnJvcicsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsTmV0d29ya0Vycm9yJywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxOZXR3b3JrRXJyb3InLFxyXG4gICAgICAgIG5lZWRXYWl0OiBmYWxzZSxcclxuICAgICAgICB6SW5kZXg6IFVJWkluZGV4Q2ZnLk5FVFdPUktfRVJST1IsXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDlhLLpjKLnvZBcclxuICAgICAqL1xyXG4gICAgJ1Bhbm5lbFBpZ2d5QmFuayc6IHtcclxuICAgICAgICBuYW1lOiAnUGFubmVsUGlnZ3lCYW5rJyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxQaWdneUJhbmsnLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFBpZ2d5QmFuaycsXHJcbiAgICAgICAgbmVlZFdhaXQ6IHRydWUsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5o6S6KGM5qacXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxSYW5rTGlzdCc6IHtcclxuICAgICAgICBuYW1lOiAnUGFubmVsUmFua0xpc3QnLFxyXG4gICAgICAgIHByZWxvYWRSZXM6IFtcclxuICAgICAgICAgICAge3VybDogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFJhbmtMaXN0JywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxSYW5rTGlzdCcsXHJcbiAgICAgICAgbmVlZFdhaXQ6IHRydWUsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5o+Q546w57qi5YyFXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxSZWRQYWNrZXREYWlseUNhc2hPdXQnOiB7XHJcbiAgICAgICAgbmFtZTogJ1Bhbm5lbFJlZFBhY2tldERhaWx5Q2FzaE91dCcsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsUmVkUGFja2V0RGFpbHlDYXNoT3V0JywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxSZWRQYWNrZXREYWlseUNhc2hPdXQnLFxyXG4gICAgICAgIG5lZWRXYWl0OiB0cnVlLFxyXG4gICAgICAgIHpJbmRleDogVUlaSW5kZXhDZmcuQ0FTSE9VVCxcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOa8gua1rue6ouWMhVxyXG4gICAgICovXHJcbiAgICAgJ1Bhbm5lbFJlZFBhY2tldEZsb2F0Jzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxSZWRQYWNrZXRGbG9hdCcsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsUmVkUGFja2V0RmxvYXQnLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFJlZFBhY2tldEZsb2F0JyxcclxuICAgICAgICBuZWVkV2FpdDogdHJ1ZSxcclxuICAgICAgICB6SW5kZXg6IFVJWkluZGV4Q2ZnLkRFRkFVTFQsXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDlubjov5DnuqLljIVcclxuICAgICAqL1xyXG4gICAgJ1Bhbm5lbFJlZFBhY2tldEx1Y2t5Jzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxSZWRQYWNrZXRMdWNreScsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsUmVkUGFja2V0THVja3knLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFJlZFBhY2tldEx1Y2t5JyxcclxuICAgICAgICBuZWVkV2FpdDogdHJ1ZSxcclxuICAgICAgICB6SW5kZXg6IFVJWkluZGV4Q2ZnLkRFRkFVTFQsXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDmlrDkurrlpZblirHnuqLljIVcclxuICAgICAqL1xyXG4gICAgJ1Bhbm5lbFJlZFBhY2tldE5ldyc6IHtcclxuICAgICAgICBuYW1lOiAnUGFubmVsUmVkUGFja2V0TmV3JyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxSZWRQYWNrZXROZXcnLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFJlZFBhY2tldE5ldycsXHJcbiAgICAgICAgbmVlZFdhaXQ6IHRydWUsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5Zyo57q/57qi5YyFXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxSZWRQYWNrZXRPbmxpbmUnOiB7XHJcbiAgICAgICAgbmFtZTogJ1Bhbm5lbFJlZFBhY2tldE9ubGluZScsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsUmVkUGFja2V0T25saW5lJywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxSZWRQYWNrZXRPbmxpbmUnLFxyXG4gICAgICAgIG5lZWRXYWl0OiB0cnVlLFxyXG4gICAgICAgIHpJbmRleDogVUlaSW5kZXhDZmcuREVGQVVMVCxcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOe6ouWMhVxyXG4gICAgICovXHJcbiAgICAnUGFubmVsUmVkUGFja2V0UGFzc0xldmVsJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxSZWRQYWNrZXRQYXNzTGV2ZWwnLFxyXG4gICAgICAgIHByZWxvYWRSZXM6IFtcclxuICAgICAgICAgICAge3VybDogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFJlZFBhY2tldFBhc3NMZXZlbCcsIHR5cGU6IGNjLlByZWZhYn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVpOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsUmVkUGFja2V0UGFzc0xldmVsJyxcclxuICAgICAgICBuZWVkV2FpdDogdHJ1ZSxcclxuICAgICAgICB6SW5kZXg6IFVJWkluZGV4Q2ZnLkRFRkFVTFQsXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDotoXnuqfnuqLljIVcclxuICAgICAqL1xyXG4gICAgJ1Bhbm5lbFJlZFBhY2tldFN1cGVyJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxSZWRQYWNrZXRTdXBlcicsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsUmVkUGFja2V0U3VwZXInLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFJlZFBhY2tldFN1cGVyJyxcclxuICAgICAgICBuZWVkV2FpdDogdHJ1ZSxcclxuICAgICAgICB6SW5kZXg6IFVJWkluZGV4Q2ZnLkRFRkFVTFQsXHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDnuqLljIXmlLblj5ZcclxuICAgICAqL1xyXG4gICAgJ1Bhbm5lbFJld2FyZCc6IHtcclxuICAgICAgICBuYW1lOiAnUGFubmVsUmV3YXJkJyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxSZXdhcmQnLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFJld2FyZCcsXHJcbiAgICAgICAgbmVlZFdhaXQ6IGZhbHNlLFxyXG4gICAgICAgIHpJbmRleDogVUlaSW5kZXhDZmcuUkVXQVJELFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog6ICB6JmO5py6XHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxTbG90TWFjaGluZSc6IHtcclxuICAgICAgICBuYW1lOiAnUGFubmVsU2xvdE1hY2hpbmUnLFxyXG4gICAgICAgIHByZWxvYWRSZXM6IFtcclxuICAgICAgICAgICAge3VybDogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFNsb3RNYWNoaW5lJywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxTbG90TWFjaGluZScsXHJcbiAgICAgICAgbmVlZFdhaXQ6IGZhbHNlLFxyXG4gICAgICAgIHpJbmRleDogVUlaSW5kZXhDZmcuREVGQVVMVCxcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOiAgeiZjuacuumHkeW4geaUtuS4i1xyXG4gICAgICovXHJcbiAgICAnUGFubmVsU2xvdE1hY2hpbmVDb2luUmVjZWl2ZSc6IHtcclxuICAgICAgICBuYW1lOiAnUGFubmVsU2xvdE1hY2hpbmVDb2luUmVjZWl2ZScsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsU2xvdE1hY2hpbmVDb2luUmVjZWl2ZScsIHR5cGU6IGNjLlByZWZhYn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVpOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsU2xvdE1hY2hpbmVDb2luUmVjZWl2ZScsXHJcbiAgICAgICAgbmVlZFdhaXQ6IGZhbHNlLFxyXG4gICAgICAgIHpJbmRleDogVUlaSW5kZXhDZmcuREVGQVVMVCxcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOioree9rlxyXG4gICAgICovXHJcbiAgICAnUGFubmVsU2V0dGluZyc6IHtcclxuICAgICAgICBuYW1lOiAnUGFubmVsU2V0dGluZycsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsU2V0dGluZycsIHR5cGU6IGNjLlByZWZhYn1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHVpOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsU2V0dGluZycsXHJcbiAgICAgICAgbmVlZFdhaXQ6IHRydWUsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog55m76YyEXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxTaWduSW4nOiB7XHJcbiAgICAgICAgbmFtZTogJ1Bhbm5lbFNpZ25JbicsXHJcbiAgICAgICAgcHJlbG9hZFJlczogW1xyXG4gICAgICAgICAgICB7dXJsOiAnY29tbW9uL3Bhbm5lbHMvUGFubmVsU2lnbkluJywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxTaWduSW4nLFxyXG4gICAgICAgIG5lZWRXYWl0OiB0cnVlLFxyXG4gICAgICAgIHpJbmRleDogVUlaSW5kZXhDZmcuREVGQVVMVCxcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDku7vliqHmiJDlsLFcclxuICAgICAqL1xyXG4gICAgJ1Bhbm5lbFRhc2snOiB7XHJcbiAgICAgICAgbmFtZTogJ1Bhbm5lbFRhc2snLFxyXG4gICAgICAgIHByZWxvYWRSZXM6IFtcclxuICAgICAgICAgICAge3VybDogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFRhc2snLCB0eXBlOiBjYy5QcmVmYWJ9XHJcbiAgICAgICAgXSxcclxuICAgICAgICB1aTogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFRhc2snLFxyXG4gICAgICAgIG5lZWRXYWl0OiBmYWxzZSxcclxuICAgICAgICB6SW5kZXg6IFVJWkluZGV4Q2ZnLkRFRkFVTFQsXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K2m5ZGKXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxXYXJuaW5nJzoge1xyXG4gICAgICAgIG5hbWU6ICdQYW5uZWxXYXJuaW5nJyxcclxuICAgICAgICBwcmVsb2FkUmVzOiBbXHJcbiAgICAgICAgICAgIHt1cmw6ICdjb21tb24vcGFubmVscy9QYW5uZWxXYXJuaW5nJywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxXYXJuaW5nJyxcclxuICAgICAgICBuZWVkV2FpdDogZmFsc2UsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog6L2J55ukXHJcbiAgICAgKi9cclxuICAgICdQYW5uZWxXaGVlbCc6IHtcclxuICAgICAgICBuYW1lOiAnUGFubmVsV2hlZWwnLFxyXG4gICAgICAgIHByZWxvYWRSZXM6IFtcclxuICAgICAgICAgICAge3VybDogJ2NvbW1vbi9wYW5uZWxzL1Bhbm5lbFdoZWVsJywgdHlwZTogY2MuUHJlZmFifVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdWk6ICdjb21tb24vcGFubmVscy9QYW5uZWxXaGVlbCcsXHJcbiAgICAgICAgbmVlZFdhaXQ6IHRydWUsXHJcbiAgICAgICAgekluZGV4OiBVSVpJbmRleENmZy5ERUZBVUxULFxyXG4gICAgfSxcclxufSJdfQ==