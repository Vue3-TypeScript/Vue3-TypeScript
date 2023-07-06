// 1.定义Direction枚举
enum Direction {
  LEFT,
  RIGHT
}
// 2.指定direction参数为Direction枚举类型
function turnDirection(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log("改变角色的方向向左")
      break;
    case Direction.RIGHT:
      console.log("改变角色的方向向右")
      break;
    default:
      const foo: never = direction;
      break;
  }
}
// 3.调用turnDirection函数并传入枚举
turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)

// 4.获取枚举成员的值
console.log(Direction.LEFT) // 打印 0 
console.log(Direction.RIGHT) // 打印 1
export {}
