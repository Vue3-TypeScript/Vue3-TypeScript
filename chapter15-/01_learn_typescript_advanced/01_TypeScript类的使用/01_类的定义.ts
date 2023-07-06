// 1.定义一个Person类
// class Person {
//   // 2.定义属性（需初始化，不然编译报错）
//   name: string = 'coder'
//   age: number = 18
//   // 3.定义方法
//   eating() {
//     console.log(this.name + " eating")
//   }
// }
// const p = new Person() // 4.新建一个类
// console.log(p.name, p.age) // 5.访问类的属性
// p.eating()


class Person {
  name: string
  age: number
  // 1.添加构造器，并在里面对属性进行初始化
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  eating() {
    console.log(this.name + " eating")
  }
}
const p = new Person("why", 18)
console.log(p.name, p.age)
p.eating()

export {}
