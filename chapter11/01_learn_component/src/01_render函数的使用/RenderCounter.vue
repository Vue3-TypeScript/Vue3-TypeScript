<script>
  import { h } from 'vue'; // 导入h函数
  export default {
    data() {
      return {counter: 0}
    },
    render() {
      // div标签中包含:一个h4元素和2个button元素  
      return h("div", {class: "render-counter"}, [
        h("h4", null, `当前计数: ${this.counter}`),
        h("button", {
          onClick: () => this.counter++
        }, "+1"),
        h("button", {
          onClick: () => this.counter--
        }, "-1"),
      ])
    }
  }
</script>