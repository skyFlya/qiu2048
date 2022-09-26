export default class WebViewPlatform {
    private static _instance: WebViewPlatform = null;

    public static getInstance(): WebViewPlatform {
        if (WebViewPlatform._instance == null) {
            WebViewPlatform._instance = new WebViewPlatform();
        }
        return WebViewPlatform._instance;
    }



    /**JS调用 */
    private jsCall(methodName: string, args, cb?): any {
        cc.log("调用原生方法" + methodName, args)
        let info = window["Xmiles"] && window["Xmiles"][methodName] && window["Xmiles"][methodName](JSON.stringify(args))
        cc.log("原生方法返回值", info)
        return info
    }

    /**
    * 与SDK交互通信
    * @param funcName 方法名
    * @param params 参数
    * @param callback 回调
    */
    call(funcName: string, params?: any, callback?: Function) {
        return this.callWebView(funcName, params, callback);
    };

    private callWebView(methodName: string, args, cb?) {
        let ret = '';
        if (typeof args == 'function') {
            cb = args;
            args = {};
        }
        if (typeof cb == 'function') {
            window['dscb'] = window['dscb'] || 0;
            let cbName = 'dscb' + window['dscb']++;
            window[cbName] = cb;
            args['_dscbstub'] = cbName;
        }
        args = JSON.stringify(args || {})
        cc.log("原生调用 _methodName: " + methodName + " args: " + args)
        if (window['_dswk']) {
            ret = prompt(window['_dswk'] + methodName, args);
        } else {
            if (typeof window['_dsbridge'] == 'function') {
                ret = window['_dsbridge'](methodName, args);
            } else if (window['_dsbridge']) {
                ret = window['_dsbridge'].call(methodName, args);
            } else {
                cc.log('找不到_dsbridge');
                this.callBrowser(methodName, args);
            }
        }
        return ret;
    };

    private callBrowser(method, args) {
        if (method == 'launch') {
            const object = JSON.parse(args);
            const param = object.param;
            const html = this.getParameterByName(param, 'htmlUrl');
            location.href = html;
        }
    };

    private getParameterByName(url, name) {
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(url);
        return results == null ? "" : decodeURIComponent(results[1]);
    };



    private getQueryString(name): string {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    }

    getHost() {
        return this.call("getHost");
    }
    showNoNetworkDialog() {
        this.call("showNoNetworkDialog");
    }

    getNotchHeight(): number {
        const str = this.call("getNotchHeight");
        return JSON.parse(str);
    }

    getStatusBarHeight(): number {
        const str = this.call("getStatusBarHeight");
        return JSON.parse(str);
    }
    finishCocosLaunch() {
        this.call("finishCocosLaunch");
    }

    bind(cb: Function) {
        this.call('bind', cb)
    }

    isTest(): boolean {
        return 'true' === (this.call("isTest"));
    }

    enableOnResumeOnPause(enable) {
        this.call('enableOnResumeOnPause', { enable: enable })
    }
    launchH5Page(url: string, title: string) {
        this.call('launchH5Page', { url: url, title: title })
    }
    launchPromoteLinkPage(taskId: number) {
        this.call('launchPromoteLinkPage', { taskId: taskId })
    }

    /**
     * 提交埋点
     * @param obj 神策参数
     * @param callback 回调
     */
     track(obj: any, callback?: Function) {
        this.jsCall('track', obj, callback);
    }

}