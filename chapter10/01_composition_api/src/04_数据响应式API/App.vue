<template>
  <div class="app" style="border:1px solid #ddd;margin:4px">
    App组件
    <!-- <ReactiveAPI></ReactiveAPI> -->
    <!-- <RefAPI></RefAPI> -->
    <RefAPIOther></RefAPIOther>
  </div>
</template>

<script>
  import ReactiveAPI from './ReactiveAPI.vue';
  import RefAPI from './RefAPI.vue';
  import RefAPIOther from './RefAPIOther.vue';
  export default {
    components: {
      ReactiveAPI,
      RefAPI,
      RefAPIOther
    }
  }
</script>