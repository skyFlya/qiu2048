import { animateUtils } from "./animate-utils";
import { mathUtils } from "./math-utils";
import { random } from "./random";

/**
 * 对象工具类
 */
export const objectUtils = {
    /**
     * 深拷贝
     * @param Obj 对象
     */
    cloneObject(Obj) {
        var buf;
        if (Obj instanceof Array) {
            buf = [];
            for (let i = 0; i < Obj.length; i++) {
                buf[i] = objectUtils.cloneObject(Obj[i]);
            }

            return buf;
        } else if (Obj instanceof Object) {
            buf = {};
            for (let k = 0; k < Object.keys(Obj).length; k++) {
                buf[Object.keys(Obj)[k]] = objectUtils.cloneObject(Obj[Object.keys(Obj)[k]]);
            }
            return buf;
        } else {
            return Obj;
        }
    },

    loadRes(path: string, type: typeof cc.Asset,
        options: {
            onProgress?: (finish: number, total: number, item: cc.AssetManager.RequestItem) => void,
            onComplete?: (error: Error, assets: cc.Asset | cc.Asset[]) => void,
        } = {}): void {
        let {
            onComplete = null,
            onProgress = null,
        } = options;

        // if (CC_DEBUG) {
        //     cc.log(`${this.logTag} loadRes path : ${path}`)
        // }
        if (onProgress) {
            cc.assetManager.resources.load(path, type, onProgress, onComplete)
        } else {
            cc.assetManager.resources.load(path, type, onComplete)
        }
    },

    palyCoinJump(startNode: cc.Node, endNode: cc.Node, parent?: cc.Node) {
        this.loadRes(`prefabs/coinAnimation`, cc.Prefab, {
            onComplete: (error, assest: cc.Prefab) => {
                let num = 5;
                let finish = null;
                let stepTime = 0.1;
                let start = null;

                if(!parent){
                    parent = cc.Canvas.instance.node;
                }

                for (let index = 0; index < num; index++) {
                    let redPack: cc.Node = cc.instantiate(assest);

                    redPack.parent = parent;
                    const startV2 = mathUtils.convertToParent(startNode, parent);
                    const endV2 = mathUtils.convertToParent(endNode, parent);
                    cc.tween(redPack)
                        .set({ position: cc.v3(startV2.x + random.findRandomBase(-75, 75), startV2.y), scale: 1 })
                        .delay(index * stepTime)
                        .by(0.3, { position: cc.v3(0, 100) })
                        .parallel(cc.tween(redPack).then(animateUtils.getBezier(0.5, startV2, endV2, 100, 60)), cc.tween(redPack).to(0.8, { scale: 0.5 }))
                        .delay(0.1)
                        .call(() => {
                            redPack.destroy();
                            if (index == num - 1) {
                                finish && finish();
                            }
                            if (index == 0) {
                                start && start();
                            }
                        })
                        .start()
                }
            }
        })
    }

}