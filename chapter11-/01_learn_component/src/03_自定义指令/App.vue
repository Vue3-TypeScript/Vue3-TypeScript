<template>
  <div class="app" style="border:1px solid #ddd;margin:4px">
    App组件
    <!-- <DefaultImp></DefaultImp> -->
    <!-- <CustomLocalDirective></CustomLocalDirective> -->
    <!-- <DirectiveLifeCycle></DirectiveLifeCycle> -->
    <!-- <DirectiveParamAndModifier></DirectiveParamAndModifier> -->
    <h4 v-format-time="'YYYY/MM/DD'">{{timestamp}}</h4>

  </div>
</template>

<script setup>
//   import DefaultImp from './DefaultImp.vue';
//   import CustomLocalDirective from './CustomLocalDirective.vue';
  // import DirectiveLifeCycle from './DirectiveLifeCycle.vue';
  // import DirectiveParamAndModifier from './DirectiveParamAndModifier.vue';
  const timestamp = 1645710167;
</script>