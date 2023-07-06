const s1 = Symbol("identity");
const s2 = Symbol("identity"); // 会自动推导类型，不需手动指定

const person = {
  [s1]: "程序员",
  [s2]: "老师",
};
console.log(person)
export {}
