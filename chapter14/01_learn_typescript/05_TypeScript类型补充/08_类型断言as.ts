// <img id="my-img"/>
// 1.类型断言 as 案例1
const myEl = document.getElementById("my-img") as HTMLImageElement
myEl.src = "url地址"

// 2.类型断言 as 案例2: Person是Student的父类
class Person {}
class Student extends Person {
  studying() { }
}
function sayHello(p: Person) {
  (p as Student).studying()
}
const stu = new Student()
sayHello(stu)


// 3.类型断言 as 案例3: as any/unknown
const message = "Hello World"
// const num1: number = message // 报错：Type 'string' is not assignable to type 'number'
const num2: number = (message as unknown) as number // 可以
const num3: number = (message as any) as number // 可以
console.log(num2, num3)
export {}