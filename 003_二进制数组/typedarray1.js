/*
ArrayBuffer对象作为内存区域，可以存放多种类型的数据。
同一段内存，不同数据有不同的解读方式，这就叫做“视图”（view）。
ArrayBuffer有两种视图，一种是TypedArray视图，另一种是DataView视图。
前者的数组成员都是同一个数据类型，后者的数组成员可以是不同的数据类型

目前，TypedArray视图一共包括9种类型，每一种视图都是一种构造函数。
Int8Array：8位有符号整数，长度1个字节。
Uint8Array：8位无符号整数，长度1个字节。
Uint8ClampedArray：8位无符号整数，长度1个字节，溢出处理不同。
Int16Array：16位有符号整数，长度2个字节。
Uint16Array：16位无符号整数，长度2个字节。
Int32Array：32位有符号整数，长度4个字节。
Uint32Array：32位无符号整数，长度4个字节。
Float32Array：32位浮点数，长度4个字节。
Float64Array：64位浮点数，长度8个字节。
 */
let ab1=new ArrayBuffer(16);
let ta1=new Int8Array(ab1);
let ta2=new Int16Array(ab1);

/*
一个简单转换规则，可以这样表示。
正向溢出（overflow）：当输入值大于当前数据类型的最大值，结果等于当前数据类型的最小值加上余值，再减去1。
负向溢出（underflow）：当输入值小于当前数据类型的最小值，结果等于当前数据类型的最大值减去余值，再加上1。
 */
ta1[0]=100;
ta1[1]=200;
ta1[2]=-129;
console.log(ta1[0],ta1[1],ta1[2]);//100,-56,127
console.log(ta2[0],ta2[1],ta2[2]);


/*
视图的构造函数可以接受三个参数：
第一个参数（必需）：视图对应的底层ArrayBuffer对象。
第二个参数（可选）：视图开始的字节序号，默认从0开始。
第三个参数（可选）：视图包含的数据个数，默认直到本段内存区域结束
 */
let ta3=new Int8Array();
let ta4=new Int8Array(ab1,1,2);
console.log(ta4[0],ta4[1]);

//将普通数组转化为视图
let ta5=new Int8Array([100,110,120]);
for(let n of ta5){
    console.log(n);
}


//typedarray视图的属性及方法
console.log(Int32Array.BYTES_PER_ELEMENT);
console.log(ta4.buffer,ta4.byteLength,ta4.byteOffset,ta4.length);

let ta6=new Int8Array(16);
ta6.set([1,2,3],2);
for(let n of ta6){
    console.log(n);
}
console.log("------------------");
let ta7=ta6.subarray(2);
console.log(ta7.length);
for(let n of ta7){
    console.log(n);
}

//由于视图的构造函数可以指定起始位置和长度，所以在同一段内存之中，可以依次存放不同类型的数据，
//这叫做符合视图
let ta8=new Int8Array(ab1,0,2);
let ta9=new Int16Array(ab1,2,3);
let ta10=new Float64Array(ab1,8,1);