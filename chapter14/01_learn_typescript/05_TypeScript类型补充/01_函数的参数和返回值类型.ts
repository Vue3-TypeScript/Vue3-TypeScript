// 1.给参数加上类型注解: num1: number, num2: number
// 2.给返回值加上类型注释: (): number
//   在开发中,通常情况下可不写返回值类型，TS会自动推导出返回值类型
function sum(num1: number, num2: number): number{
  return num1 + num2
}
sum(123, 321)

// 下面的调用会报错
// sum(123)
// sum('123', '321')