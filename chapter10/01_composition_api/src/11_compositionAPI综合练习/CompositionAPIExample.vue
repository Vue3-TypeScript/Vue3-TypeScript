<template>
  <div>
    <!-- 1.计数器案例 -->
    <div>当前计数: {{counter}}</div>
    <div>当前计数*2: {{doubleCounter}}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <!-- 3.显示页面滚动位置 -->
    <p style="width: 3000px;height: 5000px;">
      width:3000px  height:5000px的，模拟页面滚动
    </p>
    <div style="position: fixed;top:20px;right:20px">
      <div class="scroll-x">scrollX: {{scrollX}}</div>
      <div class="scroll-y">scrollY: {{scrollY}}</div>
    </div>

  </div>
</template>

<script>
  import useCounter from './hooks/useCounter'
  import useTitle from './hooks/useTitle'
  import useScrollPosition from './hooks/useScrollPosition'
  export default {
    setup() {
      // 1.计数器案例的代码逻辑抽取到useCounter hook 中了
      const {counter, doubleCounter, increment, decrement} = useCounter()
      // 2.修改网页的标题案例
      const titleRef = useTitle("coder");
      setTimeout(() => {
        // 3秒后将标题由coder改为why  
        titleRef.value = "why"
      }, 3000);
      // 3.监听页面滚动位置
      const { scrollX, scrollY } = useScrollPosition();
      return {counter, doubleCounter, increment, decrement, scrollX, scrollY}
    }
  }
</script>