"use strict";
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