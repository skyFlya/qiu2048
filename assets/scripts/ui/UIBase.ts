import { App } from "../app/App";


const { ccclass, property } = cc._decorator;

@ccclass
export default class UIBase extends cc.Component {

    @property(cc.Node)
    nodeMask: cc.Node = null;

    @property(cc.Node)
    nodeBox: cc.Node = null;

    protected _uiName: string = null;

    constructor() {
        super();
    }

    onLoad() {
        this.addUIEvent();
        this.addEventListener();
    }

    onDestroy() {
        this.removeEventListener();
    }

    protected addUIEvent(): void {}

    protected addEventListener(): void {}

    protected removeEventListener(): void {}

    public show(afterAni: (uiBase: UIBase) => void): void {
        this.node.active = true;
        if (afterAni) {
            afterAni(this);
        }
    }

    public hide(afterAni: (uiBase: UIBase) => void): void {
        if (afterAni) {
            this.node.active = false;
            afterAni(this);
        } else {
            this.node.active = false;
        }
    }

    protected close(): void {
        App.uiMgr.closeUI(this._uiName);
    }

    protected onCloseClick(): void {
        this.close();
    }
}