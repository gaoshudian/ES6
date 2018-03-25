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

let obj={
    * gen3(){
        yield "gen3"
    }
}
let g3=obj.gen3();
console.log(g3.next());

class MyClass{
    * gen4(){
        yield "gen4"
    } 
}
let myClass=new MyClass();
let g4=myClass.gen4();
console.log(g4.next());

function* gen5(){
    yield "a",
    yield* gen1(),
    yield "b"
}
let g5=gen5();
// for(let v of g5){
//     console.log(v);
// }

console.log([...g5]);