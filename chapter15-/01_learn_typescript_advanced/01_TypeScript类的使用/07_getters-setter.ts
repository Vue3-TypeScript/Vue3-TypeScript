class Person {
  private _name: string // 1.私有属性一般习惯用下划线开头命名
  constructor(name: string) {
    this._name = name
  }
  set name(newName) { // 2.访问器(setter)
    this._name = newName
  }
  get name() { // 3.访问器(getter)
    return this._name
  }
}
const p = new Person("why")
p.name = "coderwhy" // 4.调用访问器(setter)
console.log(p.name) // 5.调用访问器(getter)
export {}
