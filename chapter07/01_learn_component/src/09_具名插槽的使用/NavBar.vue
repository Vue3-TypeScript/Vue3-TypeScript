<template>
  <div class="nav-bar">
    <div class="left">
      <!-- 动态插槽名，有外部使用者决定 -->
      <slot :name="name"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      name: String
    }
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
  }
  .left, .right, .center {
    height: 44px;
    border: 1px solid #999;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .center {
    flex: 1;
  }
</style>