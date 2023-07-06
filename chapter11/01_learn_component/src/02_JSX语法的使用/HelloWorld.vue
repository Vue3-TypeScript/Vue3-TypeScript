<script>
  export default {
    render() {
      return (
        <div style="border:1px solid #ddd;margin:8px">
          <div>HelloWorld组件</div>
          {/**这里编写的是注释：定义default插槽*/}
          {this.$slots.default ? this.$slots.default(): <span>插槽默认内容</span>}
        </div>
      )
    }
  }
</script>