<template>
  <div>
    <!--1.计数器案例  -->
    <div>当前计数: {{counter}}</div>
    <div>当前计数*2: {{doubleCounter}}</div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
  export default {
     data() {
       return{
         // 1.2计数器案例的逻辑代码   
         counter:100
       }
     },
     computed: {
       // 1.3计数器案例的逻辑代码 
       doubleCounter() {
          return this.counter * 2 
       }
     },
     methods: {
        // 1.4计数器案例的逻辑代码
        increment() {
           this.counter++;
        },
        decrement() {
           this.counter--;
        }
     }
  }
</script>
