
/**
 * @description 本地数据存储，为了后面可能需要对数据进入加密保存等，把cocos的封闭一层
 */


import { objectUtils } from "../utils/object-utils";
import { Save, SaveItemConig } from "./Save";

type StorageVauleType = "number" | "string" | "boolean" | "object";
interface StorageData {
    type: StorageVauleType,
    value: string | number | boolean | object;

}
export class SaveManager {
    private static _instance: SaveManager = null;
    public static Instance() { return this._instance || (this._instance = new SaveManager()); }

    public init() {
        //每日刷新
        let date = new Date()
        let text = parseInt((date.getMonth() + 1) + "" + date.getDay() + "")
        if (this.getItem(Save.todayInfo) != text) {
            // for (let m in Save) {
            //     let item = Save[m]
            //     if (item && item.isDayUpdate) {                    
            //         this.setItem(item, item.default);
            //     }
            // }    
            if (!CC_EDITOR) {
                cc.log("每次刷新···································", text);
                // this.setItem(Save.isPopSignView, 0);
                // this.setItem(Save.taskOkArray, []);
                // this.setItem(Save.todayInfo, text);
                // this.setItem(Save.isShowNewCashOutTip, false);
            }
        }
    }

    public getItem(item: SaveItemConig) {
        let value = cc.sys.localStorage.getItem(item.key);
        if (value) {
            //解析
            try {
                let data = value;
                let result: StorageData = JSON.parse(data);
                if (result.type) {
                    return result.value;
                } else {
                    return value;
                }
            } catch (error) {
                return value;
            }
        }
        else {
            return objectUtils.cloneObject(item.default);
        }
    }

    public setItem(item: SaveItemConig, value: string | number | boolean | object) {

        let type = typeof value;
        if (type == "number" || type == "string" || type == "boolean" || type == "object") {
            let saveObj: StorageData = { type: type, value: value };
            //加密
            try {
                let data = saveObj;
                cc.sys.localStorage.setItem(item.key, JSON.stringify(data));
            } catch (error) {
                if (CC_DEBUG) cc.error(error);
            }
        } else {
            if (CC_DEBUG) cc.error(`存储数据类型不支持 当前的存储类型: ${type}`);
        }
    }

    public removeItem(item: SaveItemConig) {
        cc.sys.localStorage.removeItem(item.key);
    }

    public removeAllItem() {
        cc.sys.localStorage.clear()
    }

}