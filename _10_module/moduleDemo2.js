/**
 * Created by Administrator on 2017/6/9.
 */

function a() {
    console.log('a');
}
function b() {
    console.log('b');
}
function c() {
    console.log(exports);
}

//exports是指向module.exports的指针，不代表module.exports本身，不能覆盖
exports.a = a;
exports.b = b;
exports.c = c;