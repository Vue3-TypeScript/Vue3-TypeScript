type ThisType = { name: string };

function eating(this: ThisType, message: string) {
  console.log(this.name + " eating", message);
}
const info = {
  name: "why",
  eating: eating, // 赋值一个eating函数
};

// 隐式绑定
info.eating("哈哈哈");
// 显示绑定
eating.call({name: "kobe"}, "呵呵呵")
export {};
