// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { App } from "../app/App";
import { GameDcfg } from "../cfg/GameDcfg";
import { UICfg } from "../cfg/UICfg";
import { httpClient } from "../platform/HttpClient";
import { HttpUrl } from "../platform/HttpUrl";
import UIBase from "../ui/UIBase";
import { UIUtils } from "../ui/UIUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PannelCashOut extends UIBase {

    @property(cc.Node)
    private layout1:cc.Node = null;

    @property(cc.Node)
    private Item1:cc.Node = null;

    @property(cc.Node)
    private itemBG1:cc.Node = null;

    @property(cc.RichText)
    private lbTip1:cc.RichText = null;

    @property(cc.Sprite)
    private bra1:cc.Sprite = null;


    @property(cc.Node)
    private layout2:cc.Node = null;

    @property(cc.Node)
    private Item2:cc.Node = null;

    @property(cc.Node)
    private itemBG2:cc.Node = null;

    @property(cc.RichText)
    private lbTip2:cc.RichText = null;

    @property(cc.Sprite)
    private bra2:cc.Sprite = null;


    @property(cc.Label)
    private lbAmount:cc.Label = null;

    @property(cc.Label)
    private lb2048Count:cc.Label = null;

    @property(cc.Button)
    private btnKefu:cc.Button = null;

    @property(cc.Button)
    private btnClose:cc.Button = null;

    @property(cc.Button)
    private btnRecord:cc.Button = null;

    constructor() {
        super();
        this._uiName = UICfg.PannelCashOut.name;
    }

    onLoad(){
        UIUtils.addClickEvent(this.btnClose.node, this.onCloseClick, this); 
        UIUtils.addClickEvent(this.btnKefu.node, this.onClickKefu, this); 
        UIUtils.addClickEvent(this.btnRecord.node, this.onClickRecord, this);      
    }

    start(): void {
        httpClient.getInstance().httpPost(HttpUrl.cashOutList, {

        }, {
            success: (res) => {
                console.log("提现信息", res);
            },
            fail: () => {
                console.log("失败")
            },
            final: () => {
                console.log("完成")
            }
        }, true)

        this.setItem([1,2,3,4,5])
        setTimeout(() => {
            this.setItem([1,2])
        }, 2000);
    }

    // "coin": 3000,
    // "remain": 1,
    // "text": "剩余{0}次",
    // "locked": 0,
    // "additional": {
    //   "flag": "luckydraw|1",
    //   "isMeetViewCount": false,
    //   "message": "提现0.3元需观看1次视频",
    //   "viewcount": 0,
    //   "needviewcount": 1,
    //   "loginday": 3,
    //   "needlogindays": 0
    // },
    // "drawtypesupport": {
    //   "weixin": true,
    //   "zhifubao": false
    // }

    setData(data){
        let playerData = data.ext;
        this.lbAmount.string = playerData.cash + "元";
    }

    setItem(array){
        let allCount = array.length;
        let pad = array.length - this.layout1.childrenCount;
        if(pad > 0){
            for(let i = 0; i < pad; i++){
                let ins = cc.instantiate(this.Item1);
                this.layout1.addChild(ins);                
            }
        }
        else if(pad < 0){            
            for(let i = 0; i < Math.abs(pad); i++){
                let ins = this.layout1.children[this.layout1.childrenCount - 1];
                ins && this.layout1.removeChild(ins);                                
            }
        }
        setTimeout(() => {
            
        }, 0);
    }

    setItemData(item:cc.Node, data, is2048){
        item.getChildByName("lbAmount").getComponent(cc.Label).string = data.coin / GameDcfg.EXCHANGE + "";
        if(data.additional && data.additional.message){            
            this.itemBG1.active = true;
            this.lbTip1.string = data.additional.message;
        }
    }


    private onClickKefu(){

    }

    private onClickRecord(){
        App.uiMgr.openUI(UICfg.PannelRecord.name);
    }



}
