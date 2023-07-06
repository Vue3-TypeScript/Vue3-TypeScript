interface IFoo {
  name: string
}

interface IFoo {
  age: number
}
// 1.IFoo类型是上面两个IFoo接口的合并。 
const foo: IFoo = {
  name: "why",
  age: 18
}

// 2.类型别名不能出现重复
// type IBar = { // 报错：Duplicate identifier 'IBar'
//   name: string
// }
// type IBar = {
//   age: number
// }
export {}