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
//console.log(result);