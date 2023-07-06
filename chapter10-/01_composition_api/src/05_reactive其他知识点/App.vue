<template>
  <div class="app" style="border:1px solid #ddd;margin:4px">
    App组件
    <ReadOnlyAPI></ReadOnlyAPI>
  </div>
</template>

<script>
  import ReadOnlyAPI from './ReadOnlyAPI.vue';
  export default {
    components: {
      ReadOnlyAPI
    }
  }
</script>