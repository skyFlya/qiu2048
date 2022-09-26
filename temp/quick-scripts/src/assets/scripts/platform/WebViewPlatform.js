"use strict";
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