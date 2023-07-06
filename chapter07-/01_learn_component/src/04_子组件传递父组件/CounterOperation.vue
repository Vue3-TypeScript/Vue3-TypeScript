// CounterOperation.vue
<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>

    <input type="text" v-model.number="num">
    <button @click="incrementN">+n</button>
  </div>
</template>

<script>
  export default {
    // 1.emit的数组写法
    // emits: ["add", "sub", "addN"], // 定义该组件可以向其父组件触发的add, sub, addN事件
    // 2.对象写法的目的是为了进行参数的验证
    emits: {
      add: null,
      sub: null,
      addN: (num, name, age) => {
        if (num > 10) {
          // 如果num大于10验证通过
          return true
        }
        // 如果num小于等于10，返回false，控制台会提示参数验证不通的警告，但不影响程序的运行
        return false;
      }
    },
    data() {
      return {
        num: 0 // 存储input输入的number
      }
    },
    methods: {
      increment() {
        this.$emit("add"); // 触发add事件  
      },
      decrement() {
        this.$emit("sub"); // 触发sub事件  
      },
      incrementN() {
        this.$emit('addN', this.num, "why", 18);  // 触发addN事件，并传递参数
      }
    }
  }
</script>
<style scoped>
button,
input{
  margin: 0px 2px;
}
</style>