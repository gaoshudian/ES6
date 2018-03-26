/*
Reflect对象的设计目的有这样几个。
（1） 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。
现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。也就是说，从Reflect对象上可以拿到语言内部的方法。
（2） 修改某些Object方法的返回结果，让其变得更合理。比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，
而Reflect.defineProperty(obj, name, desc)则会返回false。
 */

//apply方法
//Reflect.apply = function(target,thisArgument,argumentsList) {};
function getInfo() {
    return this.name;
}
let user = {
    name: "xiaogao"
};
console.log(Reflect.apply(getInfo,user,[]));

//construct方法
//Reflect.construct方法等同于new target(...args)，这提供了一种不使用new，来调用构造函数的方法
//Reflect.construct = function(target,argumentsList) {};
function User(name){
    this.name=name;
}
console.log(Reflect.construct(User,["xiaogao"]).name);


//defineProperty()方法
let obj1={};
Reflect.defineProperty(obj1,"name",{
    value:"laotan",
    configurable:true,
    enumerable:false,
    writable:true
})
console.log(obj1.name,obj1);
//deleteProperty方法
console.log(Reflect.deleteProperty(obj1,"name"));
console.log(obj1.name);

//set方法
console.log(".........");
let obj2={
    age:10,
    set address(v){
        console.log(this);
    }
};
Reflect.set(obj2,"age",20);
console.log(obj2.age);
Reflect.set(obj2,"address","",{name:"laotan"});
console.log(Reflect.get(obj2,"age"));
console.log(Reflect.has(obj2,"age"));
//Reflect.getOwnPropertyDescriptor基本等同于Object.getOwnPropertyDescriptor，用于得到指定属性的描述对象，将来会替代掉后者
console.log(Reflect.getOwnPropertyDescriptor(obj2,"age").enumerable);


console.log("..........");
let obj3={
    b1:"",
    a1:"",
    "1":"",
    [Symbol()]:"",
    "10":"",
    "2":""
}
console.log(Reflect.ownKeys(obj3));

let obj4={}
//Reflect.isExtensible方法对应Object.isExtensible，返回一个布尔值，表示当前对象是否可扩展
console.log("isExtensible.........."+Reflect.isExtensible(obj4));
obj4.name="laotan";
console.log(obj4.name);
//Reflect.preventExtensions对应Object.preventExtensions方法，用于让一个对象变为不可扩展。它返回一个布尔值，表示是否操作成功
Reflect.preventExtensions(obj4);
console.log(Reflect.isExtensible(obj4));
obj4.age=10;
console.log(obj4.age);
console.log(Object.isExtensible("test"));

let obj5={};
console.log(Reflect.getPrototypeOf(obj5));
Reflect.setPrototypeOf(obj5,{name:"laotan"});
console.log(obj5.name);
console.log(Reflect.getPrototypeOf(obj5));