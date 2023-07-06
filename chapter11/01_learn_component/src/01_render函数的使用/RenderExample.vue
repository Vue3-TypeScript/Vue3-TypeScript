<script>
  import { h } from 'vue'; // 导入h函数
  export default { 
    render() { // render函数
      return h("h4", {class: "title"}, "RenderExample组件")
    }
  }
</script>
<style scoped>
 .title{ text-decoration : underline;}
</style>