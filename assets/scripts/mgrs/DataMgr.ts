const {ccclass, property} = cc._decorator;

@ccclass
export default class DataMgr {
    static _instance: DataMgr;

    static get instance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new DataMgr();
        return this._instance;
    }

    public init() {
        cc.assetManager.resources.load("json/fish", cc.JsonAsset, (err, content) => {            
            
        });
    }



}
