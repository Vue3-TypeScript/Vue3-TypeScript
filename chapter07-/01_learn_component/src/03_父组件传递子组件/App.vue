// App.vue
<template>
  <div class="app">
    <!-- 1.直接传递字符串 -->
    <show-message title="我是标题" content="我是内容"></show-message>
    <!-- 2.绑定字符串类型的变量 -->
    <show-message :title="title" :content="content"></show-message>
    <!-- 3.绑定对象字符串类型的属性 -->
    <show-message :title="message.title" :content="message.content"></show-message>
    <!-- 4.直接绑定一个对象，会自动将对象的每个属性拆出来逐一绑定 -->
    <show-message v-bind="message"></show-message>

    <!-- 5.直接传递字符串 -->
    <show-message title="我是标题" content="我是内容" messageInfo="我是messageInfo字符串"></show-message>
    <show-message title="我是标题" content="我是内容" message-info="我是message-info字符串"></show-message>

    <!-- 6.传递非Props属性 -->
    <no-prop-attribute id="coder" class="why" name="coderwhy"></no-prop-attribute>

  </div>
</template>

<script>
  import ShowMessage from './ShowMessage.vue';
  import NoPropAttribute from './NoPropAttribute.vue';

  export default {
    components: {
      ShowMessage,
      NoPropAttribute
    },
    data() {
      return {
        title: "我是标题title",
        content: "我是内容content",
        message: {
          title: "我是标题message.title",
          content: "我是内容message.content"
        }
      }
    }
  }
</script>

<style scoped>

</style>