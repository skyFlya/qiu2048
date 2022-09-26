window.__require = function t(e, i, c) {
function n(r, a) {
if (!i[r]) {
if (!e[r]) {
var s = r.split("/");
s = s[s.length - 1];
if (!e[s]) {
var u = "function" == typeof __require && __require;
if (!a && u) return u(s, !0);
if (o) return o(s, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = s;
}
var d = i[r] = {
exports: {}
};
e[r][0].call(d.exports, function(t) {
return n(e[r][1][t] || t);
}, d, d.exports, t, e, i, c);
}
return i[r].exports;
}
for (var o = "function" == typeof __require && __require, r = 0; r < c.length; r++) n(c[r]);
return n;
}({
Fruit: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "365b4UAiQRBA7QXa2IuFMmj", "Fruit");
cc.Class({
extends: cc.Component,
properties: {
id: 0
},
init: function(t) {
this.id = t.id;
this.node.getComponent(cc.Sprite).spriteFrame = t.iconSF;
},
start: function() {},
onBeginContact: function(t, e, i) {
if (e.node && i.node) {
var c = e.node.getComponent("Fruit"), n = i.node.getComponent("Fruit");
c && n && c.id === n.id && e.node.emit("sameContact", {
self: e,
other: i
});
}
}
});
cc._RF.pop();
}, {} ],
Game: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "8e80dMWyH5LD7Oj100K42f8", "Game");
var c = cc.Class({
name: "FruitItem",
properties: {
id: 0,
iconSF: cc.SpriteFrame
}
}), n = cc.Class({
name: "JuiceItem",
properties: {
particle: cc.SpriteFrame,
circle: cc.SpriteFrame,
slash: cc.SpriteFrame
}
});
cc.Class({
extends: cc.Component,
properties: {
fruits: {
default: [],
type: c
},
juices: {
default: [],
type: n
},
fruitPrefab: {
default: null,
type: cc.Prefab
},
juicePrefab: {
default: null,
type: cc.Prefab
},
boomAudio: {
default: null,
type: cc.AudioClip
},
knockAudio: {
default: null,
type: cc.AudioClip
},
waterAudio: {
default: null,
type: cc.AudioClip
}
},
onLoad: function() {
this.initPhysics();
this.isCreating = !1;
this.fruitCount = 0;
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.initOneFruit();
},
initPhysics: function() {
var t = cc.director.getPhysicsManager();
t.enabled = !0;
t.gravity = cc.v2(0, -960);
cc.director.getCollisionManager().enabled = !0;
var e = this.node.width, i = this.node.height, c = new cc.Node();
c.addComponent(cc.RigidBody).type = cc.RigidBodyType.Static;
var n = function(t, e, i, c, n) {
var o = t.addComponent(cc.PhysicsBoxCollider);
o.offset.x = e;
o.offset.y = i;
o.size.width = c;
o.size.height = n;
};
n(c, 0, -i / 2, e, 1);
n(c, 0, i / 2, e, 1);
n(c, -e / 2, 0, 1, i);
n(c, e / 2, 0, 1, i);
c.parent = this.node;
},
initOneFruit: function(t) {
void 0 === t && (t = 1);
this.fruitCount++;
this.currentFruit = this.createFruitOnPos(0, 400, t);
},
onTouchStart: function(t) {
var e = this;
if (!this.isCreating) {
this.isCreating = !0;
var i = this.node, c = i.width, n = i.height, o = this.currentFruit, r = t.getLocation(), a = r.x;
r.y;
a -= c / 2;
n / 2;
var s = cc.sequence(cc.moveBy(.3, cc.v2(a, 0)).easing(cc.easeCubicActionIn()), cc.callFunc(function() {
e.startFruitPhysics(o);
e.scheduleOnce(function() {
var t = e.getNextFruitId();
console.log("aaaa", t);
e.initOneFruit(t);
e.isCreating = !1;
}, 1);
}));
o.runAction(s);
}
},
getNextFruitId: function() {
return this.fruitCount < 3 ? 1 : 3 === this.fruitCount ? 2 : Math.floor(5 * Math.random()) + 1;
},
createOneFruit: function(t) {
var e = cc.instantiate(this.fruitPrefab), i = this.fruits[t - 1];
e.getComponent("Fruit").init({
id: i.id,
iconSF: i.iconSF
});
e.getComponent(cc.RigidBody).type = cc.RigidBodyType.Static;
e.getComponent(cc.PhysicsCircleCollider).radius = 0;
this.node.addChild(e);
e.scale = .6;
e.on("sameContact", this.onSameFruitContact.bind(this));
return e;
},
startFruitPhysics: function(t) {
t.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
var e = t.getComponent(cc.PhysicsCircleCollider);
e.radius = t.height / 2;
e.apply();
},
createFruitOnPos: function(t, e, i) {
void 0 === i && (i = 1);
var c = this.createOneFruit(i);
c.setPosition(cc.v2(t, e));
return c;
},
onSameFruitContact: function(t) {
var e = t.self, i = t.other;
i.node.off("sameContact");
var c = i.getComponent("Fruit").id;
e.node.removeFromParent(!1);
i.node.removeFromParent(!1);
var n = i.node, o = n.x, r = n.y;
this.createFruitJuice(c, cc.v2({
x: o,
y: r
}), i.node.width);
var a = c + 1;
if (a <= 11) {
var s = this.createFruitOnPos(o, r, a);
this.startFruitPhysics(s);
s.scale = 0;
cc.tween(s).to(.5, {
scale: .6
}, {
easing: "backOut"
}).start();
} else console.log(" todo 合成两个西瓜 还没有实现哦~ ");
},
createFruitJuice: function(t, e, i) {
cc.audioEngine.play(this.boomAudio, !1, 1);
cc.audioEngine.play(this.waterAudio, !1, 1);
var c = cc.instantiate(this.juicePrefab);
this.node.addChild(c);
var n = this.juices[t - 1], o = c.getComponent("Juice");
o.init(n);
o.showJuice(e, i);
}
});
cc._RF.pop();
}, {} ],
Juice: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "56c1eHSOMxI0L+m6MX8FMXw", "Juice");
var c = function(t, e) {
return Math.floor(Math.random() * (e - t) + t);
};
cc.Class({
extends: cc.Component,
properties: {
particle: {
default: null,
type: cc.SpriteFrame
},
circle: {
default: null,
type: cc.SpriteFrame
},
slash: {
default: null,
type: cc.SpriteFrame
}
},
init: function(t) {
this.particle = t.particle;
this.circle = t.particle;
this.slash = t.slash;
},
showJuice: function(t, e) {
for (var i = this, n = function(n) {
var o = new cc.Node("Sprite");
o.addComponent(cc.Sprite).spriteFrame = i.particle;
o.parent = i.node;
var r = 359 * Math.random(), a = (n = 30 * Math.random() + e / 2, cc.v2(Math.sin(r * Math.PI / 180) * n, Math.cos(r * Math.PI / 180) * n));
o.scale = .5 * Math.random() + e / 100;
var s = .5 * Math.random();
o.position = t;
o.runAction(cc.sequence(cc.spawn(cc.moveBy(s, a), cc.scaleTo(s + .5, .3), cc.rotateBy(s + .5, c(-360, 360))), cc.fadeOut(.1), cc.callFunc(function() {
o.active = !1;
}, i)));
}, o = 0; o < 10; ++o) n(o);
for (var r = function(c) {
var n = new cc.Node("Sprite");
n.addComponent(cc.Sprite).spriteFrame = i.circle;
n.parent = i.node;
var o = 359 * Math.random(), r = 30 * Math.random() + e / 2, a = cc.v2(Math.sin(o * Math.PI / 180) * r, Math.cos(o * Math.PI / 180) * r);
n.scale = .5 * Math.random() + e / 100;
var s = .5 * Math.random();
n.position = t;
n.runAction(cc.sequence(cc.spawn(cc.moveBy(s, a), cc.scaleTo(s + .5, .3)), cc.fadeOut(.1), cc.callFunc(function() {
n.active = !1;
}, i)));
}, a = 0; a < 20; a++) r();
var s = new cc.Node("Sprite");
s.addComponent(cc.Sprite).spriteFrame = this.slash;
s.parent = this.node;
s.position = t;
s.scale = 0;
s.angle = c(0, 360);
s.runAction(cc.sequence(cc.spawn(cc.scaleTo(.2, e / 150), cc.fadeOut(1)), cc.callFunc(function() {
s.active = !1;
})));
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "Fruit", "Game", "Juice" ]);