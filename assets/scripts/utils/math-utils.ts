/**
 * 数学工具类
 */
export const mathUtils = {
    /**
        * node转世界坐标
        * @param pos 
        * @param node 
        */
    nodeToWorld(pos: cc.Vec2, node: cc.Node) {
        return node.convertToWorldSpaceAR(pos)
    },
    /**
     * 世界坐标转node
     * @param worldPos 
     * @param node 
     */
    worldToNode(worldPos: cc.Vec2, node: cc.Node) {
        return node.convertToNodeSpaceAR(worldPos)
    },

    /**
    * 节点坐标转换
    * @param node 欲要转换的节点
    * @param newParent 新父节点
    */
    convertToParent(node: cc.Node, newParent: cc.Node, offset?: cc.Vec2): cc.Vec2 {
        const worldPos = node.convertToWorldSpaceAR(offset || cc.v2(0, 0));
        return newParent.convertToNodeSpaceAR(worldPos);
    },
   
}