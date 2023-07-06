const userModule = {
  // 1)在user模块定义的state是属于子模块的状态（局部状态）
  state() {
    return {
      userCounter: 1000
    }
  },
  getters: { 
    // 2）对于user模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象。
    doubleUserCount(state) {
      return state.userCounter * 2
    },
    // 4) 对于user模块内部的 getter，根节点状态会作为第三个参数暴露出来
    userCountAddRootCount(state, getters, rootState) {
      return state.userCounter + rootState.counter
    }
  },
  mutations: { 
    // 2）对于user模块内部的 mutation 和 getter，接收的第一个参数是模块的局部状态对象。
    increment (state) {
      // 这里的 `state` 对象是模块的局部状态
      state.userCounter++
    }
  },
  actions: { 
    // 3)对于user模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState。
    incrementAction ({ state, commit, rootState }) {
        commit('increment')
    }
  }
}

export default userModule
