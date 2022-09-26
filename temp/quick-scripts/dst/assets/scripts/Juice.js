
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Juice.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSnVpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQztJQUNoQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ2xELENBQUMsQ0FBQTtBQUVLLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBaUZDO1FBOUVXLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFHaEIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUdkLFdBQUssR0FBRyxJQUFJLENBQUM7O0lBd0V6QixDQUFDO0lBdEVHLG9CQUFJLEdBQUosVUFBSyxJQUFJO1FBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDM0IsQ0FBQztJQUVELFdBQVc7SUFDWCx5QkFBUyxHQUFULFVBQVUsR0FBRyxFQUFFLEtBQUs7UUFBcEIsaUJBOERDO2dDQTVEWSxDQUFDO1lBQ04sSUFBTSxNQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLElBQU0sSUFBRSxHQUFHLE1BQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXhDLElBQUUsQ0FBQyxXQUFXLEdBQUcsT0FBSyxRQUFRLENBQUM7WUFDL0IsTUFBSSxDQUFDLE1BQU0sR0FB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LElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBN0VEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7MkNBQ0Q7SUFHeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt5Q0FDSDtJQUd0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dDQUNKO0lBVEosS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWlGekI7SUFBRCxZQUFDO0NBakZELEFBaUZDLENBakZrQyxFQUFFLENBQUMsU0FBUyxHQWlGOUM7a0JBakZvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUmFuZG9tSW50ZWdlciA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0IC0gZSkgKyBlKVxufVxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSnVpY2UgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHByaXZhdGUgcGFydGljbGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHByaXZhdGUgY2lyY2xlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBwcml2YXRlIHNsYXNoID0gbnVsbDtcblxuICAgIGluaXQoZGF0YSkge1xuICAgICAgICB0aGlzLnBhcnRpY2xlID0gZGF0YS5wYXJ0aWNsZVxuICAgICAgICB0aGlzLmNpcmNsZSA9IGRhdGEucGFydGljbGVcbiAgICAgICAgdGhpcy5zbGFzaCA9IGRhdGEuc2xhc2hcbiAgICB9XG5cbiAgICAvLyDlkIjlubbml7bnmoTliqjnlLvmlYjmnpxcbiAgICBzaG93SnVpY2UocG9zLCB3aWR0aCkge1xuICAgICAgICAvLyDmnpznspJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xuICAgICAgICAgICAgY29uc3Qgc3AgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuXG4gICAgICAgICAgICBzcC5zcHJpdGVGcmFtZSA9IHRoaXMucGFydGljbGU7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcblxuICAgICAgICAgICAgY29uc3QgYSA9IDM1OSAqIE1hdGgucmFuZG9tKCksXG4gICAgICAgICAgICAgICAgaSA9IDMwICogTWF0aC5yYW5kb20oKSArIHdpZHRoIC8gMixcbiAgICAgICAgICAgICAgICBsID0gY2MudjIoTWF0aC5zaW4oYSAqIE1hdGguUEkgLyAxODApICogaSwgTWF0aC5jb3MoYSAqIE1hdGguUEkgLyAxODApICogaSk7XG4gICAgICAgICAgICBub2RlLnNjYWxlID0gLjUgKiBNYXRoLnJhbmRvbSgpICsgd2lkdGggLyAxMDA7XG4gICAgICAgICAgICBjb25zdCBwID0gLjUgKiBNYXRoLnJhbmRvbSgpO1xuXG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gcG9zO1xuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oXG4gICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoY2Muc3Bhd24oY2MubW92ZUJ5KHAsIGwpLFxuICAgICAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKHAgKyAuNSwgLjMpLFxuICAgICAgICAgICAgICAgICAgICBjYy5yb3RhdGVCeShwICsgLjUsIFJhbmRvbUludGVnZXIoLTM2MCwgMzYwKSkpLFxuICAgICAgICAgICAgICAgICAgICBjYy5mYWRlT3V0KC4xKSxcbiAgICAgICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKSlcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOawtOePoFxuICAgICAgICBmb3IgKGxldCBmID0gMDsgZiA8IDIwOyBmKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XG4gICAgICAgICAgICBjb25zdCBzcCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG5cbiAgICAgICAgICAgIHNwLnNwcml0ZUZyYW1lID0gdGhpcy5jaXJjbGU7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcblxuICAgICAgICAgICAgbGV0IGEgPSAzNTkgKiBNYXRoLnJhbmRvbSgpLCBpID0gMzAgKiBNYXRoLnJhbmRvbSgpICsgd2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIGwgPSBjYy52MihNYXRoLnNpbihhICogTWF0aC5QSSAvIDE4MCkgKiBpLCBNYXRoLmNvcyhhICogTWF0aC5QSSAvIDE4MCkgKiBpKTtcbiAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAuNSAqIE1hdGgucmFuZG9tKCkgKyB3aWR0aCAvIDEwMDtcbiAgICAgICAgICAgIGxldCBwID0gLjUgKiBNYXRoLnJhbmRvbSgpO1xuICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHBvc1xuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc3Bhd24oY2MubW92ZUJ5KHAsIGwpLCBjYy5zY2FsZVRvKHAgKyAuNSwgLjMpKSwgY2MuZmFkZU91dCguMSksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB9LCB0aGlzKSkpXG4gICAgICAgIH1cblxuICAgICAgICAvLyDmnpzmsYFcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcbiAgICAgICAgY29uc3Qgc3AgPSBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuXG4gICAgICAgIHNwLnNwcml0ZUZyYW1lID0gdGhpcy5zbGFzaDtcbiAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG5cbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHBvc1xuICAgICAgICBub2RlLnNjYWxlID0gMFxuICAgICAgICBub2RlLmFuZ2xlID0gUmFuZG9tSW50ZWdlcigwLCAzNjApXG4gICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLnNwYXduKGNjLnNjYWxlVG8oLjIsIHdpZHRoIC8gMTUwKSwgY2MuZmFkZU91dCgxKSksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgfSkpKVxuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxufVxuXG4iXX0=