/**
 * Created by Administrator on 2017/6/8.
 */
// Node.js 异步编程的直接体现就是回调。
// 异步编程依托于回调来实现，但不能说使用了回调后程序就异步化了。
// 一边读取文件，一边执行其他命令
var fs = require("fs");
// 同步阻塞读取文件
/*var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");*/

//异步非阻塞读取
fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");