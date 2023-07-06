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
      const info = reactive({name: "coderwhy", age: 18});

      // 1.侦听watch时,传入一个getter函数
      // watch(() => info.name, (newValue, oldValue) => {
      //   console.log("newValue:", newValue, "oldValue:", oldValue);
      // })

      // 2.传入一个可响应式对象: reactive对象
      // 情况一: reactive对象获取到的newValue和oldValue本身都是reactive对象
      // watch(info, (newValue, oldValue) => {
      //   console.log("newValue:", newValue, "oldValue:", oldValue);
      //   // 点击修改数据后输出的结果：newValue: Proxy {name: 'kobe', age: 18} oldValue: Proxy {name: 'kobe', age: 18}
      // })

      // 如果希望newValue和oldValue是一个普通的对象
      // watch(() => {
      //   return {...info}
      // }, (newValue, oldValue) => {
      //   console.log("newValue:", newValue, "oldValue:", oldValue);
      // })

      // 情况二: ref对象获取newValue和oldValue是value值的本身
      const name = ref("coderwhy");
      watch(name, (newValue, oldValue) => {
        console.log("newValue:", newValue, "oldValue:", oldValue);
      })

      const changeData = () => {
        // info.name = "kobe";
        name.value = "kobe";
      }

      return {
        changeData,
        info,
        name
      }
    }
  }
</script>