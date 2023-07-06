<template>
  <div class="app" style="border:1px solid #ddd;margin:4px">
    App组件
    <!-- <ToRefsAPI></ToRefsAPI> -->
    <CustomRefAPI></CustomRefAPI>
  </div>
</template>

<script>
  import ToRefsAPI from './ToRefsAPI.vue';
  import CustomRefAPI from './CustomRefAPI.vue';
  export default {
    components: {
      ToRefsAPI,
      CustomRefAPI
    }
  }
</script>