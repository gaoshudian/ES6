var nums = [1, 2, 3, 4, 5];
/*for (var i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}*/

/*
//for-in循环存在的问题:在数组上进行for-in循环时，得到的索引数据类型是字符串，不是传统意义上的数值。适合在对象上循环，获取对象的属性
for(var i in nums){
    console.log(typeof i);
    console.log(nums[i]);
}*/

//forEach方法存在的问题：不能调用break,continue,return
/*nums.forEach(function(e){
    console.log(e);
    if(e==3){
       // break;
    }
});*/

/*for(let n of nums){
    console.log(n);
    n=n+10;//for-of在循环时不可改变原遍历对象的值。所以这行代码并不能改变n的值
}
for(let n of nums){
    console.log(n);
}*/

// let n;
// for(n of [6,7,8,9,10]){
//     console.log(n);
// }
//
for(let c of "laotan"){
    console.log(c);
}