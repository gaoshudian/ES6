let ab1=new ArrayBuffer(16);
let dv=new DataView(ab1,2);
console.log(dv.buffer,dv.byteLength,dv.byteOffset);

dv.setInt8(0,100);
dv.setInt16(1,200);
dv.setInt16(3,200,true);

console.log(dv.getInt8(0),dv.getInt16(1),dv.getInt16(3,true));