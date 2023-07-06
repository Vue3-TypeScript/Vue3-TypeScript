<template>
  <div class="app">
    App
    <home></home>
    <button @click="addFriend">addFriend</button>
  </div>
</template>

<script>
import Home from "./Home.vue";
import { computed } from "vue"; // 导入了Vue3计算属性的Composition API(暂时没学到来)

export default {
  components: {
    Home,
  },
  provide() {
    return {
      name: "why",
      age: 18,
      friends: this.friends, // 绑定了data中的friends变量来提供响应式数据
      // 该计算属性API返回的是:ref响应式对象。
      friendLength: computed(() => this.friends.length),
    };
  },
  data() {
    return {
      friends: ["jack", "rose"],
    };
  },
  methods: {
    addFriend() {
      this.friends.push("tony");
      console.log(this.friends);
    },
  },
};
</script>

<style scoped>
.app {
  border: 1px solid #999;
  margin: 4px;
}
</style>
