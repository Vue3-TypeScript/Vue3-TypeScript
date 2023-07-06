<template>
  <div class="show-message">
    <!-- <h4 v-bind="$attrs">{{title}}</h4> -->
    <h4>{{title}}</h4>
    <div>{{content}}</div>
    <div v-if="messageInfo">{{messageInfo}}</div>
  </div>
</template>

<script>
  export default {
    // 1.props 是数组 
    // props: ['title', 'content']
    // inheritAttrs: false,
    // 2.props 是对象
    props: {
      title: String,
      content: {
        type: String,
        required: true,
        default: "我是内容的默认值"
      },
      'message-info': {
        type: String
      }
      // counter: {
      //   type: Number
      // },
      // info: {
      //   type: Object,
      //   default() {
      //     return {name: "why"}
      //   }
      // },

    }
  }
</script>

<style scoped>
.show-message{
  border: 1px solid #999;
  margin-bottom: 4px;
}
</style>