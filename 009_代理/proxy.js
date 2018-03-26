/*
Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，
可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
 */
let obj = {
    name: "laotan"
}
console.log(obj.name);

let handler = {
    get(target, prop) {
        console.log(target, prop);
        return Reflect.get(target, prop).toUpperCase();
    }
};
let objProxy = new Proxy(obj, handler);
console.log(objProxy.name);

function test() {
    return this.name;
}
let obj2 = {
    name: "xiaogao"
};
console.log(test.apply(obj2));

let testProxy = new Proxy(test, {
    apply(fn, target, args) {
        return "Hello!" + Reflect.apply(fn, target, args);
    }
});
console.log(testProxy.apply(obj2));
