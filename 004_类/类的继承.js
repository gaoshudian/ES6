class Parent {
    constructor(name) {
        this.name = name;
    }

    getName(){
        console.log(this.name);
    }

    static test(){
        console.log("Parent's static test");
    }
}
Parent.age=10;//在类声明后，可以通过此方式声明类的静态属性

class Son extends Parent {
    constructor(){
        super("laotan");
        console.log(this);
    }
    getName(){
        console.log("Son's name");
        super.getName();
    }
}

let son1 = new Son();
console.log(son1.name);
son1.getName();
console.log(Son.age);
Son.test();