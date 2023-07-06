<template>
  <div class="home" style="border:1px solid #ddd;margin:10px">
    <!-- 下面使用了BasePage组件定义的数据 -->
    <h4>{{title}}</h4>
    <button @click="bar">单击调用BasePage组件定义的bar方法</button>
  </div>
</template>

<script>
  import BasePage from './BasePage.vue';
  export default {
    // 复用BasePage组件script标签中定义的选项
    extends: BasePage
  }
</script>

<style scoped>

</style>