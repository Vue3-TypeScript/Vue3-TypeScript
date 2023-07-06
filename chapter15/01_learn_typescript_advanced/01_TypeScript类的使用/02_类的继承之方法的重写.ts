class Person {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  eating() { console.log("eating 100行") }
}

class Student extends Person {
  sno: number
  constructor(name: string, age: number, sno: number) {
    super(name, age) // 1.super调用父类的构造器
    this.sno = sno
  }
  // 2.重写了父类的方法
  eating() {
    console.log("student eating")
    super.eating() // 3.super调用父类的eating方法
  }
  studying() { console.log("studying") }
}

const stu = new Student("why", 18, 111)
console.log(stu.name)
console.log(stu.age)
console.log(stu.sno)

stu.eating()

export {}

