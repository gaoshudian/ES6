let name="laotan";
console.log(name.startsWith("la"));
console.log(name.startsWith("ta",3));
console.log(name.endsWith("an"));
console.log(name.endsWith("ta",5));
console.log(name.includes("ao"));
console.log(name.includes("ao",3));
console.log(name.repeat(3));

//String.raw方法，往往用来充当模板字符串的处理函数，返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串，对应于替换变量后的模板字符串
console.log(String.raw `Hello\n`);//Hello \n
console.log(`Hello\n`);//Hello