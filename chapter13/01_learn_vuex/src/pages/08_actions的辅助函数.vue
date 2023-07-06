<template>
  <div>
    <h4>当前计数: {{ $store.state.counter }}</h4>
    <button @click="incrementAction">+1</button>
    <button @click="decrement">-1</button>
    <button @click="addTen({num:20})">+10</button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions(['incrementAction']) // options 语法
    },
    setup() {
      const actionsFuncs = mapActions({ // setup 语法
        decrement: "decrementAction",
        addTen: 'incrementNAction'
      })
      return { ...actionsFuncs }
    }
  }
</script>