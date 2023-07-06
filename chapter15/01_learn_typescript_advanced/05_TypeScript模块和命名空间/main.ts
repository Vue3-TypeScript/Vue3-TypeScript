// import { add, sub } from "./utils/math";
// console.log(add(20, 30));
// console.log(sub(20, 30));

// 2.导入命名空间：Time 和 Price
import { Time, Price } from './utils/format'
// 3.调用命名空间定义的属性和方法
console.log(Time.name) // coder
console.log(Time.format(['2022', '07', '10'])) // 2022-07-10
console.log(Price.format(2999.7834)) // 2999.78
export {}