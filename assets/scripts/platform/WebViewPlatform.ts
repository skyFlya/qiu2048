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
    // call(funcName: string, params?: any, callback?: Function) {
    //     return this.callWebView(funcName, params, callback);
    // };

    private call(scheme: string, methodName: string, args?, cb?) {
        let ret;
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

        cc.log("原生调用 _methodName: " + scheme + methodName + " args: " + args)
        if (window['_dswk']) {
            cc.log("原生调用1")
            ret = prompt(window['_dswk'] + methodName, args);
        } else {
            if (typeof window[scheme] == 'function') {
                cc.log("原生调用2")
                ret = window[scheme](methodName, args);
            } else if (window[scheme]) {
                cc.log(`原生调用${scheme}`, window[scheme], window[scheme][methodName])
                //ret = window[scheme].call(methodName, args);
                ret = window[scheme][methodName]();
                ret = JSON.parse(ret);
                cc.log("返回值", ret);
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

    /**
     * 提交埋点
     * @param obj 神策参数
     * @param callback 回调
     */
    track(obj: any, callback?: Function) {
        this.jsCall('track', obj, callback);
    }












    //QFQ----------------------------------------------------














    //QFQ2019-----------------------------------------------















    //DRQFQ
    public getDeviceInfo() {           
        if(!window["DRQFQ"]){
            return {notchBarHeight: 0};
        }
    
        
        let data = window["DRQFQ"]["getDeviceInfo"]();
        return data ? JSON.parse(data) : null;
    }












}