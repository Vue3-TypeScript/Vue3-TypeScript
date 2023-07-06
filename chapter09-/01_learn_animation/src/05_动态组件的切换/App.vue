<template>
  <div class="app">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- appear 首次渲染时有过度动画效果 -->
    <transition name="why" mode="out-in" appear>
      <component :is="isShow ? 'home': 'about'"></component>
    </transition>
  </div>
</template>

<script>
  import Home from './pages/Home.vue';
  import About from './pages/About.vue';

  export default {
    components: {
      Home,
      About
    },
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