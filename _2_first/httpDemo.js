/**
 * Created by Administrator on 2017/6/7.
 */
// 使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http
var http = require("http");
http.createServer(function (request, response) {

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // a.内容类型: text/plain
    //response.writeHead(200, {'Content-Type': 'text/plain'});
    // b.内容类型html 页面编码utf8
    response.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
    // a.发送响应数据 "Hello World"
    //response.write('Hello World\n');
    // b.发送html
    //response.write('<h1>合计额呵呵呵</h1>')
    response.end();
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');