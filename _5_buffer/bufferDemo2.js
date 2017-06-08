/**
 * Created by Administrator on 2017/6/8.
 */
//缓冲区合并
var buffer1 = Buffer.from('12344');
var buffer2 = Buffer.from('99999');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());

//比较内容 之前，之后或相同
var buffer4 = Buffer.from('ABC');
var buffer5 = Buffer.from('ABCD');
var result = buffer4.compare(buffer5);

if(result < 0) {
    console.log(buffer4 + " 在 " + buffer5 + "之前");
}else if(result == 0){
    console.log(buffer4 + " 与 " + buffer5 + "相同");
}else {
    console.log(buffer4 + " 在 " + buffer5 + "之后");
}

//拷贝 把6的内容拷贝给7
var buffer6 = Buffer.from('ABC');
var buffer7 = Buffer.alloc(3);
buffer6.copy(buffer7);
console.log("buffer6 content: " + buffer7.toString());

//剪切缓冲
var buffer8 = Buffer.from('runoob');
//开始，长度
var buffer9 = buffer8.slice(0,2);
console.log("buffer9 content: " + buffer9.toString());
//缓冲单位长度
console.log(buffer8.length);
