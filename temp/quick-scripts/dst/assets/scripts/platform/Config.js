
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/platform/Config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxhdGZvcm1cXENvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsSUFBaUIsTUFBTSxDQWlDdEI7QUFqQ0QsV0FBaUIsTUFBTTtJQUNuQixVQUFVO0lBQ0MsY0FBTyxHQUFHLFFBQVEsQ0FBQztJQUU5QixZQUFZO0lBQ0Qsc0JBQWUsR0FBRztRQUN6QixTQUFTO1FBQ1QsR0FBRyxFQUFFLCtCQUErQjtRQUNwQyxTQUFTO1FBQ1QsSUFBSSxFQUFFLG1DQUFtQztRQUN6QyxZQUFZO1FBQ1osVUFBVSxFQUFFLGtDQUFrQztRQUM5QyxTQUFTO1FBQ1QsT0FBTyxFQUFFLGlDQUFpQztLQUM3QyxDQUFBO0lBRUQsV0FBVztJQUNBLGdCQUFTLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFBLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQUEsZUFBZSxDQUFDLE9BQU8sQ0FBQztJQUVqRixhQUFhO0lBQ0YsWUFBSyxHQUFHO1FBQ2YsR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7UUFDMUIsTUFBTSxFQUFFLFNBQVM7UUFDakIsS0FBSyxFQUFFLGtDQUFrQztRQUN6QyxHQUFHLEVBQUUsUUFBUTtRQUNiLEdBQUcsRUFBRSxPQUFPO1FBQ1osR0FBRyxFQUFFLFlBQVk7UUFDakIsS0FBSyxFQUFFLE9BQU87UUFDZCxNQUFNLEVBQUUsT0FBTztRQUNmLEdBQUcsRUFBRSxJQUFJO1FBQ1QsTUFBTSxFQUFFLDhDQUE4QztRQUN0RCxFQUFFLEVBQUUsU0FBUztLQUNoQixDQUFBO0FBQ0wsQ0FBQyxFQWpDZ0IsTUFBTSxHQUFOLGNBQU0sS0FBTixjQUFNLFFBaUN0QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgcGhlYWRUeXBlIHtcclxuICAgIHB2ZXJzaW9uLFxyXG4gICAgcGhvbmVpZCxcclxuICAgIC8qKuS6p+WTgeWPtyAqL1xyXG4gICAgcHJkaWQsXHJcbiAgICBjaGFubmVsLFxyXG4gICAgZWNwbTogbnVtYmVyLFxyXG4gICAgZHBpOiBzdHJpbmcsXHJcbiAgICBzaWduYXR1cmVEOiBzdHJpbmcsXHJcbiAgICAvKirlronljZPniYjmnKwg6buY6K6kMTAwMOW8gOWniyAqL1xyXG4gICAgY3ZlcnNpb24sXHJcbiAgICAvKirmtYvor5XliIbnu4QgKi9cclxuICAgIGVpZ2h0X3VzZXJfdHlwZSxcclxuICAgIC8qKkFC5rWL6K+VICovXHJcbiAgICBhYl91c2VyX3R5cGUsXHJcbiAgICBhcGtfY2hhbm5lbD8vL+aIkOivreWkmuWkmuKAlOKAlOWwj+exs+a4oOmBk+W6lOWvueaWueazlSBwdmVyc2lvbj49MTA35omN5pyJXHJcbn1cclxuXHJcbmV4cG9ydCBuYW1lc3BhY2UgQ29uZmlnIHtcclxuICAgIC8qKua4uOaIj+eJiOacrCAqL1xyXG4gICAgZXhwb3J0IGxldCB2ZXJzaW9uID0gXCIgMS4xOTVcIjtcclxuXHJcbiAgICAvKirmnI3liqHlmajphY3nva7pobkgKi9cclxuICAgIGV4cG9ydCBsZXQgc2VydmVyVXJsQ29uZmlnID0ge1xyXG4gICAgICAgIC8qKuW8gOWPkeacjSAqL1xyXG4gICAgICAgIGRldjogXCJodHRwczovL3Rlc3RhcGkuamlkaWFuZGlhbi5jblwiLFxyXG4gICAgICAgIC8qKua1i+ivleacjSAqL1xyXG4gICAgICAgIHRlc3Q6IFwiaHR0cHM6Ly90ZXN0Z2FtZS5xdXpodWFueGlhbmcuY29tXCIsXHJcbiAgICAgICAgLyoq6aKE5q2j5byP5pyN5Yqh5ZmoICovXHJcbiAgICAgICAgcHJlcmVsZWFzZTogXCJodHRwczovL3ByZWdhbWUucXV6aHVhbnhpYW5nLmNvbVwiLFxyXG4gICAgICAgIC8qKuato+W8j+acjSAqL1xyXG4gICAgICAgIHJlbGVhc2U6IFwiaHR0cHM6Ly9nYW1lLnlpbmd6aG9uZ3NoYXJlLmNvbVwiLFxyXG4gICAgfVxyXG5cclxuICAgIC8qKuacjeWKoeWZqOWcsOWdgCAqL1xyXG4gICAgZXhwb3J0IGxldCBzZXJ2ZXJVcmwgPSBDQ19ERUJVRyA/IHNlcnZlclVybENvbmZpZy50ZXN0IDogc2VydmVyVXJsQ29uZmlnLnJlbGVhc2U7XHJcblxyXG4gICAgLyoq6aKE6KeI5byA5Y+R6YWN572u6aG5ICovXHJcbiAgICBleHBvcnQgbGV0IFBIRUFEID0ge1xyXG4gICAgICAgIF90czogK25ldyBEYXRlKCkuZ2V0VGltZSgpLFxyXG4gICAgICAgIF9hcHBpZDogXCIxMDcxMjAxXCIsXHJcbiAgICAgICAgX3NpZ246IFwiYzAzNGU3NjRkZmVmZDhkMmFmOTBiNTdlYjAzNzg3MmRcIixcclxuICAgICAgICBfY2g6IFwiMzAwMDEwXCIsXHJcbiAgICAgICAgX2F2OiAnMS4wLjAnLFxyXG4gICAgICAgIF9zdjogXCIyLjQuMS4yLWluXCIsXHJcbiAgICAgICAgX2ltZWk6IFwiaW1laTFcIixcclxuICAgICAgICBfaW1laTI6IFwiaW1laTJcIixcclxuICAgICAgICBfc2s6IFwic2tcIixcclxuICAgICAgICBfdG9rZW46IFwiSUQyV2dLQ0dhVGdCcmxIcGhkNTFPMkhleG5FbDVhTU0zM1NYbXFPV0R3UT1cIixcclxuICAgICAgICBkdjogJzEuMC4wLjAnLCAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ==