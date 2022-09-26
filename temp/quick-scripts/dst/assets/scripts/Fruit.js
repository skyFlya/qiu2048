
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Fruit.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRnJ1aXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFBL0M7UUFBQSxxRUE2QkM7UUEzQlcsUUFBRSxHQUFXLENBQUMsQ0FBQzs7SUEyQjNCLENBQUM7SUF6Qkcsb0JBQUksR0FBSixVQUFLLElBQUk7UUFDTCxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUE7UUFDakIsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzVDLEVBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUM1QixtQkFBbUI7SUFDdkIsQ0FBQztJQUVELDhCQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDL0IsYUFBYTtRQUNiLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ3pCLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3pDLElBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQzthQUNsRDtTQUNKO0lBQ0wsQ0FBQztJQUVELHVCQUFPLEdBQVA7UUFDSSxPQUFPO1lBQ0gsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1NBQy9CLENBQUE7SUFDTCxDQUFDO0lBM0JnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBNkJ6QjtJQUFELFlBQUM7Q0E3QkQsQUE2QkMsQ0E3QmtDLEVBQUUsQ0FBQyxTQUFTLEdBNkI5QztrQkE3Qm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJ1aXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyID0gMDtcblxuICAgIGluaXQoZGF0YSkge1xuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZFxuICAgICAgICBjb25zdCBzcCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKVxuICAgICAgICBzcC5zcHJpdGVGcmFtZSA9IGRhdGEuaWNvblNGXG4gICAgICAgIC8vIHRvZG8g5o6n5Yi25LiA5LiL5q+P56eN5rC05p6c55qE5bC65a+4XG4gICAgfVxuXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcbiAgICAgICAgLy8g6LKM5Ly85qOA5rWL5pyJ54K55raI6ICX5oCn6IO9XG4gICAgICAgIGlmIChzZWxmLm5vZGUgJiYgb3RoZXIubm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcyA9IHNlbGYubm9kZS5nZXRDb21wb25lbnQoJ0ZydWl0JylcbiAgICAgICAgICAgIGNvbnN0IG8gPSBvdGhlci5ub2RlLmdldENvbXBvbmVudCgnRnJ1aXQnKVxuICAgICAgICAgICAgaWYgKHMgJiYgbyAmJiBzLmlkID09PSBvLmlkKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmVtaXQoJ3NhbWVDb250YWN0JywgeyBzZWxmLCBvdGhlciB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldERhdGEoKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICAgICAgcG9zOiB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbiJdfQ==