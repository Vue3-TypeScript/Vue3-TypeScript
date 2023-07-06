<template>
  <div style="border:1px solid #ddd;margin:8px">
    <input type="text" ref="input">
  </div>
</template>
<script>
  import { ref, onMounted } from "vue";
  export default {
    setup() {
      const input = ref(null);
      onMounted(() => input.value.focus()) // 挂载完后自动获取焦点
      return {input}
    }
  }
</script>