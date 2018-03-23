//示例一
function testable(target) {
    target.isTestable = true;
}
@testable
class MyTestableClass {}

console.log(MyTestableClass.isTestable);

//示例二
function testable(isTestable) {
    return function(target) {
        target.isTestable = isTestable;
    }
}

@testable(true)
class MyTestableClass {}
//MyTestableClass.isTestable // true

@testable(false)
class MyClass {}
//MyClass.isTestable

//示例三:添加实例属性
function testable(target) {
    target.prototype.isTestable = true;
}

@testable
class MyTestableClass {}

let obj = new MyTestableClass();
//obj.isTestable // true

/*
示例四:通过修饰器mixins，把Foo类的方法添加到了MyClass的实例上面
 */
// mixins.js
export function mixins(...list) {
    return function (target) {
        Object.assign(target.prototype, ...list)
    }
}

// main.js
import { mixins } from './mixins'

const Foo = {
    foo() {
        console.log('foo')
    }
};

@mixins(Foo)
class MyClass {}

let obj = new MyClass();
//obj.foo() // 'foo'


/*
修饰器不仅可以修饰类，还可以修饰类的属性。
此时，修饰器函数一共可以接受三个参数，第一个参数是所要修饰的目标对象，第二个参数是所要修饰的属性名，第三个参数是该属性的描述对象
 */
//示例一
class Person {
    @nonenumerable
    get kidCount() { return this.children.length; }
}

function nonenumerable(target, name, descriptor) {
    descriptor.enumerable = false;
    return descriptor;
}


//示例二
class Math {
    @log
    add(a, b) {
        return a + b;
    }
}

function log(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function() {
        console.log(`Calling "${name}" with`, arguments);
        return oldValue.apply(null, arguments);
    };

    return descriptor;
}

const math = new Math();

// passed parameters should get logged now
//math.add(2, 4);