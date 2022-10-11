import { UICfg } from "../cfg/UICfg";
import UIBase from "../ui/UIBase";
import { UIUtils } from "../ui/UIUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PannelTip1 extends UIBase {

    @property(cc.Button)
    private btnVideo1:cc.Button = null;


    @property(cc.Button)
    private btnVideo2:cc.Button = null;

    @property(cc.Label)
    private lbAmount:cc.Label = null;

    private closeCd = null;

    constructor() {
        super();
        this._uiName = UICfg.PannelTip1.name;
    }

    onLoad(){
        UIUtils.addClickEvent(this.btnVideo1.node, this.onClicVideo1, this);
        UIUtils.addClickEvent(this.btnVideo2.node, this.onClicVideo2, this);
    }

    onDisable() {
        this.closeCd && this.closeCd();
        this.closeCd = null;
    }

    setData(amount:number){

    }

    onClicVideo1(){

    }

    onClicVideo2(){

    }

}
