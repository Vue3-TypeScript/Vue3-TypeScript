// tuple元组: 多种元素的组合

// 1.数组的弊端
// const info: any[] = ["why", 18, 1.88] // 数组中每项都为任意类型
// const name = info[0]  // 没有类型提示，不知道是什么类型
// console.log(name.length)

// 2.元组的特点：可指定数组中每项数据的类型
const info: [string, number, number] = ["why", 18, 1.88]
const name = info[0] // 有类型提示，知道是string类型
console.log(name.length)
const age = info[1] // 有类型提示，知道是number类型
// console.log(age.length) // 会提示报错


export {}
