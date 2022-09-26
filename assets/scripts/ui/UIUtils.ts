import { App } from "../app/App";
import { QuickClickCfg } from "../cfg/QuickClickCfg";


export class UIUtils {

    /**
     * 注册按钮点击事件
     * @param node 
     * @param func 
     * @param target 
     * @param delay 
     */
    public static addClickEvent(node: cc.Node, func: (node: cc.Node) => void, target: any, delay: number = QuickClickCfg.DEFAULT): void {
        if (node && func && typeof(func) == 'function') {
            node.on('click', ()=>{
                // 防止连续点击
                if (delay > 0) {
                    if (node && cc.isValid(node)) {
                        const lastClickTime = node['__last_click_time__'];
                        if (lastClickTime && (new Date().getTime() - lastClickTime) <= delay * 1000) {
                            cc.log('连点');
                            return;
                        }
                        node['__last_click_time__'] = new Date().getTime();
                    }
                }
                func.call(target, node);
                App.soundMgr.playClickSound();
            }, this);
        }
    }

    /**
     * 全屏缩放
     * @param node 
     */
    public static fullScreenNode(node: cc.Node): void {
        if (node) {
            const scaleX = Math.max(1, cc.winSize.width) / Math.max(1, node.width);
            const scaleY =  Math.max(1, cc.winSize.height) / Math.max(1, node.height);
            node.scale = Math.max(scaleX, scaleY);
        }
    }
}