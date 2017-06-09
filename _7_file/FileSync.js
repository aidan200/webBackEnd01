/**
 * Created by Administrator on 2017/6/8.
 */
var fs = require("fs");
/*
// 异步读取
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");*/

//文件打开
/*
// 异步打开文件
console.log("准备打开文件！");
                  //打开方式              //文件描述符，关闭时使用
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！"+fd);
    // 关闭文件
    fs.close(fd, function(err){
        if (err){
            console.log(err);
        }
        console.log("文件关闭成功");
    });
});*/

// 文件信息
/*
fs.stat('FileCV.js', function (err, stats) {
    console.log(stats.isFile()); 		//true  是否是文件
    console.log(stats.isBlockDevice())  //false  是否是模块
})*/


console.log("准备删除文件！");
fs.unlink('input2.txt', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("文件删除成功！");
});