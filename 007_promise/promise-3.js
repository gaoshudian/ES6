/*
链式编程:
1.建议总是使用catch方法，而不使用then方法的第二个参数。
 */
//示例一
// let p1 = new Promise((resolve, reject) => {
//     resolve();
// });
// p1.then(() => {
//     console.log("1 then");
//     return Promise.reject();
// }).then(() => {
//     console.log("2 then");
// }).catch(() => {
//     console.log("1 catch");
// }).catch(() => {
//     console.log("2 catch");
// }).then(() => {
//     console.log("3 then");
// }).catch(() => {
//     console.log("3 catch");
// });

//实例二
// let p2 = function (num) {
//     return new Promise((resolve, reject) => {
//         resolve(num);
//     });
// };
// p2(1).then(num=>{
//     console.log(num);
//     return num+1;
// }).then(num=>{
//     console.log(num);
//     return num+1;
// }).then(num=>{
//     console.log(num);
//     return num+1;
// }).then(num=>{
//     console.log(num);
//     return num+1;
// });

//示例三
let p1 = new Promise((resolve, reject) => {
    resolve();
});
p1.then(() => {
    console.log("1 then");
   throw new Error();
}).then(() => {
    console.log("2 then");
}).catch(() => {
    console.log("1 catch");
}).catch(() => {
    console.log("2 catch");
}).then(() => {
    console.log("3 then");
}).catch(() => {
    console.log("3 catch");
});