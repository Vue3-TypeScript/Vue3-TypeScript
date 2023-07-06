// 参数id指定为联合类型：number|string|boolean
function printID(id: number|string|boolean) {
  // 使用联合类型的值时, 需要特别的小心
  if (typeof id === 'string') { // narrow: 缩小
    // TypeScript帮助确定id一定是string类型
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}

printID(123)
printID("abc")
printID(true)