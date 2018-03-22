export let num1 = 1;
export function test1() {
    console.log("test1()");
}
export class User {
    print() {
        console.log("class User");
    }
}
export let user1 = {
    name: "laotan",
    printName: function () {
        console.log(this.name);
    }
};

let num2 = 2, num3 = 3;
export { num2, num3 as num4 };