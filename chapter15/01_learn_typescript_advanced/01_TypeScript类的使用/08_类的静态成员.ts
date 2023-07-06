class Student {
  static time: string = "24:00:00" // 1.定义静态属性
  static attendClass() { // 2.定义静态方法
    console.log("去学习~")
  }
}
console.log(Student.time) // 3.访问静态属性
Student.attendClass() // 4.调用静态方法
export {}
