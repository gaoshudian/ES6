/*
ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值
 */
let set1 = new Set();
let set2 = new Set([100, 200, 300]);
let set3 = new Set("laotan");
console.log(set1.size, set2.size, set3.size);


//set常见方法与属性
set1.add("a").add("b").add("c").add("a").add(null).add(undefined).add(NaN);
console.log(set1.size);
console.log(set1);

console.log(set1.has("b"),set1.has(null),set1.has(undefined),set1.has(NaN));
console.log(set1.delete(null));
console.log(set1.size);
set1.clear();
console.log(set1.size);


/*
Set结构的实例有四个遍历方法，可以用于遍历成员。
keys()：返回键名的遍历器
values()：返回键值的遍历器
entries()：返回键值对的遍历器
forEach()：使用回调函数遍历每个成员

Set 结构没有键名，只有键值（或者说键名和键值是同一个值）,所以keys方法和values方法的行为完全一致
 */
console.log("set的遍历...");
console.log(set3);
console.log("values.........");
for(let v of set3.values()){
    console.log(v);
}
console.log("keys..........");
for(let k of set3.keys()){
    console.log(k);
}
console.log("entries..........");
for(let [k,v] of set3.entries()){
    console.log(k,v);
}


/*
Set内部判断两个值是否不同，使用的算法叫做“Same-value equality”，
1.它类似于精确相等运算符（===），主要的区别是在set中NaN等于自身，而精确相等运算符认为NaN不等于自身
2.两个空对象不相等，所以它们被视为两个值
 */
let set4=new Set();
set4.add("1").add("1").add({}).add({}).add(NaN).add(NaN);
for(let v of set4.values()){
    console.log(v);
}
console.log(NaN===NaN);

/*
扩展运算符（...）内部使用for...of循环，所以也可以用于Set结构
扩展运算符和Set结构相结合，就可以去除数组的重复成员。
 */

console.log("扩展运算符...");
let arr4=[...set4];
console.log(arr4);

let nums=[1,'2',3,2,3,4,4,5,6];
let result=[...new Set(nums)];
console.log(result);


/*
首先，WeakSet的成员只能是对象，而不能是其他类型的值。

其次，WeakSet中的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用，也就是说，如果其他对象都不再引用该对象，
那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于WeakSet之中。
这个特点意味着，无法引用WeakSet的成员，因此WeakSet是不可遍历的
 */
let ws=new WeakSet([{name:"Tom"},{name:"Jack"}]);
ws.add([1,2]);
console.log(ws.has([1,2]));
let data=[3,4];
ws.add(data);
console.log(ws.has(data));
console.log(ws.delete(data));
console.log(ws.has(data));