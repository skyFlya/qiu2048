"use strict";
cc._RF.push(module, '7442eTdvQ1Knq9B1cbS2TQi', 'Config');
// scripts/platform/Config.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
var Config;
(function (Config) {
    /**游戏版本 */
    Config.version = " 1.195";
    /**服务器配置项 */
    Config.serverUrlConfig = {
        /**开发服 */
        dev: "https://testapi.jidiandian.cn",
        /**测试服 */
        test: "https://testgame.quzhuanxiang.com",
        /**预正式服务器 */
        prerelease: "https://pregame.quzhuanxiang.com",
        /**正式服 */
        release: "https://game.yingzhongshare.com",
    };
    /**服务器地址 */
    Config.serverUrl = CC_DEBUG ? Config.serverUrlConfig.test : Config.serverUrlConfig.release;
    /**预览开发配置项 */
    Config.PHEAD = {
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
    };
})(Config = exports.Config || (exports.Config = {}));

cc._RF.pop();