// 参数的顺序：必传参数 -  有默认值的参数 - 可选参数
// 1.y参数设默认值为20，y的类型可以为 number | undefined
function foo(x: number, y: number = 20) { console.log(x, y) }
foo(30) // y的值为20