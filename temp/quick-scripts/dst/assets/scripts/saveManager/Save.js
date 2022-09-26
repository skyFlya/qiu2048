
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
        /**当前游戏分数 */
        this.gameScores = {
            key: "gameScores",
            type: "number",
            default: 0
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2F2ZU1hbmFnZXJcXFNhdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7SUFBQTtRQUNJLFlBQVk7UUFDWixjQUFTLEdBQWtCO1lBQ3ZCLEdBQUcsRUFBRSxXQUFXO1lBQ2hCLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLENBQUM7U0FDYixDQUFBO1FBQ0QsVUFBVTtRQUNWLGdCQUFXLEdBQWtCO1lBQ3pCLEdBQUcsRUFBRSxhQUFhO1lBQ2xCLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLENBQUM7U0FDYixDQUFBO1FBQ0QsWUFBWTtRQUNaLFlBQU8sR0FBa0I7WUFDckIsR0FBRyxFQUFFLFNBQVM7WUFDZCxJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxJQUFJO1NBQ2hCLENBQUE7UUFDRCxXQUFXO1FBQ1gsY0FBUyxHQUFrQjtZQUN2QixHQUFHLEVBQUUsV0FBVztZQUNoQixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxHQUFHO1NBQ2YsQ0FBQTtRQUNELFVBQVU7UUFDVixpQkFBWSxHQUFrQjtZQUMxQixHQUFHLEVBQUUsY0FBYztZQUNuQixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxHQUFHO1NBQ2YsQ0FBQTtRQUVELFVBQVU7UUFDVixhQUFRLEdBQWtCO1lBQ3RCLEdBQUcsRUFBRSxVQUFVO1lBQ2YsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsR0FBRztTQUNmLENBQUE7UUFFRCxXQUFXO1FBQ1gsY0FBUyxHQUFrQjtZQUN2QixHQUFHLEVBQUUsV0FBVztZQUNoQixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxFQUFFO1NBQ2QsQ0FBQTtRQUVELFlBQVk7UUFDWixlQUFVLEdBQWtCO1lBQ3hCLEdBQUcsRUFBRSxZQUFZO1lBQ2pCLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLENBQUM7U0FDYixDQUFBO0lBRUwsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FyREEsQUFxREMsSUFBQTtBQUNZLFFBQUEsSUFBSSxHQUFlLElBQUksVUFBVSxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmnKzlnLDmlbDmja7lrZjlgqjvvIzkuLrkuoblkI7pnaLlj6/og73pnIDopoHlr7nmlbDmja7ov5vlhaXliqDlr4bkv53lrZjnrYnvvIzmiopjb2Nvc+eahOWwgemXreS4gOWxglxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTYXZlSXRlbUNvbmlnIHtcclxuICAgIC8qKuWtmOaho+WQjeWtlyAqL1xyXG4gICAga2V5OiBzdHJpbmdcclxuICAgIC8qKuaVsOaNruexu+WeiyAqL1xyXG4gICAgdHlwZTogU3RvcmFnZVZhdWxlVHlwZVxyXG4gICAgLyoq6buY6K6k5YC8ICovXHJcbiAgICBkZWZhdWx0OiBhbnlcclxuICAgIGlzRGF5VXBkYXRlPzogYm9vbGVhbixcclxufVxyXG50eXBlIFN0b3JhZ2VWYXVsZVR5cGUgPSBcIm51bWJlclwiIHwgXCJzdHJpbmdcIiB8IFwiYm9vbGVhblwiIHwgXCJvYmplY3RcIjtcclxuXHJcbmNsYXNzIFNhdmVDb25maWcge1xyXG4gICAgLyoq6K6w5b2V5b2T5aSp5pel5pyfICovXHJcbiAgICB0b2RheUluZm86IFNhdmVJdGVtQ29uaWcgPSB7XHJcbiAgICAgICAga2V5OiBcInRvZGF5SW5mb1wiLFxyXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgZGVmYXVsdDogMFxyXG4gICAgfVxyXG4gICAgLyoq5ri45oiP54mI5pysICovXHJcbiAgICBnYW1lVmVyc2lvbjogU2F2ZUl0ZW1Db25pZyA9IHtcclxuICAgICAgICBrZXk6IFwiZ2FtZVZlcnNpb25cIixcclxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgIGRlZmF1bHQ6IDBcclxuICAgIH1cclxuICAgIC8qKueOqeWutueZu+mZhklEICovXHJcbiAgICBwaG9uZWlkOiBTYXZlSXRlbUNvbmlnID0ge1xyXG4gICAgICAgIGtleTogXCJwaG9uZWlkXCIsXHJcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIixcclxuICAgICAgICBkZWZhdWx0OiBudWxsXHJcbiAgICB9XHJcbiAgICAvKipiZ23lvIDlhbMgKi9cclxuICAgIGJnbVZvbHVtZTogU2F2ZUl0ZW1Db25pZyA9IHtcclxuICAgICAgICBrZXk6IFwiYmdtVm9sdW1lXCIsXHJcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICBkZWZhdWx0OiAwLjhcclxuICAgIH1cclxuICAgIC8qKumfs+aViOmfs+mHjyAqL1xyXG4gICAgZWZmZWN0Vm9sdW1lOiBTYXZlSXRlbUNvbmlnID0ge1xyXG4gICAgICAgIGtleTogXCJlZmZlY3RWb2x1bWVcIixcclxuICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgIGRlZmF1bHQ6IDAuOFxyXG4gICAgfVxyXG5cclxuICAgIC8qKua4uOaIj+aXtumXtCAqL1xyXG4gICAgZ2FtZURhdGU6IFNhdmVJdGVtQ29uaWcgPSB7XHJcbiAgICAgICAga2V5OiBcImdhbWVEYXRlXCIsXHJcbiAgICAgICAgdHlwZTogXCJudW1iZXJcIixcclxuICAgICAgICBkZWZhdWx0OiAxMDBcclxuICAgIH1cclxuXHJcbiAgICAvKirnkIPljp/lp4vkvY3nva4gKi9cclxuICAgIGZydWl0c1BvczogU2F2ZUl0ZW1Db25pZyA9IHtcclxuICAgICAgICBrZXk6IFwiZnJ1aXRzUG9zXCIsXHJcbiAgICAgICAgdHlwZTogXCJvYmplY3RcIixcclxuICAgICAgICBkZWZhdWx0OiBbXVxyXG4gICAgfVxyXG5cclxuICAgIC8qKuW9k+WJjea4uOaIj+WIhuaVsCAqL1xyXG4gICAgZ2FtZVNjb3JlczogU2F2ZUl0ZW1Db25pZyA9IHtcclxuICAgICAgICBrZXk6IFwiZ2FtZVNjb3Jlc1wiLFxyXG4gICAgICAgIHR5cGU6IFwibnVtYmVyXCIsXHJcbiAgICAgICAgZGVmYXVsdDogMFxyXG4gICAgfVxyXG5cclxufVxyXG5leHBvcnQgY29uc3QgU2F2ZTogU2F2ZUNvbmZpZyA9IG5ldyBTYXZlQ29uZmlnKCk7XHJcbiJdfQ==