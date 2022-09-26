
export class EventMgr {

    public static on(type: string, callback: Function, target?: any, useCapture?: boolean): void {
        cc.game.on(type, callback, target, useCapture);
    }

    public static off(type: string, callback: Function, target?: any): void {
        cc.game.off(type, callback, target);
    }

    public static emit(key: string, arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any): void {
        cc.game.emit(key, arg1, arg2, arg3, arg4, arg5);
    }

    public static hahasEventListeners(key: string): boolean {
        return cc.game.hasEventListener(key);
    }

    public static once(type: string, callback: (arg1?: any, arg2?: any, arg3?: any, arg4?: any, arg5?: any)=> void, target?: any): void {
        cc.game.once(type, callback, target);
    }

    public static removeAll(keyOrTarget: any):void {
        cc.game.removeAll(keyOrTarget);
    }

    public static targetOff(target: any):void {
        cc.game.targetOff(target);
    }
}

