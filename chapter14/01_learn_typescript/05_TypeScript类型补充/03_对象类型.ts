// 1.给参数 point 指定对象类型: {x: number, y: number}
function printPoint(point: {x: number, y: number}) {
  console.log(point.x);
  console.log(point.y)
}
printPoint({x: 200, y: 100})
export {}