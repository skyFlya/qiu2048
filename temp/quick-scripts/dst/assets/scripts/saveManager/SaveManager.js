
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/saveManager/SaveManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2F2ZU1hbmFnZXJcXFNhdmVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7R0FFRzs7O0FBR0gsc0RBQW9EO0FBQ3BELCtCQUE2QztBQVE3QztJQUFBO0lBdUVBLENBQUM7SUFyRWlCLG9CQUFRLEdBQXRCLGNBQTJCLE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVwRiwwQkFBSSxHQUFYO1FBQ0ksTUFBTTtRQUNOLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7UUFDckIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDcEUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDdEMsd0JBQXdCO1lBQ3hCLHlCQUF5QjtZQUN6QiwwREFBMEQ7WUFDMUQsNENBQTRDO1lBQzVDLFFBQVE7WUFDUixRQUFRO1lBQ1IsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDWixFQUFFLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN4RCx1Q0FBdUM7Z0JBQ3ZDLHNDQUFzQztnQkFDdEMsc0NBQXNDO2dCQUN0QyxpREFBaUQ7YUFDcEQ7U0FDSjtJQUNMLENBQUM7SUFFTSw2QkFBTyxHQUFkLFVBQWUsSUFBbUI7UUFDOUIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxJQUFJLEtBQUssRUFBRTtZQUNQLElBQUk7WUFDSixJQUFJO2dCQUNBLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztnQkFDakIsSUFBSSxNQUFNLEdBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNDLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtvQkFDYixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7aUJBQ3ZCO3FCQUFNO29CQUNILE9BQU8sS0FBSyxDQUFDO2lCQUNoQjthQUNKO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osT0FBTyxLQUFLLENBQUM7YUFDaEI7U0FDSjthQUNJO1lBQ0QsT0FBTywwQkFBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDaEQ7SUFDTCxDQUFDO0lBRU0sNkJBQU8sR0FBZCxVQUFlLElBQW1CLEVBQUUsS0FBeUM7UUFFekUsSUFBSSxJQUFJLEdBQUcsT0FBTyxLQUFLLENBQUM7UUFDeEIsSUFBSSxJQUFJLElBQUksUUFBUSxJQUFJLElBQUksSUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksUUFBUSxFQUFFO1lBQy9FLElBQUksT0FBTyxHQUFnQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1lBQ3hELElBQUk7WUFDSixJQUFJO2dCQUNBLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQztnQkFDbkIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQy9EO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osSUFBSSxRQUFRO29CQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakM7U0FDSjthQUFNO1lBQ0gsSUFBSSxRQUFRO2dCQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsd0dBQXNCLElBQU0sQ0FBQyxDQUFDO1NBQ3hEO0lBQ0wsQ0FBQztJQUVNLGdDQUFVLEdBQWpCLFVBQWtCLElBQW1CO1FBQ2pDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLG1DQUFhLEdBQXBCO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDL0IsQ0FBQztJQXBFYyxxQkFBUyxHQUFnQixJQUFJLENBQUM7SUFzRWpELGtCQUFDO0NBdkVELEFBdUVDLElBQUE7QUF2RVksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiDmnKzlnLDmlbDmja7lrZjlgqjvvIzkuLrkuoblkI7pnaLlj6/og73pnIDopoHlr7nmlbDmja7ov5vlhaXliqDlr4bkv53lrZjnrYnvvIzmiopjb2Nvc+eahOWwgemXreS4gOWxglxyXG4gKi9cclxuXHJcblxyXG5pbXBvcnQgeyBvYmplY3RVdGlscyB9IGZyb20gXCIuLi91dGlscy9vYmplY3QtdXRpbHNcIjtcclxuaW1wb3J0IHsgU2F2ZSwgU2F2ZUl0ZW1Db25pZyB9IGZyb20gXCIuL1NhdmVcIjtcclxuXHJcbnR5cGUgU3RvcmFnZVZhdWxlVHlwZSA9IFwibnVtYmVyXCIgfCBcInN0cmluZ1wiIHwgXCJib29sZWFuXCIgfCBcIm9iamVjdFwiO1xyXG5pbnRlcmZhY2UgU3RvcmFnZURhdGEge1xyXG4gICAgdHlwZTogU3RvcmFnZVZhdWxlVHlwZSxcclxuICAgIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgb2JqZWN0O1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgU2F2ZU1hbmFnZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBTYXZlTWFuYWdlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlKCkgeyByZXR1cm4gdGhpcy5faW5zdGFuY2UgfHwgKHRoaXMuX2luc3RhbmNlID0gbmV3IFNhdmVNYW5hZ2VyKCkpOyB9XHJcblxyXG4gICAgcHVibGljIGluaXQoKSB7XHJcbiAgICAgICAgLy/mr4/ml6XliLfmlrBcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgICBsZXQgdGV4dCA9IHBhcnNlSW50KChkYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiXCIgKyBkYXRlLmdldERheSgpICsgXCJcIilcclxuICAgICAgICBpZiAodGhpcy5nZXRJdGVtKFNhdmUudG9kYXlJbmZvKSAhPSB0ZXh0KSB7XHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IG0gaW4gU2F2ZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IGl0ZW0gPSBTYXZlW21dXHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoaXRlbSAmJiBpdGVtLmlzRGF5VXBkYXRlKSB7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLnNldEl0ZW0oaXRlbSwgaXRlbS5kZWZhdWx0KTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfSAgICBcclxuICAgICAgICAgICAgaWYgKCFDQ19FRElUT1IpIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuavj+asoeWIt+aWsMK3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrfCt8K3wrdcIiwgdGV4dCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNldEl0ZW0oU2F2ZS5pc1BvcFNpZ25WaWV3LCAwKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0SXRlbShTYXZlLnRhc2tPa0FycmF5LCBbXSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNldEl0ZW0oU2F2ZS50b2RheUluZm8sIHRleHQpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRJdGVtKFNhdmUuaXNTaG93TmV3Q2FzaE91dFRpcCwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtKGl0ZW06IFNhdmVJdGVtQ29uaWcpIHtcclxuICAgICAgICBsZXQgdmFsdWUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oaXRlbS5rZXkpO1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAvL+ino+aekFxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHQ6IFN0b3JhZ2VEYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdFV0aWxzLmNsb25lT2JqZWN0KGl0ZW0uZGVmYXVsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJdGVtKGl0ZW06IFNhdmVJdGVtQ29uaWcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuIHwgb2JqZWN0KSB7XHJcblxyXG4gICAgICAgIGxldCB0eXBlID0gdHlwZW9mIHZhbHVlO1xyXG4gICAgICAgIGlmICh0eXBlID09IFwibnVtYmVyXCIgfHwgdHlwZSA9PSBcInN0cmluZ1wiIHx8IHR5cGUgPT0gXCJib29sZWFuXCIgfHwgdHlwZSA9PSBcIm9iamVjdFwiKSB7XHJcbiAgICAgICAgICAgIGxldCBzYXZlT2JqOiBTdG9yYWdlRGF0YSA9IHsgdHlwZTogdHlwZSwgdmFsdWU6IHZhbHVlIH07XHJcbiAgICAgICAgICAgIC8v5Yqg5a+GXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHNhdmVPYmo7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbS5rZXksIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChDQ19ERUJVRykgY2MuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKENDX0RFQlVHKSBjYy5lcnJvcihg5a2Y5YKo5pWw5o2u57G75Z6L5LiN5pSv5oyBIOW9k+WJjeeahOWtmOWCqOexu+WeizogJHt0eXBlfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShpdGVtOiBTYXZlSXRlbUNvbmlnKSB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGl0ZW0ua2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlQWxsSXRlbSgpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgIH1cclxuXHJcbn0iXX0=