<template>
  <div class="setup-context" style="border:1px solid #ddd;margin:10px">
    SetupContext组件
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
    /**参数二: context, Vue框架传递过来上下文*/
    setup(props, context) {
      console.log(props.message); // 所有prop的attribute
      // 所有的非prop的attribute
      console.log(context.attrs.id, context.attrs.class);
      console.log(context.slots); // 父组件传递过来的插槽
      console.log(context.emit); // 用来触发事件的emit
    }
    // context 对象支持解构
    // setup(props, { attrs, slots, emit }) {
    //   console.log(props.message);
    //   console.log(attrs.id, attrs.class);
    //   console.log(slots);
    //   console.log(emit);
    // }
  }
</script>