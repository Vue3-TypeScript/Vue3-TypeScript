<template>
  <div class="home-content">
    HomeContent
    <p>{{ name }} - {{ age }} - {{ friends }}-{{ friendLength }}</p>
  </div>
</template>

<script>
export default {
  inject: ["name", "age", "friends", "friendLength"],
  created() {
    console.log(this.friendLength);
  },
};
</script>

<style scoped>
.home-content {
  border: 1px solid #999;
  margin: 5px 8px;
}
</style>
