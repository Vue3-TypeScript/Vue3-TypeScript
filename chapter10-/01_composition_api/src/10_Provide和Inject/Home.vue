<template>
  <div style="border:1px solid #ddd;margin:8px">
    Home组件
    <div>{{name}} - {{age}}</div>
    <div>{{counter}}</div>
    <button @click="homeIncrement">Home组件+1</button>
  </div>
</template>

<script>
  import { inject } from 'vue';

  export default {
    setup() {
      const name = inject("name");
      const age = inject("age");
      const counter = inject("counter");

      const homeIncrement = () => {
          counter.value++
      }

      return {
        name,
        age,
        counter,
        homeIncrement
      }
    }
  }
</script>