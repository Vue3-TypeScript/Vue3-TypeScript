<template>
  <div class="app" style="border:1px solid #ddd;margin:4px">
    App组件
    <home/>
  </div>
</template>

<script>
  import Home from './Home.vue';
  export default {
    components: {
      Home
    }
  }
</script>

<style scoped>

</style>