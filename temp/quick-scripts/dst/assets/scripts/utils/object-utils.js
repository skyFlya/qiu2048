
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/object-utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4868bY2JkFHTrP95V1SoT3Q', 'object-utils');
// scripts/utils/object-utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectUtils = void 0;
var animate_utils_1 = require("./animate-utils");
var math_utils_1 = require("./math-utils");
var random_1 = require("./random");
/**
 * 对象工具类
 */
exports.objectUtils = {
    /**
     * 深拷贝
     * @param Obj 对象
     */
    cloneObject: function (Obj) {
        var buf;
        if (Obj instanceof Array) {
            buf = [];
            for (var i = 0; i < Obj.length; i++) {
                buf[i] = exports.objectUtils.cloneObject(Obj[i]);
            }
            return buf;
        }
        else if (Obj instanceof Object) {
            buf = {};
            for (var k = 0; k < Object.keys(Obj).length; k++) {
                buf[Object.keys(Obj)[k]] = exports.objectUtils.cloneObject(Obj[Object.keys(Obj)[k]]);
            }
            return buf;
        }
        else {
            return Obj;
        }
    },
    loadRes: function (path, type, options) {
        if (options === void 0) { options = {}; }
        var _a = options.onComplete, onComplete = _a === void 0 ? null : _a, _b = options.onProgress, onProgress = _b === void 0 ? null : _b;
        // if (CC_DEBUG) {
        //     cc.log(`${this.logTag} loadRes path : ${path}`)
        // }
        if (onProgress) {
            cc.assetManager.resources.load(path, type, onProgress, onComplete);
        }
        else {
            cc.assetManager.resources.load(path, type, onComplete);
        }
    },
    palyCoinJump: function (startNode, endNode, parent) {
        this.loadRes("prefabs/coinAnimation", cc.Prefab, {
            onComplete: function (error, assest) {
                var num = 5;
                var finish = null;
                var stepTime = 0.1;
                var start = null;
                if (!parent) {
                    parent = cc.Canvas.instance.node;
                }
                var _loop_1 = function (index) {
                    var redPack = cc.instantiate(assest);
                    redPack.parent = parent;
                    var startV2 = math_utils_1.mathUtils.convertToParent(startNode, parent);
                    var endV2 = math_utils_1.mathUtils.convertToParent(endNode, parent);
                    cc.tween(redPack)
                        .set({ position: cc.v3(startV2.x + random_1.random.findRandomBase(-75, 75), startV2.y), scale: 1 })
                        .delay(index * stepTime)
                        .by(0.3, { position: cc.v3(0, 100) })
                        .parallel(cc.tween(redPack).then(animate_utils_1.animateUtils.getBezier(0.5, startV2, endV2, 100, 60)), cc.tween(redPack).to(0.8, { scale: 0.5 }))
                        .delay(0.1)
                        .call(function () {
                        redPack.destroy();
                        if (index == num - 1) {
                            finish && finish();
                        }
                        if (index == 0) {
                            start && start();
                        }
                    })
                        .start();
                };
                for (var index = 0; index < num; index++) {
                    _loop_1(index);
                }
            }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdXRpbHNcXG9iamVjdC11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBK0M7QUFDL0MsMkNBQXlDO0FBQ3pDLG1DQUFrQztBQUVsQzs7R0FFRztBQUNVLFFBQUEsV0FBVyxHQUFHO0lBQ3ZCOzs7T0FHRztJQUNILFdBQVcsWUFBQyxHQUFHO1FBQ1gsSUFBSSxHQUFHLENBQUM7UUFDUixJQUFJLEdBQUcsWUFBWSxLQUFLLEVBQUU7WUFDdEIsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNULEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDNUM7WUFFRCxPQUFPLEdBQUcsQ0FBQztTQUNkO2FBQU0sSUFBSSxHQUFHLFlBQVksTUFBTSxFQUFFO1lBQzlCLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDVCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzlDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsbUJBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2hGO1lBQ0QsT0FBTyxHQUFHLENBQUM7U0FDZDthQUFNO1lBQ0gsT0FBTyxHQUFHLENBQUM7U0FDZDtJQUNMLENBQUM7SUFFRCxPQUFPLEVBQVAsVUFBUSxJQUFZ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TCxDQUFDLENBQUM7eUJBQ0QsS0FBSyxFQUFFLENBQUE7O2dCQXJCaEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLEdBQUcsRUFBRSxLQUFLLEVBQUU7NEJBQS9CLEtBQUs7aUJBc0JiO1lBQ0wsQ0FBQztTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FFSixDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZVV0aWxzIH0gZnJvbSBcIi4vYW5pbWF0ZS11dGlsc1wiO1xuaW1wb3J0IHsgbWF0aFV0aWxzIH0gZnJvbSBcIi4vbWF0aC11dGlsc1wiO1xuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSBcIi4vcmFuZG9tXCI7XG5cbi8qKlxuICog5a+56LGh5bel5YW357G7XG4gKi9cbmV4cG9ydCBjb25zdCBvYmplY3RVdGlscyA9IHtcbiAgICAvKipcbiAgICAgKiDmt7Hmi7fotJ1cbiAgICAgKiBAcGFyYW0gT2JqIOWvueixoVxuICAgICAqL1xuICAgIGNsb25lT2JqZWN0KE9iaikge1xuICAgICAgICB2YXIgYnVmO1xuICAgICAgICBpZiAoT2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgIGJ1ZiA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBidWZbaV0gPSBvYmplY3RVdGlscy5jbG9uZU9iamVjdChPYmpbaV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYnVmO1xuICAgICAgICB9IGVsc2UgaWYgKE9iaiBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgYnVmID0ge307XG4gICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IE9iamVjdC5rZXlzKE9iaikubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICBidWZbT2JqZWN0LmtleXMoT2JqKVtrXV0gPSBvYmplY3RVdGlscy5jbG9uZU9iamVjdChPYmpbT2JqZWN0LmtleXMoT2JqKVtrXV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJ1ZjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBPYmo7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbG9hZFJlcyhwYXRoOiBzdHJpbmcsIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgb25Qcm9ncmVzcz86IChmaW5pc2g6IG51bWJlciwgdG90YWw6IG51bWJlciwgaXRlbTogY2MuQXNzZXRNYW5hZ2VyLlJlcXVlc3RJdGVtKSA9PiB2b2lkLFxuICAgICAgICAgICAgb25Db21wbGV0ZT86IChlcnJvcjogRXJyb3IsIGFzc2V0czogY2MuQXNzZXQgfCBjYy5Bc3NldFtdKSA9PiB2b2lkLFxuICAgICAgICB9ID0ge30pOiB2b2lkIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIG9uQ29tcGxldGUgPSBudWxsLFxuICAgICAgICAgICAgb25Qcm9ncmVzcyA9IG51bGwsXG4gICAgICAgIH0gPSBvcHRpb25zO1xuXG4gICAgICAgIC8vIGlmIChDQ19ERUJVRykge1xuICAgICAgICAvLyAgICAgY2MubG9nKGAke3RoaXMubG9nVGFnfSBsb2FkUmVzIHBhdGggOiAke3BhdGh9YClcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAob25Qcm9ncmVzcykge1xuICAgICAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLnJlc291cmNlcy5sb2FkKHBhdGgsIHR5cGUsIG9uUHJvZ3Jlc3MsIG9uQ29tcGxldGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIucmVzb3VyY2VzLmxvYWQocGF0aCwgdHlwZSwgb25Db21wbGV0ZSlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBwYWx5Q29pbkp1bXAoc3RhcnROb2RlOiBjYy5Ob2RlLCBlbmROb2RlOiBjYy5Ob2RlLCBwYXJlbnQ/OiBjYy5Ob2RlKSB7XG4gICAgICAgIHRoaXMubG9hZFJlcyhgcHJlZmFicy9jb2luQW5pbWF0aW9uYCwgY2MuUHJlZmFiLCB7XG4gICAgICAgICAgICBvbkNvbXBsZXRlOiAoZXJyb3IsIGFzc2VzdDogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IDU7XG4gICAgICAgICAgICAgICAgbGV0IGZpbmlzaCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IHN0ZXBUaW1lID0gMC4xO1xuICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZighcGFyZW50KXtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gY2MuQ2FudmFzLmluc3RhbmNlLm5vZGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG51bTsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVkUGFjazogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKGFzc2VzdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVkUGFjay5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VjIgPSBtYXRoVXRpbHMuY29udmVydFRvUGFyZW50KHN0YXJ0Tm9kZSwgcGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kVjIgPSBtYXRoVXRpbHMuY29udmVydFRvUGFyZW50KGVuZE5vZGUsIHBhcmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHJlZFBhY2spXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0KHsgcG9zaXRpb246IGNjLnYzKHN0YXJ0VjIueCArIHJhbmRvbS5maW5kUmFuZG9tQmFzZSgtNzUsIDc1KSwgc3RhcnRWMi55KSwgc2NhbGU6IDEgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheShpbmRleCAqIHN0ZXBUaW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMywgeyBwb3NpdGlvbjogY2MudjMoMCwgMTAwKSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnBhcmFsbGVsKGNjLnR3ZWVuKHJlZFBhY2spLnRoZW4oYW5pbWF0ZVV0aWxzLmdldEJlemllcigwLjUsIHN0YXJ0VjIsIGVuZFYyLCAxMDAsIDYwKSksIGNjLnR3ZWVuKHJlZFBhY2spLnRvKDAuOCwgeyBzY2FsZTogMC41IH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRQYWNrLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gbnVtIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5pc2ggJiYgZmluaXNoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ICYmIHN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxufSJdfQ==