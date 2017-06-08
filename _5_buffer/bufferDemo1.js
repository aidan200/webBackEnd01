/**
 * Created by Administrator on 2017/6/8.
 */
// bit 位 0||1
//01010101==256（0~255）==FF == 1字节（byte）
//1024字节 == 1KB
//“字”由若干个字节构成，字的位数叫做字长，字长就是说字所对应的二进制数的长度。不同的机器有不同的字长。
// FC 8位 它的1个字就等于1个字节，字长为8位
// MD 16位机 它的1个字就由2个字节构成，字长为16位。
// ASCII码：一个英文字符等于一个字节，一个中文汉字占两个字节
//UTF-8编码：一个英文字符等于一个字节，一个中文（含繁体）等于三个字节。
//Unicode编码：一个英文等于两个字节，一个中文（含繁体）等于两个字节。

//buffer 每个单位占用一个字节  PS: new Buffer() 废弃
// 未初始化的buffer可能包含旧数据(快)
var buf0 = Buffer.allocUnsafe(10);
// 指定10个单位的buffer,初始化内容为0(慢)
var buf1 = new Buffer.alloc(10);
//使用数组指定buffer大小
var array = [12,4,123123123123123123123123123,34,123];
//二进制转换
var buf2 = Buffer.from(array);
//字符串指定buffer 后面指定编码 默认utf-8
var buf3 = Buffer.from("abcdefg呵呵", "utf-8");

var buf4 = Buffer.from("{asdad:'aaa'}");
console.log(buf0);
console.log(buf1);
console.log(buf2);
console.log(buf3);
console.log(buf4.toJSON().data);