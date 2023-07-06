<template>
  <div>
    <h4>当前计数: {{counter}}</h4>
    <counter-operation @add="addOne" 
                       @sub="subOne"
                       @addN="addNNum"/>
  </div>
</template>

<script>
  import CounterOperation from './CounterOperation.vue';

  export default {
    components: {
      CounterOperation
    },
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      addOne() {
        this.counter++
      },
      subOne() {
        this.counter--
      },
      addNNum(num, name, age) {
        console.log(name, age);
        this.counter += num;
      }
    }
  }
</script>

<style scoped>

</style>