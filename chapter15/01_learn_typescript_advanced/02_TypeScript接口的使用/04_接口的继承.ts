interface ISwim {
  swimming: () => void // 接口定义的方法
}
interface IFly {
  flying: () => void
}
// 1.接口的多继承
interface IAction extends ISwim, IFly {}

const action: IAction = {
  swimming() {}, // 2.必须实习接口中的方法
  flying() {}
}
export {}

