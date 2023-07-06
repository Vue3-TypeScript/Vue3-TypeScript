type FriendType = { name: string }
class Person {
  // 1.只读属性是可以在构造器中赋值, 赋值之后就不可以修改
  readonly name: string
  // 2.属性本身不能进行修改, 但是如果它是对象类型, 对象中的属性是可以修改
  readonly friend?: FriendType

  constructor(name: string, friend?: FriendType) {
    this.name = name
    this.friend = friend
  }
}

const p = new Person("why", { name:'kobe'} )
// p.name = 'liujun' // 3.直接修改只读的friend会报错
console.log(p.name, p.friend)

// p.friend = { name: 'evan' } // 4.直接修改只读的friend会报错
if (p.friend) {
  p.friend.name = 'evan' // 5.修改friend对象中的name属性 ok
} 
export {}
