// 1.object类型表示（不推荐, 使用object推导不出明确的属性）
// const info: object = {
//   name: "why",
//   age: 18
// }

// 2.会自动进行类型推导（推荐）
const info = {
  name: "why",
  age: 18
}
console.log(info.name)
export {}