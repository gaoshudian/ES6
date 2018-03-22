
/*
export default 命令:

 */


//export-default.js
export default function(){
    console.log("function()");
}
/*
上面代码是一个模块文件export-default.js,它的默认输出是一个函数
其它模块加载该模块时，import命令可以为该匿名函数指定任意名字,如:
import customName from './export-default';
customName(); // 'foo'
 */

/*
下面比较一下默认输出和正常输出
// 第一组
export default function crc32() { // 输出
                                  // ...
}
import crc32 from 'crc32'; // 输入

// 第二组
export function crc32() { // 输出
                          // ...
};
import {crc32} from 'crc32'; // 输入
面代码的两组写法，第一组是使用export default时，对应的import语句不需要使用大括号；第二组是不使用export default时，对应的import语句需要使用大括号
 */



// export default class{
//     test(){
//         console.log("class test()");
//     }
// }

let name1 = "Tom";
let name2="Jack";
//export default [name1,name2];
export {name1 as default};