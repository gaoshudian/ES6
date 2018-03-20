/*
ArrayBuffer对象代表储存二进制数据的一段内存，它不能直接读写，只能通过视图（TypedArray视图和DataView视图)来读写，
视图的作用是以指定格式解读二进制数据

ArrayBuffer对象代表原始的二进制数据，
TypedArray视图用来读写简单类型的二进制数据，
DataView视图用来读写复杂类型的二进制数据。
 */

let ab1 = new ArrayBuffer(10);
console.log(ab1.byteLength);

let ab2=ab1.slice(2,5);
console.log(ab2.byteLength);
console.log(ab2);

let ta1=new Int8Array(10);
console.log(ArrayBuffer.isView(ta1));//表示参数是否为ArrayBuffer的视图实例