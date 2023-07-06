<template>
  <div>
    <h4 >{{info.name}} - {{name}}</h4>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
  import { ref, reactive, watch } from 'vue';
  export default {
    setup() {
      // 1.定义可响应式的对象
      const info = reactive({name: "coder", age: 18});
      const name = ref("why");
      const age = ref(20);
      // 2.侦听多数据源，参数一是一个数组：数组中可以有getter函数，ref对象，reactive对象
      watch([() => ({...info}), name, age],
           ([newInfo, newName, newAge], [oldInfo, oldName, oldAge]) => {
        console.log(newInfo, newName, newAge);
        console.log(oldInfo, oldName, oldAge);
      })
      const changeData = () => {
        info.name = "kobe";
        name.value = "jack"
      }
      return {
        changeData,
        info,
        name
      }
    }
  }
</script>

<style scoped>

</style>