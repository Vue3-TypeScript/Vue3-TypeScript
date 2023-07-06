<template>
  <div>
    <button v-for="item in tabs" :key="item"
            @click="itemClick(item)"
            :class="{active: currentTab === item}">
      {{item}}
    </button>

    <!-- 1.v-if的判断实现 -->
    <!-- <template v-if="currentTab === 'home'">
      <home></home>
    </template>
    <template v-else-if="currentTab === 'about'">
      <about></about>
    </template>
    <template v-else>
      <category></category>
    </template> -->

    <!-- 2.动态组件( 给is属性动态绑定组件的名称。例如：is="home"，代表绑定的是 <home/> 组件;is="kebab-case"，代表绑定的是 <kebab-case/> 组件 ) -->
    <keep-alive include="home,about">
      <component :is="currentTab"
                 name="coderwhy"
                 :age="18"
                 @pageClick="pageClick">
      </component>
    </keep-alive>
    


  </div>
</template>

<script>
  import Home from './pages/Home.vue';
  import About from './pages/About.vue';
  import Category from './pages/Category.vue';

  export default {
    components: {
      Home,
      About,
      Category
    },
    data() {
      return {
        tabs: ["home", "about", "category"],
        currentTab: "home"
      }
    },
    methods: {
      itemClick(item) {
        this.currentTab = item;
      },
      pageClick(value) {
        console.log(value);
      }
    }
  }
</script>

<style scoped>
  button{
    border: none;
    margin: 10px 5px;
    padding: 7px;
    cursor: pointer;
  }
  .active {
    color: red;
    border-bottom: 2px solid red;
  }
</style>