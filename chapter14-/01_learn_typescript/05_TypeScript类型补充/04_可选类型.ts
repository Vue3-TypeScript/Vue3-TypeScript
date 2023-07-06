// 1.给参数 point 指定对象类型: {x: number, y: number, z?: number}
function printPoint(point: {x: number, y: number, z?: number}) {
  console.log(point.x)
  console.log(point.y)
  console.log(point.z)
}
printPoint({x: 123, y: 321}) // z 属性是可选的
printPoint({x: 123, y: 321, z: 111})
export {}
