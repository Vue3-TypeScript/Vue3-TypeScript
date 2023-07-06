<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="foo">单击调用demoMixin定义的foo方法</button>
  </div>
</template>

<script>
  import { demoMixin } from './mixins/demoMixin';
  export default {
    mixins: [demoMixin],
    data() {
      return {
        // 1.message变量和demoMixin对象中定义的message冲突了。那么会使用该组件的message  
        message: "Hello App",
        title: "Hello World"
      }
    },
    methods: {
      // 2.foo 方法和demoMixin对象中定义的foo冲突了。那么使用该组件的foo方法
      foo() {
        console.log("app foo");
      },
      bar() {
        console.log("bar function");
      }
    },
    computed: {

    },
    watch: {

    },
    // 3.生命周期的钩子函数如何和混合中的重复了。那么会被合并到数组中，都会被调用。
    created() {
      console.log("App created 执行");
    }
  }
</script>

<style scoped>

</style>