
const {ccclass, property} = cc._decorator;

@ccclass
export default class Toast extends cc.Component {

    @property(cc.RichText)
    label: cc.RichText = null;

    @property(cc.Node)
    nodeBg:cc.Node = null;

    public setContent(content: string): void {
        this.label.string = content;
        this.nodeBg.width = Math.min(550 + 40, Math.max(240, this.label.node.width + 40));
    }
    
    public getContent(): string {
        return this.label.string;
    }

    public show(delay: number, afterAni: Function, target: any): void {
        this.nodeBg.stopAllActions();
        this.nodeBg.y = 0;
        this.nodeBg.opacity = 255;
        cc.tween(this.nodeBg)
            .delay(delay)
            .to(0.5, {y: 40, opacity: 0})
            .call(()=>{
                afterAni && afterAni.call(target);
            })
            .start();
    }
}
