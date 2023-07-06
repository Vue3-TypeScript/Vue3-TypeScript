<template>
  <div>
    <h4>root state根模块的状态: {{ $store.state.counter }}</h4>
    <h4>root state根模块currentDiscount: {{ $store.getters.currentDiscount }}</h4>

    <h4>user state 子模块userCounter的状态: {{ $store.state.user.userCounter }}</h4>
    <h4>user state 子模块doubleUserCount: {{ $store.getters['doubleUserCount'] }}</h4>
    <h4>user state 子模块userCountAddRootCount: {{ $store.getters.userCountAddRootCount }}</h4>

    <button @click="incrementAction">+1</button>
  </div>
</template>

<script>
  import { useStore } from 'vuex'
  export default {

    setup() {
      const store = useStore()
      const incrementAction =()=>{
        // 存在问题：会触发root模块incrementAction函数和子模块incrementAction函数
        store.dispatch('incrementAction')
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