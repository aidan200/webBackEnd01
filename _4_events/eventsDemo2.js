/**
 * Created by Administrator on 2017/6/8.
 */

//event.js 文件
var events = require('events');
var emitter = new events.EventEmitter();
//为someEvent设置监听器1
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
//为someEvent设置监听器2
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
//添加监听器
emitter.addListener('someEvent',function (arg1,arg2) {
    console.log('listener3', arg1, arg2);
})



//触发someEvent事件 emit（事件名，参数1，参数2）
emitter.emit('someEvent', '1 参数', '2 参数');
