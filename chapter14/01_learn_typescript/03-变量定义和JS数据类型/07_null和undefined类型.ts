let n1: null = null;
let n2: undefined = undefined;

let n3 = null; // 自动推导为any类型
let n4 = undefined; // 自动推导为any类型
console.log(n1, n2); // null undefined
console.log(n3, n4); // null undefined

export {}