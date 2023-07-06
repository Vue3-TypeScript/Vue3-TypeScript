// 1.接口定义对象类型
interface ILength {
  length: number
}
// 2.在getLength函数上定义了 T 类型变量,并添加了类型的约束：
//   T类型必须包含ILength接口中定义的length属性
function getLength<T extends ILength>(arg: T) {
  return arg.length
}
// 3.泛型约束的使用
getLength("abc") // TS自动推导出string类型(string有lenght属性) 
// 给T类型变量传递string[]类型（有lenght属性）
getLength<string[]>(["abc", "cba"]) 
// 给T类型变量传递{length: number}对象类型（有lenght属性）
getLength<{length: number}>({length: 100}) 
// getLength<number>(1000) // 报错：Type 'number' does not satisfy the constraint 'ILength'
export {}
