interface ISwim {
  swimming: () => void
}
interface IEat {
  eating: () => void
}
class Animal {}

// 1.继承(extends): 只能实现单继承
// 2.实现接口(implements): 类可以实现多个接口
class Fish extends Animal implements ISwim, IEat {
  swimming() { // 3.实现ISwim接口对应的swimming方法
    console.log("Fish Swmming")
  }
  eating() { // 4.实现IEat接口对应的eating方法
    console.log("Fish Eating")
  }
}
class Person implements ISwim {
  swimming() {
    console.log("Person Swimming")
  }
}

// 5.编写一些公共的API: 面向接口编程，即swimAction函数接收的是ISwim接口
function swimAction(swimable: ISwim) {
  swimable.swimming()
}
// 6.只要实现ISwim接口的类对应的对象, 都可传给swimAction函数
swimAction(new Fish())
swimAction(new Person())
export {}

