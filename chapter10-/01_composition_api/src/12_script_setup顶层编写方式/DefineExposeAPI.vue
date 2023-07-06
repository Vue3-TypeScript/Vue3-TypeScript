<template>
  <div style="border:1px solid #ddd;margin:8px">
     DefineExposeAPI 组件
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const age = 18 // 普通数据
  const name = ref('coderwhy') // 响应式数据
  const showMessage = ()=>{console.log('showMessage方法')} // 方法
  // 该组件暴露出去的属性（ age,name,showMessage ）
  defineExpose({age,name,showMessage}) 
</script>