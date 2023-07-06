import { createStore }  from 'vuex'
import { INCREMENT_N } from './mutation-types'
import home from './modules/home'
import user from './modules/user'

const store = createStore({
  // 1.定义全局共享的状态
  state() {
    return {
      counter: 0,
      name: 'why',
      age: 18,
      books: [
        {name: "Vue.js", count: 10, price: 10},
        {name: "React", count: 5, price: 20},
        {name: "webpack", count: 4, price: 25}
      ],
      discount: 0.9, // 书9折
      uuid: null
    }
  },
  // 2.mutation 修改全局状态
  mutations: {
    // 定义increment方法，该方法可拿到上面state返回的对象
    increment(state) {
      state.counter++ // 修改全局的counter
    },
    decrement(state) {
      state.counter--
    },
    // 类型为 incrementN 的 mutation 函数，payload：大部分是一个对象
    // 使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
    [INCREMENT_N](state, payload) {
      // state.counter+=payload
      state.counter+=payload.num
    },
    addUUID(state, payload) {
      state.uuid = payload // payload: xxxx
    }
  },
  // 3.getter 获取state中的状态
  getters: {
    // 获取书本总价的方法
    totalPrice(state, getters){
      let totalPrice = 0;
      for (const book of state.books) {
        totalPrice += book.count * book.price
      }
      return totalPrice * getters.currentDiscount
    },
    // 拿到当前折扣
    currentDiscount(state) {
      return state.discount
    },
    totalPriceByName(state) {
      return (bookName)=>{
        let totalPrice = 0;
        for (const book of state.books) {
          if(bookName === book.name){
            totalPrice += book.count * book.price
          }
        }
        return totalPrice
      }
    }
  },
  // 4.定义action
  actions: {
    incrementAction(context, payload) {
      // setTimeout 模拟异步
      setTimeout(()=>{
        context.commit('increment') // 提交一个type为increment的mutation
      })
    },
    decrementAction(context, payload) {
      // ES6 解构context对象
      let {commit, dispatch, state, rootState, getters, rootGetters} = context
      commit('decrement') // 提交一个type为decrement的mutation
    },
    incrementNAction(context, payload) {
      context.commit(INCREMENT_N, payload)
    },
    // 获取uuid的操作
    getUUIDAction({commit}) {
      // 直接返回 Promise 对象
      return new Promise((resolve, reject)=>{
        // 1.发起网络请求，httpbin.org 经常用来测试HTTP请求和响应的服务
        fetch('https://httpbin.org/uuid')
          // 2.res.json(): 将res解析为JSON格式的Promise对象
          .then(res=>res.json())
          .then((data)=>{
            // 3.将请求拿到的数据存到Vuex
            commit('addUUID', data.uuid)
            // 4.调用resolve完成异步操作
            resolve(data)
          }).catch((err)=>{
            reject(err) // 5.错误的处理
          })
      })
    }
  },
  // 5.其它的模块
  modules: {
    home,
    user
  }
})
export default store