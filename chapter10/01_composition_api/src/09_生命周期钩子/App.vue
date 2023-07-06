<template>
  <div>
    <button @click="increment">点击+1：{{counter}}</button>
  </div>
</template>

<script>
  import { onBeforeMount, onMounted, onUpdated, onUnmounted, ref } from 'vue';

  export default {
    setup() {
      const counter = ref(0);
      const increment = () => counter.value++

      // 生命周期钩子函数 （同一个生命周期函数可以存在多个）
      onBeforeMount(() => {
        console.log("App onBeforeMount");
      })
      onMounted(() => {
        console.log("App Mounted1");
      })
      onMounted(() => {
        console.log("App Mounted2");
      })
      onUpdated(() => {
        console.log("App onUpdated");
      })
      onUnmounted(() => {
        console.log("App onUnmounted");
      })

      return {counter,increment}
    }
  }
</script>