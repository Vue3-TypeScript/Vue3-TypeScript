// 1.对象类型起一个 Person 别名
type Person = {
  name: string
  friend?: {
    name: string
    age?: number,
    girlFriend?: {
      name: string
    }
  }
}

// 2.定义一个对象，指定类型为 Person 类型
const info: Person = {
  name: "why",
  friend: {
    name: "kobe",
    girlFriend: {
      name: "lily"
    }
  }
}

// 3.获取info对象的属性( 可选链的使用 ?. )
console.log(info.name)
// console.log(info.friend!.name) // 断言 firend 不为空，当为空时程序运行会报错。
console.log(info.friend?.age) // 当friend不为空，才会取age。类似if语句判空
console.log(info.friend?.girlFriend?.name) // 当friend、grilFriend都为不空，才取name。
export {}