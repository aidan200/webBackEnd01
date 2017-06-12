/**
 * Created by Administrator on 2017/6/12.
 */

var exec =  require('child_process').exec;
//exec默认执行本地批处理文件
//比spawn更简洁直接回调中返回子进程结果stdout获得
//有限制最大回执200KB（默认设置，spawn没有），所以一般用来返回子进程运行状态或少量数据
//参数1=执行的命令 参数2=option 参数3=回调
exec('test.bat',function(error,stdout,stderr){
    //exec 直接执行批处理命令
    //exec('copy e:\\test.txt e:\\1.txt',function(error,stdout,stderr){
    //exec 执行js并传参'1'
    //exec('node childDemo1.js 1', function(error, stdout, stderr){
    if (error !== null) {
        console.log('exec error: ' + error);
    }
    console.log("aaa"+stdout.toString());
});

//.exec()、.execFile()、.fork()底层都是通过.spawn()实现的。
//.exec()、execFile()额外提供了回调，当子进程停止的时候执行。