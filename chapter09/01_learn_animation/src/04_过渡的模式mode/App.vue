<template>
  <div class="app">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- out-in: 当前元素先进行过渡，完成之后新元素过渡进入 -->  
    <transition name="why" mode="out-in">
      <h4 v-if="isShow" style="border:1px solid #ddd;width: 100px">Hello World</h4>
      <h4 v-else style="border:1px solid #ddd;width: 100px">你好啊,李银河</h4>
    </transition>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: true
      }
    }
  }
</script>

<style scoped>
  .why-enter-from,
  .why-leave-to {
    opacity: 0;
  }
  .why-enter-active,
  .why-leave-active {
    transition: opacity 1s ease;
  }
</style>