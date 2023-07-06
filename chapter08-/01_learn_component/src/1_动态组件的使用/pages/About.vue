<template>
  <div>
    About组件
    <button @click="counter++">点击递增：{{counter}}</button>
  </div>
</template>

<script>
  export default {
    name: "about",  
    data() {
      return {
        counter: 0,
      }
    },
    created() {
      console.log("about created");
    },
    unmounted() {
      console.log("about unmounted");
    },
    // 下面两个是 缓存组件的生命周期  
    activated() {
      console.log("about activated");
    },
    deactivated() {
      console.log("about deactivated");
    }
  }
</script>

<style scoped>

</style>