// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { UICfg } from "../cfg/UICfg";
import UIBase from "../ui/UIBase";
import { UIUtils } from "../ui/UIUtils";

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


    constructor() {
        super();
        this._uiName = UICfg.PannelWheel.name;
    }

    protected onEnable(): void {
        this.selectImg.active = false;
    }

    onLoad() {
        UIUtils.addClickEvent(this.btnChou.node, this.onClickChou, this);
        UIUtils.addClickEvent(this.btnClose.node, this.onCloseClick, this);



        

        this.maxPrizeIndex = this.prizeFrameNode.children.length;
    }

    update(dt) {
        if (this.wheelIsRunning && (this.turnNumber > 0)) {
            this.currentFps++;
            if (this.currentFps >= this.speed) {
                // 转了一格
                this.turnNumber--;
                this.currentFps = 0;
                if (this.turnNumber <= 0) {                    
                    if (this.turnId >= 0) {
                        if (this.hasWheelDraw) {
                            this.wheelIsRunning = false;
                            this.hasWheelDraw = false;
                            this.openPrizeWin();
                        } else {
                            this.hasWheelDraw = true;                            
                        }
                        this.turnNumber = this.maxPrizeIndex + (this.maxPrizeIndex - this.getPrizeIndex) + (this.getPrizeIndex + (this.turnId - this.getPrizeIndex));
                        if (this.turnNumber >= 16) {
                            this.turnNumber -= 8;
                        }
                    }
                }

                if (this.wheelIsRunning) {
                    // 转动效果
                    let child = this.prizeFrameNode.children[this.getPrizeIndex];

                    this.getPrizeIndex++;
                    if (this.getPrizeIndex >= this.maxPrizeIndex) {
                        this.getPrizeIndex = 0;
                    }

                    let childEnd = this.prizeFrameNode.children[this.getPrizeIndex];

                    if (child && childEnd) {
                        // child.getComponent(cc.Sprite).spriteFrame = this.selectImg[0];
                        // childEnd.getComponent(cc.Sprite).spriteFrame = this.selectImg[1];
                        if(!this.selectImg.active){
                            this.selectImg.active = true;
                        }                        
                        this.selectImg.setPosition(childEnd.getPosition());
                    }



                    // 调整速度                    
                    if (this.hasWheelDraw) {
                        // this.speed++;
                        this.speed = Math.sqrt(Math.pow((this.speed + 1), 2) + 16);                        
                    }
                }
                else {
                    let child = this.prizeFrameNode.children[this.getPrizeIndex];
                    if (child) {                        
                        this.selectImg.setPosition(child.getPosition());
                    }
                }
            }
        }
    }

    private openPrizeWin() {

    }

    private onClickChou() {
        let self = this;
        this.turnId = Math.floor(Math.random() * 5);        

        this.turnNumber = this.maxPrizeIndex * 2 - this.turnId;
        this.speed = 5;

        this.wheelIsRunning = true;
    }



}
