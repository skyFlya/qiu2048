import { GameDcfg } from "../cfg/GameDcfg";
import { UICfg } from "../cfg/UICfg";
import UIBase from "../ui/UIBase";
import { UIUtils } from "../ui/UIUtils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PannelTip2 extends UIBase {

    @property(cc.Button)
    private btnOk: cc.Button = null;

    @property(cc.Button)
    private btnClose: cc.Button = null;

    @property(cc.Label)
    private lbAmount: cc.Label = null;

    @property(cc.RichText)
    private lbTip: cc.RichText = null;

    @property(cc.Label)
    private lbTitle: cc.Label = null;

    private closeCd = null;

    constructor() {
        super();
        this._uiName = UICfg.PannelTip2.name;
    }

    onLoad() {
        UIUtils.addClickEvent(this.btnOk.node, this.onCloseClick, this);
        UIUtils.addClickEvent(this.btnClose.node, this.onCloseClick, this);
    }

    setData(title:string, amount: number, pad: number, cd) {
        this.lbTitle.string = title;         
        this.lbAmount.string = amount / GameDcfg.EXCHANGE + "元";
        this.lbTip.string = `距离下次提现机会，还差<color = #DF362D>${pad > 0 ? pad : 0}分</c>`;
        this.closeCd = cd;
    }

    onDisable() {
        this.closeCd && this.closeCd();
        this.closeCd = null;
    }

    onClickOk() {
        this.close();
    }

}
