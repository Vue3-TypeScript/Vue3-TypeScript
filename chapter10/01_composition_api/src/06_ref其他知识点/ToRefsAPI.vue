<template>
  <div>
    <h4>{{name}}-{{age}}</h4>
    <button @click="changeAge">修改age++</button>
  </div>
</template>

<script>
  import { reactive, toRefs, toRef } from 'vue';

  export default {
    setup() {
      const info = reactive({name: "why", age: 18});
      //  1.ES6语法解构reactive返回的响应式对象
      // let { name, age } = info;

      // 1.toRefs: 将reactive对象中的所有属性都转成ref, 建立链接
      // let { name, age } = toRefs(info);

      // 2.toRef: 对其中一个属性进行转换ref, 建立链接
      let name = toRef(info, "name"); // 仅对name属性进行转换为ref对象
      let age = toRef(info, "age");// 仅对age属性进行转换为ref对象

      const changeAge = () => {
        info.age++; // 或者 age.value++ 
        console.log(info.age)
      }

      return {
        name,
        age,
        changeAge
      }
    }
  }
</script>