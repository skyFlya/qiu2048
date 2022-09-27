
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Fruit');
require('./assets/scripts/Game');
require('./assets/scripts/Juice');
require('./assets/scripts/app/App');
require('./assets/scripts/cfg/EventIDCfg');
require('./assets/scripts/cfg/LocalStorageIDCfg');
require('./assets/scripts/cfg/QuickClickCfg');
require('./assets/scripts/cfg/UICfg');
require('./assets/scripts/cfg/UIZIndexCfg');
require('./assets/scripts/mgrs/DataMgr');
require('./assets/scripts/mgrs/DialogMgr');
require('./assets/scripts/mgrs/EventMgr');
require('./assets/scripts/mgrs/SoundMgr');
require('./assets/scripts/mgrs/TrackMgr');
require('./assets/scripts/mgrs/UICfgMgr');
require('./assets/scripts/mgrs/UIMgr');
require('./assets/scripts/misc/InterfaceDef');
require('./assets/scripts/pannels/PannelAlert1');
require('./assets/scripts/pannels/PannelCashOut');
require('./assets/scripts/pannels/PannelWheel');
require('./assets/scripts/platform/Config');
require('./assets/scripts/platform/HttpClient');
require('./assets/scripts/platform/HttpUrl');
require('./assets/scripts/platform/TestHttp');
require('./assets/scripts/platform/WebViewPlatform');
require('./assets/scripts/saveManager/Save');
require('./assets/scripts/saveManager/SaveManager');
require('./assets/scripts/ui/DialogBase');
require('./assets/scripts/ui/List');
require('./assets/scripts/ui/ListItem');
require('./assets/scripts/ui/UIBase');
require('./assets/scripts/ui/UIUtils');
require('./assets/scripts/utils/animate-utils');
require('./assets/scripts/utils/math-utils');
require('./assets/scripts/utils/object-utils');
require('./assets/scripts/utils/random');
require('./assets/test');

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