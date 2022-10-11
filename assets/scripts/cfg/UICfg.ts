import { UIZIndexCfg } from "./UIZIndexCfg";


export const UICfg = {
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
        zIndex: UIZIndexCfg.DEFAULT,
    },

    /**
     * 提示框1
     */
    'PannelTip1': {
        name: 'PannelTip1',
        preloadRes: [
            { url: 'common/pannels/PannelTip1', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelTip1',
        needWait: false,
        zIndex: UIZIndexCfg.REWARD,
    },


    /**
     * 提示框2
     */
    'PannelTip2': {
        name: 'PannelTip2',
        preloadRes: [
            { url: 'common/pannels/PannelTip2', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelTip2',
        needWait: false,
        zIndex: UIZIndexCfg.REWARD,
    },

    /**
     * 提示框4
     */
    'PannelTip4': {
        name: 'PannelTip4',
        preloadRes: [
            { url: 'common/pannels/PannelTip4', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelTip4',
        needWait: false,
        zIndex: UIZIndexCfg.REWARD,
    },

    /**
    * 个人信息
    */
    'PannelMySet': {
        name: 'PannelMySet',
        preloadRes: [
            { url: 'common/pannels/PannelMySet', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelMySet',
        needWait: false,
        zIndex: UIZIndexCfg.DEFAULT,
    },

    /**
     * 关于我们
     */
    'PannelAboutMy': {
        name: 'PannelAboutMy',
        preloadRes: [
            { url: 'common/pannels/PannelAboutMy', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelAboutMy',
        needWait: false,
        zIndex: UIZIndexCfg.DEFAULT,
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
        zIndex: UIZIndexCfg.DEFAULT,
    },

    /**
     * 提现记录
     */
    'PannelRecord': {
        name: 'PannelRecord',
        preloadRes: [
            { url: 'common/pannels/PannelRecord', type: cc.Prefab }
        ],
        ui: 'common/pannels/PannelRecord',
        needWait: false,
        zIndex: UIZIndexCfg.DEFAULT,
    },
}