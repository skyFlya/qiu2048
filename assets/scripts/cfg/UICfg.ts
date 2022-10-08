import { UIZIndexCfg } from "./UIZIndexCfg";


export const UICfg = {
    /**
     * 轉盤
     */
    'PannelWheel': {
        name: 'PannelWheel',
        preloadRes: [
            {url: 'common/pannels/PannelWheel', type: cc.Prefab}
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
            {url: 'common/pannels/PannelTip1', type: cc.Prefab}
        ],
        ui: 'common/pannels/PannelTip1',
        needWait: true,
        zIndex: UIZIndexCfg.DEFAULT,
    },
}