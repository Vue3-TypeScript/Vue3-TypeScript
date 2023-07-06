// 1.在Point类上定义了 T 类型变量
class Point<T> {
  x: T
  y: T
  z: T
  constructor(x: T, y: T, z: T) {
    this.x = x
    this.y = y
    this.z = y
  }
}
// 2.TS自动推导 T 类型变量具体的类型
const p1 = new Point("1.33.2", "2.22.3", "4.22.1")
// 3.给Point类的 T 类型变量传递了具体string类型
const p2 = new Point<string>("1.33.2", "2.22.3", "4.22.1")
const p3: Point<string> = new Point("1.33.2", "2.22.3", "4.22.1")
export {}
