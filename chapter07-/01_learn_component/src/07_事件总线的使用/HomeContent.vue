<template>
  <div class="home-content">
    HomeContent
  </div>
</template>

<script>
  import emitter from './utils/eventbus';

  export default {
    created() {
      // 1.监听全局的why事件
      emitter.on("why", (info) => {
        console.log("why:", info);
      });
      // 2.监听全局的kobe事件
      emitter.on("kobe", (info) => {
        console.log("kobe:", info);
      });
      // 3.监听all事件
      emitter.on("*", (type, info) => {
        console.log("* listener:", type, info);
      })
    }
  }
</script>

<style scoped>
.home-content{
  border: 1px solid #999;
  margin: 10px;
}
</style>