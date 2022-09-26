"use strict";
cc._RF.push(module, 'b6f4cG1pyJGw6QCGdivvK5t', 'SoundMgr');
// scripts/mgrs/SoundMgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundMgr = void 0;
var LocalStorageIDCfg_1 = require("../cfg/LocalStorageIDCfg");
var SoundMgr = /** @class */ (function () {
    function SoundMgr() {
        this._isMusic = true;
        this._isSound = true;
        this._musicUrl = null;
        this._musicVolume = 1;
    }
    SoundMgr.getInstance = function () {
        if (SoundMgr._instance == null) {
            SoundMgr._instance = new SoundMgr();
            SoundMgr._instance.init();
        }
        return SoundMgr._instance;
    };
    SoundMgr.destroyInstance = function () {
        if (SoundMgr._instance) {
            SoundMgr._instance = null;
        }
    };
    SoundMgr.prototype.init = function () {
        var str = cc.sys.localStorage.getItem(LocalStorageIDCfg_1.LocalStorageIDCfg.GAME_MUSIC_SOUND);
        if (str) {
            try {
                var data = JSON.parse(str);
                this._isMusic = data.music == false ? false : true;
                this._isSound = data.sound == false ? false : true;
            }
            catch (err) {
                this.save();
            }
        }
        else {
            this.save();
        }
    };
    SoundMgr.prototype.save = function () {
        cc.sys.localStorage.setItem(LocalStorageIDCfg_1.LocalStorageIDCfg.GAME_MUSIC_SOUND, JSON.stringify({
            music: this.isMusic,
            sound: this.isSound
        }));
    };
    Object.defineProperty(SoundMgr.prototype, "isMusic", {
        get: function () {
            return this._isMusic;
        },
        set: function (isMusic) {
            if (this._isMusic != isMusic) {
                this._isMusic = isMusic;
                this._isMusic ? this.playMusic(this._musicUrl, true, this._musicVolume) : this.stopMusic();
                this.save();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SoundMgr.prototype, "isSound", {
        get: function () {
            return this._isSound;
        },
        set: function (isSound) {
            if (this._isSound != isSound) {
                this._isSound = isSound;
                if (!isSound) {
                    this.stopAllEffects();
                }
                this.save();
            }
        },
        enumerable: false,
        configurable: true
    });
    SoundMgr.prototype.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    SoundMgr.prototype.playMusic = function (url, loop, volume) {
        if (loop === void 0) { loop = true; }
        if (volume === void 0) { volume = 1; }
        this._musicUrl = url;
        this._musicVolume = volume;
        var clip = cc.loader.getRes(url, cc.AudioClip);
        if (clip && this.isMusic) {
            cc.audioEngine.playMusic(clip, loop);
            cc.audioEngine.setMusicVolume(volume);
        }
    };
    SoundMgr.prototype.stopEffect = function (id) {
        cc.audioEngine.stop(id);
    };
    SoundMgr.prototype.stopAllEffects = function () {
        cc.audioEngine.stopAllEffects();
    };
    SoundMgr.prototype.playEffect = function (url, loop, volume) {
        if (loop === void 0) { loop = false; }
        if (volume === void 0) { volume = 1; }
        var clip = cc.loader.getRes(url, cc.AudioClip);
        if (clip && this.isSound) {
            return cc.audioEngine.play(clip, loop, volume);
        }
    };
    SoundMgr.prototype.playClickSound = function () {
        this.playEffect('common/sounds/click');
    };
    SoundMgr._instance = null;
    return SoundMgr;
}());
exports.SoundMgr = SoundMgr;

cc._RF.pop();