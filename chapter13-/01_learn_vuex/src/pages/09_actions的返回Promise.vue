<template>
  <div>
    <h4>uuid: {{ $store.state.uuid }}</h4>
  </div>
</template>

<script>
  import { onMounted } from 'vue'
  import { useStore } from 'vuex'

  export default {
    setup() {
      const store = useStore()
      // 页面挂载完成
      onMounted(()=>{
        // 1.分发一个 getUUIDAction，返回一个Promise
        const promise = store.dispatch("getUUIDAction")
        // 2.处理异步的结果
        promise.then((res)=>{
          console.log(res)
        })
      })
      return {  }
    }
  }
</script>