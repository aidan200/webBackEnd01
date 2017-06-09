/**
 * Created by Administrator on 2017/6/9.
 */
var demo1 = require('./moduleDemo1');
var demo2 = require('./moduleDemo2');
var a = new demo1();
console.log(a.a);
a.setName("a");
a.sayHello();

demo2.a();
demo2.b();
demo2.c();