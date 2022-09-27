
(function () {
var scripts = [{"deps":{"./assets/scripts/Game":2,"./assets/scripts/Juice":16,"./assets/scripts/Fruit":11,"./assets/scripts/app/App":6,"./assets/scripts/cfg/LocalStorageIDCfg":12,"./assets/scripts/cfg/QuickClickCfg":14,"./assets/scripts/cfg/UIZIndexCfg":13,"./assets/scripts/cfg/UICfg":3,"./assets/scripts/cfg/EventIDCfg":17,"./assets/scripts/mgrs/EventMgr":19,"./assets/scripts/mgrs/SoundMgr":22,"./assets/scripts/mgrs/DialogMgr":20,"./assets/scripts/mgrs/TrackMgr":23,"./assets/scripts/mgrs/UICfgMgr":18,"./assets/scripts/mgrs/UIMgr":4,"./assets/scripts/mgrs/DataMgr":37,"./assets/scripts/misc/InterfaceDef":8,"./assets/scripts/pannels/PannelCashOut":36,"./assets/scripts/pannels/PannelWheel":7,"./assets/scripts/pannels/PannelAlert1":21,"./assets/scripts/platform/HttpClient":29,"./assets/scripts/platform/HttpUrl":25,"./assets/scripts/platform/TestHttp":26,"./assets/scripts/platform/WebViewPlatform":28,"./assets/scripts/platform/Config":9,"./assets/scripts/saveManager/SaveManager":24,"./assets/scripts/saveManager/Save":10,"./assets/scripts/ui/List":35,"./assets/scripts/ui/ListItem":5,"./assets/scripts/ui/UIBase":32,"./assets/scripts/ui/UIUtils":31,"./assets/scripts/ui/DialogBase":27,"./assets/scripts/utils/object-utils":15,"./assets/scripts/utils/math-utils":34,"./assets/scripts/utils/random":30,"./assets/scripts/utils/animate-utils":33,"./assets/test":1},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/test.js"},{"deps":{"./app/App":6,"./saveManager/Save":10,"./saveManager/SaveManager":24,"./cfg/UICfg":3,"./ui/UIUtils":31},"path":"preview-scripts/assets/scripts/Game.js"},{"deps":{"./UIZIndexCfg":13},"path":"preview-scripts/assets/scripts/cfg/UICfg.js"},{"deps":{"../app/App":6,"../cfg/EventIDCfg":17,"../ui/UIBase":32,"./EventMgr":19},"path":"preview-scripts/assets/scripts/mgrs/UIMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/ui/ListItem.js"},{"deps":{"../mgrs/DialogMgr":20,"../mgrs/UIMgr":4,"../mgrs/UICfgMgr":18,"../mgrs/SoundMgr":22},"path":"preview-scripts/assets/scripts/app/App.js"},{"deps":{"../cfg/UICfg":3,"../ui/UIUtils":31,"../ui/UIBase":32},"path":"preview-scripts/assets/scripts/pannels/PannelWheel.js"},{"deps":{},"path":"preview-scripts/assets/scripts/misc/InterfaceDef.js"},{"deps":{},"path":"preview-scripts/assets/scripts/platform/Config.js"},{"deps":{},"path":"preview-scripts/assets/scripts/saveManager/Save.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Fruit.js"},{"deps":{},"path":"preview-scripts/assets/scripts/cfg/LocalStorageIDCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/cfg/UIZIndexCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/cfg/QuickClickCfg.js"},{"deps":{"./animate-utils":33,"./math-utils":34,"./random":30},"path":"preview-scripts/assets/scripts/utils/object-utils.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Juice.js"},{"deps":{},"path":"preview-scripts/assets/scripts/cfg/EventIDCfg.js"},{"deps":{},"path":"preview-scripts/assets/scripts/mgrs/UICfgMgr.js"},{"deps":{},"path":"preview-scripts/assets/scripts/mgrs/EventMgr.js"},{"deps":{"../app/App":6},"path":"preview-scripts/assets/scripts/mgrs/DialogMgr.js"},{"deps":{"../ui/DialogBase":27,"../cfg/UICfg":3},"path":"preview-scripts/assets/scripts/pannels/PannelAlert1.js"},{"deps":{"../cfg/LocalStorageIDCfg":12},"path":"preview-scripts/assets/scripts/mgrs/SoundMgr.js"},{"deps":{"../platform/WebViewPlatform":28},"path":"preview-scripts/assets/scripts/mgrs/TrackMgr.js"},{"deps":{"./Save":10,"../utils/object-utils":15},"path":"preview-scripts/assets/scripts/saveManager/SaveManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/platform/HttpUrl.js"},{"deps":{},"path":"preview-scripts/assets/scripts/platform/TestHttp.js"},{"deps":{"../app/App":6,"./UIBase":32,"./UIUtils":31},"path":"preview-scripts/assets/scripts/ui/DialogBase.js"},{"deps":{},"path":"preview-scripts/assets/scripts/platform/WebViewPlatform.js"},{"deps":{"../utils/object-utils":15,"./Config":9},"path":"preview-scripts/assets/scripts/platform/HttpClient.js"},{"deps":{},"path":"preview-scripts/assets/scripts/utils/random.js"},{"deps":{"../app/App":6,"../cfg/QuickClickCfg":14},"path":"preview-scripts/assets/scripts/ui/UIUtils.js"},{"deps":{"../app/App":6},"path":"preview-scripts/assets/scripts/ui/UIBase.js"},{"deps":{},"path":"preview-scripts/assets/scripts/utils/animate-utils.js"},{"deps":{},"path":"preview-scripts/assets/scripts/utils/math-utils.js"},{"deps":{"./ListItem":5},"path":"preview-scripts/assets/scripts/ui/List.js"},{"deps":{},"path":"preview-scripts/assets/scripts/pannels/PannelCashOut.js"},{"deps":{},"path":"preview-scripts/assets/scripts/mgrs/DataMgr.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    