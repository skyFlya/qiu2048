import { mathUtils } from "./math-utils";
import { random } from "./random";

/**
 * 动画工具类
 */
export const animateUtils = {

    /**动态播放帧动画
     @param playNode 播放帧动画的节点
     @param resUrl 资源图集或散图所在的文件夹(图片名称随意,播放顺序为图片名称的数字和字母从小到大),bundle为null则从路径“resources/”开始
     @param resType 资源类型[1:散图  2:图集]
     @param bundle bundle包,可以为null
     @param config 参数配置对象{ }
     @param config.playTime 播放时间  默认不循环
     @param config.loopNum 循环次数  默认一次
     @param config.playInterval 播放间隔 默认0.12秒
     @param config.loopPause 每次循环停顿帧数[最终时间=播放间隔*次数] 默认0
     @param config.oppositePlayback 是否反向播放[即顺序播放一次,再倒着播放一次,算一个循环] 默认否
     @param config.endToHide 播放完毕后是否隐藏动画  默认隐藏
     @param cb 动画播放完毕后的回调
     */
    playFrameAnim(
        playNode: cc.Node,
        resUrl: string,
        resType: number,
        bundle: cc.AssetManager.Bundle,
        config?: { playTime?, loopNum?, playInterval?, loopPause?, oppositePlayback?, endToHide?},
        cb?: Function
    ) {
        if (config == null) config = {};
        if (config.playTime == null) config.playTime = 99999;
        if (config.loopNum == null) config.loopNum = 1;
        if (config.playInterval == null) config.playInterval = 0.12;
        if (config.loopPause == null) config.loopPause = 0;
        if (config.oppositePlayback == null) config.oppositePlayback = false;
        if (config.endToHide == null) config.endToHide = true;

        let sprite: cc.Sprite = playNode.getComponent(cc.Sprite);
        if (!sprite) {
            sprite = playNode.addComponent(cc.Sprite);
        }

        sprite.sizeMode = cc.Sprite.SizeMode.RAW;
        sprite.trim = false;
        sprite.unscheduleAllCallbacks();

        if (config.endToHide) sprite.spriteFrame = null;

        let fun = (assets) => {
            //按照数字和字母从小到大排序
            let data = [];
            let p = 1;
            while (assets.length > 0) {
                let l = [];
                for (let i = assets.length - 1; i > -1; i--) {
                    if (assets[i].name.length == p) {
                        l.push(assets[i]);
                        assets.splice(i, 1);
                    }
                }
                l.reverse();
                data = data.concat(l);
                p++;
            }
            assets = data;

            let assetsOpposite = null; //反向帧

            if (config.oppositePlayback) {
                //是否反向播放
                assetsOpposite = [];
                for (let i = assets.length - 1; i > -1; i--) {
                    assetsOpposite.push(assets[i]);
                }
                assets = assets.concat(assetsOpposite);
            }

            if (config.loopPause > 0) {
                //每个循环播放的停顿次数
                for (let i = 0; i < config.loopPause; i++) {
                    assets[assets.length] = null;
                }
            }

            let m = 0;
            let n = config.loopNum * assets.length;
            sprite.node.active = true;
            sprite.schedule(
                () => {
                    if (assets[m % assets.length]) {
                        sprite.spriteFrame = assets[m % assets.length];
                    }
                    m++;
                    if (m == n) {
                        sprite.unscheduleAllCallbacks();
                        if (config.endToHide) {
                            sprite.spriteFrame = null;
                            sprite.node.active = false;
                        }
                        cb && cb();
                    }
                },
                config.playInterval,
                config.loopNum * assets.length - 1
            );

            sprite.scheduleOnce(() => {
                sprite.unscheduleAllCallbacks();
                if (config.endToHide) {
                    sprite.spriteFrame = null;
                    sprite.node.active = false;
                }
                cb && cb();
            }, config.playTime);
        };

        if (resType == 1) {
            this.loadDir(bundle, resUrl, cc.SpriteFrame, (err, assets) => {
                if (err) return cc.warn(err);
                if (!sprite || !sprite.node || !sprite.node.isValid) return;
                fun(assets);
            });
        } else if (resType == 2) {
            this.loadDir(bundle, resUrl, cc.SpriteAtlas, (err, atlas: cc.SpriteAtlas) => {
                if (err) return cc.warn(err);
                if (!sprite || !sprite.node || !sprite.node.isValid) return;
                fun(atlas.getSpriteFrames());
            });
        } else {
            cc.warn("动画类型未实现", resType);
        }
    },
    /**
   * 播放一个贝塞尔曲线的播放轨迹,用于金币，砖石，道具飞入背包
   * @param spriteFrame 
   * @param startNode 
   * @param target 
   * @param callback 
   * @param scale 
   */
    playAnimate(spriteFrame: cc.SpriteFrame, startNode: cc.Node, targetNode: cc.Node, callback: Function) {
        let canvasNode = cc.director.getScene().getChildByName('Canvas');
        let startPos = canvasNode.convertToNodeSpaceAR(startNode.convertToWorldSpaceAR(cc.v2(0, 0)));
        let endPos = canvasNode.convertToNodeSpaceAR(targetNode.convertToWorldSpaceAR(cc.v2(0, 0)));

        let node = new cc.Node();
        node.setContentSize(136, 136);
        node.zIndex = 2001;
        node.setPosition(startPos);
        let sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
        sprite.type = cc.Sprite.Type.SIMPLE;
        sprite.sizeMode = cc.Sprite.SizeMode.RAW;
        sprite.trim = false;
        node.parent = canvasNode;
        let actions = [];
        let midPos = cc.v2(startPos.x + 150, startPos.y - 150);
        let bezier = [startPos, midPos, endPos];
        let bezierTo = cc.bezierTo(0.5, bezier);
        let scaleTo = cc.scaleTo(0.5, 0.3, 0.3)
        actions.push(cc.delayTime(0.3));
        actions.push(cc.spawn(scaleTo, bezierTo));
        actions.push(cc.fadeOut(0.2))
        actions.push(cc.callFunc(() => {
            node.destroy();
            callback && callback(targetNode);
        }))

        node.runAction(cc.sequence(actions));
    },

    /**
     * 获取金币运动的曲线
     * @param time 时间 
     * @param startPoint 开始坐标
     * @param endPoint 结束坐标
     * @param height 高度
     * @param angle 角度
     * @returns 
     */
    getBezier(time, startPoint, endPoint, height, angle) {
        // 把角度转换为弧度
        let radian = angle * 3.14159 / 180;
        // 第一个控制点为抛物线左半弧的中点
        let q1x = startPoint.x + (endPoint.x - startPoint.x) / 4;
        let q1 = cc.v2(q1x, height + startPoint.y + Math.cos(radian) * q1x);
        // 第二个控制点为整个抛物线的中点
        let q2x = startPoint.x + (endPoint.x - startPoint.x) / 2;
        let q2 = cc.v2(q2x, height + startPoint.y + Math.cos(radian) * q2x);
        // 曲线配置
        return cc.bezierTo(time, [q1, q2, endPoint]);
    }
}