interface IHttpRequestOptions {
    baseUrl?: string;
    url: string;
    qs?: Object;
    method?: string | "GET" | "POST" | "PUT" | "UPDATE" | "DELETE" | "OPTIONS";
    data?: string | Object;
    timeout?: number;
    useJson?: boolean;
}

let domainMap = {
    // dr: "http://nb2.qufenqian.vip",
    // qfq: "http://nb.qufenqian.vip",
    pot: 'http://nb-common.qufenqian.vip',
    award: 'https://nb4.qufenqian.vip',
    api1: 'https://nb.qufenqian.vip/v2',
    api2: 'http://beta.qufenqian-hongbao2.web-application.vipc.me',
    apiGame: 'https://nbs1.qufenqian.vip',
    ws: "wss://nbs1.qufenqian.vip"
};



export default class testHttp {




}
