/**
 * Created by Administrator on 2017/6/9.
 */
//util.inherits(constructor, superConstructor)是一个实现对象间原型继承 的函数。
var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function() {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function() {
    console.log(this.name);
};
function Sub() {
    //从新指定this
    Base.call(this);
    this.name = 'sub';
}
util.inherits(Sub, Base);

var s = new Sub();
s.name = 123;
s.sayHello();
s.showName();
console.log(s.base);