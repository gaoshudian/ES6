//var与let的区别
/*
* let的特性:
* 1.用于声明块作用域的变量
* 2.不存在变量提升
* 3.不能重复声明,包括在函数体内与形参同名的变量
* 4.不会自动增加到global对象
* */


/*
下面代码中，变量foo用var命令声明，会发生变量提升，即脚本开始运行时，变量foo已经存在了，但是没有值，所以会输出undefined。
变量bar用let命令声明，不会发生变量提升。这表示在声明它之前，变量bar是不存在的，这时如果用到它，就会抛出一个错误*/

/*
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
*/


/*
//块级作用域
function f1() {
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n); // 5，这里如果将let改为var，则输出10
}
f1();
*/


//下面代码中，变量i只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。
/*
var funcs = [];
for (var i = 0; i < 5; i++) {
    funcs[i] = function () {
        console.log(i);
    }
}
console.info(i);//循环结束后i已经变成了5
funcs[0]();
*/

//示例1
let num1 = 10;
if (true) {
    var num2 = 20;
}
console.log(num1);
console.log(num2);

//示例2
/*var funcs = [];
for (let i = 0; i < 5; i++) {
    funcs[i] = function () {
        console.log(i);
    }
}
funcs[3]();*/

//示例3(不能重复声明)
/*
let num4 = 10;
if (true) {
    var num4 = 20;
}
console.log(num4);//此时报错:SyntaxError: Identifier 'num4' has already been declared*/
