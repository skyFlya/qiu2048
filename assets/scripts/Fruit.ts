const { ccclass, property } = cc._decorator;

@ccclass
export default class Fruit extends cc.Component {

    private id: number = 0;

    init(data) {
        this.id = data.id
        const sp = this.node.getComponent(cc.Sprite)
        sp.spriteFrame = data.iconSF
        // todo 控制一下每种水果的尺寸
    }

    onBeginContact(contact, self, other) {
        // 貌似检测有点消耗性能
        if (self.node && other.node) {
            const s = self.node.getComponent('Fruit')
            const o = other.node.getComponent('Fruit')
            if (s && o && s.id === o.id) {
                self.node.emit('sameContact', { self, other });
            }
        }
    }

    getData(){
        return {
            id: this.id,
            pos: this.node.getPosition()
        }
    }

}

