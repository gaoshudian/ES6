//十进制、二进制、8进制
let num1 = 10;
let num2 = 0b11, num3 = 0B10;
console.log(num2, num3);

let num4 = 0o76, num5 = 0O65;
console.log(num4, num5);


//Number对象新增的属性EPSILON,表示一个极小的常量数字
//引入一个这么小的量的目的，在于为浮点数计算，设置一个误差范围
console.log(0.1 + 0.2 === 0.3);//false
function eq(x, y) {
    return Math.abs(x - y) < Number.EPSILON;
}
console.log(eq(0.1 + 0.2, 0.3));//true

//Number对象新增的方法
console.log("isInteger()方法。。。。。");
console.log(Number.isInteger(100));
console.log(Number.isInteger(100.0));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger("12"));
console.log(Number.isInteger(Infinity));//Infinity表示一个无穷大的常量


//Number.isFinite()用来检查一个数值是否为有限的（finite）
console.log("isFinite()方法。。。");
console.log(Number.isFinite(100));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite("12"));
console.log(isFinite("12"));//在Number的isFinete()方法不会将字符串自动转成数字，而global中会自动转换为数值


//Number.isNaN()用来检查一个值是否为NaN
console.log("isNan()方法。。。");
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(12));
console.log(Number.isNaN("12"));
console.log(Number.isNaN("abc"));//非数值一律返回false
console.log(isNaN("abc"));

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER+1);
console.log(Number.MAX_SAFE_INTEGER+2);

//Math对象扩展
//Math.sign方法用来判断一个数到底是正数、负数、还是零
console.log("Math对象实例...");
console.log(Math.sign(1),Math.sign(-100),Math.sign(0),Math.sign(-0),Math.sign(NaN));
//Math.trunc方法用于去除一个数的小数部分，返回整数部分
console.log(Math.trunc(123.95),Math.trunc(-123.45));
//Math.cbrt方法用于计算一个数的立方根
console.log(Math.cbrt(8),Math.cbrt(-10));
//Math.hypot方法返回所有参数的平方和的平方根
console.log(Math.hypot(3,4));