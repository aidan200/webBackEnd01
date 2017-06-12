/**
 * Created by Administrator on 2017/6/12.
 */
const child_process = require('child_process');

//fork 用来执行模块
//参数1=模块路径 参数2=参数列表 参数3=option
/*
var worker_process = child_process.fork("./childDemo1.js", [1]);

worker_process.on('close', function (code) {
    console.log('子进程已退出，退出码 ' + code);
});
*/

//fork可以和子进程之间信息交互
var worker_process = child_process.fork("./childDemo1.js", [1]);
//接受子进程的send内容 可以是字符或json
worker_process.on('message', function(m) {
    console.log('PARENT got message:', m);
});
//向子进程发送消息
worker_process.send({mm:"呵呵哒"});
//子进程从父进程的事件循环中剔除。于是父进程可以愉快的退出  spawn的option设置detached为true 设置stdio为ignore（这点容易忘）
//
worker_process.unref();