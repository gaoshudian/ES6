/*数组的解构赋值*/
//基本示例
let nums = [1, 2, 3];
let num1 = nums[0];
let num2 = nums[1];
let num3 = nums[2];
console.log(num1, num2, num3);

let [num4, num5, num6] = nums;
console.log(num4, num5, num6);



let arr = ["Tom", "Rose", "Jack"];
for (let [key, value] of arr.entries()) {
    console.log(key, value);
}


let users = [
    { name: "Tom", age: 10 },
    { name: "Jack", age: 20 },
    { name: "Rose", age: 30 }
];

for (let { name, age } of users) {
    console.log(name, age);
}

// let cities = ["北京", ["成都", "重庆"], "深圳"];
// let [city1, [city2], city4] = cities;
// console.log(city1, city2, city4);

//省略
// let [, , x] = ["a", "b", "c", "d"];
// console.log(x);

// let [y, ...z] = "abcdef";
// console.log(y);
// console.log(z);

//交换
// let e = 1, f = 2;
// [e, f] = [f, e];
// console.log(e, f);

//如果扩展操作没有匹配到任何职,则会将空数组进行解构
// let [x, y, ...z] = ['a'];
// console.log(x,y,z);//a undefined []


/*对象的解构赋值*/
// let user = {
//     name: "laotan",
//     address: "成都",
//     age: 20
// };
//
// let { name: n, address: a } = user;
// console.log(n, a);
//
// let name;
// ({ name: name } = user);
// console.log(name);
//
// let { address } = user;
// console.log(address);

//默认值
// let { age = 10 } = user;
// console.log(age);

//嵌套解构
// let klass={
//     name:"1班",
//     teacher:{
//         teachername:"老谭"
//     }
// }
//
// let {teacher}=klass;
// console.log(teacher);
//
// let {teacher:{teachername}}=klass;
// console.log(teachername);


/*字符串的解构赋值*/
// let { length: len } = "laotan";
// console.log(len);


