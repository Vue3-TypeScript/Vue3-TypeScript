<template>
  <div style="border:1px solid #ddd;margin:8px">
    <!-- 2.使用 v-focus 指令 -->
    <input type="text" v-focus>
  </div>
</template>
<script>
  export default {
    // directives: { // 1.自定义局部指令 v-focus
    //   focus: {
    //     mounted(el, bindings, vnode, preVnode) {
    //       console.log("focus mounted");
    //       el.focus();
    //     }
    //   }
    // }
  }
</script>