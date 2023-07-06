<template>
  <div>当前计数：{{ $store.state.counter }}</div>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  components: {},
  methods: {
    increment() {
      this.$store.commit('increment') // Options API
    }
  },
  setup() {
    const store = useStore()
    const decrement = () => {
      store.commit('decrement') // Composition API
    }
    return {
      decrement
    }
  }
}
</script>

<style>

</style>
