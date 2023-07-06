<template>
  <div class="navbar">
    <h4>NavBar</h4>
    <button @click="getParentAndRoot">获取父组件和根组件实例对象</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "我是NavBar中message变量"
      }
    },
    methods: {
      sayHello() {
        console.log("sayHello:Hello NavBar");
      },
      getParentAndRoot() {
        console.log('$parent=',this.$parent);
        console.log('访问父组件(App)中的names变量=',this.$parent.names);
        console.log('$root=',this.$root);
      }
    }
  }
</script>

<style scoped>
.navbar{
  border: 1px solid #999;
  margin: 8px 0px;
}
button{
  margin: 5px;
}
</style>