<template>
  <div class="home">
    Home
    <home-content></home-content>
  </div>
</template>

<script>
  import HomeContent from './HomeContent.vue';

  export default {
    components: {
      HomeContent
    }
  }
</script>

<style scoped>
.home{
  border: 1px solid #999;
  margin: 10px;
}
</style>