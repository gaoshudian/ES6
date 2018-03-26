//ES6以前回调函数举例
let result;
function fn1(callback) {
    setTimeout(function () {
        result = 100;
        console.log("执行完成");
        callback(result);
    }, 1000);
}

function fn2(data) {
    console.log("fn2:" + (data + 1));
}
fn1(fn2);


/*
所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。
Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理
 */
//基本用法
let p1 = new Promise((resolve, reject) => {
    //resolve();
    reject("error");
});
p1.then(() => {
    console.log("成功");
}, (error) => {
    console.log("失败:"+error);
});

//用Promise实现ajax操作的示例
var getJSON = function(url) {
    var promise = new Promise(function(resolve, reject){
        var client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();
        function handler() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
    });
    return promise;
};
getJSON("/posts.json").then(function(json) {
    console.log('Contents: ' + json);
}, function(error) {
    console.error('出错了', error);
});