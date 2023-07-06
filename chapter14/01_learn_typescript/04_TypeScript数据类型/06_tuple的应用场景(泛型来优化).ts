// 函数返回值的类型为 元组类型：[T, (newState: T) => void] 
function useState<T>(state: T): [T, (newState: T) => void] {
  let currentState = state
  const changeState = (newState: T) => {
    currentState = newState
  }
  return [currentState, changeState] // 返回元组类型
}

const [counter, setCounter] = useState(10)
export {}
