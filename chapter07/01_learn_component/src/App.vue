<template>
  <!-- 1.页面头部内容 -->
  <div class="header">
    <h4>Header</h4>
    <h4>NavBar</h4>
  </div>
  <!-- 2.页面中间内容 -->
  <div class="main">
    <h4>Banner轮播图内容</h4>
    <ul>
      <li>商品信息1</li>
      <li>商品信息2</li>
      <li>商品信息3</li>
      <li>商品信息4</li>
      <li>商品信息5</li>
    </ul>
  </div>
  <!-- 页面尾部内容 -->
  <div class="footer">
    <h4>Footer</h4>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
.header,
.main,
.footer{
  border: 1px solid #999;
  margin-bottom: 4px;
}
</style>
