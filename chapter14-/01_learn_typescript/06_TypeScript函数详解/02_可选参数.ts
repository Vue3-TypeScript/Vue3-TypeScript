// 注意：可选类型参数必须写在必选类型的后面的
// 1.参数y是可选参数，y的类型可以为 undefined | number
function foo(x: number, y?: number) { console.log(x, y) }
foo(20, 30) // y为 30
foo(20) // y为undefined
export {}