<template>
  <div class="app">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 1.使用transition内置组件包裹h4元素,并通过name属性指定过渡动画的类名为why -->
    <transition name="why">
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
// 2.CSS animation动画的实现
<style scoped>
  /* h4元素在整个进入过渡的阶段中应用的样式 */
  .why-enter-active {
    animation: bounce 1s ease;
  }
  /* h4元素在整个离开过渡的阶段中应用的样式 */
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