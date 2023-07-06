<template>
  <div>
    <h4>当前计数: {{ $store.state.counter }}</h4>
    <!-- 点击+1会回调increment函数 -->
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="incrementN({num: 20})">+20</button>

  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import { INCREMENT_N } from '../store/mutation-types'

  export default {
    methods: {
      ...mapMutations(["increment"]),
      ...mapMutations({
        incrementN : INCREMENT_N
      }),
    },
    setup() {
       const storeMutations = mapMutations(["decrement"])
      return {...storeMutations}
    }
  }
</script>