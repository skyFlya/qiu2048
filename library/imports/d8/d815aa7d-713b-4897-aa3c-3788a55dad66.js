"use strict";
cc._RF.push(module, 'd815ap9cTtIl6o8N4ilXa1m', 'SaveManager');
// scripts/saveManager/SaveManager.ts

"use strict";
/**
 * @description 本地数据存储，为了后面可能需要对数据进入加密保存等，把cocos的封闭一层
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveManager = void 0;
var object_utils_1 = require("../utils/object-utils");
var Save_1 = require("./Save");
var SaveManager = /** @class */ (function () {
    function SaveManager() {
    }
    SaveManager.Instance = function () { return this._instance || (this._instance = new SaveManager()); };
    SaveManager.prototype.init = function () {
        //每日刷新
        var date = new Date();
        var text = parseInt((date.getMonth() + 1) + "" + date.getDay() + "");
        if (this.getItem(Save_1.Save.todayInfo) != text) {
            // for (let m in Save) {
            //     let item = Save[m]
            //     if (item && item.isDayUpdate) {                    
            //         this.setItem(item, item.default);
            //     }
            // }    
            if (!CC_EDITOR) {
                cc.log("每次刷新···································", text);
                // this.setItem(Save.isPopSignView, 0);
                // this.setItem(Save.taskOkArray, []);
                // this.setItem(Save.todayInfo, text);
                // this.setItem(Save.isShowNewCashOutTip, false);
            }
        }
    };
    SaveManager.prototype.getItem = function (item) {
        var value = cc.sys.localStorage.getItem(item.key);
        if (value) {
            //解析
            try {
                var data = value;
                var result = JSON.parse(data);
                if (result.type) {
                    return result.value;
                }
                else {
                    return value;
                }
            }
            catch (error) {
                return value;
            }
        }
        else {
            return object_utils_1.objectUtils.cloneObject(item.default);
        }
    };
    SaveManager.prototype.setItem = function (item, value) {
        var type = typeof value;
        if (type == "number" || type == "string" || type == "boolean" || type == "object") {
            var saveObj = { type: type, value: value };
            //加密
            try {
                var data = saveObj;
                cc.sys.localStorage.setItem(item.key, JSON.stringify(data));
            }
            catch (error) {
                if (CC_DEBUG)
                    cc.error(error);
            }
        }
        else {
            if (CC_DEBUG)
                cc.error("\u5B58\u50A8\u6570\u636E\u7C7B\u578B\u4E0D\u652F\u6301 \u5F53\u524D\u7684\u5B58\u50A8\u7C7B\u578B: " + type);
        }
    };
    SaveManager.prototype.removeItem = function (item) {
        cc.sys.localStorage.removeItem(item.key);
    };
    SaveManager.prototype.removeAllItem = function () {
        cc.sys.localStorage.clear();
    };
    SaveManager._instance = null;
    return SaveManager;
}());
exports.SaveManager = SaveManager;

cc._RF.pop();