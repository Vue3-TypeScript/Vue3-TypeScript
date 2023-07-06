<template>
  <div>
    <h4>useState: {{ $store.state.counter }}</h4>
    <h4>useState: {{counter}}</h4>
    <h4>Name: {{name}}</h4>
    <h4>Age: {{age}}</h4>
  </div>
</template>

<script>
  import { useState } from '../hooks'
  export default {
    setup() {
      const storeState = useState(["counter"])
      const storeState2 = useState({
        name: state => state.name,
        age: state => state.age
      })
      return {
        ...storeState,
        ...storeState2
      }
    }
  }
</script>

<style scoped>
h4{
  margin: 0px;
}
</style>