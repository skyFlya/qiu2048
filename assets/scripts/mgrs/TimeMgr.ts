import { objectUtils } from "../utils/object-utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TimeMgr {

    private static _instance: TimeMgr = null;


    public static getInstance() {
        if (TimeMgr._instance == null) {
            TimeMgr._instance = new TimeMgr();            
        }
        return TimeMgr._instance;
    }


    private timer = null;
    private timeData = [];
    private curTime = 0;

    private redIsOpen = false;
    private redType = 0;        //0默认没有按钮，1.误点版本, 2.正常版本

    //间隔时间,是否开启，当前累积
    public init(): void {
        objectUtils.loadRes("common/jsons/AdData", cc.JsonAsset, {
            onComplete: (err, data: cc.JsonAsset) => {           
                let jsonData = data.json;              
            }
        })

        this.timer = setInterval(this.timeFun, 1000);
    }

    private timeFun() {
        this.curTime++;
    }


}
