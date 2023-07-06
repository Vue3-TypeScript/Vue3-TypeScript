<template>
  <div class="app" style="border:1px solid #ddd;margin:4px">
    App组件
    <ComputedAPI></ComputedAPI>
  </div>
</template>

<script>
  import ComputedAPI from './ComputedAPI.vue';
  export default {
    components: {
      ComputedAPI
    }
  }
</script>