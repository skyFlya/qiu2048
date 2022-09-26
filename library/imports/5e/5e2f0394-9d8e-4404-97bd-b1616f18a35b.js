"use strict";
cc._RF.push(module, '5e2f0OUnY5EBJe9sWFvGKNb', 'HttpClient');
// scripts/platform/HttpClient.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClient = exports.NetworkType = exports.HttpErrorType = void 0;
var object_utils_1 = require("../utils/object-utils");
var Config_1 = require("./Config");
var HttpErrorType;
(function (HttpErrorType) {
    /**错误的Url地方 */
    HttpErrorType[HttpErrorType["UrlError"] = 0] = "UrlError";
    /**超时 */
    HttpErrorType[HttpErrorType["TimeOut"] = 1] = "TimeOut";
    /**请求错误 */
    HttpErrorType[HttpErrorType["RequestError"] = 2] = "RequestError";
    /**请求终止 */
    HttpErrorType[HttpErrorType["Abort"] = 3] = "Abort";
})(HttpErrorType = exports.HttpErrorType || (exports.HttpErrorType = {}));
/**网络类型 */
var NetworkType;
(function (NetworkType) {
    NetworkType["NETWORK_ETHERNET"] = "NETWORK_ETHERNET";
    NetworkType["NETWORK_WIFI"] = "NETWORK_WIFI";
    NetworkType["NETWORK_4G"] = "4G";
    NetworkType["NETWORK_3G"] = "3G";
    NetworkType["NETWORK_2G"] = "2G";
    NetworkType["NETWORK_UNKNOWN"] = "UNKNOWN";
    /**无网络 */
    NetworkType["NETWORK_NO"] = "";
})(NetworkType = exports.NetworkType || (exports.NetworkType = {}));
var httpHost = "http://composite.qufenqian-webgame.web-application.gz.vipc.me";
var httpClient = /** @class */ (function () {
    function httpClient() {
    }
    httpClient.getInstance = function () {
        if (httpClient._instance == null) {
            httpClient._instance = new httpClient();
        }
        return httpClient._instance;
    };
    httpClient.destroyInstance = function () {
        if (httpClient._instance) {
            httpClient._instance = null;
        }
    };
    httpClient.prototype.httpPost = function (url, fData, callback, reConneted) {
        if (fData === void 0) { fData = {}; }
        if (reConneted === void 0) { reConneted = true; }
        var _a = ((typeof callback == "function" && (callback = { click: callback })) || callback), success = _a.success, fail = _a.fail, final = _a.final, timeOut = _a.timeOut;
        var param = { url: url.url, param: fData };
        var now = Date.now();
        var finalData = Config_1.Config.PHEAD;
        Object.assign(Config_1.Config.PHEAD, fData);
        var finalurl = httpHost + url.url;
        cc.log("网页请求->>", param);
        this.request(finalurl, finalData, function (_success) {
            if (_success && _success.statuscode === 0) {
                success && success(_success.data);
                final && final(_success);
            }
            else {
                fail && fail(_success);
                final && final(_success);
            }
            cc.log("网页请求<<-", param, object_utils_1.objectUtils.cloneObject(_success));
        }, function (_fail) {
            fail && fail(_fail);
            final && final(_fail);
            cc.log("网页请求<<-", param, _fail);
        }, function (_timeOut) {
            timeOut && timeOut(_timeOut);
            final && final(_timeOut);
        }, reConneted);
    };
    /**cocos自带http */
    httpClient.prototype.request = function (url, body, _success, _fail, _timeOut, reConneted) {
        if (reConneted === void 0) { reConneted = true; }
        var xhr = new XMLHttpRequest();
        var timer = setTimeout(function () {
            //Manager.wait.show(url)
        }, 3 * 1000);
        var clearTimer = function () {
            clearTimeout(timer);
            //Manager.wait.hide(url)
        };
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                clearTimer();
                if (xhr.status >= 200 && xhr.status < 400) {
                    var res = JSON.parse(xhr.responseText);
                    _success(res);
                }
                else {
                    if (xhr.responseText) {
                        var res = JSON.parse(xhr.responseText);
                        _fail(res);
                    }
                    else {
                        _fail({ type: HttpErrorType.RequestError, reason: "状态异常" });
                    }
                }
            }
        };
        xhr.onabort = function (e) {
            clearTimer();
            console.log(e);
            try {
                if (_fail)
                    _fail({ type: HttpErrorType.Abort, reason: '请求被中止' });
            }
            catch (error) {
                error(error);
            }
        };
        xhr.ontimeout = function (e) {
            clearTimer();
            xhr.abort(); //网络超时，断开连接
            // if (reConneted)
            //     Manager.reConneted.show(() => this.request(url, body, _success, _fail, _timeOut, reConneted))
            if (CC_DEBUG)
                console.warn("request timeout : " + url);
            try {
                if (_timeOut)
                    _timeOut({ type: HttpErrorType.TimeOut, reason: "连接超时" });
            }
            catch (error) {
                error(error);
            }
        };
        xhr.onerror = function (e) {
            clearTimer();
            console.error("request error : " + url + " ");
            // if (reConneted)
            //     Manager.reConneted.show(() => this.request(url, body, _success, _fail, _timeOut, reConneted))
            try {
                if (_fail)
                    _fail({ type: HttpErrorType.RequestError, reason: "请求错误" });
            }
            catch (error) {
                error(error);
            }
        };
        xhr.open("POST", url);
        xhr.timeout = 10 * 1000; //超时10秒
        xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
        xhr.send(JSON.stringify(body));
    };
    httpClient._instance = null;
    return httpClient;
}());
exports.httpClient = httpClient;

cc._RF.pop();