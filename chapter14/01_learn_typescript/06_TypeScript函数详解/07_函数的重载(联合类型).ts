// 1.函数的重载( 联合类型实现 )
function add(a1: number | string, a2: number | string) {
  if (typeof a1 === "number" && typeof a2 === "number") {
    return a1 + a2
  } else if (typeof a1 === "string" && typeof a2 === "string") {
    return a1 + a2
  }
}
console.log(add(10, 20))
console.log(add('coder', 'why'))
export {}