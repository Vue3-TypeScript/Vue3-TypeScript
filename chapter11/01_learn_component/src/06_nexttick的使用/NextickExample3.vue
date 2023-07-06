<template>
  <div class="app" style="border:1px solid #ddd;margin:4px">
    <div>计数器：{{counter}}</div>
    <button @click="increment">+1</button>
    <h4 style="width:80px" ref="titleRef">{{message}}</h4>
    <button @click="addMessageContent">添加内容</button>
  </div>
</template>
<script>
  import { ref, nextTick } from "vue";
  export default {
    setup() {
      const message = ref("")
      const titleRef = ref(null)
      const counter = ref(0)
      const addMessageContent = () => {
        message.value += "更新DOM"
        nextTick(() => {
          // 更新DOM之后回调该函数
          console.log('获取到h4元素的高度：', titleRef.value.offsetHeight)
        })
      }
      const increment = () => counter.value++
      return {message,counter,increment,titleRef,addMessageContent}
    }
  }
</script>
