<template>
  <div class="home">
    <h3>Home Page</h3>
    <router-link class="btn" to="/home/message">消息页</router-link>
    <router-link class="btn" to="/home/shops">商品页</router-link>
    <router-link class="btn" to="/home/comment">评论页</router-link>
    <!-- 路由组件占位（页面占位） -->
    <router-view></router-view>
  </div>
</template>
<style scoped>
.btn{
  margin: 4px;
  padding: 3px 5px;
  text-decoration: none;
  border: 1px dashed #ddd;
}
</style>