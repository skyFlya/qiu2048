
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/platform/HttpClient.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxhdGZvcm1cXEh0dHBDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQW9EO0FBQ3BELG1DQUFrQztBQUdsQyxJQUFZLGFBVVg7QUFWRCxXQUFZLGFBQWE7SUFDckIsY0FBYztJQUNkLHlEQUFRLENBQUE7SUFDUixRQUFRO0lBQ1IsdURBQU8sQ0FBQTtJQUNQLFVBQVU7SUFDVixpRUFBWSxDQUFBO0lBQ1osVUFBVTtJQUNWLG1EQUFLLENBQUE7QUFFVCxDQUFDLEVBVlcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFVeEI7QUFDRCxVQUFVO0FBQ1YsSUFBWSxXQVNYO0FBVEQsV0FBWSxXQUFXO0lBQ25CLG9EQUFxQyxDQUFBO0lBQ3JDLDRDQUE2QixDQUFBO0lBQzdCLGdDQUFpQixDQUFBO0lBQ2pCLGdDQUFpQixDQUFBO0lBQ2pCLGdDQUFpQixDQUFBO0lBQ2pCLDBDQUEyQixDQUFBO0lBQzNCLFNBQVM7SUFDVCw4QkFBZSxDQUFBO0FBQ25CLENBQUMsRUFUVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQVN0QjtBQU1ELElBQUksUUFBUSxHQUFHLCtEQUErRCxDQUFBO0FBRTlFO0lBQUE7SUFrSUEsQ0FBQztJQWhJaUIsc0JBQVcsR0FBekI7UUFDSSxJQUFJLFVBQVUsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQzlCLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztTQUMzQztRQUNELE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBRWEsMEJBQWUsR0FBN0I7UUFDSSxJQUFJLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDdEIsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBR00sNkJBQVEsR0FBZixVQUFnQixHQUFrQixFQUM5QixLQUFVLEVBQ1YsUUFLWSxFQUNa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WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDZjtRQUVMLENBQUMsQ0FBQztRQUNGLEdBQUcsQ0FBQyxPQUFPLEdBQUcsVUFBQyxDQUFDO1lBQ1osVUFBVSxFQUFFLENBQUM7WUFFYixPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFtQixHQUFHLE1BQUcsQ0FBQyxDQUFDO1lBQ3pDLGtCQUFrQjtZQUNsQixvR0FBb0c7WUFDcEcsSUFBSTtnQkFDQSxJQUFJLEtBQUs7b0JBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7YUFDMUU7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDWixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDaEI7UUFDTCxDQUFDLENBQUM7UUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN0QixHQUFHLENBQUMsT0FBTyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPO1FBQ2hDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztRQUN2RSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVuQyxDQUFDO0lBL0hjLG9CQUFTLEdBQWUsSUFBSSxDQUFDO0lBaUloRCxpQkFBQztDQWxJRCxBQWtJQyxJQUFBO0FBbElZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb2JqZWN0VXRpbHMgfSBmcm9tIFwiLi4vdXRpbHMvb2JqZWN0LXV0aWxzXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcbmltcG9ydCB7IEh0dHBVcmxDb25maWcgfSBmcm9tIFwiLi9IdHRwVXJsXCI7XG5cbmV4cG9ydCBlbnVtIEh0dHBFcnJvclR5cGUge1xuICAgIC8qKumUmeivr+eahFVybOWcsOaWuSAqL1xuICAgIFVybEVycm9yLFxuICAgIC8qKui2heaXtiAqL1xuICAgIFRpbWVPdXQsXG4gICAgLyoq6K+35rGC6ZSZ6K+vICovXG4gICAgUmVxdWVzdEVycm9yLFxuICAgIC8qKuivt+axgue7iOatoiAqL1xuICAgIEFib3J0LFxuXG59XG4vKirnvZHnu5znsbvlnosgKi9cbmV4cG9ydCBlbnVtIE5ldHdvcmtUeXBlIHtcbiAgICBORVRXT1JLX0VUSEVSTkVUID0gJ05FVFdPUktfRVRIRVJORVQnLFxuICAgIE5FVFdPUktfV0lGSSA9ICdORVRXT1JLX1dJRkknLFxuICAgIE5FVFdPUktfNEcgPSAnNEcnLFxuICAgIE5FVFdPUktfM0cgPSAnM0cnLFxuICAgIE5FVFdPUktfMkcgPSAnMkcnLFxuICAgIE5FVFdPUktfVU5LTk9XTiA9ICdVTktOT1dOJyxcbiAgICAvKirml6DnvZHnu5wgKi9cbiAgICBORVRXT1JLX05PID0gJydcbn1cbmV4cG9ydCBpbnRlcmZhY2UgSHR0cEVycm9yIHtcbiAgICB0eXBlOiBIdHRwRXJyb3JUeXBlLFxuICAgIHJlYXNvbjogYW55XG59XG5cbmxldCBodHRwSG9zdCA9IFwiaHR0cDovL2NvbXBvc2l0ZS5xdWZlbnFpYW4td2ViZ2FtZS53ZWItYXBwbGljYXRpb24uZ3oudmlwYy5tZVwiXG5cbmV4cG9ydCBjbGFzcyBodHRwQ2xpZW50IHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IGh0dHBDbGllbnQgPSBudWxsO1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogaHR0cENsaWVudCB7XG4gICAgICAgIGlmIChodHRwQ2xpZW50Ll9pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBodHRwQ2xpZW50Ll9pbnN0YW5jZSA9IG5ldyBodHRwQ2xpZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGh0dHBDbGllbnQuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZGVzdHJveUluc3RhbmNlKCk6IHZvaWQge1xuICAgICAgICBpZiAoaHR0cENsaWVudC5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIGh0dHBDbGllbnQuX2luc3RhbmNlID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcHVibGljIGh0dHBQb3N0KHVybDogSHR0cFVybENvbmZpZyxcbiAgICAgICAgZkRhdGEgPSB7fSxcbiAgICAgICAgY2FsbGJhY2s6IHwge1xuICAgICAgICAgICAgc3VjY2Vzcz86IEZ1bmN0aW9uLFxuICAgICAgICAgICAgdGltZU91dD86IEZ1bmN0aW9uLFxuICAgICAgICAgICAgZmFpbD86IEZ1bmN0aW9uLFxuICAgICAgICAgICAgZmluYWw/OiBGdW5jdGlvbixcbiAgICAgICAgfSB8IEZ1bmN0aW9uLFxuICAgICAgICByZUNvbm5ldGVkOiBib29sZWFuID0gdHJ1ZSkge1xuXG4gICAgICAgIGNvbnN0IHsgc3VjY2VzcywgZmFpbCwgZmluYWwsIHRpbWVPdXQgfSA9IDxhbnk+KCh0eXBlb2YgY2FsbGJhY2sgPT0gXCJmdW5jdGlvblwiICYmICgoPGFueT5jYWxsYmFjaykgPSB7IGNsaWNrOiBjYWxsYmFjayB9KSkgfHwgY2FsbGJhY2spO1xuICAgICAgICBjb25zdCBwYXJhbSA9IHsgdXJsOiB1cmwudXJsLCBwYXJhbTogZkRhdGEgfVxuXG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBmaW5hbERhdGEgPSBDb25maWcuUEhFQUQ7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oQ29uZmlnLlBIRUFELCBmRGF0YSk7XG4gICAgICAgIGNvbnN0IGZpbmFsdXJsID0gaHR0cEhvc3QgKyB1cmwudXJsO1xuICAgICAgICBjYy5sb2coXCLnvZHpobXor7fmsYItPj5cIiwgcGFyYW0pXG4gICAgICAgIHRoaXMucmVxdWVzdChmaW5hbHVybCwgZmluYWxEYXRhLFxuICAgICAgICAgICAgX3N1Y2Nlc3MgPT4geyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoX3N1Y2Nlc3MgJiYgX3N1Y2Nlc3Muc3RhdHVzY29kZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzICYmIHN1Y2Nlc3MoX3N1Y2Nlc3MuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsICYmIGZpbmFsKF9zdWNjZXNzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmYWlsICYmIGZhaWwoX3N1Y2Nlc3MpO1xuICAgICAgICAgICAgICAgICAgICBmaW5hbCAmJiBmaW5hbChfc3VjY2Vzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIue9kemhteivt+axgjw8LVwiLCBwYXJhbSwgb2JqZWN0VXRpbHMuY2xvbmVPYmplY3QoX3N1Y2Nlc3MpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9mYWlsID0+IHsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZmFpbCAmJiBmYWlsKF9mYWlsKTtcbiAgICAgICAgICAgICAgICBmaW5hbCAmJiBmaW5hbChfZmFpbCk7XG4gICAgICAgICAgICAgICAgY2MubG9nKFwi572R6aG16K+35rGCPDwtXCIsIHBhcmFtLCBfZmFpbClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfdGltZU91dCA9PiB7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRpbWVPdXQgJiYgdGltZU91dChfdGltZU91dCk7XG4gICAgICAgICAgICAgICAgZmluYWwgJiYgZmluYWwoX3RpbWVPdXQpO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVDb25uZXRlZFxuICAgICAgICApXG4gICAgfVxuXG4gICAgLyoqY29jb3Poh6rluKZodHRwICovXG4gICAgcHJpdmF0ZSByZXF1ZXN0KHVybDogc3RyaW5nLCBib2R5LCBfc3VjY2VzczogKGRhdGE6IGFueSkgPT4gdm9pZCwgX2ZhaWw/OiAoZXJyb3JEYXRhOiBIdHRwRXJyb3IpID0+IHZvaWQsIF90aW1lT3V0PzogKGVycm9yRGF0YTogSHR0cEVycm9yKSA9PiB2b2lkLCByZUNvbm5ldGVkOiBib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgbGV0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvL01hbmFnZXIud2FpdC5zaG93KHVybClcbiAgICAgICAgfSwgMyAqIDEwMDApO1xuICAgICAgICBjb25zdCBjbGVhclRpbWVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICAgICAgICAgIC8vTWFuYWdlci53YWl0LmhpZGUodXJsKVxuICAgICAgICB9XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT0gNCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZXIoKTtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDQwMCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgX3N1Y2Nlc3MocmVzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnJlc3BvbnNlVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZmFpbChyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2ZhaWwoeyB0eXBlOiBIdHRwRXJyb3JUeXBlLlJlcXVlc3RFcnJvciwgcmVhc29uOiBcIueKtuaAgeW8guW4uFwiIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgeGhyLm9uYWJvcnQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lcigpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9mYWlsKSBfZmFpbCh7IHR5cGU6IEh0dHBFcnJvclR5cGUuQWJvcnQsIHJlYXNvbjogJ+ivt+axguiiq+S4reatoicgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGVycm9yKGVycm9yKVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHhoci5vbnRpbWVvdXQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lcigpO1xuICAgICAgICAgICAgeGhyLmFib3J0KCk7Ly/nvZHnu5zotoXml7bvvIzmlq3lvIDov57mjqVcbiAgICAgICAgICAgIC8vIGlmIChyZUNvbm5ldGVkKVxuICAgICAgICAgICAgLy8gICAgIE1hbmFnZXIucmVDb25uZXRlZC5zaG93KCgpID0+IHRoaXMucmVxdWVzdCh1cmwsIGJvZHksIF9zdWNjZXNzLCBfZmFpbCwgX3RpbWVPdXQsIHJlQ29ubmV0ZWQpKVxuICAgICAgICAgICAgaWYgKENDX0RFQlVHKSBjb25zb2xlLndhcm4oYHJlcXVlc3QgdGltZW91dCA6ICR7dXJsfWApO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX3RpbWVPdXQpIF90aW1lT3V0KHsgdHlwZTogSHR0cEVycm9yVHlwZS5UaW1lT3V0LCByZWFzb246IFwi6L+e5o6l6LaF5pe2XCIgfSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGVycm9yKGVycm9yKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG4gICAgICAgIHhoci5vbmVycm9yID0gKGUpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZXIoKTtcblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgcmVxdWVzdCBlcnJvciA6ICR7dXJsfSBgKTtcbiAgICAgICAgICAgIC8vIGlmIChyZUNvbm5ldGVkKVxuICAgICAgICAgICAgLy8gICAgIE1hbmFnZXIucmVDb25uZXRlZC5zaG93KCgpID0+IHRoaXMucmVxdWVzdCh1cmwsIGJvZHksIF9zdWNjZXNzLCBfZmFpbCwgX3RpbWVPdXQsIHJlQ29ubmV0ZWQpKVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2ZhaWwpIF9mYWlsKHsgdHlwZTogSHR0cEVycm9yVHlwZS5SZXF1ZXN0RXJyb3IsIHJlYXNvbjogXCLor7fmsYLplJnor69cIiB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCk7XG4gICAgICAgIHhoci50aW1lb3V0ID0gMTAgKiAxMDAwOyAvL+i2heaXtjEw56eSXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04XCIpO1xuICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShib2R5KSk7XG5cbiAgICB9XG5cbn1cblxuIl19