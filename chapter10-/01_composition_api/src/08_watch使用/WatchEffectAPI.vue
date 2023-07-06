<template>
  <div>
    <h4>{{age}}</h4>
    <button @click="changeAge">修改age</button>
  </div>
</template>

<script>
  import { ref, watchEffect } from 'vue';
  export default {
    setup() {
      const age = ref(18);
      // watchEffect: 1.自动收集响应式的依赖 2.默认会先执行一次 3.获取不到新值和旧值
      const stop = watchEffect(() => {
        console.log("age:", age.value); // 监听age的改变
      });

      const changeAge = () => {
          age.value++
          if (age.value > 20) {
            stop(); // 停止监听age的变化
          }
      }
      return {
        age,
        changeAge
      }
    }
  }
</script>