/*
注意，由于next方法的参数表示上一个yield语句的返回值，所以第一次使用next方法时，不能带有参数。
V8引擎直接忽略第一次使用next方法时的参数，只有从第二次使用next方法开始，参数才是有效的。
从语义上讲，第一个next方法用来启动遍历器对象，所以不用带有参数
 */

//示例一
function* gen1(name) {
    console.log("name=" + name);
    let newname = yield name;
    console.log("newname=" + newname);
    // let hello = yield "Hello";
    //console.log(`${yield}`);
    // console.log(yield+"1");
    console.log("test" + (yield));//yield语句如果用在一个表达式之中，必须放在圆括号里面
}
let g1 = gen1("laotan");
console.log(g1.next("Tom"));
console.log(g1.next("Jack"));
console.log(g1.next("Rose"));


//示例二
function* gen2() {
    try {
        yield 1;
        yield 2;
        yield 3;
    } catch (e) {
        console.log("出错:"+e);
    }
}
let g2 = gen2();
console.log("..............");
console.log(g2.next());
g2.throw(new Error("Error"));
console.log(g2.return(4));//返回给定的值，并且终结遍历Generator函数。
console.log(g2.next());
console.log(g2.next());
