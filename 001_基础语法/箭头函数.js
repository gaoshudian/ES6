/*
箭头函数
声明:
let fn = (参数列表) => 返回值
let fn = (参数列表) => {函数体}
注意：
1.如果只有一个参数，参数列表的小括号可以省略
2.函数体如果没有大括号，则会作为表达式返回
3.如果返回的是对象字面量，则必须放在小括号中
*/

// let fn1 = function () {
//     console.log("fn1");
// }
//
// fn1();
//
// let fn2 = () => {
//     console.log("fn2");
// }
// fn2();

// let fn3 = num => num * 2;
// console.log(fn3(5));


// let fn4 = () => { return { name: "laotan" } };
// console.log(fn4());


// let fn5 = (num1, num2) => num1 + num2;
// console.log(fn5(1, 2));


//箭头函数的this其实就是在定义的时候就确定好的，以后不管怎么调用这个箭头函数，箭头函数的this始终为定义时的this

//ES6之前想在函数中使用this,需要缓存this,然后在函数中用缓存的this操作
// let user = {
//     name: "laotan",
//     getName: function () {
//         console.log(this);
//         var self = this;
//         return function () {
//             console.log(self.name);
//             console.log(this===global);
//         }
//     }
// };
// user.getName()();

//在ES6中使用箭头函数
// const Person = {
//     'name': 'little bear',
//     'age': 18,
//     'sayHello': () => {
//         setInterval(() => {
//             console.log('我叫' + this.name + '我今年' + this.age + '岁!')
//         }, 1000)
//     }
// };
// Person.sayHello();//输出我叫undefined我今年undefined岁!
//因为我把方法写在了对象里，而对象的括号是不能封闭作用域的。所以此时的this还是指向全局对象。
// 所以，通过以上的错误可以提醒我们，最好不要用箭头函数作为对象的方法。


// let user2 = {
//     name: "laotan",
//     getName: function () {//如果这里改成 () =>{},则下面的this指向全局
//         return ()=>{
//             console.log(this.name);//laotan
//             console.log(this);
//             console.log(this===global);//false
//         }
//     }
// };
// user2.getName()();


//箭头函数适合于无复杂逻辑或者无副作用的纯函数场景下
function Person () {
    this.name = 'little bear';
    this.age = 18;
    setInterval(() => {
        console.log('我叫' + this.name + '我今年' + this.age + '岁')
    },1000)
}
let p = new Person();
