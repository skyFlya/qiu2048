"use strict";
cc._RF.push(module, '1a39dLaO1lGHpGLdkaoNDuy', 'Save');
// scripts/saveManager/Save.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Save = void 0;
var SaveConfig = /** @class */ (function () {
    function SaveConfig() {
        /**记录当天日期 */
        this.todayInfo = {
            key: "todayInfo",
            type: "number",
            default: 0
        };
        /**游戏版本 */
        this.gameVersion = {
            key: "gameVersion",
            type: "number",
            default: 0
        };
        /**玩家登陆ID */
        this.phoneid = {
            key: "phoneid",
            type: "string",
            default: null
        };
        /**bgm开关 */
        this.bgmVolume = {
            key: "bgmVolume",
            type: "number",
            default: 0.8
        };
        /**音效音量 */
        this.effectVolume = {
            key: "effectVolume",
            type: "number",
            default: 0.8
        };
        /**游戏时间 */
        this.gameDate = {
            key: "gameDate",
            type: "number",
            default: 100
        };
        /**球原始位置 */
        this.fruitsPos = {
            key: "fruitsPos",
            type: "object",
            default: []
        };
    }
    return SaveConfig;
}());
exports.Save = new SaveConfig();

cc._RF.pop();