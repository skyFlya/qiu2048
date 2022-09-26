
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/mgrs/SoundMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWdyc1xcU291bmRNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOERBQTZEO0FBRzdEO0lBQUE7UUFJWSxhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUyxHQUFXLElBQUksQ0FBQztRQUN6QixpQkFBWSxHQUFXLENBQUMsQ0FBQztJQWtHckMsQ0FBQztJQS9GaUIsb0JBQVcsR0FBekI7UUFDSSxJQUFJLFFBQVEsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQzVCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQztZQUNwQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFFYSx3QkFBZSxHQUE3QjtRQUNJLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtZQUNwQixRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFTyx1QkFBSSxHQUFaO1FBQ0ksSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLHFDQUFpQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUUsSUFBSSxHQUFHLEVBQUU7WUFDTCxJQUFHO2dCQUNDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMs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QUM7UUFDL0QsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN0QixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbEQ7SUFDTCxDQUFDO0lBRU0saUNBQWMsR0FBckI7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQXRHYyxrQkFBUyxHQUFhLElBQUksQ0FBQztJQXdHOUMsZUFBQztDQTFHRCxBQTBHQyxJQUFBO0FBMUdZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYWxTdG9yYWdlSURDZmcgfSBmcm9tIFwiLi4vY2ZnL0xvY2FsU3RvcmFnZUlEQ2ZnXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNvdW5kTWdyIHtcclxuICAgXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFNvdW5kTWdyID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9pc011c2ljOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgX2lzU291bmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHByaXZhdGUgX211c2ljVXJsOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfbXVzaWNWb2x1bWU6IG51bWJlciA9IDE7XHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogU291bmRNZ3Ige1xyXG4gICAgICAgIGlmIChTb3VuZE1nci5faW5zdGFuY2UgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBTb3VuZE1nci5faW5zdGFuY2UgPSBuZXcgU291bmRNZ3IoKTtcclxuICAgICAgICAgICAgU291bmRNZ3IuX2luc3RhbmNlLmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFNvdW5kTWdyLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlc3Ryb3lJbnN0YW5jZSgpOnZvaWQge1xyXG4gICAgICAgIGlmIChTb3VuZE1nci5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgU291bmRNZ3IuX2luc3RhbmNlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShMb2NhbFN0b3JhZ2VJRENmZy5HQU1FX01VU0lDX1NPVU5EKTtcclxuICAgICAgICBpZiAoc3RyKSB7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHN0cik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc011c2ljID0gZGF0YS5tdXNpYyA9PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzU291bmQgPSBkYXRhLnNvdW5kID09IGZhbHNlID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNhdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYXZlKCk6IHZvaWQge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShMb2NhbFN0b3JhZ2VJRENmZy5HQU1FX01VU0lDX1NPVU5ELCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIG11c2ljOiB0aGlzLmlzTXVzaWMsXHJcbiAgICAgICAgICAgIHNvdW5kOiB0aGlzLmlzU291bmRcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpc011c2ljKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc011c2ljO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgaXNNdXNpYyhpc011c2ljOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzTXVzaWMgIT0gaXNNdXNpYykge1xyXG4gICAgICAgICAgICB0aGlzLl9pc011c2ljID0gaXNNdXNpYztcclxuICAgICAgICAgICAgdGhpcy5faXNNdXNpYyA/IHRoaXMucGxheU11c2ljKHRoaXMuX211c2ljVXJsLCB0cnVlLCB0aGlzLl9tdXNpY1ZvbHVtZSkgOiB0aGlzLnN0b3BNdXNpYygpO1xyXG4gICAgICAgICAgICB0aGlzLnNhdmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpc1NvdW5kKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgaXNTb3VuZChpc1NvdW5kOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzU291bmQgIT0gaXNTb3VuZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc1NvdW5kID0gaXNTb3VuZDtcclxuICAgICAgICAgICAgaWYgKCFpc1NvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBbGxFZmZlY3RzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wTXVzaWMoKTogdm9pZCB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBsYXlNdXNpYyh1cmw6IHN0cmluZywgbG9vcDogYm9vbGVhbiA9IHRydWUsIHZvbHVtZTogbnVtYmVyID0gMSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX211c2ljVXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMuX211c2ljVm9sdW1lID0gdm9sdW1lO1xyXG4gICAgICAgIGNvbnN0IGNsaXA6IGNjLkF1ZGlvQ2xpcCA9IGNjLmxvYWRlci5nZXRSZXModXJsLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgIGlmIChjbGlwICYmIHRoaXMuaXNNdXNpYykge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCwgbG9vcCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHZvbHVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wRWZmZWN0KGlkOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcEFsbEVmZmVjdHMoKTogdm9pZCB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgIH0gICBcclxuXHJcbiAgICBwdWJsaWMgcGxheUVmZmVjdCh1cmw6IHN0cmluZywgbG9vcDogYm9vbGVhbiA9IGZhbHNlLCB2b2x1bWU6IG51bWJlciA9IDEpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IGNsaXA6IGNjLkF1ZGlvQ2xpcCA9IGNjLmxvYWRlci5nZXRSZXModXJsLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgIGlmIChjbGlwICYmIHRoaXMuaXNTb3VuZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBsb29wLCB2b2x1bWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGxheUNsaWNrU291bmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGF5RWZmZWN0KCdjb21tb24vc291bmRzL2NsaWNrJyk7XHJcbiAgICB9XHJcblxyXG59Il19