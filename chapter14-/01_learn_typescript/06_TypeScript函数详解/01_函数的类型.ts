// 1.add函数-没编写函数类型
// const add = (a1: number, a2: number) => {
//   return a1 + a2
// }

// 2.给add函数-编写函数类型
// const add: (num1: number, num2: number) => number = (a1: number, a2: number) => {
//   return a1 + a2
// }

// 3.使用类型别名优化
// type AddFnType = (num1: number, num2: number) => number
// const add: AddFnType = (a1: number, a2: number) => {
//   return a1 + a2
// }

// 4.fn函数作为bar函数参数时-编写fn的函数类型
type FooFnType = () => void
function bar(fn: FooFnType ) {
  fn()
}
export {}
