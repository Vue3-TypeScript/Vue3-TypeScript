function sum(a1: number, a2: number): number; // 1.函数的重载签名
function sum(a1: string, a2: string): string;
// 2.通用函数体
function sum(a1: any, a2: any): any {
  return a1 + a2
}
// 3.调用sum函数，可以对字符串和数字类型进行相加
console.log(sum(20, 30))
console.log(sum("coder", "why"))
export {}