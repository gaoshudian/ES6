//定义类
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
console.log(typeof Point);
console.log(Point === Point.prototype.constructor);
//上述代码表明类的数据类型就是函数，类本身就指向构造函数

/*
构造函数的prototype属性，在ES6的“类”上面继续存在。事实上，类的所有方法都定义在类的prototype属性上面
class Point {
  constructor(){
    // ...
  }

  toString(){
    // ...
  }

  toValue(){
    // ...
  }
}
// 等同于
Point.prototype = {
  toString(){},
  toValue(){}
};
在类的实例上面调用方法，其实就是调用原型上的方法。
 */
var point = new Point(2, 3);
point.toString(); // (2, 3)
point.hasOwnProperty('x'); // true
point.hasOwnProperty('y'); // true
point.hasOwnProperty('toString'); // false
point.__proto__.hasOwnProperty('toString');//true
/*
上面代码中，x和y都是实例对象point自身的属性（因为定义在this变量上），所以hasOwnProperty方法返回true，
而toString是原型对象的属性（因为定义在Point类上），所以hasOwnProperty方法返回false。这些都与ES5的行为保持一致
 */


//class表达式
const MyClass = class Me {
    getClassName() {
        return Me.name;
    }
};
//上面代码使用表达式定义了一个类。需要注意的是，这个类的名字是MyClass而不是Me，Me只在Class的内部代码可用，指代当前类。
//如果类的内部没用到的话，可以省略Me

let inst = new MyClass();
inst.getClassName(); // Me
//Me.name; // ReferenceError: Me is not defined

//采用Class表达式，可以写出立即执行的Class
let person = new class T{//这里的T可以省略
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}('张三');
person.sayName(); // "张三"

/*
class的继承:
1.ES5的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。
ES6的继承机制完全不同，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。
2.如果子类没有定义constructor方法，这个方法会被默认添加，代码如下。也就是说，不管有没有显式定义，任何一个子类都有constructor方法。
constructor(...args) {
  super(...args);
}
 */
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)
        this.color = color;
    }

    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }
}

let cp = new ColorPoint(25, 8, 'green');
cp instanceof ColorPoint // true
cp instanceof Point
//上面代码中，实例对象cp同时是ColorPoint和Point两个类的实例，这与ES5的行为完全一致


/*
大多数浏览器的ES5实现之中，每一个对象都有__proto__属性，指向对应的构造函数的prototype属性。
Class作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。
（1）子类的__proto__属性，表示构造函数的继承，总是指向父类。
（2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
 */
class A {
}

class B extends A {
}

B.__proto__ === A; // true
B.prototype.__proto__ === A.prototype; //true


/*
extends关键字不仅可以用来继承类，还可以用来继承原生的构造函数.
下面就是定义了一个带版本功能的数组
 */
class VersionedArray extends Array {
    constructor() {
        super();
        this.history = [[]];
    }
    commit() {
        this.history.push(this.slice());
    }
    revert() {
        this.splice(0, this.length, ...this.history[this.history.length - 1]);
    }
}

var x = new VersionedArray();
x.push(1);
x.push(2);
x // [1, 2]
x.history // [[]]

x.commit();
x.history // [[], [1, 2]]
x.push(3);
x // [1, 2, 3]

x.revert();
x // [1, 2]

