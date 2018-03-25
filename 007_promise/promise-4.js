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
// })

// let p2 = function (num) {
//     return new Promise((resolve, reject) => {
//         resolve(num);
//     });
// }
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

let p1 = new Promise((resolve, reject) => {
    // resolve();
    //throw new Error();
    setTimeout(()=>{
        throw new Error();
    },1000);
});
p1.then(() => {
    console.log("1 then");
   // throw new Error();
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
})