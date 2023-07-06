<template>
  <div style="border:1px solid #ddd;margin:8px">
    <div>DefinePropsEmitAPI组件</div>
    <p>{{message}}</p>
    <button @click="emitEvent">发射emit事件</button>
  </div>
</template>

<script setup>
  // 1.定义props属性（等同于Options API的props选项）  
  const props = defineProps({
    // message: String,  
    message: {
      type: String,
      default: "默认的message"
    }
  })
  // 2.注册需要触发的emit事件
  const emit = defineEmits(["increment"]);
  // 3.点击 发射emit事件 按钮的回调
  const emitEvent = () => {
    console.log('子组件拿到父组件传递进来的message: ' + props.message)  
    emit('increment', 1) // 触发 increment 事件，传递参数：1
  }
</script>