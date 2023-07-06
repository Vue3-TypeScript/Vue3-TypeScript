<template>
  <div class="setup-return" style="border:1px solid #ddd;margin:10px">
    SetupReturn组件
    <h4>当前计数: {{counter}}</h4>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  export default {
    setup(props, context) {
      // 局部变量
      let counter = 100;
      // 局部函数
      const increment = () => {
        counter++;
        console.log(counter);
      }
      // 返回值（ 返回的属性可以直接在template中使用 ）
      return {
        counter:counter, // 返回一个内部变量
        increment:increment // 返回一个方法/函数
      }
    }
  }
</script>