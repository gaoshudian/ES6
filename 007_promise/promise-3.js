let p1 = new Promise((resolve, reject) => {
    reject();
});
p1.catch(function () {
    console.log("失败");
});

let obj = {
    then: function () {
        console.log("obj then");
    }
}
let p2 = Promise.resolve(obj);

let p3 = Promise.resolve();
p3.then(() => { console.log("p3 then") });

let p4 = Promise.resolve("laotan");
p4.then(name => { console.log("p4:" + name) });

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
            reject("Promise2's Data");
        }, 1000);
    });
}
function getPromise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Promise3执行完成");
            reject("Promise3's Data");
        }, 1500);
    });
}

// Promise.all([getPromise1(),getPromise2(),getPromise3()]).then(data=>{
//     console.log("成功："+data);
// },reason=>{
//     console.log("出错："+reason);
// });

Promise.race([getPromise1(),getPromise2(),getPromise3()]).then(data=>{
    console.log("成功："+data);
},reason=>{
    console.log("出错："+reason);
});