let reg=/abc/gi;
console.log(reg.flags);

let reg2=new RegExp(reg,"i");
console.log(reg2.flags);