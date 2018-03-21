//Object.is()
console.log(Object.is("abc", "abc"));
console.log(Object.is(null, null));
console.log(Object.is(undefined, undefined));
console.log(Object.is(NaN, NaN));
console.log(Object.is(null, undefined));
console.log(null===null);
console.log(undefined===undefined);
console.log(NaN===NaN);//这种情况与Object.is()方法不同


//getOwnPropertySymbols()方法
let user={
    [Symbol("laotan")]:"老谭"
};
for(let s of Object.getOwnPropertySymbols(user)){
    console.log(s);
};


//setPrototypeOf()用来设置一个对象的prototype对象
Object.setPrototypeOf(user,{name:"laotan"});
console.log(user.name);

/*
对象的合并(assign)
Object.assign方法的第一个参数是目标对象，后面的参数都是源对象
 */
let item={};
let source1={
    name:"Tom"
};
let source2={
    name:"Jack",
    age:20
};
Object.assign(item,source1,source2,null);
console.log(item);