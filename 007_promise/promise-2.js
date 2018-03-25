let p1 = new Promise((resolve, reject) => {
    //resolve();
    reject("error");
});
p1.then(() => {
    console.log("成功");
}, (error) => {
    console.log("失败:"+error);
});