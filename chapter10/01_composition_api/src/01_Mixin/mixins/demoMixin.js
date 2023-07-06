// 定义个混合对象
export const demoMixin = {
  data() {
    return {
      message: "Hello DemoMixin"
    }
  },
  methods: {
    foo() {
      console.log("demo mixin foo");
    }
  },
  created() {
    console.log("执行了demo mixin created");
  }
}