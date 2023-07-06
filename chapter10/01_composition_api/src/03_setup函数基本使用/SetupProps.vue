<template>
  <div class="setup-props" style="border:1px solid #ddd;margin:10px">
    SetupProps组件
    <h4>{{message}}</h4>
  </div>
</template>

<script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    },
    /**参数一: props, 父组件传递过来属性*/
    setup(props) {
      console.log(props)  
      console.log(props.message)
    }
  }
</script>