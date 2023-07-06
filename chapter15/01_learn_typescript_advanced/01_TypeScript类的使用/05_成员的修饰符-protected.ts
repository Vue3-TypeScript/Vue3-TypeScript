
class Person {
  // 1.protected的属性: 在类内部和子类中可以访问
  protected name: string = "123"
}
class Student extends Person {
  getName() {
    // 2.子类可以访问父类的protected属性
    return this.name
  }
}

const stu = new Student()
// console.log(stu.name) // 3.直接访问受保护的name属性会报错
console.log(stu.getName()) // ok
export {}