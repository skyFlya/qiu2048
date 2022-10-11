import { objectUtils } from "../utils/object-utils";
import { Config } from "./Config";
import { HttpUrl, HttpUrlConfig } from "./HttpUrl";

export enum HttpErrorType {
    /**错误的Url地方 */
    UrlError,
    /**超时 */
    TimeOut,
    /**请求错误 */
    RequestError,
    /**请求终止 */
    Abort,

}
/**网络类型 */
export enum NetworkType {
    NETWORK_ETHERNET = 'NETWORK_ETHERNET',
    NETWORK_WIFI = 'NETWORK_WIFI',
    NETWORK_4G = '4G',
    NETWORK_3G = '3G',
    NETWORK_2G = '2G',
    NETWORK_UNKNOWN = 'UNKNOWN',
    /**无网络 */
    NETWORK_NO = ''
}
export interface HttpError {
    type: HttpErrorType,
    reason: any
}

//对应正式域名：http://nbs1.qufenqian.vip

let httpHost = "http://game2048220926.qufenqian-webgame.web-application.gz.vipc.me"
let httpGet = "http://game2048220926.qufenqian-withdrawwebservice.web-application.gz.vipc.me"

export class httpClient {
    private static _instance: httpClient = null;
    public static getInstance(): httpClient {
        if (httpClient._instance == null) {
            httpClient._instance = new httpClient();
        }
        return httpClient._instance;
    }

    public static destroyInstance(): void {
        if (httpClient._instance) {
            httpClient._instance = null;
        }
    }


    public httpPost(url: HttpUrlConfig,
        fData = {},
        callback: | {
            success?: Function,
            timeOut?: Function,
            fail?: Function,
            final?: Function,
        } | Function,
        isPost: boolean = false) {

        const { success, fail, final, timeOut } = <any>((typeof callback == "function" && ((<any>callback) = { click: callback })) || callback);
        const param = { url: url.url, param: fData }

        const now = Date.now();
        let finalData = Config.PHEAD;
        
        let finalurl;
        if(isPost){
            let pro = this.getToStr(finalData) + this.getToStr(fData)
            finalurl = httpGet + url.url + pro;
        }
        else{
            Object.assign(Config.PHEAD, fData);
            finalurl = httpHost + url.url;
        }                                

        cc.log("网页请求->>", param)
        this.request(finalurl, finalData,
            _success => {
                if (_success && (_success.statuscode === 0 || _success.status === 0)) {
                    success && success(_success);
                    final && final(_success);
                } else {                    
                    fail && fail(_success);
                    final && final(_success);
                }
                cc.log("网页请求<<-", param, objectUtils.cloneObject(_success))
            },
            _fail => {
                fail && fail(_fail);
                final && final(_fail);
                cc.log("网页请求<<-", param, _fail)
            },
            _timeOut => {
                timeOut && timeOut(_timeOut);
                final && final(_timeOut);

            }, isPost
        )
    }

    /**cocos自带http */
    private request(url: string, body, _success: (data: any) => void, _fail?: (errorData: HttpError) => void, _timeOut?: (errorData: HttpError) => void, isPost: boolean = false) {
        const xhr = new XMLHttpRequest();
        let timer = setTimeout(() => {
            //Manager.wait.show(url)
        }, 3 * 1000);
        const clearTimer = () => {
            clearTimeout(timer);
            //Manager.wait.hide(url)
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                clearTimer();
                if (xhr.status >= 200 && xhr.status < 400) {
                    let res = JSON.parse(xhr.responseText);
                    _success(res);
                } else {
                    if (xhr.responseText) {
                        let res = JSON.parse(xhr.responseText);
                        _fail(res);
                    } else {
                        _fail({ type: HttpErrorType.RequestError, reason: "状态异常" });
                    }
                }
            }

        };

        xhr.onabort = (e) => {
            clearTimer();
            console.log(e)
            try {
                if (_fail) _fail({ type: HttpErrorType.Abort, reason: '请求被中止' });
            } catch (error) {
                error(error)
            }
        };

        xhr.ontimeout = (e) => {
            clearTimer();
            xhr.abort();//网络超时，断开连接
            // if (reConneted)
            //     Manager.reConneted.show(() => this.request(url, body, _success, _fail, _timeOut, reConneted))
            if (CC_DEBUG) console.warn(`request timeout : ${url}`);
            try {
                if (_timeOut) _timeOut({ type: HttpErrorType.TimeOut, reason: "连接超时" });
            } catch (error) {
                error(error)
            }

        };
        xhr.onerror = (e) => {
            clearTimer();

            console.error(`request error : ${url} `);
            // if (reConneted)
            //     Manager.reConneted.show(() => this.request(url, body, _success, _fail, _timeOut, reConneted))
            try {
                if (_fail) _fail({ type: HttpErrorType.RequestError, reason: "请求错误" });
            } catch (error) {
                error(error);
            }
        };
        //Accept: text/plain       
        if (isPost) {
            xhr.open("GET", "http://game2048220926.qufenqian-withdrawwebservice.web-application.gz.vipc.me/v2/Withdraw/WithdrawList2?dv=1.0.0.0&_token=OL4FTGMKsURGWBvvc32Ij+ZFBk6mvlG5");
            xhr.timeout = 10 * 1000; //超时10秒        
            xhr.setRequestHeader("accept", "text/plain");            
            xhr.send();
        }
        else {
            xhr.open("POST", url);
            xhr.timeout = 10 * 1000; //超时10秒        
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(body));
        }               
    }

    //GET方法转成字符串
    private getToStr(obj) {
        let result = '';
        let item;
        for (item in obj) {
            if (obj[item] && String(obj[item])) {
                result += `&${item}=${obj[item]}`;
            }
        }
        if (result) {
            result = '?' + result.slice(1);
        }
        return result;
    }

}

