<template>
  <div class="reactive-api" style="border:1px solid #ddd;margin:10px">
    ReactiveAPI组件
    <h4>当前计数: {{state.counter}}</h4>
    <button @click="increment">+1</button>
  </div>
</template>
<script>
  import { reactive } from 'vue'; // 1.导入响应式api
  export default {
    setup() {
      // 2.定义响应式数据 
      const state = reactive({
        counter: 100
      })
      // console.log(state)
      const increment = () => {
        state.counter++; // 3.局部函数使用响应式数据
        console.log(state.counter);
      }
      return {
        state, // 4.返回响应数据
        increment // 5.返回定义的方法(等同于在methods中定义方法)
      }
    }
  }
</script>