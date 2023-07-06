<script>
  import { ref, h } from 'vue';
  export default {
    setup() {
      const counter = ref(0); // 定义变量
      // setup函数返回一个render函数, 该函数可以直接使用在同一作用域中声明的响应式状态
      return () => {
        return h("div", {class: "app"}, [
          h("h2", null, `当前计数: ${counter.value}`),
          h("button", {
            onClick: () => counter.value++
          }, "+1"),
          h("button", {
            onClick: () => counter.value--
          }, "-1"),
        ])
      }
    }
  }
</script>