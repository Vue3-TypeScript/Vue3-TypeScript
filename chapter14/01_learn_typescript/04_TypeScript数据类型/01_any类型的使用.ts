// 如不想给某些JavaScript添加具体数据类型,可使用any类型，即和原生JS写法一样支持任意类型。
let message: any = "Hello World"

// message可以赋值任意类型
message = 123
message = true
message = {}
console.log(message)

const arr: any[] = [] // 数组虽可存任意类型，但是不推荐
export {}
