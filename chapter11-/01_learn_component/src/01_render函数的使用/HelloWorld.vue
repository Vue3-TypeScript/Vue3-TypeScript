<script>
  import { h } from "vue";
  export default {
    render() {
      // 等价于：  
      // <div> 
      //     <h4>HelloWorld组件</h4> 
      //     <slot name="default"> 
      //         <span>我是插槽默认值</span> 
      //     </slot> 
      // </div>
      return h("div", {class: "hello-world"}, [
        h("h4", null, "HelloWorld组件"),
        // 定了一个默认的插槽
        this.$slots.default ? this.$slots.default({name: "coderwhy"}): h("span", null, "我是插槽默认值")
      ])
    }
  }
</script>
<style scoped>
.hello-world{
  border:1px solid #ddd;
  margin:8px;
}
</style>