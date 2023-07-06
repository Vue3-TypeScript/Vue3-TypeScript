<template>
  <div @click="divClick">
    Home组件: {{name}} - {{age}}
  </div>
</template>

<script>
  export default {
    name: "home", 
    props: {
      name: { // 动态组件传递过来的 name
        type: String,
        default: ""
      },
      age: {
        type: Number,
        default: 0
      }
    },
    emits: ["pageClick"], // 动态组件监听的pageClick事件
    methods: {
      divClick() {
        this.$emit("pageClick", 'Home组件触发的点击');
      }
    }
  }
</script>

<style scoped>
div{
  cursor: pointer;
}
</style>