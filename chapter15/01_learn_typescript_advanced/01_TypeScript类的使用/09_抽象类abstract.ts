// 1.抽象类Shape
abstract class Shape {
  abstract getArea(): number // 2.抽象方法，没有具体实现
}

class Rectangle extends Shape { // 3.继承抽象类
  private width: number
  private height: number

  constructor(width: number, height: number) {
    super()
    this.width = width
    this.height = height
  }
  getArea() { // 4.实现抽象类中的getArea抽象方法
    return this.width * this.height
  }
}
class Circle extends Shape {
  private r: number
  constructor(r: number) {
    super()
    this.r = r
  }
  getArea() { // 5.实现抽象类中的getArea抽象方法
    return this.r * this.r * 3.14
  }
}
function makeArea(shape: Shape) {
  return shape.getArea() // 6.多态应用
}

const rectangle = new Rectangle(20, 30)
const circle = new Circle(10)
console.log(makeArea(rectangle))
console.log(makeArea(circle))
export {}

