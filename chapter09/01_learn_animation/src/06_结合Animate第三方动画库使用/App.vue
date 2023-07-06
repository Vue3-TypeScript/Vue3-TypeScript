<template>
  <div class="app">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 自定义类名的方式来实现 backInLeft 和 backOutRight 动画  -->
    <transition enter-active-class="animate__animated animate__backInLeft"
                leave-active-class="animate__animated animate__backOutRight">
      <h4 v-if="isShow" style="border:1px solid #ddd;width: 100px">Hello World</h4>
    </transition>
    <!-- <transition name="why" appear>
      <h4 v-if="isShow" style="border:1px solid #ddd;width: 100px">Hello World</h4>
    </transition> -->
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
  /* .why-enter-active {
    animation: backInLeft 1s ease-in;
  }
  .why-leave-active {
    animation: backOutRight 1s ease-in;
  } */
</style>