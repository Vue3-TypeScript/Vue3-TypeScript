<template>
  <div>
    <h4>当前计数: {{ $store.state.counter }}</h4>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="addTen">+10</button>

  </div>
</template>

<script>
  import { useStore } from 'vuex'

  export default {
    methods: {
      increment() { // option 语法
        this.$store.dispatch("incrementAction")
      }
    },
    setup() {
       // setup 语法
       const store = useStore()
       const decrement = ()=>{
         store.dispatch("decrementAction")
       }
       const addTen = ()=>{
        //  store.dispatch("incrementNAction", {num: 10})
         store.dispatch({
           type: "incrementNAction",
           num: 10
         })
       }
      return { decrement, addTen}
    }
  }
</script>