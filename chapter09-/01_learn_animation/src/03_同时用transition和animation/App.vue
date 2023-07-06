<template>
  <div class="app">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition 
      name="why" 
      type="transition" 
      :duration="3000"
    >
      <h4 v-if="isShow" style="border:1px solid #ddd;width: 100px">Hello World</h4>
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
  /* 进入到和离开前的状态和默认状态一样，所以可省略 */
  /*
  .why-enter-to, 
  .why-leave-from {
    opacity: 1;
  }
  */
  .why-enter-active,
  .why-leave-active {
    transition: opacity 1s ease;
  }

  /* 上面是transition过度动画，下面是animation动画 */
  .why-enter-active {
    animation: bounce 1s ease;
  }
  .why-leave-active {
    animation: bounce 1s ease reverse;
  }
  @keyframes bounce {
    0% {
      transform: scale(0)
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>