<template>
  <div style="border:1px solid #ddd;margin:8px">
      <button v-why v-if="counter < 2" @click="increment">当前计数: {{counter}}</button>
  </div>
</template>
<script>
  import { ref } from "vue";
  export default {
    directives: {
      why: { // 1.自定义 v-why 局部指令
        created() {
          console.log("dereactive focus created");
        },
        beforeMount() {
          console.log("dereactive focus beforeMount");
        },
        mounted() {
          console.log("dereactive focus mounted");
        },
        beforeUpdate() {
          console.log("dereactive focus beforeUpdate");
        },
        updated() {
          console.log("dereactive focus updated");
        },
        beforeUnmount() {
          console.log("dereactive focus beforeUnmount");
        },
        unmounted() {
          console.log("dereactive focus unmounted");
        }
      }
    },
    setup() {
      const counter = ref(0);
      const increment = () => counter.value++;
      return { counter, increment }
    }
  }
</script>