/*
ES6提供了Map数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
也就是说，Object结构提供了“字符串—值”的对应，Map结构提供了“值—值”的对应，是一种更完善的Hash结构实现。
如果你需要“键值对”的数据结构，Map比Object更合适。
 */
let map1=new Map();
//作为构造函数，Map也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组
let map2=new Map([
    ["c","China"],
    ["e","English"],
    ["s","Spain"]
]);
console.log(map1.size,map2.size);
console.log(map1,map2);


console.log(map2.get("c"),map2.get("s"));
map1.set("c","中国").set("e","英国").set("e","英格兰");
console.log(map1.get("c"),map1.get("e"));
console.log(map1.has("c"));
console.log(map1.delete("e"),map1.get("e"));
map1.clear();
console.log(map1.size);

/*
遍历方法:
Map原生提供三个遍历器生成函数和一个遍历方法。
keys()：返回键名的遍历器。
values()：返回键值的遍历器。
entries()：返回所有成员的遍历器。
forEach()：遍历Map的所有成员。
 */
map2.forEach((v,k)=>{console.log(k,v);});
for(let v of map2.values()){
    console.log(v);
}
for(let k of map2.keys()){
    console.log(k);
}
for(let [k,v] of map2.entries()){
    console.log(k,v);
}

/*
其他数据结构的互相转换
 */
//1.map转换为数组
console.log("map转换为数组。。。");
let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
console.log(myMap);
console.log(...myMap);

//2.数组转换为map
console.log("数组转化为map...");
console.log(new Map([[true, 7], [{foo: 3}, ['abc']]]));

//3.map转换为对象
//如果所有Map的键都是字符串，它可以转为对象
console.log("map转换为对象...");
function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        obj[k] = v;
    }
    return obj;
}

let myMap2 = new Map().set('yes', true).set('no', false);
console.log(strMapToObj(myMap2));

//4.对象转换为map
console.log("对象转换为map...");
function objToStrMap(obj) {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}

console.log(objToStrMap({yes: true, no: false}));

/*
5.Map转为JSON
Map转为JSON要区分两种情况。一种情况是，Map的键名都是字符串，这时可以选择转为对象JSON
另一种情况是，Map的键名有非字符串，这时可以选择转为数组JSON
 */
console.log("map转对象JSON...");
function strMapToJson(strMap) {
    return JSON.stringify(strMapToObj(strMap));
}
let myMap3 = new Map().set('yes', true).set('no', false);
console.log(strMapToJson(myMap3));

console.log("map转数组JSON...");
function mapToArrayJson(map) {
    return JSON.stringify([...map]);
}
let myMap4 = new Map().set(true, 7).set({foo: 3}, ['abc']);
console.log(mapToArrayJson(myMap4));

//6.JSON转map
console.log("json转map...");
function jsonToStrMap(jsonStr) {
    return objToStrMap(JSON.parse(jsonStr));
}

console.log(jsonToStrMap('{"yes":true,"no":false}'));

/*
但是，有一种特殊情况，整个JSON就是一个数组，且每个数组成员本身，又是一个有两个成员的数组。这时，它可以一一对应地转为Map。这往往是数组转为JSON的逆操作
 */
function jsonToMap(jsonStr) {
    return new Map(JSON.parse(jsonStr));
}

console.log(jsonToMap('[[true,7],[{"foo":3},["abc"]]]'));


/*
WeakMap的设计目的在于，键名是对象的弱引用（垃圾回收机制不将该引用考虑在内），所以其所对应的对象可能会被自动回收。
当对象被回收后，WeakMap自动移除对应的键值对。
典型应用是，一个对应DOM元素的WeakMap结构，当某个DOM元素被清除，其所对应的WeakMap记录就会自动被移除。
基本上，WeakMap的专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏
 */

let data=[3,4];
let wm=new WeakMap();
wm.set(data,"laotan");
console.log(wm.get(data));
console.log(wm.has(data));
console.log(wm.delete(data),wm.has(data));
/*
WeakMap与Map在API上的区别主要是两个:
1.没有遍历操作（即没有key()、values()和entries()方法），也没有size属性；
2.无法清空，即不支持clear方法
 */
