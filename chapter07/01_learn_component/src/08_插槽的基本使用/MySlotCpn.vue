<template>
  <div class="my-slot-cpn">
    <div class="header">header</div>
    <!-- 中间内容：使用slot站位，因为内容不确定 -->
    <slot>
      插槽的默认内容，只会在没有提供插入的内容时，才会显示
    </slot>
    <!-- <slot name="default"></slot> -->
    <div class="footer">footer</div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.my-slot-cpn{
  border: 1px solid #999;
  margin: 10px 5px;
}
</style>