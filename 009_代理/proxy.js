let obj = {
    name: "laotan"
}
console.log(obj.name);

let handler = {
    get(target, prop) {
        console.log(target, prop);
        return Reflect.get(target, prop).toUpperCase();
    }
}
let objProxy = new Proxy(obj, handler);
console.log(objProxy.name);

function test() {
    return this.name;
}
let obj2 = {
    name: "laotan"
}
console.log(test.apply(obj2));

let testProxy = new Proxy(test, {
    apply(fn, target, args) {
        return "Hello!" + Reflect.apply(fn, target, args);
    }
});
console.log(testProxy.apply(obj2));
