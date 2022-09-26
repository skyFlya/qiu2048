
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/saveManager/Save.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2F2ZU1hbmFnZXJcXFNhdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7SUFBQTtRQUNJLFlBQVk7UUFDWixjQUFTLEdBQWtCO1lBQ3ZCLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLENBQUM7U0FDYixDQUFBO1FBQ0QsVUFBVTtRQUNWLGdCQUFXLEdBQWtCO1lBQ3pCLEdBQUcsRUFBRSxhQUFhO1lBQ2xCLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLENBQUM7U0FDYixDQUFBO1FBQ0QsWUFBWTtRQUNaLFlBQU8sR0FBa0I7WUFDckIsR0FBRyxFQUFFLFNBQVM7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxJQUFJO1NBQ2hCLENBQUE7UUFDRCxXQUFXO1FBQ1gsY0FBUyxHQUFrQjtZQUN2QixHQUFHLEVBQUUsV0FBVztZQUNoQixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxHQUFHO1NBQ2YsQ0FBQTtRQUNELFVBQVU7UUFDVixpQkFBWSxHQUFrQjtZQUMxQixHQUFHLEVBQUUsY0FBYztZQUNuQixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxHQUFHO1NBQ2YsQ0FBQTtRQUVELFVBQVU7UUFDVixhQUFRLEdBQWtCO1lBQ3RCLEdBQUcsRUFBRSxVQUFVO1lBQ2YsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsR0FBRztTQUNmLENBQUE7UUFFRCxXQUFXO1FBQ1gsY0FBUyxHQUFrQjtZQUN2QixHQUFHLEVBQUUsV0FBVztZQUNoQixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxFQUFFO1NBQ2QsQ0FBQTtJQUNMLENBQUM7SUFBRCxpQkFBQztBQUFELENBN0NBLEFBNkNDLElBQUE7QUFDWSxRQUFBLElBQUksR0FBZSxJQUFJLFVBQVUsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24g5pys5Zyw5pWw5o2u5a2Y5YKo77yM5Li65LqG5ZCO6Z2i5Y+v6IO96ZyA6KaB5a+55pWw5o2u6L+b5YWl5Yqg5a+G5L+d5a2Y562J77yM5oqKY29jb3PnmoTlsIHpl63kuIDlsYJcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2F2ZUl0ZW1Db25pZyB7XHJcbiAgICAvKirlrZjmoaPlkI3lrZcgKi9cclxuICAgIGtleTogc3RyaW5nXHJcbiAgICAvKirmlbDmja7nsbvlnosgKi9cclxuICAgIHR5cGU6IFN0b3JhZ2VWYXVsZVR5cGVcclxuICAgIC8qKum7mOiupOWAvCAqL1xyXG4gICAgZGVmYXVsdDogYW55XHJcbiAgICBpc0RheVVwZGF0ZT86IGJvb2xlYW4sXHJcbn1cclxudHlwZSBTdG9yYWdlVmF1bGVUeXBlID0gXCJudW1iZXJcIiB8IFwic3RyaW5nXCIgfCBcImJvb2xlYW5cIiB8IFwib2JqZWN0XCI7XHJcblxyXG5jbGFzcyBTYXZlQ29uZmlnIHtcclxuICAgIC8qKuiusOW9leW9k+WkqeaXpeacnyAqL1xyXG4gICAgdG9kYXlJbmZvOiBTYXZlSXRlbUNvbmlnID0ge1xyXG4gICAgICAgIGtleTogXCJ0b2RheUluZm9cIixcclxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgIGRlZmF1bHQ6IDBcclxuICAgIH1cclxuICAgIC8qKua4uOaIj+eJiOacrCAqL1xyXG4gICAgZ2FtZVZlcnNpb246IFNhdmVJdGVtQ29uaWcgPSB7XHJcbiAgICAgICAga2V5OiBcImdhbWVWZXJzaW9uXCIsXHJcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICBkZWZhdWx0OiAwXHJcbiAgICB9XHJcbiAgICAvKirnjqnlrrbnmbvpmYZJRCAqL1xyXG4gICAgcGhvbmVpZDogU2F2ZUl0ZW1Db25pZyA9IHtcclxuICAgICAgICBrZXk6IFwicGhvbmVpZFwiLFxyXG4gICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXHJcbiAgICAgICAgZGVmYXVsdDogbnVsbFxyXG4gICAgfVxyXG4gICAgLyoqYmdt5byA5YWzICovXHJcbiAgICBiZ21Wb2x1bWU6IFNhdmVJdGVtQ29uaWcgPSB7XHJcbiAgICAgICAga2V5OiBcImJnbVZvbHVtZVwiLFxyXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgZGVmYXVsdDogMC44XHJcbiAgICB9XHJcbiAgICAvKirpn7PmlYjpn7Pph48gKi9cclxuICAgIGVmZmVjdFZvbHVtZTogU2F2ZUl0ZW1Db25pZyA9IHtcclxuICAgICAgICBrZXk6IFwiZWZmZWN0Vm9sdW1lXCIsXHJcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICBkZWZhdWx0OiAwLjhcclxuICAgIH1cclxuXHJcbiAgICAvKirmuLjmiI/ml7bpl7QgKi9cclxuICAgIGdhbWVEYXRlOiBTYXZlSXRlbUNvbmlnID0ge1xyXG4gICAgICAgIGtleTogXCJnYW1lRGF0ZVwiLFxyXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgZGVmYXVsdDogMTAwXHJcbiAgICB9XHJcblxyXG4gICAgLyoq55CD5Y6f5aeL5L2N572uICovXHJcbiAgICBmcnVpdHNQb3M6IFNhdmVJdGVtQ29uaWcgPSB7XHJcbiAgICAgICAga2V5OiBcImZydWl0c1Bvc1wiLFxyXG4gICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXHJcbiAgICAgICAgZGVmYXVsdDogW11cclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgU2F2ZTogU2F2ZUNvbmZpZyA9IG5ldyBTYXZlQ29uZmlnKCk7XHJcbiJdfQ==