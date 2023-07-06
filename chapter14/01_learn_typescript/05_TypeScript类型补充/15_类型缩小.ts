type IDType = number | string
function printID(id: IDType) {
  // 1.用typeof实现类型缩小, 将联合的id类型，缩小为string类型
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}

// 2.平等的类型缩小(=== == !== !=/switch)
type Direction = "left" | "right" | "top" | "bottom"
function printDirection(direction: Direction) {
  // 1.if判断-缩小类型
  if (direction === 'left') {
    console.log(direction)
  } else if (direction === 'right'){
    console.log(direction)
  }
  // 2.switch判断-缩小类型
  switch (direction) {
    case 'top':
      console.log(direction)
      break;
    default:
      console.log(direction)
      break
  }
}


// 3.instanceof
class Student {
  studying() {}
}
class Teacher {
  teaching() {}
}
function work(p: Student | Teacher) {
  if (p instanceof Student) {
    p.studying()
  } else {
    p.teaching()
  }
}
const stu = new Student()
work(stu)

// 4. in
type Fish = {
  swimming: () => void
}
type Dog = {
  running: () => void
}
function walk(animal: Fish | Dog) {
  // 判断 swimming 是否是 animal对象中的属性
  if ('swimming' in animal) {
    animal.swimming()
  } else {
    animal.running()
  }
}
const fish: Fish = {
  swimming() {
    console.log("swimming")
  }
}
walk(fish)
export {}