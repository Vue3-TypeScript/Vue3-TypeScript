// 1.定义接口，接口上定义了T1和T2两个类型变量，并且都有默认值
interface IPerson<T1 = string, T2 = number> {
  name: T1 // name的类型是T1，需要调用者决定
  age: T2
}
// 2.p1和p2指定为IPerson类型
const p1: IPerson = { name: "why", age: 18 }
const p2: IPerson<string, number> = { name: "why", age: 18 }
export {}

