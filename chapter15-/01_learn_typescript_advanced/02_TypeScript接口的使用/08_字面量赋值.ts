interface IPerson {
  name: string
}
const info = {
  name: "why", // ok
  age: 18 // ok
}
// 1.字面量赋值( TS会freshness擦除IPerson类型之外的类型检查 )
const p: IPerson = info


// function printInfo(person: IPerson) {
//   console.log(person)
// }
// // 2.字面量对象直接传给函数的参数
// printInfo({
//   name: "why",
//   age: 18 // 报错
// })
// // 3.字面量对象的引入传递给函数参数
// printInfo(info) // ok

export{} 

