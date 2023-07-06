<template>
  <div class="child-cpn">
    <!-- 1.h4元素可以访问该组件定义的title属性 -->
    <h4>{{title}}</h4>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: "我是title"
      }
    }
  }
</script>