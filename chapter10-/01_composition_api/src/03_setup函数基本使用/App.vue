<template>
  <div class="app" style="border:1px solid #ddd;margin:4px">
    App组件
    <!-- <setup-props message="学习setup函数的参数"></setup-props> -->
    <!-- <setup-context message="学习setup context参数" id="code" class="why"></setup-context> -->
    <setup-return></setup-return>
  </div>
</template>

<script>
  import SetupProps from './SetupProps.vue';
  import SetupContext from './SetupContext.vue';
  import SetupReturn from './SetupReturn.vue';
  export default {
    components: {
      SetupProps,
      SetupContext,
      SetupReturn
    }
  }
</script>