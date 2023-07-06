// function foo(arg: number): number {
//   return arg
// }

// 1.类型的参数化
//  1.1在定义这个函数时, 我不决定这些参数的类型
//  1.2而是让调用者以参数的形式告知,我这里的函数参数应该是什么类型
function foo<Type>(foo: Type): Type {
  return foo
}

// 2.调用方式一: 给类型变量Type传递具体的类型
foo<number>(20)
foo<{name: string}>({name: "why"})

// 3.调用方式二: TS会自动类型推导Type具体的类型
foo(50)
foo("abc")
export {}

