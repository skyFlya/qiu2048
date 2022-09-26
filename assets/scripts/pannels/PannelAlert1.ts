import { UICfg } from "../cfg/UICfg";
import DialogBase from "../ui/DialogBase";


const {ccclass, property} = cc._decorator;

@ccclass
export default class PannelAlert1 extends DialogBase {

    constructor() {
        super();
        this._uiName = UICfg.PannelAlert1.name;
    }
}
