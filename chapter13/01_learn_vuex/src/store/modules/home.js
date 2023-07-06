const homeModule = {
  namespaced: true, // 添加命名空间
  state() {
    return {
      homeCounter: 100
    }
  },
  getters: { 
    doubleHomeCount(state) {
      return state.homeCounter * 2
    },
    // home模块：state、getters  根模块：rootState、rootGetters
    homeCountAddRootCount(state, getters, rootState, rootGetters) {
      return state.homeCounter + rootState.counter
    }
  },
  mutations: { 
    increment (state) {
      state.homeCounter++
    }
  },
  actions: {
    // home模块：state、commit、dispatch、getters 
    // 根模块：rootState、rootGetters
    incrementAction ({ state, commit, dispatch, getters, rootState, rootGetters }) {
        commit('increment') // 提交到当前home模块的mutation中
        // commit('increment', null, { root: true }) // 提交到根模块的mutation中
        // dispatch("incrementAction", null, {root: true}) // 分发到根模块的action中
    }
  }
}
export default homeModule
