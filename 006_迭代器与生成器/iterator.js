/*
遍历器（Iterator）是一种接口，为各种不同的数据结构提供统一的访问机制。
任何数据结构只要部署Iterator接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）
Iterator的作用有三个：
    一是为各种数据结构，提供一个统一的、简便的访问接口；
    二是使得数据结构的成员能够按某种次序排列；
    三是ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费
 */

/*
//示例一
class Department {
    constructor() {
        this.names = ["Tom", "Jack", "Rose"];
    }
    [Symbol.iterator]() {
        let names = this.names;
        let position = 0;
        return {
            next() {
                if (position === names.length) {
                    return {
                        done: true,
                        value: undefined
                    }
                } else {
                    return {
                        done: false,
                        value: names[position++]
                    }
                }
            }
        };
    }
}

let dept = new Department();
console.log(dept.names);

for (let name of dept) {
    console.log(name);
}
console.log([...dept]);*/


//示例二
class Department2 {
    constructor() {
        this.names = ["Tom", "Jack", "Rose"];
        this.position = 0;
    }

    next() {
        if (this.position === this.names.length) {
            return {
                done: true,
                value: undefined
            }
        } else {
            return {
                done: false,
                value: this.names[this.position++]
            }
        }
    }
    /*
    return方法的使用场合是，如果for...of循环提前退出（通常是因为出错，或者有break语句或continue语句），就会调用return方法。
    如果一个对象在完成遍历前，需要清理或释放资源，就可以部署return方法。
     */
    return() {
        console.log("return()");
        return {
            done: true,
            value: undefined
        }
    }
    [Symbol.iterator]() {
        return this;
    }

}

let dept2 = new Department2();
for (let name of dept2) {
    console.log(name);
    if(name.length===4){
        break;
    }
}