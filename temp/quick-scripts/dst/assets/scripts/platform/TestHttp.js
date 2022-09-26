
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/platform/TestHttp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd555fplljVIgI4stvywO8ek', 'TestHttp');
// scripts/platform/TestHttp.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var domainMap = {
    // dr: "http://nb2.qufenqian.vip",
    // qfq: "http://nb.qufenqian.vip",
    pot: 'http://nb-common.qufenqian.vip',
    award: 'https://nb4.qufenqian.vip',
    api1: 'https://nb.qufenqian.vip/v2',
    api2: 'http://beta.qufenqian-hongbao2.web-application.vipc.me',
    apiGame: 'https://nbs1.qufenqian.vip',
    ws: "wss://nbs1.qufenqian.vip"
};
var testHttp = /** @class */ (function () {
    function testHttp() {
    }
    return testHttp;
}());
exports.default = testHttp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxhdGZvcm1cXFRlc3RIdHRwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBSSxTQUFTLEdBQUc7SUFDWixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLEdBQUcsRUFBRSxnQ0FBZ0M7SUFDckMsS0FBSyxFQUFFLDJCQUEyQjtJQUNsQyxJQUFJLEVBQUUsNkJBQTZCO0lBQ25DLElBQUksRUFBRSx3REFBd0Q7SUFDOUQsT0FBTyxFQUFFLDRCQUE0QjtJQUNyQyxFQUFFLEVBQUUsMEJBQTBCO0NBQ2pDLENBQUM7QUFJRjtJQUFBO0lBS0EsQ0FBQztJQUFELGVBQUM7QUFBRCxDQUxBLEFBS0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJSHR0cFJlcXVlc3RPcHRpb25zIHtcclxuICAgIGJhc2VVcmw/OiBzdHJpbmc7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIHFzPzogT2JqZWN0O1xyXG4gICAgbWV0aG9kPzogc3RyaW5nIHwgXCJHRVRcIiB8IFwiUE9TVFwiIHwgXCJQVVRcIiB8IFwiVVBEQVRFXCIgfCBcIkRFTEVURVwiIHwgXCJPUFRJT05TXCI7XHJcbiAgICBkYXRhPzogc3RyaW5nIHwgT2JqZWN0O1xyXG4gICAgdGltZW91dD86IG51bWJlcjtcclxuICAgIHVzZUpzb24/OiBib29sZWFuO1xyXG59XHJcblxyXG5sZXQgZG9tYWluTWFwID0ge1xyXG4gICAgLy8gZHI6IFwiaHR0cDovL25iMi5xdWZlbnFpYW4udmlwXCIsXHJcbiAgICAvLyBxZnE6IFwiaHR0cDovL25iLnF1ZmVucWlhbi52aXBcIixcclxuICAgIHBvdDogJ2h0dHA6Ly9uYi1jb21tb24ucXVmZW5xaWFuLnZpcCcsXHJcbiAgICBhd2FyZDogJ2h0dHBzOi8vbmI0LnF1ZmVucWlhbi52aXAnLFxyXG4gICAgYXBpMTogJ2h0dHBzOi8vbmIucXVmZW5xaWFuLnZpcC92MicsXHJcbiAgICBhcGkyOiAnaHR0cDovL2JldGEucXVmZW5xaWFuLWhvbmdiYW8yLndlYi1hcHBsaWNhdGlvbi52aXBjLm1lJyxcclxuICAgIGFwaUdhbWU6ICdodHRwczovL25iczEucXVmZW5xaWFuLnZpcCcsXHJcbiAgICB3czogXCJ3c3M6Ly9uYnMxLnF1ZmVucWlhbi52aXBcIlxyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0ZXN0SHR0cCB7XHJcblxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==