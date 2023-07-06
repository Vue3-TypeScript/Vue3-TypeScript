<template>
  <div class="about">
    About
    <button @click="btnClick">单击按钮 触发事件</button>
  </div>
</template>

<script>
  import emitter from './utils/eventbus';

  export default {
    methods: {
      btnClick() {
        console.log("1.About页面的：按钮单击->触发全局why事件");
        emitter.emit("why", {name: "why", age: 18});
        console.log("2.About页面的：按钮单击->触发全局kobe事件");
        emitter.emit("kobe", {name: "kobe", age: 30});
      }
    }
  }
</script>

<style scoped>
.about{
  border: 1px solid #999;
  margin: 10px;
}
button{
  margin: 10px;
}
</style>