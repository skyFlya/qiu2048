// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { UICfg } from "../cfg/UICfg";
import { httpClient } from "../platform/HttpClient";
import { HttpUrl } from "../platform/HttpUrl";
import UIBase from "../ui/UIBase";
import { UIUtils } from "../ui/UIUtils";
import { random } from "../utils/random";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PannelWheel extends UIBase {

    @property(cc.Node)
    private prizeFrameNode: cc.Node = null;

    @property(cc.Button)
    private btnChou: cc.Button = null;

    @property(cc.Button)
    private btnClose: cc.Button = null;

    @property(cc.Node)
    private selectImg: cc.Node = null;

    private wheelIsRunning = false;
    private maxPrizeIndex: number;
    private turnNumber = 0;// 转动格数
    private speed = 0;// 速度（多少帧跳一格）
    private currentFps = 0;// 与speed配合
    private turnId = 0;// 下发的要转到的坑位
    private hasWheelDraw = false;// 与turnId配合
    private getPrizeIndex = 0;// 当前选中坑位（实际坑位从1开始）     
    private lotteryType = 0;   //1-红包货币，当阶段红包掉落 2-提现机会，按照提现配置ID对应 3-2048球

    constructor() {
        super();
        this._uiName = UICfg.PannelWheel.name;
    }

    onEnable(): void {
        this.selectImg.active = false;
        this.resetData();
    }

    resetData() {
        this.turnNumber = 0;// 转动格数
        this.speed = 0;// 速度（多少帧跳一格）
        this.currentFps = 0;// 与speed配合
        this.turnId = 0;// 下发的要转到的坑位
        this.hasWheelDraw = false;// 与turnId配合
        this.getPrizeIndex = 0;// 当前选中坑位（实际坑位从1开始）  
    }

    onLoad() {
        UIUtils.addClickEvent(this.btnChou.node, this.onClickChou, this);
        UIUtils.addClickEvent(this.btnClose.node, this.onCloseClick, this);

        this.maxPrizeIndex = this.prizeFrameNode.childrenCount;
    }

    update(dt) {
        if (this.wheelIsRunning && (this.turnNumber > 0)) {
            this.currentFps++;
            if (this.currentFps >= this.speed) {
                // 转了一格
                this.turnNumber--;

                if (this.wheelIsRunning) {
                    // 转动效果                    
                    this.getPrizeIndex++;
                    if (this.getPrizeIndex >= this.maxPrizeIndex) {
                        this.getPrizeIndex = 0;
                    }

                    // 调整速度            
                    this.currentFps = 0;
                    if (this.hasWheelDraw) {
                        this.speed++;
                        //this.speed = Math.sqrt(Math.pow((this.speed + 1), 2) + 16);
                    }

                    if (!this.selectImg.active) {
                        this.selectImg.active = true;
                    }

                    let child = this.prizeFrameNode.children[this.getPrizeIndex];
                    if (child) {
                        this.selectImg.setPosition(child.getPosition());
                    }
                }


                if (this.turnNumber <= 0) {
                    if (this.turnId >= 0) {
                        if (this.hasWheelDraw) {
                            this.wheelIsRunning = false;
                            this.hasWheelDraw = false;
                            this.openPrizeWin();
                        } else {
                            this.hasWheelDraw = true;
                            this.turnNumber = this.maxPrizeIndex;
                            if (this.turnNumber >= 16) {
                                this.turnNumber -= 8;
                            }                            
                        }
                    }
                }
            }
        }
    }

    //1-红包货币，当阶段红包掉落 2-提现机会，按照提现配置ID对应 3-2048球
    private openPrizeWin() {
        if(this.lotteryType == 1){
            
        }
        else if(this.lotteryType == 2){

        }
        else if(this.lotteryType == 3){

        }
    }

    private onClickChou() {        
        if(!this.selectImg.active){
            httpClient.getInstance().httpPost(HttpUrl.lottery, {
            
            }, {
                success: (res) => {
                    let model = res.model;
                    this.lotteryType = model.lotteryType;
                    this.turnId = this.setIndex()
                    console.log("抽中", this.turnId);
            
                    this.turnNumber = this.maxPrizeIndex * 2 + this.turnId - this.getPrizeIndex;
                    this.speed = 5;
            
                    this.wheelIsRunning = true;
                },
                fail: () => {
    
                },
                final: () => {
                    console.log("完成")
                }
            })  
        }     
    }

    /**
     * 
     */
    private setIndex(){
        if(this.lotteryType == 1){
            return 6;
        }
        else if(this.lotteryType == 2){
            let arr = [0, 1, 2, 3, 5, 7];
            return arr[random.findRandomBase(0, arr.length)];
        }
        else if(this.lotteryType == 3){
            return 4;
        }
    }



}
