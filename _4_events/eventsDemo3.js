/**
 * Created by Administrator on 2017/6/8.
 */
var util = require("util");
var events = require("events");//EventEmitter通过events模块来访问

function MyStream() {//新建一个类
    events.EventEmitter.call(this);//设置this指向
}

util.inherits(MyStream, events.EventEmitter);//使这个类原形继承EventEmitter

MyStream.prototype.write = function(data) {//定义一个新方法
    this.emit("data", data);//在此触发名为"data"事件
}

var stream = new MyStream();

stream.on("data", function(data) {//注册监听器，监听名为"data"事件
    console.log('Received data: "' + data + '"');
})
stream.write("It works!"); // Received data: "It works!"