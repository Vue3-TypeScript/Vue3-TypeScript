// 1.type用于定义类型别名 (type alias)
type IDType = string | number | boolean
type PointType = {
  x: number
  y: number
  z?: number
}

// 1.IDType 是联合类型 string | number | boolean 的别名
function printId(id: IDType) {  } 
// 2.PointType 是对象类型的别名
function printPoint(point: PointType) {  }
export {}