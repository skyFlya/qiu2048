import { App } from "../app/App";
import { UICfg } from "../cfg/UICfg";
import { SoundMgr } from "../mgrs/SoundMgr";
import { SaveManager } from "../saveManager/SaveManager";
import UIBase from "../ui/UIBase";
import { UIUtils } from "../ui/UIUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PannelMySet extends UIBase {

    @property(cc.Sprite)
    private imgAvar:cc.Sprite = null;

    @property(cc.Button)
    private itemBgm:cc.Button = null;

    @property(cc.Button)
    private itemMusic:cc.Button = null;

    @property(cc.Button)
    private itemOnline:cc.Button = null;

    @property(cc.Button)
    private itemClearData:cc.Button = null;

    @property(cc.Button)
    private itemUser:cc.Button = null;

    @property(cc.Button)
    private itemPrivacy:cc.Button = null;

    @property(cc.Button)
    private itemAbout:cc.Button = null;

    @property(cc.Button)
    private btnClose:cc.Button = null;

    @property(cc.SpriteFrame)
    private switchSpr1:cc.SpriteFrame[] = [];

    @property(cc.SpriteFrame)
    private switchSpr2:cc.SpriteFrame[] = [];

    constructor() {
        super();
        this._uiName = UICfg.PannelMySet.name;
    }

    onLoad(){
        UIUtils.addClickEvent(this.btnClose.node, this.onCloseClick, this);
        UIUtils.addClickEvent(this.itemBgm.node, this.onClickBgm, this);
        UIUtils.addClickEvent(this.itemMusic.node, this.onClickMusic, this);
        UIUtils.addClickEvent(this.itemOnline.node, this.onClickOnLine, this);
        UIUtils.addClickEvent(this.itemClearData.node, this.onClickClearData, this);
        UIUtils.addClickEvent(this.itemUser.node, this.onClickUser, this);
        UIUtils.addClickEvent(this.itemPrivacy.node, this.onClickPrivacy, this);
        UIUtils.addClickEvent(this.itemAbout.node, this.onClickAbout, this);        
    }

    start(){
        this.checkMusic();
    }

    checkMusic(){
        if(SoundMgr.getInstance().isMusic){
            this.itemBgm.node.getChildByName("on1").getComponent(cc.Sprite).spriteFrame = this.switchSpr1[1];
            let one2 = this.itemBgm.node.getChildByName("on1").getChildByName("on2");
            one2.getComponent(cc.Sprite).spriteFrame = this.switchSpr2[1];
            one2.x = 35;

            this.itemMusic.node.getChildByName("on1").getComponent(cc.Sprite).spriteFrame = this.switchSpr1[1];
            let one22 = this.itemMusic.node.getChildByName("on1").getChildByName("on2");
            one22.getComponent(cc.Sprite).spriteFrame = this.switchSpr2[1];
            one22.x = 35;
        }
        else{
            this.itemBgm.node.getChildByName("on1").getComponent(cc.Sprite).spriteFrame = this.switchSpr1[0];
            let one2 = this.itemBgm.node.getChildByName("on1").getChildByName("on2");
            one2.getComponent(cc.Sprite).spriteFrame = this.switchSpr2[0];
            one2.x = -35;

            this.itemMusic.node.getChildByName("on1").getComponent(cc.Sprite).spriteFrame = this.switchSpr1[0];
            let one22 = this.itemMusic.node.getChildByName("on1").getChildByName("on2");
            one22.getComponent(cc.Sprite).spriteFrame = this.switchSpr2[0];
            one22.x = -35;
        }
    }

    onClickBgm(){
        SoundMgr.getInstance().isMusic = !SoundMgr.getInstance().isMusic;
        if(SoundMgr.getInstance().isMusic){
            this.itemBgm.node.getChildByName("on1").getComponent(cc.Sprite).spriteFrame = this.switchSpr1[1];
            let one2 = this.itemBgm.node.getChildByName("on1").getChildByName("on2");
            one2.getComponent(cc.Sprite).spriteFrame = this.switchSpr2[1];
            one2.x = 35;
        }
        else{
            this.itemBgm.node.getChildByName("on1").getComponent(cc.Sprite).spriteFrame = this.switchSpr1[0];
            let one2 = this.itemBgm.node.getChildByName("on1").getChildByName("on2");
            one2.getComponent(cc.Sprite).spriteFrame = this.switchSpr2[0];
            one2.x = -35;
        }
    }

    onClickMusic(){
        SoundMgr.getInstance().isSound = !SoundMgr.getInstance().isSound;
        if(SoundMgr.getInstance().isSound){
            this.itemMusic.node.getChildByName("on1").getComponent(cc.Sprite).spriteFrame = this.switchSpr1[1];
            let one2 = this.itemMusic.node.getChildByName("on1").getChildByName("on2");
            one2.getComponent(cc.Sprite).spriteFrame = this.switchSpr2[1];
            one2.x = 35;
        }
        else{
            this.itemMusic.node.getChildByName("on1").getComponent(cc.Sprite).spriteFrame = this.switchSpr1[0];
            let one2 = this.itemMusic.node.getChildByName("on1").getChildByName("on2");
            one2.getComponent(cc.Sprite).spriteFrame = this.switchSpr2[0];
            one2.x = -35;
        }
    }

    onClickOnLine(){

    }

    onClickClearData(){
        SaveManager.Instance().removeAllItem();
    }
    
    onClickUser(){

    }

    onClickPrivacy(){

    }

    onClickAbout(){
        App.uiMgr.openUI(UICfg.PannelAboutMy.name);
    }

}
