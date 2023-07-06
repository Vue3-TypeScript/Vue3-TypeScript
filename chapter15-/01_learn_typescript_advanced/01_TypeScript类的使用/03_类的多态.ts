class Animal {
  action() {
    console.log("animal action")
  }
}
class Dog extends Animal { // 继承是多态的前提
  action() { // 子类重写了父类的action
    console.log("dog running!!!")
  }
}
class Fish extends Animal {
  action() {
    console.log("fish swimming")
  }
}

// 1.多态的目的是为了写出更加具备通用性的代码
function makeActions(animals: Animal[]) {
  animals.forEach(animal => {
    // 2.animals：是父类的引用指向了子类对象
    animal.action() // 3.调用用的是子类的action
  })
}

makeActions([new Dog(), new Fish()])
export {}
