/**
 * Created by Administrator on 2017/6/8.
 */
var fs = require("fs");
var zlib = require('zlib');
//压缩
/*fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));*/
//解压缩
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input2.txt'));
