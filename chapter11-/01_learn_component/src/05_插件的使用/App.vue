<template>
  <div class="app" style="border:1px solid #ddd;margin:4px">
    App组件
  </div>
</template>
<script>
 import { getCurrentInstance } from "vue";
 export default {
    setup() {
      // 1.在setup函数中访问全局property
      const instance = getCurrentInstance();
      console.log("setup name=", instance.appContext.config.globalProperties.$name);
    },
    mounted() {
      //2.在mounted函数中直接通过this访问全局property
      console.log("mounted name=", this.$name);
    }
 }
</script>
