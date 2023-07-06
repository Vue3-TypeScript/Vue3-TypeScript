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
      watchEffect((onInvalidate) => {
        const timer = setTimeout(() => {
          console.log("网络请求成功~");
        }, 2000)
        
        onInvalidate(() => {
          // 在这个函数中清除额外的副作用
          clearTimeout(timer);
          console.log("onInvalidate");
        })
        console.log("age:", age.value); // 监听age的改变
      });

      const changeAge = () => age.value++
      return {
        age,
        changeAge
      }
    }
  }
</script>