/*
Array.from方法用于将两类对象转为真正的数组：
类似数组的对象（array-like object）和可遍历（iterable）的对象（包括ES6新增的数据结构Set和Map）
*/
//所谓类似数组的对象，本质特征只有一点，即必须有length属性
let user = {
    "0": "Tom",
    "1": "Jack",
    "2": "Rose",
    length: 3
};
let arr1=Array.from(user);
console.log(arr1);

console.log(Array.from("laotan"));


//实际应用中，常见的类似数组的对象是DOM操作返回的NodeList集合，以及函数内部的arguments对象
function test(){
    console.log(Array.from(arguments));
}
test(1,2,3);



//Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组
console.log(Array.from("laotan",x=>x.toUpperCase()));

//如果map函数里面用到了this关键字，还可以传入Array.from的第三个参数，用来绑定this
console.log(Array.from("laotan",
                        function(){
                            return this.name;
                        },
                        {"name":"老谭"})
            );




//Array.of方法用于将一组值，转换为数组
// new Array(10);
// new Array(1,2,3);
console.log(Array.of(10,20,30));


//其它ES6中新增的方法
console.log("......");
let arr2=["Tom","Rose","Jack"];
console.log(arr2.entries());

for(let [k,v] of arr2.entries()){
    console.log(k,v);
}
for(let k of arr2.keys()){
    console.log(k);
}

console.log(arr2.find(x=>x.length==4));
console.log(arr2.findIndex(x=>x.length==4));



/*
数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。
也就是说，使用这个方法，会修改当前数组
它接受三个参数:
target（必需）：从该位置开始替换数据。
start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
 */
console.log("copyWithin()...");
let arr3=[1,2,3,4,5,6,7,8,9,10];
arr3.copyWithin(1,6,9);
console.log(arr3);
//上面代码表示将从6号位直到9号位的成员（7,8,9），复制到从1号位开始的位置，结果覆盖了原来的2,3,4


//fill方法使用给定值，填充一个数组
let arr4=[0,0,0,0,0];
arr4.fill(10,2,4);
console.log(arr4);//[ 0, 0, 10, 10, 0 ]