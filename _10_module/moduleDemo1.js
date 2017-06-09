/**
 * Created by Administrator on 2017/6/9.
 */
//通过module.exports对象封装后提供其他模块使用
//把一个对象封装到模块中
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};

//exports 是module对象的一个json对象
//可以被直接覆盖
module.exports = Hello;