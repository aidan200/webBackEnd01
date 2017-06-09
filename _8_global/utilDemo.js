
/**
 * Created by Administrator on 2017/6/9.
 */
var util = require('util');
function Person() {
    this.name = 'byvoid';
    this.toString = function() {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
//util.inspect 将任意对象转换 为字符串的方法，通常用于调试和错误输出。
                              //可选参数，如果值为 true，将会输出更多隐藏信息。
console.log(util.inspect(obj, true));

//判断数组
console.log(util.isArray([]));
//判断正则
console.log(util.isRegExp(new RegExp('another regexp')));
//判断日期
console.log(util.isDate(new Date()));
//判断错误
console.log(util.isError(new Error()));