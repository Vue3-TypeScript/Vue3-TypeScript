<template>
  <!-- 2.给指令传递参数，修饰符和值 -->
  <button v-why:info.aaa.bbb="{name: 'coderwhy', age: 18}">指令的参数和修饰符</button>
</template>
<script>
  export default {
    directives: {
      why: { // 1.自定义 v-why 局部指令
        created(el, bindings, vnode, preVnode) {
          console.log(bindings);
        }
      }
    }
  }
</script>