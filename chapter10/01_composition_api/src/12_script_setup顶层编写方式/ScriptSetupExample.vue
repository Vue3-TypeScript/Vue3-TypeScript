<template>
  <div>
    <h4>当前计数: {{counter}}</h4>
    <button @click="increment">+1</button>
  </div>
</template>
// 1.script setup语法的顶层编写方式
<script setup>
  // 2.ref、counter、increment是在顶层绑定，所以都能在模板中直接使用
  import { ref } from 'vue';
  const counter = ref(0);
  const increment = () => counter.value++;
</script>