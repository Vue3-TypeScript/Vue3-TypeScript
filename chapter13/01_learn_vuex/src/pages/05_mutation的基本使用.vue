<template>
  <div>
    <h4>当前计数: {{ $store.state.counter }}</h4>
    <button @click="$store.commit('increment')">+1</button>
    <button @click="$store.commit('decrement')">-1</button>
    <button @click="addTen">+10</button>

  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { INCREMENT_N } from '../store/mutation-types'

  export default {
    methods: {
      addTen() {
        // this.$store.commit('incrementN', 10) // 传递基本数据类型
        // this.$store.commit('incrementN', {num: 10, name: "why", age: 18})
        this.$store.commit(INCREMENT_N, {num: 10, name: "why", age: 18})
        // 另外一种提交风格
        // this.$store.commit({
        //   type: INCREMENT_N,
        //   num: 10, 
        //   name: "why", 
        //   age: 18
        // })
      }
    }
  }
</script>