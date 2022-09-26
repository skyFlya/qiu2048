
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/math-utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '155db31YTdG5qvCZVUd3TIn', 'math-utils');
// scripts/utils/math-utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mathUtils = void 0;
/**
 * 数学工具类
 */
exports.mathUtils = {
    /**
        * node转世界坐标
        * @param pos
        * @param node
        */
    nodeToWorld: function (pos, node) {
        return node.convertToWorldSpaceAR(pos);
    },
    /**
     * 世界坐标转node
     * @param worldPos
     * @param node
     */
    worldToNode: function (worldPos, node) {
        return node.convertToNodeSpaceAR(worldPos);
    },
    /**
    * 节点坐标转换
    * @param node 欲要转换的节点
    * @param newParent 新父节点
    */
    convertToParent: function (node, newParent, offset) {
        var worldPos = node.convertToWorldSpaceAR(offset || cc.v2(0, 0));
        return newParent.convertToNodeSpaceAR(worldPos);
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdXRpbHNcXG1hdGgtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDVSxRQUFBLFNBQVMsR0FBRztJQUNyQjs7OztVQUlNO0lBQ04sV0FBVyxFQUFYLFVBQVksR0FBWSxFQUFFLElBQWE7UUFDbkMsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCxXQUFXLEVBQVgsVUFBWSxRQUFpQixFQUFFLElBQWE7UUFDeEMsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVEOzs7O01BSUU7SUFDRixlQUFlLEVBQWYsVUFBZ0IsSUFBYSxFQUFFLFNBQWtCLEVBQUUsTUFBZ0I7UUFDL0QsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLE9BQU8sU0FBUyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Q0FFSixDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOaVsOWtpuW3peWFt+exu1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1hdGhVdGlscyA9IHtcclxuICAgIC8qKlxyXG4gICAgICAgICogbm9kZei9rOS4lueVjOWdkOagh1xyXG4gICAgICAgICogQHBhcmFtIHBvcyBcclxuICAgICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICAgICovXHJcbiAgICBub2RlVG9Xb3JsZChwb3M6IGNjLlZlYzIsIG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICByZXR1cm4gbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocG9zKVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5LiW55WM5Z2Q5qCH6L2sbm9kZVxyXG4gICAgICogQHBhcmFtIHdvcmxkUG9zIFxyXG4gICAgICogQHBhcmFtIG5vZGUgXHJcbiAgICAgKi9cclxuICAgIHdvcmxkVG9Ob2RlKHdvcmxkUG9zOiBjYy5WZWMyLCBub2RlOiBjYy5Ob2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDoioLngrnlnZDmoIfovazmjaJcclxuICAgICogQHBhcmFtIG5vZGUg5qyy6KaB6L2s5o2i55qE6IqC54K5XHJcbiAgICAqIEBwYXJhbSBuZXdQYXJlbnQg5paw54i26IqC54K5XHJcbiAgICAqL1xyXG4gICAgY29udmVydFRvUGFyZW50KG5vZGU6IGNjLk5vZGUsIG5ld1BhcmVudDogY2MuTm9kZSwgb2Zmc2V0PzogY2MuVmVjMik6IGNjLlZlYzIge1xyXG4gICAgICAgIGNvbnN0IHdvcmxkUG9zID0gbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIob2Zmc2V0IHx8IGNjLnYyKDAsIDApKTtcclxuICAgICAgICByZXR1cm4gbmV3UGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHdvcmxkUG9zKTtcclxuICAgIH0sXHJcbiAgIFxyXG59Il19