import { UICfg } from "../cfg/UICfg";
import UIBase from "../ui/UIBase";
import { UIUtils } from "../ui/UIUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PannelRecord extends UIBase {

    @property(cc.Button)
    private btnClose:cc.Button = null;

    constructor() {
        super();
        this._uiName = UICfg.PannelRecord.name;
    }

    onLoad(){
        UIUtils.addClickEvent(this.btnClose.node, this.onCloseClick, this);  
    }


}
