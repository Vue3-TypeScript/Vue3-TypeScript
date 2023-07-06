<template>
  <div class="ref-api" style="border:1px solid #ddd;margin:10px">
    RefAPI组件
    <!-- 当我们在template模板中使用ref对象, 它会自动进行解包,不需要通过value属性访问 -->
    <h4>当前计数: {{counter}}</h4>
    <button @click="increment">+1</button>
  </div>
</template>
<script>
  import { ref } from 'vue'; // 1.导入响应式api
  export default {
    setup() {
      // 2.定义响应式数据（ref函数接收基本数据类型的参数）
      // counter是一个ref的可响应式的引用对象，可通过value属性获取和修改值 
      const counter = ref(100)
      // console.log(counter)
      const increment = () => {
        counter.value++; // 3.局部函数修改响应式数据（不会自动解包）
        console.log(counter.value); // 获取响应式数据
      }
      return {
        counter, // 4.返回响应数据
        increment // 5.返回定义的方法(等同于在methods中定义方法)
      }
    }
  }
</script>