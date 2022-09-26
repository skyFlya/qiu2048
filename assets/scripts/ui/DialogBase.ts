import { App } from "../app/App";
import UIBase from "./UIBase";
import { UIUtils } from "./UIUtils";
const { ccclass, property } = cc._decorator;

export const enum DialogClickType  {
    CLOSE = 0,
    SURE,
    CANCEL
}

@ccclass
export default class DialogBase extends UIBase {

    @property(cc.RichText)
    rtContent: cc.RichText = null;

    @property(cc.Label)
    lblTitle: cc.Label = null;

    @property(cc.Sprite)
    spTitle: cc.Sprite = null;

    @property(cc.Button)
    btnClose: cc.Button = null;

    @property(cc.Button)
    btnSure: cc.Button = null;

    @property(cc.Button)
    btnCancel: cc.Button = null;

    protected _dialogId: number = 0;
    protected _callback: (code: DialogClickType) => void = null;
    protected _atlas: cc.SpriteAtlas = null;

    public set content(content: string) {
        this.rtContent && (this.rtContent.string = content);
    }

    public set title(title: string) {
        this.lblTitle && (this.lblTitle.string = title);
        if (this.spTitle) {
            if (!this._atlas) {
                this._atlas = cc.loader.getRes('common/atlas/common', cc.SpriteAtlas);
            }
            if (this._atlas) {
                let spriteFrame: cc.SpriteFrame = null;
                switch (title) {
                    case '提示':
                        spriteFrame = this._atlas.getSpriteFrame('alert_title_tips');
                        break;
                    case '规则说明':
                        spriteFrame = this._atlas.getSpriteFrame('alert_title_rule');
                        break;
                    default:
                        spriteFrame = this._atlas.getSpriteFrame('alert_title_tips');
                        break;
                }
                spriteFrame && (this.spTitle.spriteFrame = spriteFrame);
            }
          
        }
    }

    public set dialogId(dialogId: number) {
        this._dialogId = dialogId;
    }

    public get dialogId(): number {
        return this._dialogId;
    }

    public set horizontalAlign(align: number) {
        this.rtContent.horizontalAlign = align;
    }

    public setClickCallback(callback: (code: DialogClickType)=> void): void {
        if (callback && typeof(callback) == 'function') {
            this._callback = callback;
        }
    }

    protected addUIEvent(): void {
        this.btnClose && UIUtils.addClickEvent(this.btnClose.node, this.onCloseClick, this);
        this.btnSure && UIUtils.addClickEvent(this.btnSure.node, this.onSureClick, this);
        this.btnCancel && UIUtils.addClickEvent(this.btnCancel.node, this.onCancelClick, this);
    }

    protected onSureClick(): void {
        this._callback && this._callback(DialogClickType.SURE);
        App.dialogMgr.closeDialogById(this.dialogId);
    }

    protected onCancelClick(): void {
        this._callback && this._callback(DialogClickType.CANCEL);
        App.dialogMgr.closeDialogById(this.dialogId);
    }

    protected onCloseClick(): void {
        this._callback && this._callback(DialogClickType.CLOSE);
        App.dialogMgr.closeDialogById(this.dialogId);
    }


}