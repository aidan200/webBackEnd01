/**
 * Created by Administrator on 2017/6/12.
 */

//argv对应父进程传递的所有值
//argv[0]=执行模块的node.exe argv[1]=执行的模块 argv[2]=第一个参数
console.log('进程'+process.argv[2]+'执行');

//向父进程发送消息 fork模式
process.send({mm:"你妹的"});
//接受父进程的消息(因为监听事件,子线程不退出)
process.on('message',function (msg) {
    console.log("CHILD got message:",msg);
})



console.log("aaaaaaa123");
//结束子进程 fork交互时候需要手动退出
//process.exit(0);

