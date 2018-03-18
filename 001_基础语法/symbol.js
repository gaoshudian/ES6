let sym1=Symbol();
// let sym2=Symbol("gao");
// let sym3=Symbol();
// console.log(sym1===sym3);//false
// console.log(typeof sym1);//symbol
//
// console.log(sym1 instanceof Symbol);
//
// console.log(sym1);
// console.log(sym1.toString());
// console.log(!Symbol("false"));
//
// console.log(sym1.toString()+"Hello");

//作为属性名的symbol
//该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
// 但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名
// let user={
//     [Symbol()]:"laotan"
// };
// console.log(Object.getOwnPropertyNames(user));
// console.log(Object.getOwnPropertySymbols(user));


/*
有时，我们希望重新使用同一个Symbol值，Symbol.for方法可以做到这一点。
它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。
如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值
*/
console.log(Symbol.for("laotan")===Symbol.for("laotan"));//true

//Symbol.keyFor方法返回一个已登记的 Symbol 类型值的key
console.log(Symbol.keyFor(sym1));

let sym4=Symbol.for("four");
console.log(Symbol.keyFor(sym4));

//对象的Symbol.hasInstance属性，指向一个内部方法。
// 当其他对象使用instanceof运算符，判断是否为该对象的实例时，会调用这个方法
let Student={
    [Symbol.hasInstance]:function(obj){
        console.log(obj);
        return true;
    }
}
console.log(Array instanceof Student);