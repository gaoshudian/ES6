class User{
    constructor(name){
        console.log("创建User实例,name="+name);
        this.name = name;
    }
};

console.log(typeof User);

let user1=new User("laotan");
console.log(user1.name);
console.log(Object.getOwnPropertyNames(user1));

class ClassRoom{

};

let classRoom1=new ClassRoom();
console.log(classRoom1);


let Student = class{

};
let student1=new Student();
console.log(student1);


let teacher1=new class Teacher{
    constructor(name){
        this.name=name;

    }
}("laotan");
console.log(teacher1.name);


function createObject(c){
    return new c();
}
console.log(createObject(class{}));