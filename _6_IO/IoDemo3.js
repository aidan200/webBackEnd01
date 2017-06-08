/**
 * Created by Administrator on 2017/6/8.
 */
var fs = require("fs");
var zlib = require('zlib');

// 创建一个可读流
var readerStream = fs.createReadStream('编码规范.docx');

// 创建一个可写流
var writerStream = fs.createWriteStream('aa.docx');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log("程序执行完毕");


//链式流 功能同上
fs.createReadStream('input.txt')
    .pipe(fs.createWriteStream('output.txt'));

