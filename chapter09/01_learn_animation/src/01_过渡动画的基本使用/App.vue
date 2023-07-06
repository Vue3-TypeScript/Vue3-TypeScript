<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 1.使用transition内置组件包裹需要执行动画的元素,并通过name属性指定过渡动画类名为：why -->
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

// 2.实现h4元素的过渡动画
<style scoped>
  /* h4元素进入之前和离开之后应用的样式 */
  .why-enter-from,
  .why-leave-to {
    opacity: 0;
  }
   /* h4元素进入到和开始离开应用的样式 */
  .why-enter-to, 
  .why-leave-from {
    opacity: 1;
  }
  /* h4元素在整个进入/离开过渡的阶段中应用的样式 */
  .why-enter-active,
  .why-leave-active {
    transition: opacity 2s ease;
  }
</style>