// 1.方式一：用type定义函数类型
// type CalcFn = (n1: number, n2: number) => number

// 2.方式二：用interface定义函数类型
interface CalcFn {
  (n1: number, n2: number): number
}

// 4.指定add函数类型
const add: CalcFn = (num1, num2) => {
  return num1 + num2
}

// 5.指定参数calcFn类型
function calc(num1: number, num2: number, calcFn: CalcFn) {
  return calcFn(num1, num2)
}
calc(20, 30, add)

// 6.方式三：用interface定义函数类型，并该函数还有其他属性(get和post)
interface FakeAxiosType {
  (config: any): Promise<any>;
  get(url: string): string;
  post: (url: string) => string;
}

const FakeAxios: FakeAxiosType = function(config: any) {
 return Promise.resolve(config)
}
FakeAxios.get = function(url: string): string{ return 'liujun' }
FakeAxios.post = function(url: string): string{ return 'coderwhy' }

export {}

