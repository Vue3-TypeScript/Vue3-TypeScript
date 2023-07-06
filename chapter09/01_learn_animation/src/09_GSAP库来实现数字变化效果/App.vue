<template>
  <div class="app">
    <input type="number" v-model="counter">
    <h2>当前计数: {{showNumber.toFixed(0)}}</h2>
  </div>
</template>

<script>
  import gsap from 'gsap';

  export default {
    data() {
      return {
        counter: 1,
        showNumber: 0
      }
    },
    watch: {
      counter(newValue) {
        // 参数一：目标对象（这里是Vue实例）
        // 参数二：给目标对象中showNumber属性添加动画（在1s中showNumber由1过度到input输入的数值）
        gsap.to(this, {duration: 1, showNumber: newValue})
      }
    }
  }
</script>