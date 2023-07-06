<template>
  <h4>App Title</h4>
   <div class="text">app text</div>
  <hello-world></hello-world>
  <StyleVBindExplame></StyleVBindExplame>
  <div class="text">app text</div>
</template>

<script>
  import HelloWorld from './HelloWorld.vue';
  import StyleVBindExplame from './StyleVBindExplame.vue';
  export default {
    components: {
      HelloWorld,
      StyleVBindExplame
    }
  }
</script>

<style scoped>
 h4{
   text-decoration: underline;
 }
 /* 深度选择器 */
 :deep(.msg){
   text-decoration: underline;
 }

</style>