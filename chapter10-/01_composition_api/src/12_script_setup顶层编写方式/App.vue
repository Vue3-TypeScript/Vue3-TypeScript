<template>
  <div class="app" style="border:1px solid #ddd;margin:4px">
    App组件
    <!-- <ScriptSetupExample></ScriptSetupExample> -->
    <!-- <DefinePropsEmitAPI message="App传递过来的message" @increment="getCounter"/> -->
    <DefineExposeAPI ref="defineExposeAPI"></DefineExposeAPI>
  </div>
</template>

<script setup>
  import { ref, watchEffect } from 'vue'
  // import ScriptSetupExample from './ScriptSetupExample.vue';
  // import DefinePropsEmitAPI from './DefinePropsEmitAPI.vue';
  import DefineExposeAPI from './DefineExposeAPI.vue';

  // 获取DefineExposeAPI组件的实例和该组件暴露的属性
  const defineExposeAPI = ref(null)
  watchEffect(()=>{
    console.log(defineExposeAPI.value) // 组件的实例
    console.log(defineExposeAPI.value.name) // 响应式数据
    console.log(defineExposeAPI.value.age)
    defineExposeAPI.value.showMessage()
  }, {flush:"post"})

  // const getCounter = (number)=> console.log('App 组件拿到子组件传递过来的number：' + number)
</script>