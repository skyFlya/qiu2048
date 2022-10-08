import Toast from "../prefab/Toast";
import { objectUtils } from "../utils/object-utils";


export class ToastMgr {

    private static _instance: ToastMgr = null;
    private _displayMax: number = 5;
    private _toasts: Array<Toast> = [];

    public static getInstance(): ToastMgr {
        if (ToastMgr._instance == null) {
            ToastMgr._instance = new ToastMgr();
        }
        return ToastMgr._instance;
    }

    public static destroyInstance():void {
        if (ToastMgr._instance) {
            ToastMgr._instance = null;
        }
    }

    public showToast(content: string): void {
        // 清除无效的
        for (let i = this._toasts.length - 1; i >= 0; i--) {
            if (!cc.isValid(this._toasts[i]) || !cc.isValid(this._toasts[i].node)) {
                this._toasts.splice(i, 1);
            }
        }
        let length = this._toasts.length;
        if (length >= this._displayMax) {
            this._toasts[0].node.destroy();
            this._toasts.splice(0, 1);
        } 
        
        length = this._toasts.length;
        if (length > 0 && this._toasts[length - 1].getContent() == content) {
            // 内容相同
        } else {
           objectUtils.loadRes('common/prefabs/NodeToast', cc.Prefab, {
                onComplete:(err, prefab: cc.Prefab) => {            
                    const node = cc.instantiate(prefab);
                    node.zIndex = 10000;
                    node.parent =  cc.find("Canvas/UIRoot");
                    const toast = node.getComponent(Toast);
                    toast.setContent(content);
                    toast.show(1.5, ()=>{
                        const idx = this._toasts.indexOf(toast);
                        if (idx != -1) {
                            this._toasts[idx].node.destroy();
                            this._toasts.splice(idx, 1);
                        }
                    }, this);
                    this._toasts.push(toast);
                    // 位置
                    length = this._toasts.length;
                    for (let i = 0; i < length; i++) {
                        this._toasts[i].node.y = ((length - 1) - i) * 90;
                    }    
                }
            });           
        }
    }

    public clear(): void {
        for (let i = 0; i < this._toasts.length; i++) {
            this._toasts[i].node.destroy();
        }
        this._toasts.length = 0;
    }
}