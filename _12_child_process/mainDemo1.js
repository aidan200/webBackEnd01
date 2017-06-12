/**
 * Created by Administrator on 2017/6/12.
 */
const child_process = require('child_process');
//参数1=执行的命令 参数2=参数列表 参数3 = option
var workerProcess = child_process.spawn('node',['childDemo1.js',1]);
//const bat = child_process.spawn('cmd.exe', ['/c', 'my.bat']);

workerProcess.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
});

workerProcess.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
});

workerProcess.on('close', function (code) {
    console.log('子进程已退出，退出码 '+code);
});
