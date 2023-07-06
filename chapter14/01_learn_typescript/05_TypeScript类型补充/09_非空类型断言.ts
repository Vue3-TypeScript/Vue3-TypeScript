// 1.参数message是可选的，值可能为: undefined | string
function printMessageLength(message?: string) {
  // 2.使用if来进行非空判断
  // if (message) {
  //   console.log(message.length)
  // }
  // 3.或者用非空类型断言(如果message为undefined运行还是会报错,因为只是跳过ts在编译阶段对它的检测)
  console.log(message!.length) // 这里断然message一定有值
}
printMessageLength("coder")