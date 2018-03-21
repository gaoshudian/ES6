class User {
    constructor() {
        this._name = "laotan";

    }

    getName(){
        User.test();
        return this.name;
    }

    static test(){
        console.log("静态方法"+this.name);
    }

    set name(value){
        console.log("set:"+value);
        this._name=value;
    }
    get name(){
        console.log("get");
        return this._name;
    }

    static get age(){
        console.log("get age");
        return User._age;
    }
    static set age(age){
        console.log("set age");
        User._age=age;
    }

}

let user1=new User();
console.log(user1.name);
console.log(User.name);

User.age=10;
console.log(User.age,user1.age);

console.log(user1.getName());
User.test();

console.log("调用属性访问方法......");
let user2=new User();
user2.name="Tom";
console.log(user2.name);

console.log("调用静态属性访问方法......");
User.age=10;
console.log(User.age);