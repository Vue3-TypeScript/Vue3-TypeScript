<script>
  import { h } from 'vue';
  import HelloWorld from './HelloWorld.vue'; // 1.导入HelloWorld组件
  export default {
    // 等价于：
    // <div>
    //   <HelloWorld>
    //      <template v-slot:default="slotProps">
    //          <span>传入HelloWorld插槽中的内容。插槽props的name: {{slotProps.name}}</span>
    //      </template>
    //   </HelloWorld>  
    // </div>
    render() {
      return h("div", {class:"render-slot"}, [
        'RenderSlot组件',  
        // 2.使用HelloWorld组件   
        h(HelloWorld, null, {
          // 3.使用HelloWorld组件定义的默认插槽。props是：插槽props
          default: props => h("span", null, 
                  `传入HelloWorld插槽中的内容。插槽props的name：${props.name}`)
        })
      ])
    }
  }
</script>
<style scoped>
.render-slot{
  border:1px solid #ddd;
  margin:8px;
}
</style>