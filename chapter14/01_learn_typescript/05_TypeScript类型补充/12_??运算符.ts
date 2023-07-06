let message: string|null = 'Hello World'
// 1.以前的方式：使用三元运算符判空赋默认值(判断null、undefined、’‘、false)
const content1 = message ? message: "你好啊, 李银河1"
// 2.或使用 || 操作符判空赋默认值(判断null、undefined、’‘、false)
const content2 = message || "你好啊, 李银河2"
// 3.或使用 ?? 操作符判空赋默认值(只判断null或undefined)
const content3 = message ?? "你好啊, 李银河3"
console.log(content1, content2, content3)
export{}