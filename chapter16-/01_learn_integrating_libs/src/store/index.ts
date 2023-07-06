import { createStore }  from 'vuex'
import type { Store }  from 'vuex'
// 1.用interface定了一个对象类型
export interface IRootState {
  counter: number
}
// 2.指定state返回值的对象类型为：IRootState（下面两种写法都支持）
// const store: Store<IRootState> = createStore({
const store = createStore<IRootState>({
  state() {
    return {
      counter: 0
    }
  },
  mutations: {
    // 可以手动指定参数类型
    increment(state: IRootState) {
      state.counter++ 
    },
    // 参数state类型TS会自动推导，可省略
    decrement(state) {
      state.counter--
    }
  }
})
export default store