"use strict";
cc._RF.push(module, 'd42e71Qe6FA56JLRDPJ3jx5', 'Fruit');
// scripts/Fruit.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Fruit = /** @class */ (function (_super) {
    __extends(Fruit, _super);
    function Fruit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.id = 0;
        return _this;
    }
    Fruit.prototype.init = function (data) {
        this.id = data.id;
        var sp = this.node.getComponent(cc.Sprite);
        sp.spriteFrame = data.iconSF;
        // todo 控制一下每种水果的尺寸
    };
    Fruit.prototype.onBeginContact = function (contact, self, other) {
        // 貌似检测有点消耗性能
        if (self.node && other.node) {
            var s = self.node.getComponent('Fruit');
            var o = other.node.getComponent('Fruit');
            if (s && o && s.id === o.id) {
                self.node.emit('sameContact', { self: self, other: other });
            }
        }
    };
    Fruit.prototype.getData = function () {
        return {
            id: this.id,
            pos: this.node.getPosition()
        };
    };
    Fruit = __decorate([
        ccclass
    ], Fruit);
    return Fruit;
}(cc.Component));
exports.default = Fruit;

cc._RF.pop();