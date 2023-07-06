<template>
  <div class="async-category">
    <h4>{{message}}</h4>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "AsyncCategory异步组件"
      }
    }
  }
</script>

<style scoped>
.async-category{
  border: 1px solid #999;
  margin: 5px;
}
</style>