
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
            _this.node && _this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSnVpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTSxhQUFhLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQztJQUNoQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQ2xELENBQUMsQ0FBQTtBQUVLLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBQS9DO1FBQUEscUVBaUZDO1FBOUVXLGNBQVEsR0FBRyxJQUFJLENBQUM7UUFHaEIsWUFBTSxHQUFHLElBQUksQ0FBQztRQUdkLFdBQUssR0FBRyxJQUFJLENBQUM7O0lBd0V6QixDQUFDO0lBdEVHLG9CQUFJLEdBQUosVUFBSyxJQUFJO1FBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFBO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDM0IsQ0FBQztJQUVELFdBQVc7SUFDWCx5QkFBUyxHQUFULFVBQVUsR0FBRyxFQUFFLEtBQUs7UUFBcEIsaUJBOERDO2dDQTVEWSxDQUFDO1lBQ04sSUFBTSxNQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLElBQU0sSUFBRSxHQUFHLE1BQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXhDLElBQUUsQ0FBQyxXQUFXLEdBQUcsT0FBSyxRQUFRLENBQUM7WUFDL0IsTUFBSSxDQUFDLE1BQU0sR0FB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LElBQUksSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUE3RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzsyQ0FDRDtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3lDQUNIO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7d0NBQ0o7SUFUSixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBaUZ6QjtJQUFELFlBQUM7Q0FqRkQsQUFpRkMsQ0FqRmtDLEVBQUUsQ0FBQyxTQUFTLEdBaUY5QztrQkFqRm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSYW5kb21JbnRlZ2VyID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHQgLSBlKSArIGUpXG59XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKdWljZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgcHJpdmF0ZSBwYXJ0aWNsZSA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gICAgcHJpdmF0ZSBjaXJjbGUgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICAgIHByaXZhdGUgc2xhc2ggPSBudWxsO1xuXG4gICAgaW5pdChkYXRhKSB7XG4gICAgICAgIHRoaXMucGFydGljbGUgPSBkYXRhLnBhcnRpY2xlXG4gICAgICAgIHRoaXMuY2lyY2xlID0gZGF0YS5wYXJ0aWNsZVxuICAgICAgICB0aGlzLnNsYXNoID0gZGF0YS5zbGFzaFxuICAgIH1cblxuICAgIC8vIOWQiOW5tuaXtueahOWKqOeUu+aViOaenFxuICAgIHNob3dKdWljZShwb3MsIHdpZHRoKSB7XG4gICAgICAgIC8vIOaenOeyklxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGUgPSBuZXcgY2MuTm9kZSgnU3ByaXRlJyk7XG4gICAgICAgICAgICBjb25zdCBzcCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG5cbiAgICAgICAgICAgIHNwLnNwcml0ZUZyYW1lID0gdGhpcy5wYXJ0aWNsZTtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuXG4gICAgICAgICAgICBjb25zdCBhID0gMzU5ICogTWF0aC5yYW5kb20oKSxcbiAgICAgICAgICAgICAgICBpID0gMzAgKiBNYXRoLnJhbmRvbSgpICsgd2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIGwgPSBjYy52MihNYXRoLnNpbihhICogTWF0aC5QSSAvIDE4MCkgKiBpLCBNYXRoLmNvcyhhICogTWF0aC5QSSAvIDE4MCkgKiBpKTtcbiAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAuNSAqIE1hdGgucmFuZG9tKCkgKyB3aWR0aCAvIDEwMDtcbiAgICAgICAgICAgIGNvbnN0IHAgPSAuNSAqIE1hdGgucmFuZG9tKCk7XG5cbiAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSBwb3M7XG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihcbiAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShjYy5zcGF3bihjYy5tb3ZlQnkocCwgbCksXG4gICAgICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8ocCArIC41LCAuMyksXG4gICAgICAgICAgICAgICAgICAgIGNjLnJvdGF0ZUJ5KHAgKyAuNSwgUmFuZG9tSW50ZWdlcigtMzYwLCAzNjApKSksXG4gICAgICAgICAgICAgICAgICAgIGNjLmZhZGVPdXQoLjEpLFxuICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpKVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5rC054+gXG4gICAgICAgIGZvciAobGV0IGYgPSAwOyBmIDwgMjA7IGYrKykge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IG5ldyBjYy5Ob2RlKCdTcHJpdGUnKTtcbiAgICAgICAgICAgIGNvbnN0IHNwID0gbm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcblxuICAgICAgICAgICAgc3Auc3ByaXRlRnJhbWUgPSB0aGlzLmNpcmNsZTtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuXG4gICAgICAgICAgICBsZXQgYSA9IDM1OSAqIE1hdGgucmFuZG9tKCksIGkgPSAzMCAqIE1hdGgucmFuZG9tKCkgKyB3aWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgbCA9IGNjLnYyKE1hdGguc2luKGEgKiBNYXRoLlBJIC8gMTgwKSAqIGksIE1hdGguY29zKGEgKiBNYXRoLlBJIC8gMTgwKSAqIGkpO1xuICAgICAgICAgICAgbm9kZS5zY2FsZSA9IC41ICogTWF0aC5yYW5kb20oKSArIHdpZHRoIC8gMTAwO1xuICAgICAgICAgICAgbGV0IHAgPSAuNSAqIE1hdGgucmFuZG9tKCk7XG4gICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gcG9zXG4gICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zcGF3bihjYy5tb3ZlQnkocCwgbCksIGNjLnNjYWxlVG8ocCArIC41LCAuMykpLCBjYy5mYWRlT3V0KC4xKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIH0sIHRoaXMpKSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaenOaxgVxuICAgICAgICBjb25zdCBub2RlID0gbmV3IGNjLk5vZGUoJ1Nwcml0ZScpO1xuICAgICAgICBjb25zdCBzcCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG5cbiAgICAgICAgc3Auc3ByaXRlRnJhbWUgPSB0aGlzLnNsYXNoO1xuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcblxuICAgICAgICBub2RlLnBvc2l0aW9uID0gcG9zXG4gICAgICAgIG5vZGUuc2NhbGUgPSAwXG4gICAgICAgIG5vZGUuYW5nbGUgPSBSYW5kb21JbnRlZ2VyKDAsIDM2MClcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc3Bhd24oY2Muc2NhbGVUbyguMiwgd2lkdGggLyAxNTApLCBjYy5mYWRlT3V0KDEpKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICB9KSkpXG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5vZGUgJiYgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxufVxuXG4iXX0=