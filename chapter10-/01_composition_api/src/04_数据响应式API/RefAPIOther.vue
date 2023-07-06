<template>
  <div class="ref-api-other" style="border:1px solid #ddd;margin:10px">
    RefAPIOther组件（演示ref的浅层解包）
    <h4>当前计数: {{counter}}</h4>
    <!-- 如果普通对象包裹的是ref对象时，那么info中的ref对象可以解包 -->
    <h2>当前计数: {{info.counter}}</h2>
    <!-- 如果最外层包裹的是一个reactive可响应式对象, 那么info中的ref对象可以解包 -->
    <h2>当前计数: {{reactiveInfo.counter}}</h2>
    <button @click="increment">+1</button>
  </div>
</template>
<script>
  import { reactive, ref } from 'vue'; // 1.导入响应式api
  export default {
    setup() {
       // 2.定义响应式数据
      let counter = ref(100);
      
      // 普通对象包含ref响应式对象
      const info = {
        counter
      }
      // reactive响应式对象包含ref响应式对象
      const reactiveInfo = reactive({
        counter
      })
      const increment = () => {
        counter.value++;
        console.log(counter.value);
      }
      return {
        counter,
        info,
        reactiveInfo,
        increment
      }
    }
  }
</script>