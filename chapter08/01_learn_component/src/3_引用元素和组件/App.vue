<template>
  <div class="app">
    <!-- 1.ref绑定到一个元素上 -->
    <h4 ref="title">App中的h4元素</h4>
    <!-- 2.ref绑定到一个组件实例上 -->
    <nav-bar ref="navBar"></nav-bar>

    <button @click="btnClick">获取h4元素对象和Navbar组件实例</button>

  </div>
</template>

<script>
  import NavBar from './NavBar.vue';

  export default {
    components: {
      NavBar
    },
    data() {
      return {
        names: ["coder", "why"]
      }
    },
    methods: {
      btnClick() {
        console.log('h4元素对象=',this.$refs.title);

        console.log('Navbar组件实例', this.$refs.navBar);
        console.log('访问Navbar组件实例的message变量：', this.$refs.navBar.message);
        // 调用Navbar组件实例的sayHello方法
        this.$refs.navBar.sayHello();
        // $el：获取Navbar组件实例的DOM元素对象
        console.log(this.$refs.navBar.$el);
      }
    }
  }
</script>

<style scoped>
.app{
  border: 1px solid #999;
  margin: 5px;
  padding: 8px;
}

</style>