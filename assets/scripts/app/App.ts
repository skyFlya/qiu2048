import { DialogMgr } from "../mgrs/DialogMgr";
import { SoundMgr } from "../mgrs/SoundMgr";
import { UICfgMgr } from "../mgrs/UICfgMgr";
import { UIMgr } from "../mgrs/UIMgr";


export class App {

    public static get uiMgr(): UIMgr {
        return UIMgr.getInstance();
    }

    public static get uiCfgMgr(): UICfgMgr {
        return UICfgMgr.getInstance();
    }


    public static get soundMgr(): SoundMgr {
        return SoundMgr.getInstance();
    }

    public static get dialogMgr(): DialogMgr {
        return DialogMgr.getInstance();
    }
}