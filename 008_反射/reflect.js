function getInfo() {
    return this.name;
}
let user = {
    name: "laotan"
}
console.log(Reflect.apply(getInfo,user,[]));

function User(name){
    this.name=name;
}
console.log(Reflect.construct(User,["laotan"]).name);

let obj1={};
Reflect.defineProperty(obj1,"name",{
    value:"laotan",
    configurable:true,
    enumerable:false,
    writable:true
})
console.log(obj1.name,obj1);

console.log(Reflect.deleteProperty(obj1,"name"));
console.log(obj1.name);

let obj2={
    age:10,
    set address(v){
        console.log(this);
    }
}
Reflect.set(obj2,"age",20);
console.log(obj2.age);
Reflect.set(obj2,"address","",{name:"laotan"});
console.log(Reflect.get(obj2,"age"));
console.log(Reflect.has(obj2,"age"));

console.log(Reflect.getOwnPropertyDescriptor(obj2,"age").enumerable);

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
console.log(Reflect.isExtensible(obj4));
obj4.name="laotan";
console.log(obj4.name);
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