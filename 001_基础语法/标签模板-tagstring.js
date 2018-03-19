/*
标签模板功能:
tag函数的第一个参数是一个数组，该数组的成员是模板字符串中那些没有变量替换的部分，
也就是说，变量替换只发生在数组的第一个成员与第二个成员之间、第二个成员与第三个成员之间，以此类推。
tag函数的其他参数，都是模板字符串各个变量被替换后的值。由于本例中，模板字符串含有两个变量，因此tag会接受到value1和value2两个参数
*/
function test(str,...values){
    console.log(str);
    console.log(values);
}

let name="老谭";
let name1="Tom";
test `Hello!,${name},I'm ${name1}`;
//输出如下:
//[ 'Hello!,', ',I\'m ', '' ]
//[ '老谭', 'Tom' ]
