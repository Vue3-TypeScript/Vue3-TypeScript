// 1."Hello World" 也可作为一种类型, 叫做字面量类型
let message: "Hello World" = "Hello World"
// message = 'coder' // 报错：Type '"coder"' is not assignable to type '"Hello World"'
// 2. 123 也可作为一种类型，叫做字面量类型
let num: 123 = 123

// 3.字面量类型的意义, 就是必须结合联合类型
type Alignment = 'left' | 'right' | 'center'
let align: Alignment = 'left'// ok
align = 'right'// ok
align = 'center' // ok
// align = 'bottom' // 报错 Type '"bottom"' is not assignable to type

export {}