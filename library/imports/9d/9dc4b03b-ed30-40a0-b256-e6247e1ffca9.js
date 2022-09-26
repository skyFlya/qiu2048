"use strict";
cc._RF.push(module, '9dc4bA77TBAoLJW5iR+H/yp', 'PannelAlert1');
// scripts/pannels/PannelAlert1.ts

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
var UICfg_1 = require("../cfg/UICfg");
var DialogBase_1 = require("../ui/DialogBase");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PannelAlert1 = /** @class */ (function (_super) {
    __extends(PannelAlert1, _super);
    function PannelAlert1() {
        var _this = _super.call(this) || this;
        _this._uiName = UICfg_1.UICfg.PannelAlert1.name;
        return _this;
    }
    PannelAlert1 = __decorate([
        ccclass
    ], PannelAlert1);
    return PannelAlert1;
}(DialogBase_1.default));
exports.default = PannelAlert1;

cc._RF.pop();