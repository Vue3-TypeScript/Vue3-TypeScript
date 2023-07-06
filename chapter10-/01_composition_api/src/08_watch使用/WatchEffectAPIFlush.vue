<template>
  <div>
    <h4 ref="titleRef">哈哈哈</h4>
  </div>
</template>

<script>
  import { ref, watchEffect } from 'vue';

  export default {
    setup() {
      // 1.定义一个titleRef来拿到h4元素的Dom对象（组件对象也是一样）
      const titleRef = ref(null);
      // 2.h4元素挂载完成之后会自动赋值到titleRef变量上，这里监听titleRef变量被赋值
      watchEffect(() => {
        console.log(titleRef.value); // 3.打印h4元素的Dom对象
      },{
        flush: "post" // 支持 pre, post, sync
      })
      return { titleRef }
    }
  }
</script>