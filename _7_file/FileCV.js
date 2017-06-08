/**
 * Created by Administrator on 2017/6/8.
 */

//文件复制注意异步问题

//错误代码

/*var fs=require("fs");
function readFile(){
    console.log('--------开始读取文件--------');
    var fs = require('fs');
    fs.readFile('input.txt', 'utf-8', function(err, data) {
        if (err) {
            console.log("读取失败");
        } else {
            console.log(data);
            return data;
        }
    });
    console.log('--------读取结束--------');
}

function writeFile(data){
    fs.writeFile("input2.txt",data,function(error){
        if(error){
            throw error;
        }else{
            console.log("文件已保存");
        }
    });
}
function copyFile(){
    var txt=readFile();
    writeFile(txt);
}
copyFile();*/

//正确代码


var fs=require("fs");
function copyFile(){
    console.log('--------开始读取文件--------');
    fs.readFile('input.txt', 'utf-8', function(err, data) {
        if (err) {
            console.log("读取失败");
        } else {
            writeFile(data)
            return data;
        }
    });
    console.log('--------读取结束--------');
}

function writeFile(data){
    console.log(data);
    fs.writeFile("input2.txt",data,'utf8',function(error){
        if(error){
            throw error;
        }else{
            console.log("文件已保存");
        }
    });
}

copyFile();

