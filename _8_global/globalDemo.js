/**
 * Created by Administrator on 2017/6/9.
 */
// Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性
//当前文件的绝对路径
console.log( __filename );
//当前文件所处文件夹的路径
console.log( __dirname );
function printHello(){
    console.log( "Hello, World!");
}
// 两秒后执行以上函数(只执行一次)
var t1 = setTimeout(printHello, 2000);

// 两秒后执行以上函数（循环执行，直到清除）
var t2 =setInterval(printHello, 2000);

// 清除定时器
clearTimeout(t1);

clearInterval(t2);

//程序计时
console.time("获取数据");
for(var i = 0;i<10000;i++){
    console.log(i);
}
console.timeEnd('获取数据');

//Node.js 进程状态的对象 process
// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);


// 平台信息
console.log(process.platform);

//程序准备结束执行
process.on('exit', function(code) {

    // 以下代码永远不会执行
    setTimeout(function() {
        console.log("该代码不会执行");
    }, 10);

    console.log('退出码为:', code);
});
console.log("程序执行结束");

//程序结束前执行
process.on('beforeExit',function () {

    for(;;){

    }

})