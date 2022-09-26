
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/random.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7860fqfkcJERrnDR1vszchF', 'random');
// scripts/utils/random.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
/**
 * 随机数工具类
 */
exports.random = {
    /**
     * 获取[min,max)之间的随机数
     * @param area
     */
    findRandomBase: function (min, max) {
        return Math.random() * (max - min) + min;
    },
    /**
     * 获取[min,max)之间的随机整数
     * @param min
     * @param max
     */
    findRandomInteger: function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },
    /**
     * 按照arr获取权重值，arr为权重列表
     * @param arr
     */
    findRandomArray: function (arr) {
        if (arr === void 0) { arr = []; }
        var count = 0;
        for (var m in arr) {
            if (arr[m]) {
                count += arr[m];
            }
        }
        var ran = this.findRandomBase() * count;
        for (var m in arr) {
            if (ran <= arr[m]) {
                return m;
            }
        }
        return 0;
    },
    /**
     * 从数组data中取出cout个随机值
     * @param count
     * @param data
     */
    findListFromArray: function (count, data) {
        if (data === void 0) { data = []; }
        if (count >= data.length) {
            return data;
        }
        else if (count < data.length) {
            var temp = [];
            var arr = this.randomNumBoth(data.length, count);
            for (var m in arr) {
                if (data[arr[m]]) {
                    temp.push(data[arr[m]]);
                }
            }
            return temp;
        }
    },
    /**
    * 从数组data中取出cout个随机值
    * @param count
    * @param data
    */
    findListFromObject: function (count, data) {
        var obj = Object.keys(data);
        if (count >= obj.length) {
            return data;
        }
        else if (count < obj.length) {
            var temp = {};
            var arr = this.randomNumBoth(obj.length, count);
            for (var m in arr) {
                if (data[arr[m]]) {
                    temp[arr[m]] = data[arr[m]];
                }
            }
            return temp;
        }
    },
    isCheckOk: function (limit, max) {
        var random = this.findRandomBase(0, max);
        console.error("ischeckOk:", limit, max, random, random <= limit);
        return random <= limit;
    },
    //取出0，maxLen内的maxNum个数字
    randomNumBoth: function (maxLen, maxNum) {
        var arr = [];
        for (var i = 0; i < maxLen; i++) {
            arr.push(i);
        }
        var numArr = [];
        //最大的循环次数
        var arrLength = arr.length;
        for (var i = 0; i < arrLength; i++) {
            //取出随机数 
            var number = Math.floor(Math.random() * arr.length); //生成随机数num
            //往新建的数组里面传入数值
            numArr.push(arr[number]);
            //传入一个删除一个，避免重复
            arr.splice(number, 1);
            if (arr.length <= arrLength - maxNum) {
                return numArr;
            }
        }
    }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdXRpbHNcXHJhbmRvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNVLFFBQUEsTUFBTSxHQUFHO0lBRWxCOzs7T0FHRztJQUNILGNBQWMsRUFBZCxVQUFlLEdBQVcsRUFBRSxHQUFXO1FBQ25DLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtJQUM1QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGlCQUFpQixFQUFqQixVQUFrQixHQUFXLEVBQUUsR0FBVztRQUN0QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFBO0lBQ3hELENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlLEVBQWYsVUFBZ0IsR0FBdUI7UUFBdkIsb0JBQUEsRUFBQSxRQUF1QjtRQUNuQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUE7UUFDYixLQUFLLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRTtZQUNmLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNSLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDbEI7U0FDSjtRQUNELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsR0FBRyxLQUFLLENBQUE7UUFDdkMsS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7WUFDZixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLENBQUE7YUFDWDtTQUNKO1FBQ0QsT0FBTyxDQUFDLENBQUE7SUFDWixDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILGlCQUFpQixFQUFqQixVQUFrQixLQUFhLEVBQUUsSUFBcUI7UUFB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LEdBQUcsQ0FBQyxNQUFNLElBQUksU0FBUyxHQUFHLE1BQU0sRUFBRTtnQkFDbEMsT0FBTyxNQUFNLENBQUM7YUFDakI7U0FDSjtJQUVMLENBQUM7Q0FFSixDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDpmo/mnLrmlbDlt6XlhbfnsbtcbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IHtcblxuICAgIC8qKlxuICAgICAqIOiOt+WPllttaW4sbWF4KeS5i+mXtOeahOmaj+acuuaVsFxuICAgICAqIEBwYXJhbSBhcmVhIFxuICAgICAqL1xuICAgIGZpbmRSYW5kb21CYXNlKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiOt+WPllttaW4sbWF4KeS5i+mXtOeahOmaj+acuuaVtOaVsFxuICAgICAqIEBwYXJhbSBtaW4gXG4gICAgICogQHBhcmFtIG1heCBcbiAgICAgKi9cbiAgICBmaW5kUmFuZG9tSW50ZWdlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmjInnhadhcnLojrflj5bmnYPph43lgLzvvIxhcnLkuLrmnYPph43liJfooahcbiAgICAgKiBAcGFyYW0gYXJyIFxuICAgICAqL1xuICAgIGZpbmRSYW5kb21BcnJheShhcnI6IEFycmF5PG51bWJlcj4gPSBbXSkge1xuICAgICAgICBsZXQgY291bnQgPSAwXG4gICAgICAgIGZvciAobGV0IG0gaW4gYXJyKSB7XG4gICAgICAgICAgICBpZiAoYXJyW21dKSB7XG4gICAgICAgICAgICAgICAgY291bnQgKz0gYXJyW21dXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJhbiA9IHRoaXMuZmluZFJhbmRvbUJhc2UoKSAqIGNvdW50XG4gICAgICAgIGZvciAobGV0IG0gaW4gYXJyKSB7XG4gICAgICAgICAgICBpZiAocmFuIDw9IGFyclttXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDBcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOS7juaVsOe7hGRhdGHkuK3lj5blh7pjb3V05Liq6ZqP5py65YC8XG4gICAgICogQHBhcmFtIGNvdW50IFxuICAgICAqIEBwYXJhbSBkYXRhIFxuICAgICAqL1xuICAgIGZpbmRMaXN0RnJvbUFycmF5KGNvdW50OiBudW1iZXIsIGRhdGE6IEFycmF5PGFueT4gPSBbXSkge1xuICAgICAgICBpZiAoY291bnQgPj0gZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhXG4gICAgICAgIH0gZWxzZSBpZiAoY291bnQgPCBkYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHRlbXA6IEFycmF5PGFueT4gPSBbXVxuICAgICAgICAgICAgbGV0IGFyciA9IHRoaXMucmFuZG9tTnVtQm90aChkYXRhLmxlbmd0aCwgY291bnQpXG4gICAgICAgICAgICBmb3IgKGxldCBtIGluIGFycikge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhW2FyclttXV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcC5wdXNoKGRhdGFbYXJyW21dXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGVtcFxuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAqIOS7juaVsOe7hGRhdGHkuK3lj5blh7pjb3V05Liq6ZqP5py65YC8XG4gICAgKiBAcGFyYW0gY291bnQgXG4gICAgKiBAcGFyYW0gZGF0YSBcbiAgICAqL1xuICAgIGZpbmRMaXN0RnJvbU9iamVjdChjb3VudDogbnVtYmVyLCBkYXRhOiBvYmplY3QpIHtcbiAgICAgICAgbGV0IG9iaiA9IE9iamVjdC5rZXlzKGRhdGEpXG4gICAgICAgIGlmIChjb3VudCA+PSBvYmoubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgICB9IGVsc2UgaWYgKGNvdW50IDwgb2JqLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IHRlbXA6IG9iamVjdCA9IHt9XG4gICAgICAgICAgICBsZXQgYXJyID0gdGhpcy5yYW5kb21OdW1Cb3RoKG9iai5sZW5ndGgsIGNvdW50KVxuICAgICAgICAgICAgZm9yIChsZXQgbSBpbiBhcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVthcnJbbV1dKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBbYXJyW21dXSA9IGRhdGFbYXJyW21dXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0ZW1wXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGlzQ2hlY2tPayhsaW1pdCwgbWF4KSB7XG4gICAgICAgIGxldCByYW5kb20gPSB0aGlzLmZpbmRSYW5kb21CYXNlKDAsIG1heClcbiAgICAgICAgY29uc29sZS5lcnJvcihcImlzY2hlY2tPazpcIiwgbGltaXQsIG1heCwgcmFuZG9tLCByYW5kb20gPD0gbGltaXQpXG4gICAgICAgIHJldHVybiByYW5kb20gPD0gbGltaXRcbiAgICB9LFxuICAgIC8v5Y+W5Ye6MO+8jG1heExlbuWGheeahG1heE51beS4quaVsOWtl1xuICAgIHJhbmRvbU51bUJvdGgobWF4TGVuLCBtYXhOdW0pIHtcbiAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heExlbjsgaSsrKSB7XG4gICAgICAgICAgICBhcnIucHVzaChpKVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG51bUFyciA9IFtdO1xuICAgICAgICAvL+acgOWkp+eahOW+queOr+asoeaVsFxuICAgICAgICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy/lj5blh7rpmo/mnLrmlbAgXG4gICAgICAgICAgICB2YXIgbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCk7IC8v55Sf5oiQ6ZqP5py65pWwbnVtXG4gICAgICAgICAgICAvL+W+gOaWsOW7uueahOaVsOe7hOmHjOmdouS8oOWFpeaVsOWAvFxuICAgICAgICAgICAgbnVtQXJyLnB1c2goYXJyW251bWJlcl0pO1xuICAgICAgICAgICAgLy/kvKDlhaXkuIDkuKrliKDpmaTkuIDkuKrvvIzpgb/lhY3ph43lpI1cbiAgICAgICAgICAgIGFyci5zcGxpY2UobnVtYmVyLCAxKTtcbiAgICAgICAgICAgIGlmIChhcnIubGVuZ3RoIDw9IGFyckxlbmd0aCAtIG1heE51bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudW1BcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxufSJdfQ==