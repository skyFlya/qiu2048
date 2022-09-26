"use strict";
cc._RF.push(module, '68577KH4U9LraxPrFCjzw67', 'Juice');
// scripts/Juice.ts

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
var RandomInteger = function (e, t) {
    return Math.floor(Math.random() * (t - e) + e);
};
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Juice = /** @class */ (function (_super) {
    __extends(Juice, _super);
    function Juice() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.particle = null;
        _this.circle = null;
        _this.slash = null;
        return _this;
    }
    Juice.prototype.init = function (data) {
        this.particle = data.particle;
        this.circle = data.particle;
        this.slash = data.slash;
    };
    // 合并时的动画效果
    Juice.prototype.showJuice = function (pos, width) {
        var _this = this;
        var _loop_1 = function (i) {
            var node_1 = new cc.Node('Sprite');
            var sp_1 = node_1.addComponent(cc.Sprite);
            sp_1.spriteFrame = this_1.particle;
            node_1.parent = this_1.node;
            var a = 359 * Math.random(), i_1 = 30 * Math.random() + width / 2, l = cc.v2(Math.sin(a * Math.PI / 180) * i_1, Math.cos(a * Math.PI / 180) * i_1);
            node_1.scale = .5 * Math.random() + width / 100;
            var p = .5 * Math.random();
            node_1.position = pos;
            node_1.runAction(cc.sequence(cc.spawn(cc.moveBy(p, l), cc.scaleTo(p + .5, .3), cc.rotateBy(p + .5, RandomInteger(-360, 360))), cc.fadeOut(.1), cc.callFunc(function () {
                node_1.active = false;
            }, this_1)));
        };
        var this_1 = this;
        // 果粒
        for (var i = 0; i < 10; ++i) {
            _loop_1(i);
        }
        var _loop_2 = function (f) {
            var node_2 = new cc.Node('Sprite');
            var sp_2 = node_2.addComponent(cc.Sprite);
            sp_2.spriteFrame = this_2.circle;
            node_2.parent = this_2.node;
            var a = 359 * Math.random(), i = 30 * Math.random() + width / 2, l = cc.v2(Math.sin(a * Math.PI / 180) * i, Math.cos(a * Math.PI / 180) * i);
            node_2.scale = .5 * Math.random() + width / 100;
            var p = .5 * Math.random();
            node_2.position = pos;
            node_2.runAction(cc.sequence(cc.spawn(cc.moveBy(p, l), cc.scaleTo(p + .5, .3)), cc.fadeOut(.1), cc.callFunc(function () {
                node_2.active = false;
            }, this_2)));
        };
        var this_2 = this;
        // 水珠
        for (var f = 0; f < 20; f++) {
            _loop_2(f);
        }
        // 果汁
        var node = new cc.Node('Sprite');
        var sp = node.addComponent(cc.Sprite);
        sp.spriteFrame = this.slash;
        node.parent = this.node;
        node.position = pos;
        node.scale = 0;
        node.angle = RandomInteger(0, 360);
        node.runAction(cc.sequence(cc.spawn(cc.scaleTo(.2, width / 150), cc.fadeOut(1)), cc.callFunc(function () {
            node.active = false;
        })));
        setTimeout(function () {
            _this.node.destroy();
        }, 3000);
    };
    __decorate([
        property(cc.SpriteFrame)
    ], Juice.prototype, "particle", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Juice.prototype, "circle", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], Juice.prototype, "slash", void 0);
    Juice = __decorate([
        ccclass
    ], Juice);
    return Juice;
}(cc.Component));
exports.default = Juice;

cc._RF.pop();