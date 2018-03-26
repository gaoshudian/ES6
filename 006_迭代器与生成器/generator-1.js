/*
1.从语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态。
2.执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。
    返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态

3.调用Generator函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象;下一步，必须调用遍历器对象的next方法，
使得指针移向下一个状态.也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield语句（或return语句）为止。
换言之，Generator函数是分段执行的，yield语句是暂停执行的标记，而next方法可以恢复执行。

4.总结:调用Generator函数，返回一个遍历器对象，代表Generator函数的内部指针。以后，每次调用遍历器对象的next方法，
就会返回一个有着value和done两个属性的对象。value属性表示当前的内部状态的值，是yield语句后面那个表达式的值；
done属性是一个布尔值，表示是否遍历结束
 */

//示例一
function* gen1() {
    yield 1;
    yield 2;
    yield;
    return 4;
}
let g1 = gen1();
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());

//示例二
let gen2 = function* () {
    for(let i of [1,2,3]){
        yield i;
    }
}
let g2=gen2();
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());


//示例三
let obj={
    * gen3(){
        yield "gen3"
    }
}
let g3=obj.gen3();
console.log(g3.next());


//示例四
console.log("...............");
class MyClass{
    * gen4(){
        yield "gen4"
    }
}
let myClass=new MyClass();
let g4=myClass.gen4();
console.log(g4.next());


//示例五
console.log("................");
function* gen5(){
    yield "a",
    yield* gen1(),//yield*语句，用来在一个 Generator 函数里面执行另一个 Generator 函数
    yield "b"
}
let g5=gen5();
// for(let v of g5){
//     console.log(v);
// }

console.log([...g5]);