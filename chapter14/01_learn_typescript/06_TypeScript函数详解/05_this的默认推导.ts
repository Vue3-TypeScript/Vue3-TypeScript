// 1.this是可以被TypeScript推导出来为info对象
const info = {
  name: "why",
  eating() {
    console.log(this.name + " eating")
  }
}
info.eating()
export {}