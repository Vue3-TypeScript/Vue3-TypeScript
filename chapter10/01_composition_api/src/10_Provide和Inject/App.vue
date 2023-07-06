<template>
  <div class="app" style="border:1px solid #ddd;margin:4px">
    App组件
    <div>{{name}} - {{age}}</div>
    <div>{{counter}}</div>
    <button @click="increment">App组件+1</button>
    <home/>
  </div>
</template>

<script>
  import { provide, ref, readonly } from 'vue';
  import Home from './Home.vue';
  export default {
    components: {
      Home
    },
    setup() {
      // 1.定义普通数据
      const name = "coderwhy";
      const age = 18;
      // 2.定义响应式数据
      let counter = ref(100);

      // 3.给子组件提供数据
      provide("name", name);
      provide("age", age); // 提供普通数据（只能读，不能修改）
      provide("counter", counter); // 提供响应式数据

      const increment = () => counter.value++;
      return {name,age,increment,counter}
    }
  }
</script>