/*
* 在ES6之前，当函数的实际参数未传入时，形式参数的值是undefined
* 在ES6中可以使用赋值运算法为形式参数赋默认值，此时为传入实际参数或传入undefined,则形式参数使用默认值
* 默认值可以是常量，变量或带有返回值的函数(在调用时才会执行)
*/
// function fun1() {
//     console.log("fun1");
//     return 0;
// }
// function test(num1, num2 = fun1()) {
//     console.log(num1 + num2);
// }
//
// test(1, 2);
// test(1);


// function test2(num1, num2 = num2, num3 = 0) {
//     console.log(num1 + num2);
// }
// test2(1);


function fun2(num,...nums){
    for(let n of nums){
        console.log(n);
    }

}
fun2(10,20,30);
console.log(fun2.length);



//可以为函数传入解构形式的参数
function fun3([num1,num2,num3]){
    console.log(num1,num2,num3);
}

fun3([1,2,3]);
