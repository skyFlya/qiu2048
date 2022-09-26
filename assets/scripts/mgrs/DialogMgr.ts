import { App } from "../app/App";
import DialogBase, { DialogClickType } from "../ui/DialogBase";
import UIBase from "../ui/UIBase";


export class DialogMgr {

    private static _instance: DialogMgr = null;
    private static _dialogId: number = 0;

    private _waittingDisplayList: Array<any> = [];
    private _curDisplay: any = null;

    public static getInstance(): DialogMgr {
        if (DialogMgr._instance == null) {
            DialogMgr._instance = new DialogMgr();
        }
        return DialogMgr._instance;
    }

    public static destroyInstance():void {
        if (DialogMgr._instance) {
            DialogMgr._instance = null;
        }
    }

    public showDialog(name: string, content: string, callback?: (dialogBase: DialogBase) => void, clickCallback?: (code: DialogClickType) => void): number {
        const dialogId = ++DialogMgr._dialogId;
        if (this._curDisplay) {
            this._waittingDisplayList.push({
                dialogId: dialogId,
                name: name,
                content: content,
                callback: callback,
                clickCallback: clickCallback
            });
        } else {
            this._curDisplay = {
                dialogId: dialogId,
                name: name,
                content: content,
                callback: callback,
                clickCallback: clickCallback
            }
            App.uiMgr.openUI(name, (uiBase: UIBase)=>{
                const dialog = uiBase as DialogBase;
                dialog.content = content;
                dialog.dialogId = dialogId;
                dialog.setClickCallback(clickCallback); 
                callback && callback(dialog);
            });
        }
        return dialogId;
    }

    public closeDialog(dialog: DialogBase): void {
        dialog && this.closeDialogById(dialog.dialogId);
    }

    public closeDialogById(dialogId: number): void {
        if (this._curDisplay && this._curDisplay.dialogId == dialogId) {
            App.uiMgr.closeUI(this._curDisplay.name, true, ()=>{
                this._curDisplay = null;
                this.tryShowNext();
            });
        } else {
            for (let i = 0; i < this._waittingDisplayList.length; i++) {
                if (this._waittingDisplayList[i].dialogId == dialogId) {
                    this._waittingDisplayList.splice(i, 1);
                    break;
                }
            }
        }
    }

    public clearDialogs(): void {
        if (this._curDisplay) {
            App.uiMgr.closeUI(this._curDisplay.name);
            this._curDisplay = null;
        }
        this._waittingDisplayList = [];
    }

    private tryShowNext(): void {
        if (this._curDisplay == null && this._waittingDisplayList.length > 0) {
            const cfg = this._waittingDisplayList.shift();
            this._curDisplay = cfg;
            App.uiMgr.openUI(cfg.name, (uiBase: UIBase)=>{
                const dialog = uiBase as DialogBase;
                dialog.content = cfg.content;
                dialog.dialogId = cfg.dialogId;
                dialog.setClickCallback(cfg.clickCallback); 
                cfg.callback && cfg.callback(dialog);
            });
        }
    }
}