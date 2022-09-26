
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/platform/WebViewPlatform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0a04gRMd5HFoO9o0f5UfoD', 'WebViewPlatform');
// scripts/platform/WebViewPlatform.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebViewPlatform = /** @class */ (function () {
    function WebViewPlatform() {
    }
    WebViewPlatform.getInstance = function () {
        if (WebViewPlatform._instance == null) {
            WebViewPlatform._instance = new WebViewPlatform();
        }
        return WebViewPlatform._instance;
    };
    /**JS调用 */
    WebViewPlatform.prototype.jsCall = function (methodName, args, cb) {
        cc.log("调用原生方法" + methodName, args);
        var info = window["Xmiles"] && window["Xmiles"][methodName] && window["Xmiles"][methodName](JSON.stringify(args));
        cc.log("原生方法返回值", info);
        return info;
    };
    /**
    * 与SDK交互通信
    * @param funcName 方法名
    * @param params 参数
    * @param callback 回调
    */
    WebViewPlatform.prototype.call = function (funcName, params, callback) {
        return this.callWebView(funcName, params, callback);
    };
    ;
    WebViewPlatform.prototype.callWebView = function (methodName, args, cb) {
        var ret = '';
        if (typeof args == 'function') {
            cb = args;
            args = {};
        }
        if (typeof cb == 'function') {
            window['dscb'] = window['dscb'] || 0;
            var cbName = 'dscb' + window['dscb']++;
            window[cbName] = cb;
            args['_dscbstub'] = cbName;
        }
        args = JSON.stringify(args || {});
        cc.log("原生调用 _methodName: " + methodName + " args: " + args);
        if (window['_dswk']) {
            ret = prompt(window['_dswk'] + methodName, args);
        }
        else {
            if (typeof window['_dsbridge'] == 'function') {
                ret = window['_dsbridge'](methodName, args);
            }
            else if (window['_dsbridge']) {
                ret = window['_dsbridge'].call(methodName, args);
            }
            else {
                cc.log('找不到_dsbridge');
                this.callBrowser(methodName, args);
            }
        }
        return ret;
    };
    ;
    WebViewPlatform.prototype.callBrowser = function (method, args) {
        if (method == 'launch') {
            var object = JSON.parse(args);
            var param = object.param;
            var html = this.getParameterByName(param, 'htmlUrl');
            location.href = html;
        }
    };
    ;
    WebViewPlatform.prototype.getParameterByName = function (url, name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(url);
        return results == null ? "" : decodeURIComponent(results[1]);
    };
    ;
    WebViewPlatform.prototype.getQueryString = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null)
            return unescape(r[2]);
        return null;
    };
    WebViewPlatform.prototype.getHost = function () {
        return this.call("getHost");
    };
    WebViewPlatform.prototype.showNoNetworkDialog = function () {
        this.call("showNoNetworkDialog");
    };
    WebViewPlatform.prototype.getNotchHeight = function () {
        var str = this.call("getNotchHeight");
        return JSON.parse(str);
    };
    WebViewPlatform.prototype.getStatusBarHeight = function () {
        var str = this.call("getStatusBarHeight");
        return JSON.parse(str);
    };
    WebViewPlatform.prototype.finishCocosLaunch = function () {
        this.call("finishCocosLaunch");
    };
    WebViewPlatform.prototype.bind = function (cb) {
        this.call('bind', cb);
    };
    WebViewPlatform.prototype.isTest = function () {
        return 'true' === (this.call("isTest"));
    };
    WebViewPlatform.prototype.enableOnResumeOnPause = function (enable) {
        this.call('enableOnResumeOnPause', { enable: enable });
    };
    WebViewPlatform.prototype.launchH5Page = function (url, title) {
        this.call('launchH5Page', { url: url, title: title });
    };
    WebViewPlatform.prototype.launchPromoteLinkPage = function (taskId) {
        this.call('launchPromoteLinkPage', { taskId: taskId });
    };
    /**
     * 提交埋点
     * @param obj 神策参数
     * @param callback 回调
     */
    WebViewPlatform.prototype.track = function (obj, callback) {
        this.jsCall('track', obj, callback);
    };
    WebViewPlatform._instance = null;
    return WebViewPlatform;
}());
exports.default = WebViewPlatform;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxhdGZvcm1cXFdlYlZpZXdQbGF0Zm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFtSUEsQ0FBQztJQWhJaUIsMkJBQVcsR0FBekI7UUFDSSxJQUFJLGVBQWUsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ25DLGVBQWUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztTQUNyRDtRQUNELE9BQU8sZUFBZSxDQUFDLFNBQVMsQ0FBQztJQUNyQyxDQUFDO0lBSUQsVUFBVTtJQUNGLGdDQUFNLEdBQWQsVUFBZSxVQUFrQixFQUFFLElBQUksRUFBRSxFQUFHO1FBQ3hDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNuQyxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDakgsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdkIsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRUQ7Ozs7O01BS0U7SUFDRiw4QkFBSSxHQUFKLFVBQUssUUFBZ0IsRUFBRSxNQUFZLEVBQUUsUUFBbUI7UUFDcEQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUFBLENBQUM7SUFFTSxxQ0FBVyxHQUFuQixVQUFvQixVQUFrQixFQUFFLElBQUksRUFBRSxFQUFHO1FBQzdDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksT0FBTyxJQUFJ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QyxDQUFBO0lBQzFELENBQUM7SUFDRCxzQ0FBWSxHQUFaLFVBQWEsR0FBVyxFQUFFLEtBQWE7UUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBQ3pELENBQUM7SUFDRCwrQ0FBcUIsR0FBckIsVUFBc0IsTUFBYztRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDMUQsQ0FBQztJQUVEOzs7O09BSUc7SUFDRiwrQkFBSyxHQUFMLFVBQU0sR0FBUSxFQUFFLFFBQW1CO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBaEljLHlCQUFTLEdBQW9CLElBQUksQ0FBQztJQWtJckQsc0JBQUM7Q0FuSUQsQUFtSUMsSUFBQTtrQkFuSW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBXZWJWaWV3UGxhdGZvcm0ge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBXZWJWaWV3UGxhdGZvcm0gPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogV2ViVmlld1BsYXRmb3JtIHtcclxuICAgICAgICBpZiAoV2ViVmlld1BsYXRmb3JtLl9pbnN0YW5jZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIFdlYlZpZXdQbGF0Zm9ybS5faW5zdGFuY2UgPSBuZXcgV2ViVmlld1BsYXRmb3JtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBXZWJWaWV3UGxhdGZvcm0uX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqSlPosIPnlKggKi9cclxuICAgIHByaXZhdGUganNDYWxsKG1ldGhvZE5hbWU6IHN0cmluZywgYXJncywgY2I/KTogYW55IHtcclxuICAgICAgICBjYy5sb2coXCLosIPnlKjljp/nlJ/mlrnms5VcIiArIG1ldGhvZE5hbWUsIGFyZ3MpXHJcbiAgICAgICAgbGV0IGluZm8gPSB3aW5kb3dbXCJYbWlsZXNcIl0gJiYgd2luZG93W1wiWG1pbGVzXCJdW21ldGhvZE5hbWVdICYmIHdpbmRvd1tcIlhtaWxlc1wiXVttZXRob2ROYW1lXShKU09OLnN0cmluZ2lmeShhcmdzKSlcclxuICAgICAgICBjYy5sb2coXCLljp/nlJ/mlrnms5Xov5Tlm57lgLxcIiwgaW5mbylcclxuICAgICAgICByZXR1cm4gaW5mb1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDkuI5TREvkuqTkupLpgJrkv6FcclxuICAgICogQHBhcmFtIGZ1bmNOYW1lIOaWueazleWQjVxyXG4gICAgKiBAcGFyYW0gcGFyYW1zIOWPguaVsFxyXG4gICAgKiBAcGFyYW0gY2FsbGJhY2sg5Zue6LCDXHJcbiAgICAqL1xyXG4gICAgY2FsbChmdW5jTmFtZTogc3RyaW5nLCBwYXJhbXM/OiBhbnksIGNhbGxiYWNrPzogRnVuY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWxsV2ViVmlldyhmdW5jTmFtZSwgcGFyYW1zLCBjYWxsYmFjayk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgY2FsbFdlYlZpZXcobWV0aG9kTmFtZTogc3RyaW5nLCBhcmdzLCBjYj8pIHtcclxuICAgICAgICBsZXQgcmV0ID0gJyc7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgY2IgPSBhcmdzO1xyXG4gICAgICAgICAgICBhcmdzID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgY2IgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB3aW5kb3dbJ2RzY2InXSA9IHdpbmRvd1snZHNjYiddIHx8IDA7XHJcbiAgICAgICAgICAgIGxldCBjYk5hbWUgPSAnZHNjYicgKyB3aW5kb3dbJ2RzY2InXSsrO1xyXG4gICAgICAgICAgICB3aW5kb3dbY2JOYW1lXSA9IGNiO1xyXG4gICAgICAgICAgICBhcmdzWydfZHNjYnN0dWInXSA9IGNiTmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXJncyA9IEpTT04uc3RyaW5naWZ5KGFyZ3MgfHwge30pXHJcbiAgICAgICAgY2MubG9nKFwi5Y6f55Sf6LCD55SoIF9tZXRob2ROYW1lOiBcIiArIG1ldGhvZE5hbWUgKyBcIiBhcmdzOiBcIiArIGFyZ3MpXHJcbiAgICAgICAgaWYgKHdpbmRvd1snX2Rzd2snXSkge1xyXG4gICAgICAgICAgICByZXQgPSBwcm9tcHQod2luZG93WydfZHN3ayddICsgbWV0aG9kTmFtZSwgYXJncyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbJ19kc2JyaWRnZSddID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHJldCA9IHdpbmRvd1snX2RzYnJpZGdlJ10obWV0aG9kTmFtZSwgYXJncyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93WydfZHNicmlkZ2UnXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0ID0gd2luZG93WydfZHNicmlkZ2UnXS5jYWxsKG1ldGhvZE5hbWUsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKCfmib7kuI3liLBfZHNicmlkZ2UnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FsbEJyb3dzZXIobWV0aG9kTmFtZSwgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxsQnJvd3NlcihtZXRob2QsIGFyZ3MpIHtcclxuICAgICAgICBpZiAobWV0aG9kID09ICdsYXVuY2gnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IEpTT04ucGFyc2UoYXJncyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtID0gb2JqZWN0LnBhcmFtO1xyXG4gICAgICAgICAgICBjb25zdCBodG1sID0gdGhpcy5nZXRQYXJhbWV0ZXJCeU5hbWUocGFyYW0sICdodG1sVXJsJyk7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSBodG1sO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQYXJhbWV0ZXJCeU5hbWUodXJsLCBuYW1lKSB7XHJcbiAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW10vLCBcIlxcXFxcXFtcIikucmVwbGFjZSgvW1xcXV0vLCBcIlxcXFxcXF1cIik7XHJcbiAgICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cChcIltcXFxcPyZdXCIgKyBuYW1lICsgXCI9KFteJiNdKilcIiksXHJcbiAgICAgICAgICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHMgPT0gbnVsbCA/IFwiXCIgOiBkZWNvZGVVUklDb21wb25lbnQocmVzdWx0c1sxXSk7XHJcbiAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRRdWVyeVN0cmluZyhuYW1lKTogc3RyaW5nIHtcclxuICAgICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cChcIihefCYpXCIgKyBuYW1lICsgXCI9KFteJl0qKSgmfCQpXCIpO1xyXG4gICAgICAgIHZhciByID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkubWF0Y2gocmVnKTtcclxuICAgICAgICBpZiAociAhPSBudWxsKSByZXR1cm4gdW5lc2NhcGUoclsyXSk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SG9zdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYWxsKFwiZ2V0SG9zdFwiKTtcclxuICAgIH1cclxuICAgIHNob3dOb05ldHdvcmtEaWFsb2coKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsKFwic2hvd05vTmV0d29ya0RpYWxvZ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROb3RjaEhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IHRoaXMuY2FsbChcImdldE5vdGNoSGVpZ2h0XCIpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdHVzQmFySGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3Qgc3RyID0gdGhpcy5jYWxsKFwiZ2V0U3RhdHVzQmFySGVpZ2h0XCIpO1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XHJcbiAgICB9XHJcbiAgICBmaW5pc2hDb2Nvc0xhdW5jaCgpIHtcclxuICAgICAgICB0aGlzLmNhbGwoXCJmaW5pc2hDb2Nvc0xhdW5jaFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kKGNiOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuY2FsbCgnYmluZCcsIGNiKVxyXG4gICAgfVxyXG5cclxuICAgIGlzVGVzdCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gJ3RydWUnID09PSAodGhpcy5jYWxsKFwiaXNUZXN0XCIpKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGVPblJlc3VtZU9uUGF1c2UoZW5hYmxlKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsKCdlbmFibGVPblJlc3VtZU9uUGF1c2UnLCB7IGVuYWJsZTogZW5hYmxlIH0pXHJcbiAgICB9XHJcbiAgICBsYXVuY2hINVBhZ2UodXJsOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNhbGwoJ2xhdW5jaEg1UGFnZScsIHsgdXJsOiB1cmwsIHRpdGxlOiB0aXRsZSB9KVxyXG4gICAgfVxyXG4gICAgbGF1bmNoUHJvbW90ZUxpbmtQYWdlKHRhc2tJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsKCdsYXVuY2hQcm9tb3RlTGlua1BhZ2UnLCB7IHRhc2tJZDogdGFza0lkIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmj5DkuqTln4vngrlcclxuICAgICAqIEBwYXJhbSBvYmog56We562W5Y+C5pWwXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sg5Zue6LCDXHJcbiAgICAgKi9cclxuICAgICB0cmFjayhvYmo6IGFueSwgY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuanNDYWxsKCd0cmFjaycsIG9iaiwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxufSJdfQ==