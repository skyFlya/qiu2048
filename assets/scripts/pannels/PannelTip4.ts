import { UICfg } from "../cfg/UICfg";
import UIBase from "../ui/UIBase";
import { UIUtils } from "../ui/UIUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PannelTip4 extends UIBase {

    @property(cc.Button)
    private btnOk: cc.Button = null;

    @property(cc.Button)
    private btnClose: cc.Button = null;
   
    private closeCd = null;

    constructor() {
        super();
        this._uiName = UICfg.PannelTip4.name;
    }

    onLoad() {
        UIUtils.addClickEvent(this.btnOk.node, this.onCloseClick, this);
        UIUtils.addClickEvent(this.btnClose.node, this.onCloseClick, this);
    }

    onDisable() {
        this.closeCd && this.closeCd();
        this.closeCd = null;
    }

    setData(cd){
        this.closeCd = cd;
    }

}
