
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/utils/animate-utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd36dbIIzohLZ5glWF8qELi0', 'animate-utils');
// scripts/utils/animate-utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animateUtils = void 0;
/**
 * 动画工具类
 */
exports.animateUtils = {
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
    playFrameAnim: function (playNode, resUrl, resType, bundle, config, cb) {
        if (config == null)
            config = {};
        if (config.playTime == null)
            config.playTime = 99999;
        if (config.loopNum == null)
            config.loopNum = 1;
        if (config.playInterval == null)
            config.playInterval = 0.12;
        if (config.loopPause == null)
            config.loopPause = 0;
        if (config.oppositePlayback == null)
            config.oppositePlayback = false;
        if (config.endToHide == null)
            config.endToHide = true;
        var sprite = playNode.getComponent(cc.Sprite);
        if (!sprite) {
            sprite = playNode.addComponent(cc.Sprite);
        }
        sprite.sizeMode = cc.Sprite.SizeMode.RAW;
        sprite.trim = false;
        sprite.unscheduleAllCallbacks();
        if (config.endToHide)
            sprite.spriteFrame = null;
        var fun = function (assets) {
            //按照数字和字母从小到大排序
            var data = [];
            var p = 1;
            while (assets.length > 0) {
                var l = [];
                for (var i = assets.length - 1; i > -1; i--) {
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
            var assetsOpposite = null; //反向帧
            if (config.oppositePlayback) {
                //是否反向播放
                assetsOpposite = [];
                for (var i = assets.length - 1; i > -1; i--) {
                    assetsOpposite.push(assets[i]);
                }
                assets = assets.concat(assetsOpposite);
            }
            if (config.loopPause > 0) {
                //每个循环播放的停顿次数
                for (var i = 0; i < config.loopPause; i++) {
                    assets[assets.length] = null;
                }
            }
            var m = 0;
            var n = config.loopNum * assets.length;
            sprite.node.active = true;
            sprite.schedule(function () {
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
            }, config.playInterval, config.loopNum * assets.length - 1);
            sprite.scheduleOnce(function () {
                sprite.unscheduleAllCallbacks();
                if (config.endToHide) {
                    sprite.spriteFrame = null;
                    sprite.node.active = false;
                }
                cb && cb();
            }, config.playTime);
        };
        if (resType == 1) {
            this.loadDir(bundle, resUrl, cc.SpriteFrame, function (err, assets) {
                if (err)
                    return cc.warn(err);
                if (!sprite || !sprite.node || !sprite.node.isValid)
                    return;
                fun(assets);
            });
        }
        else if (resType == 2) {
            this.loadDir(bundle, resUrl, cc.SpriteAtlas, function (err, atlas) {
                if (err)
                    return cc.warn(err);
                if (!sprite || !sprite.node || !sprite.node.isValid)
                    return;
                fun(atlas.getSpriteFrames());
            });
        }
        else {
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
    playAnimate: function (spriteFrame, startNode, targetNode, callback) {
        var canvasNode = cc.director.getScene().getChildByName('Canvas');
        var startPos = canvasNode.convertToNodeSpaceAR(startNode.convertToWorldSpaceAR(cc.v2(0, 0)));
        var endPos = canvasNode.convertToNodeSpaceAR(targetNode.convertToWorldSpaceAR(cc.v2(0, 0)));
        var node = new cc.Node();
        node.setContentSize(136, 136);
        node.zIndex = 2001;
        node.setPosition(startPos);
        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = spriteFrame;
        sprite.type = cc.Sprite.Type.SIMPLE;
        sprite.sizeMode = cc.Sprite.SizeMode.RAW;
        sprite.trim = false;
        node.parent = canvasNode;
        var actions = [];
        var midPos = cc.v2(startPos.x + 150, startPos.y - 150);
        var bezier = [startPos, midPos, endPos];
        var bezierTo = cc.bezierTo(0.5, bezier);
        var scaleTo = cc.scaleTo(0.5, 0.3, 0.3);
        actions.push(cc.delayTime(0.3));
        actions.push(cc.spawn(scaleTo, bezierTo));
        actions.push(cc.fadeOut(0.2));
        actions.push(cc.callFunc(function () {
            node.destroy();
            callback && callback(targetNode);
        }));
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
    getBezier: function (time, startPoint, endPoint, height, angle) {
        // 把角度转换为弧度
        var radian = angle * 3.14159 / 180;
        // 第一个控制点为抛物线左半弧的中点
        var q1x = startPoint.x + (endPoint.x - startPoint.x) / 4;
        var q1 = cc.v2(q1x, height + startPoint.y + Math.cos(radian) * q1x);
        // 第二个控制点为整个抛物线的中点
        var q2x = startPoint.x + (endPoint.x - startPoint.x) / 2;
        var q2 = cc.v2(q2x, height + startPoint.y + Math.cos(radian) * q2x);
        // 曲线配置
        return cc.bezierTo(time, [q1, q2, endPoint]);
    }
};

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdXRpbHNcXGFuaW1hdGUtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7O0dBRUc7QUFDVSxRQUFBLFlBQVksR0FBRztJQUV4Qjs7Ozs7Ozs7Ozs7OztPQWFHO0lBQ0gsYUFBYSxFQUFiLFVBQ0ksUUFBaUIsRUFDakIsTUFBYyxFQUNkLE9BQWUsRUFDZixNQUE4QixFQUM5QixNQUF5RixFQUN6RixFQUFhO1FBRWIsSUFBSSxNQUFNLElBQUksSUFBSTtZQUFFLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEMsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUk7WUFBRSxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNyRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSTtZQUFFLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUksTUFBTSxDQUFDLFlBQVksSUFBSSxJQUFJO1lBQUUsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDNUQsSUFBSSxNQUFNLENBQUMsU0FBUyxJQUFJLElBQUk7WUFBRSxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuRCxJQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJO1lBQUUsTUFBTSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNyRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSTtZQUFFLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRELElBQUksTUFBTSxHQUFjLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDVCxNQUFNLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0M7UUFFRCxNQUFNLENBQUMsUUFB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bHMgfSBmcm9tIFwiLi9tYXRoLXV0aWxzXCI7XHJcbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gXCIuL3JhbmRvbVwiO1xyXG5cclxuLyoqXHJcbiAqIOWKqOeUu+W3peWFt+exu1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFuaW1hdGVVdGlscyA9IHtcclxuXHJcbiAgICAvKirliqjmgIHmkq3mlL7luKfliqjnlLtcclxuICAgICBAcGFyYW0gcGxheU5vZGUg5pKt5pS+5bin5Yqo55S755qE6IqC54K5XHJcbiAgICAgQHBhcmFtIHJlc1VybCDotYTmupDlm77pm4bmiJbmlaPlm77miYDlnKjnmoTmlofku7blpLko5Zu+54mH5ZCN56ew6ZqP5oSPLOaSreaUvumhuuW6j+S4uuWbvueJh+WQjeensOeahOaVsOWtl+WSjOWtl+avjeS7juWwj+WIsOWkpyksYnVuZGxl5Li6bnVsbOWImeS7jui3r+W+hOKAnHJlc291cmNlcy/igJ3lvIDlp4tcclxuICAgICBAcGFyYW0gcmVzVHlwZSDotYTmupDnsbvlnotbMTrmlaPlm74gIDI65Zu+6ZuGXVxyXG4gICAgIEBwYXJhbSBidW5kbGUgYnVuZGxl5YyFLOWPr+S7peS4um51bGxcclxuICAgICBAcGFyYW0gY29uZmlnIOWPguaVsOmFjee9ruWvueixoXsgfVxyXG4gICAgIEBwYXJhbSBjb25maWcucGxheVRpbWUg5pKt5pS+5pe26Ze0ICDpu5jorqTkuI3lvqrnjq9cclxuICAgICBAcGFyYW0gY29uZmlnLmxvb3BOdW0g5b6q546v5qyh5pWwICDpu5jorqTkuIDmrKFcclxuICAgICBAcGFyYW0gY29uZmlnLnBsYXlJbnRlcnZhbCDmkq3mlL7pl7TpmpQg6buY6K6kMC4xMuenklxyXG4gICAgIEBwYXJhbSBjb25maWcubG9vcFBhdXNlIOavj+asoeW+queOr+WBnOmhv+W4p+aVsFvmnIDnu4jml7bpl7Q95pKt5pS+6Ze06ZqUKuasoeaVsF0g6buY6K6kMFxyXG4gICAgIEBwYXJhbSBjb25maWcub3Bwb3NpdGVQbGF5YmFjayDmmK/lkKblj43lkJHmkq3mlL5b5Y2z6aG65bqP5pKt5pS+5LiA5qyhLOWGjeWAkuedgOaSreaUvuS4gOasoSznrpfkuIDkuKrlvqrnjq9dIOm7mOiupOWQplxyXG4gICAgIEBwYXJhbSBjb25maWcuZW5kVG9IaWRlIOaSreaUvuWujOavleWQjuaYr+WQpumakOiXj+WKqOeUuyAg6buY6K6k6ZqQ6JePXHJcbiAgICAgQHBhcmFtIGNiIOWKqOeUu+aSreaUvuWujOavleWQjueahOWbnuiwg1xyXG4gICAgICovXHJcbiAgICBwbGF5RnJhbWVBbmltKFxyXG4gICAgICAgIHBsYXlOb2RlOiBjYy5Ob2RlLFxyXG4gICAgICAgIHJlc1VybDogc3RyaW5nLFxyXG4gICAgICAgIHJlc1R5cGU6IG51bWJlcixcclxuICAgICAgICBidW5kbGU6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUsXHJcbiAgICAgICAgY29uZmlnPzogeyBwbGF5VGltZT8sIGxvb3BOdW0/LCBwbGF5SW50ZXJ2YWw/LCBsb29wUGF1c2U/LCBvcHBvc2l0ZVBsYXliYWNrPywgZW5kVG9IaWRlP30sXHJcbiAgICAgICAgY2I/OiBGdW5jdGlvblxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKGNvbmZpZyA9PSBudWxsKSBjb25maWcgPSB7fTtcclxuICAgICAgICBpZiAoY29uZmlnLnBsYXlUaW1lID09IG51bGwpIGNvbmZpZy5wbGF5VGltZSA9IDk5OTk5O1xyXG4gICAgICAgIGlmIChjb25maWcubG9vcE51bSA9PSBudWxsKSBjb25maWcubG9vcE51bSA9IDE7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5wbGF5SW50ZXJ2YWwgPT0gbnVsbCkgY29uZmlnLnBsYXlJbnRlcnZhbCA9IDAuMTI7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5sb29wUGF1c2UgPT0gbnVsbCkgY29uZmlnLmxvb3BQYXVzZSA9IDA7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5vcHBvc2l0ZVBsYXliYWNrID09IG51bGwpIGNvbmZpZy5vcHBvc2l0ZVBsYXliYWNrID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGNvbmZpZy5lbmRUb0hpZGUgPT0gbnVsbCkgY29uZmlnLmVuZFRvSGlkZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBzcHJpdGU6IGNjLlNwcml0ZSA9IHBsYXlOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIGlmICghc3ByaXRlKSB7XHJcbiAgICAgICAgICAgIHNwcml0ZSA9IHBsYXlOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3ByaXRlLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLlJBVztcclxuICAgICAgICBzcHJpdGUudHJpbSA9IGZhbHNlO1xyXG4gICAgICAgIHNwcml0ZS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcblxyXG4gICAgICAgIGlmIChjb25maWcuZW5kVG9IaWRlKSBzcHJpdGUuc3ByaXRlRnJhbWUgPSBudWxsO1xyXG5cclxuICAgICAgICBsZXQgZnVuID0gKGFzc2V0cykgPT4ge1xyXG4gICAgICAgICAgICAvL+aMieeFp+aVsOWtl+WSjOWtl+avjeS7juWwj+WIsOWkp+aOkuW6j1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgcCA9IDE7XHJcbiAgICAgICAgICAgIHdoaWxlIChhc3NldHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGwgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBhc3NldHMubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXNzZXRzW2ldLm5hbWUubGVuZ3RoID09IHApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbC5wdXNoKGFzc2V0c1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbC5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gZGF0YS5jb25jYXQobCk7XHJcbiAgICAgICAgICAgICAgICBwKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXNzZXRzID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgIGxldCBhc3NldHNPcHBvc2l0ZSA9IG51bGw7IC8v5Y+N5ZCR5binXHJcblxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLm9wcG9zaXRlUGxheWJhY2spIHtcclxuICAgICAgICAgICAgICAgIC8v5piv5ZCm5Y+N5ZCR5pKt5pS+XHJcbiAgICAgICAgICAgICAgICBhc3NldHNPcHBvc2l0ZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGFzc2V0cy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0c09wcG9zaXRlLnB1c2goYXNzZXRzW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFzc2V0cyA9IGFzc2V0cy5jb25jYXQoYXNzZXRzT3Bwb3NpdGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uZmlnLmxvb3BQYXVzZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8v5q+P5Liq5b6q546v5pKt5pS+55qE5YGc6aG/5qyh5pWwXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmZpZy5sb29wUGF1c2U7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFzc2V0c1thc3NldHMubGVuZ3RoXSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBtID0gMDtcclxuICAgICAgICAgICAgbGV0IG4gPSBjb25maWcubG9vcE51bSAqIGFzc2V0cy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHNwcml0ZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHNwcml0ZS5zY2hlZHVsZShcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXNzZXRzW20gJSBhc3NldHMubGVuZ3RoXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBhc3NldHNbbSAlIGFzc2V0cy5sZW5ndGhdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBtKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG0gPT0gbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGUudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmVuZFRvSGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiICYmIGNiKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbmZpZy5wbGF5SW50ZXJ2YWwsXHJcbiAgICAgICAgICAgICAgICBjb25maWcubG9vcE51bSAqIGFzc2V0cy5sZW5ndGggLSAxXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBzcHJpdGUuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNwcml0ZS51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmVuZFRvSGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYiAmJiBjYigpO1xyXG4gICAgICAgICAgICB9LCBjb25maWcucGxheVRpbWUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChyZXNUeXBlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkRGlyKGJ1bmRsZSwgcmVzVXJsLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgYXNzZXRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2Mud2FybihlcnIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzcHJpdGUgfHwgIXNwcml0ZS5ub2RlIHx8ICFzcHJpdGUubm9kZS5pc1ZhbGlkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBmdW4oYXNzZXRzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXNUeXBlID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkRGlyKGJ1bmRsZSwgcmVzVXJsLCBjYy5TcHJpdGVBdGxhcywgKGVyciwgYXRsYXM6IGNjLlNwcml0ZUF0bGFzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gY2Mud2FybihlcnIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzcHJpdGUgfHwgIXNwcml0ZS5ub2RlIHx8ICFzcHJpdGUubm9kZS5pc1ZhbGlkKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBmdW4oYXRsYXMuZ2V0U3ByaXRlRnJhbWVzKCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy53YXJuKFwi5Yqo55S757G75Z6L5pyq5a6e546wXCIsIHJlc1R5cGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgKiDmkq3mlL7kuIDkuKrotJ3loZ7lsJTmm7Lnur/nmoTmkq3mlL7ovajov7ks55So5LqO6YeR5biB77yM56CW55+z77yM6YGT5YW36aOe5YWl6IOM5YyFXHJcbiAgICogQHBhcmFtIHNwcml0ZUZyYW1lIFxyXG4gICAqIEBwYXJhbSBzdGFydE5vZGUgXHJcbiAgICogQHBhcmFtIHRhcmdldCBcclxuICAgKiBAcGFyYW0gY2FsbGJhY2sgXHJcbiAgICogQHBhcmFtIHNjYWxlIFxyXG4gICAqL1xyXG4gICAgcGxheUFuaW1hdGUoc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lLCBzdGFydE5vZGU6IGNjLk5vZGUsIHRhcmdldE5vZGU6IGNjLk5vZGUsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGxldCBjYW52YXNOb2RlID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZSgnQ2FudmFzJyk7XHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zID0gY2FudmFzTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzdGFydE5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKSk7XHJcbiAgICAgICAgbGV0IGVuZFBvcyA9IGNhbnZhc05vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodGFyZ2V0Tm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpKTtcclxuXHJcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIG5vZGUuc2V0Q29udGVudFNpemUoMTM2LCAxMzYpO1xyXG4gICAgICAgIG5vZGUuekluZGV4ID0gMjAwMTtcclxuICAgICAgICBub2RlLnNldFBvc2l0aW9uKHN0YXJ0UG9zKTtcclxuICAgICAgICBsZXQgc3ByaXRlID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICBzcHJpdGUudHlwZSA9IGNjLlNwcml0ZS5UeXBlLlNJTVBMRTtcclxuICAgICAgICBzcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuUkFXO1xyXG4gICAgICAgIHNwcml0ZS50cmltID0gZmFsc2U7XHJcbiAgICAgICAgbm9kZS5wYXJlbnQgPSBjYW52YXNOb2RlO1xyXG4gICAgICAgIGxldCBhY3Rpb25zID0gW107XHJcbiAgICAgICAgbGV0IG1pZFBvcyA9IGNjLnYyKHN0YXJ0UG9zLnggKyAxNTAsIHN0YXJ0UG9zLnkgLSAxNTApO1xyXG4gICAgICAgIGxldCBiZXppZXIgPSBbc3RhcnRQb3MsIG1pZFBvcywgZW5kUG9zXTtcclxuICAgICAgICBsZXQgYmV6aWVyVG8gPSBjYy5iZXppZXJUbygwLjUsIGJlemllcik7XHJcbiAgICAgICAgbGV0IHNjYWxlVG8gPSBjYy5zY2FsZVRvKDAuNSwgMC4zLCAwLjMpXHJcbiAgICAgICAgYWN0aW9ucy5wdXNoKGNjLmRlbGF5VGltZSgwLjMpKTtcclxuICAgICAgICBhY3Rpb25zLnB1c2goY2Muc3Bhd24oc2NhbGVUbywgYmV6aWVyVG8pKTtcclxuICAgICAgICBhY3Rpb25zLnB1c2goY2MuZmFkZU91dCgwLjIpKVxyXG4gICAgICAgIGFjdGlvbnMucHVzaChjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayh0YXJnZXROb2RlKTtcclxuICAgICAgICB9KSlcclxuXHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0aW9ucykpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiOt+WPlumHkeW4gei/kOWKqOeahOabsue6v1xyXG4gICAgICogQHBhcmFtIHRpbWUg5pe26Ze0IFxyXG4gICAgICogQHBhcmFtIHN0YXJ0UG9pbnQg5byA5aeL5Z2Q5qCHXHJcbiAgICAgKiBAcGFyYW0gZW5kUG9pbnQg57uT5p2f5Z2Q5qCHXHJcbiAgICAgKiBAcGFyYW0gaGVpZ2h0IOmrmOW6plxyXG4gICAgICogQHBhcmFtIGFuZ2xlIOinkuW6plxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIGdldEJlemllcih0aW1lLCBzdGFydFBvaW50LCBlbmRQb2ludCwgaGVpZ2h0LCBhbmdsZSkge1xyXG4gICAgICAgIC8vIOaKiuinkuW6pui9rOaNouS4uuW8p+W6plxyXG4gICAgICAgIGxldCByYWRpYW4gPSBhbmdsZSAqIDMuMTQxNTkgLyAxODA7XHJcbiAgICAgICAgLy8g56ys5LiA5Liq5o6n5Yi254K55Li65oqb54mp57q/5bem5Y2K5byn55qE5Lit54K5XHJcbiAgICAgICAgbGV0IHExeCA9IHN0YXJ0UG9pbnQueCArIChlbmRQb2ludC54IC0gc3RhcnRQb2ludC54KSAvIDQ7XHJcbiAgICAgICAgbGV0IHExID0gY2MudjIocTF4LCBoZWlnaHQgKyBzdGFydFBvaW50LnkgKyBNYXRoLmNvcyhyYWRpYW4pICogcTF4KTtcclxuICAgICAgICAvLyDnrKzkuozkuKrmjqfliLbngrnkuLrmlbTkuKrmipvniannur/nmoTkuK3ngrlcclxuICAgICAgICBsZXQgcTJ4ID0gc3RhcnRQb2ludC54ICsgKGVuZFBvaW50LnggLSBzdGFydFBvaW50LngpIC8gMjtcclxuICAgICAgICBsZXQgcTIgPSBjYy52MihxMngsIGhlaWdodCArIHN0YXJ0UG9pbnQueSArIE1hdGguY29zKHJhZGlhbikgKiBxMngpO1xyXG4gICAgICAgIC8vIOabsue6v+mFjee9rlxyXG4gICAgICAgIHJldHVybiBjYy5iZXppZXJUbyh0aW1lLCBbcTEsIHEyLCBlbmRQb2ludF0pO1xyXG4gICAgfVxyXG59Il19