<template>
  <div class="app" style="border:1px solid #ddd;margin:4px">
    App组件
    <!-- <RenderExample></RenderExample> -->
    <!-- <RenderCounter></RenderCounter> -->
    <!-- <RenderSetupCounter></RenderSetupCounter> -->
    <RenderSlot></RenderSlot>
  </div>
</template>

<script setup>
  import RenderExample from './RenderExample.vue';
  import RenderCounter from './RenderCounter.vue';
  import RenderSetupCounter from './RenderSetupCounter.vue';
  import RenderSlot from './RenderSlot.vue';
</script>