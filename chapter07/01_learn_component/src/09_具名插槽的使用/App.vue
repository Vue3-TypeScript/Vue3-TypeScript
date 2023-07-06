<template>
  <div class="app">
    <nav-bar :name="name">
      <template #[name]>
        <button class="btn">左边的按钮</button>
      </template>
      <!-- <template v-slot:left>
        <button class="btn">左边的按钮</button>
      </template> -->
      <template #center>
        <h4 class="title">我是标题</h4>
      </template>
      <template #right>
        <i class="icon">右边的i元素</i>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from './NavBar.vue';

  export default {
    components: {
      NavBar
    },
    data() {
      return {
        name: 'coderwhy'
      }
    }
  }
</script>

<style scoped>
.btn,
.title,
.icon{
  margin: 0;
  padding: 0;
  display: inline-block;
  line-height: 44px;
  height: 100%;
}
</style>