// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { UICfg } from "../cfg/UICfg";
import UIBase from "../ui/UIBase";
import { UIUtils } from "../ui/UIUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PannelAboutMy extends UIBase {

    @property(cc.Button)
    private btnClose:cc.Button = null;
  

    constructor() {
        super();
        this._uiName = UICfg.PannelAboutMy.name;
    }

    onLoad(){
        UIUtils.addClickEvent(this.btnClose.node, this.onCloseClick, this);              
    }

}
