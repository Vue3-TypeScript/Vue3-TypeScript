<template>
  <div>
    <h4>root state根模块的状态: {{ $store.state.counter }}</h4>
    <h4>home state 子模块的状态: {{ $store.state.home.homeCounter }}</h4>
    <h4>user state 子模块的状态: {{ $store.state.user.userCounter }}</h4>

    <!-- <button @click="incrementAction">+1</button>
    <button @click="decrement">-1</button>
    <button @click="addTen({num:20})">+10</button> -->
  </div>
</template>

<script>
  // import { mapActions } from 'vuex'
  export default {
    // methods: {
    //   ...mapActions(['incrementAction']) // options 语法
    // },
    // setup() {
    //   const actionsFuncs = mapActions({ // setup 语法
    //     decrement: "decrementAction",
    //     addTen: 'incrementNAction'
    //   })
    //   return { ...actionsFuncs }
    // }
  }
</script>
<style scoped>
h4{
  margin: 0px;
}
</style>