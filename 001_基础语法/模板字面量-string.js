/*
* 模板字面量是使用反引号(``)包含的字符串
* 功能:
* 1.多行字符串
* 2.字符串插值
* 3.嵌入式表达式
* */
var name = "laotan";
var addrss = '成都';

var info="大家好"+
    "我是老谭!";

console.log(info);

let info1=`大家好
我是老谭!`;
console.log(info1);

const name1="老谭";
const sayHello=`你好!${name1+"!"}`;
console.log(sayHello);

function test(){
    //const name1="laotan";
    const sayHello=`你好!${name1+"!"}`;
    return sayHello;
}

console.log(test());