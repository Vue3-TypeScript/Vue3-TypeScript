<template>
  <div class="app" style="border:1px solid #ddd;margin:4px">
    App组件
    <!-- <teleport to="body">
      <h4>h4挂载到body上，而不是id=app的div上</h4>
      <HelloWorld></HelloWorld>
    </teleport> -->
    <teleport to="body">
      <h4>h4挂载到body上，而不是id=app的div上</h4>
    </teleport>
    <teleport to="body">
      <HelloWorld></HelloWorld>
    </teleport>
  </div>
</template>
<script setup>
  import HelloWorld from './HelloWorld.vue';
</script>
