function* gen1(name) {
    console.log("name=" + name);
    let newname = yield name;
    console.log("newname=" + newname);
    //let hello = yield "Hello";
    //console.log(`${yield}`);
    // console.log(yield+"1");
    console.log("test" + (yield));
}
let g1 = gen1("laotan");
console.log(g1.next("Tom"));
console.log(g1.next("Jack"));
console.log(g1.next("Rose"));

// function* gen2() {
//     try {
//         yield 1;
//         yield 2;
//         yield 3;
//     } catch (e) {
//         console.log("出错:"+e);
//     }
// }
// let g2 = gen2();
// console.log(g2.next());
// g2.throw(new Error("Error"));
// console.log(g2.return(4));
// console.log(g2.next());
// console.log(g2.next());
