/*
Promise常见方法
 */

//Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数
let p1 = new Promise((resolve, reject) => {
    reject();
});
p1.catch(function () {
    console.log("失败");
});


//Promise.resolve()方法将现有对象转为Promise对象
//thenable对象指的是具有then方法的对象,Promise.resolve方法会将这个对象转为Promise对象，然后就立即执行thenable对象的then方法
let obj = {
    then: function () {
        console.log("obj then");
    }
}
let p2 = Promise.resolve(obj);

//Promise.resolve方法允许调用时不带参数，直接返回一个Resolved状态的Promise对象
let p3 = Promise.resolve();
p3.then(() => { console.log("p3 then") });

/*
如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的Promise对象，状态为Resolved
下面代码生成一个新的Promise对象的实例p。由于字符串Hello不属于异步操作（判断方法是它不是具有then方法的对象），
返回Promise实例的状态从一生成就是Resolved，所以回调函数会立即执行。Promise.resolve方法的参数，会同时传给回调函数
 */
let p4 = Promise.resolve("laotan");
p4.then(name => { console.log("p4:" + name) });

//Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected
let p5 = Promise.reject("出错");
p5.catch(error => {
    console.log(error);
});



function getPromise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise1执行完成");
            resolve("Promise1's Data");
        }, 2000);
    });
}
function getPromise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise2执行完成");
            resolve("Promise2's Data");
        }, 1000);
    });
}
function getPromise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise3执行完成");
            resolve("Promise3's Data");
        }, 1500);
    });
}

/*
p的状态由p1、p2、p3决定，分成两种情况。
（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。
 */
// Promise.all([getPromise1(),getPromise2(),getPromise3()]).then(data=>{
//     console.log("成功："+data);
// },reason=>{
//     console.log("出错："+reason);
// });


/*
与all方法的却别是:只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。
 */
Promise.race([getPromise1(),getPromise2(),getPromise3()]).then(data=>{
    console.log("成功："+data);
},reason=>{
    console.log("出错："+reason);
});
