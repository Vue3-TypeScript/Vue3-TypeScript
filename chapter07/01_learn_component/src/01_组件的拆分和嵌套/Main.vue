<template>
  <div class="main">
    <main-banner></main-banner>
    <main-product-list></main-product-list>
  </div>
</template>

<script>
  import MainBanner from './MainBanner.vue';
  import MainProductList from './MainProductList.vue';

  export default {
    components: {
      MainBanner,
      MainProductList
    },
  };
</script>

<style scoped>
.main{
  border: 1px solid #999;
  margin-bottom: 4px;
}
</style>
