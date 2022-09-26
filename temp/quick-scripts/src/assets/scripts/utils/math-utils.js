"use strict";
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