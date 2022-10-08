const { ccclass, property } = cc._decorator;

@ccclass
export default class WebViewOrAndroid extends cc.Component {

    @property(cc.WebView)
    private webView: cc.WebView = null;

    jsCallback (tar, url) {
        // 这里的返回值是内部页面的 url 数值，
        // 需要自行解析自己需要的数据
        //cc.log("---------------------------tar ["+tar+"] url ["+url+"]");
        //this.webView.node.destroy();
        console.log("aaaaaaaaaaa", tar, url);
    }

    start() {
         // cc.debug._resetDebugSetting(cc.debug.DebugMode.INFO);

         console.log("测试`````````````````");
         var scheme = "genUID";         
         this.webView.setJavascriptInterfaceScheme(scheme)
         this.webView.setOnJSCallback(this.jsCallback);
    }


}
