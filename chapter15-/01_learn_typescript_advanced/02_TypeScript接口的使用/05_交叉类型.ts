// 1.一种组合类型的方式: 联合类型
type WhyType = number | string
type Direction = "left" | "right" | "center"


// 2.另一种组件类型的方式: 交叉类型
type WType = number & string

interface ISwim {
  swimming: () => void
}
interface IFly {
  flying: () => void
}
type MyType1 = ISwim | IFly
type MyType2 = ISwim & IFly
// 1.联合类型
const obj1: MyType1 = {
  flying() {}
}
// 2.交叉类型（MyType2类型是：ISwim和IFly类型的合并 ）
const obj2: MyType2 = {
  swimming() {},
  flying() {}
}
export {}

