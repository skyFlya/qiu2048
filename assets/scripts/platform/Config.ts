export interface pheadType {
    pversion,
    phoneid,
    /**产品号 */
    prdid,
    channel,
    ecpm: number,
    dpi: string,
    signatureD: string,
    /**安卓版本 默认1000开始 */
    cversion,
    /**测试分组 */
    eight_user_type,
    /**AB测试 */
    ab_user_type,
    apk_channel?//成语多多——小米渠道应对方法 pversion>=107才有
}

export namespace Config {
    /**游戏版本 */
    export let version = " 1.195";

    /**服务器配置项 */
    export let serverUrlConfig = {
        /**开发服 */
        dev: "https://testapi.jidiandian.cn",
        /**测试服 */
        test: "https://testgame.quzhuanxiang.com",
        /**预正式服务器 */
        prerelease: "https://pregame.quzhuanxiang.com",
        /**正式服 */
        release: "https://game.yingzhongshare.com",
    }

    /**服务器地址 */
    export let serverUrl = CC_DEBUG ? serverUrlConfig.test : serverUrlConfig.release;

    /**预览开发配置项 */
    export let PHEAD = {
        _ts: +new Date().getTime(),
        _appid: "1071201",
        _sign: "c034e764dfefd8d2af90b57eb037872d",
        _ch: "300010",
        _av: '1.0.0',
        _sv: "2.4.1.2-in",
        _imei: "imei1",
        _imei2: "imei2",
        _sk: "sk",
        _token: "ID2WgKCGaTgBrlHphd51O2HexnEl5aMM33SXmqOWDwQ=",
        dv: '1.0.0.0',        
    }
}

