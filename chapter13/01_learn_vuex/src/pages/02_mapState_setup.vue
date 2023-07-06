<template>
  <div>
    <h4>Setup: {{ $store.state.counter }}</h4>
    <h4>Setup: {{counter}}</h4>
    <h4>Name: {{name}}</h4>
    <h4>Age: {{age}}</h4>
  </div>
</template>

<script>
  import { mapState, useStore } from 'vuex'
  import { computed } from 'vue'

  export default {
    setup() {
      // 1 .计算属性
      const store = useStore()
      // const counter = computed(() => store.state.counter)
      // const name = computed(() => store.state.name)
      // const hyAge = computed(() => store.state.age)

      const storeStateFns = mapState(["counter", "name", "age"])
      // 原来：{name: function, age: function, height: function}
      // 转换后：{name: ref, age: ref, height: ref}
      const storeState = {}
      Object.keys(storeStateFns).forEach(fnKey => {
        // 给函数绑定this的指向：{ $store: store }
        const fn = storeStateFns[fnKey].bind({$store: store})
        // 将普通的函数 转成 计算属性
        storeState[fnKey] = computed(fn)
      })
      return {
        // counter,
        // name,
        // hyAge,
        ...storeState
      }
    }
  }
</script>

<style scoped>
h4{
  margin: 0px;
}
</style>