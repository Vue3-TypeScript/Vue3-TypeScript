// 1.string类型表示
let message: string = "Hello World";
message = 'Hello TypeScript';
console.log(message);
  
// 2.下面的都可以自动推导出对应标识符的类型, 一般情况下是可以不加声明
const name = "coder";
const age = 18;
const height = 1.88;
const info = `my name is ${name}, age is ${age}, height is ${height}`;
console.log(info);
export {} // export() 可以把该TS文件当成一个模块，防止与全局变量冲突（例如，name）
