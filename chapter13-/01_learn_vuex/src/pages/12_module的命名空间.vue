<template>
  <div>
    <h4>root state根模块的状态: {{ $store.state.counter }}</h4>
    <h4>root state根模块currentDiscount: {{ $store.getters.currentDiscount }}</h4>
    
    <h4>home子模块homeCounter的状态: {{ $store.state.home.homeCounter }}</h4>
    <h4>home子模块doubleHomeCount: {{ $store.getters['home/doubleHomeCount'] }}</h4>
    <h4>home子模块homeCountAddRootCount: {{ $store.getters['home/homeCountAddRootCount'] }}</h4>

    <button @click="incrementAction">+1</button>
  </div>
</template>

<script>
  import { useStore } from 'vuex'
  export default {

    setup() {
      const store = useStore()
      const incrementAction =()=>{
        // 只会触发home模块的incrementAction函数
        // store.dispatch('home/incrementAction')
        // 只会提交home模块的increment函数
        store.commit('home/increment')
      }
      return { incrementAction }
    }
  }
</script>
<style scoped>
h4{
  margin: 0px;
}
</style>