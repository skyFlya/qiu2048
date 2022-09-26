import { LocalStorageIDCfg } from "../cfg/LocalStorageIDCfg";


export class SoundMgr {
   
    private static _instance: SoundMgr = null;

    private _isMusic: boolean = true;
    private _isSound: boolean = true;

    private _musicUrl: string = null;
    private _musicVolume: number = 1;


    public static getInstance(): SoundMgr {
        if (SoundMgr._instance == null) {
            SoundMgr._instance = new SoundMgr();
            SoundMgr._instance.init();
        }
        return SoundMgr._instance;
    }

    public static destroyInstance():void {
        if (SoundMgr._instance) {
            SoundMgr._instance = null;
        }
    }

    private init(): void {
        const str = cc.sys.localStorage.getItem(LocalStorageIDCfg.GAME_MUSIC_SOUND);
        if (str) {
            try{
                const data = JSON.parse(str);
                this._isMusic = data.music == false ? false : true;
                this._isSound = data.sound == false ? false : true;
            } catch(err) {
                this.save();
            }
        } else {
            this.save();
        }
    }

    private save(): void {
        cc.sys.localStorage.setItem(LocalStorageIDCfg.GAME_MUSIC_SOUND, JSON.stringify({
            music: this.isMusic,
            sound: this.isSound
        }));
    }

    public get isMusic(): boolean {
        return this._isMusic;
    }

    public set isMusic(isMusic: boolean) {
        if (this._isMusic != isMusic) {
            this._isMusic = isMusic;
            this._isMusic ? this.playMusic(this._musicUrl, true, this._musicVolume) : this.stopMusic();
            this.save();
        }
    }

    public get isSound(): boolean {
        return this._isSound;
    }

    public set isSound(isSound: boolean) {
        if (this._isSound != isSound) {
            this._isSound = isSound;
            if (!isSound) {
                this.stopAllEffects();
            }
            this.save();
        }
    }

    public stopMusic(): void {
        cc.audioEngine.stopMusic();
    }

    public playMusic(url: string, loop: boolean = true, volume: number = 1): void {
        this._musicUrl = url;
        this._musicVolume = volume;
        const clip: cc.AudioClip = cc.loader.getRes(url, cc.AudioClip);
        if (clip && this.isMusic) {
            cc.audioEngine.playMusic(clip, loop);
            cc.audioEngine.setMusicVolume(volume);
        }
    }

    public stopEffect(id: number): void {
        cc.audioEngine.stop(id);
    }

    public stopAllEffects(): void {
        cc.audioEngine.stopAllEffects();
    }   

    public playEffect(url: string, loop: boolean = false, volume: number = 1): number {
        const clip: cc.AudioClip = cc.loader.getRes(url, cc.AudioClip);
        if (clip && this.isSound) {
            return cc.audioEngine.play(clip, loop, volume);
        }
    }

    public playClickSound(): void {
        this.playEffect('common/sounds/click');
    }

}