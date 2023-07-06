// 1.nums为剩余参数
function sum(initalNum: number, ...nums: number[]): number{
  let total: number = initalNum
  for (const num of nums) { total += num }
  return total
}
console.log(sum(20, 30)) // 30传递给nums
console.log(sum(20, 30, 40)) // 30、40传递给nums
export {}