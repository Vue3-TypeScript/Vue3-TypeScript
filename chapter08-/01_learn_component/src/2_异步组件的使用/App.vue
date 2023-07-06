<template>
  <div class="app">
    App组件
    <home></home>
    <!-- <async-category></async-category> -->
    <suspense>
      <template #default>
        <async-category></async-category>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </suspense>
  </div>
</template>

<script>
  // import {sum } from './utils/math.js'
  // console.log(sum(10,20))
  
  // 使用import函数导入math.js模块(导包时可以省略扩展名)。import函数的返回值是一个Pormise对象
  // import("./utils/math").then(res => {
  //   console.log(res.sum(20, 30));
  // });
  
  import { defineAsyncComponent } from 'vue';
  import Home from './Home.vue';
  import Loading from './Loading.vue';
  // 1.异步组件（目的是分包处理，实现异步加载组件）
  const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory.vue"))
 
  // 2.异步组件( defineAsyncComponent接收对象类型参数 ) 
  // const AsyncCategory = defineAsyncComponent({
  //   loader: () => import("./AsyncCategory.vue"),
  //   loadingComponent: Loading,
  //   // errorComponent,
  //   // 在显示loadingComponent组件之前, 等待多长时间
  //   delay: 2000,
  //   suspensible: false, // false 代表异步组件可以退出 Suspense 控制，并始终控制自己的加载状态。
  //   /**
  //    * err: 错误信息,
  //    * retry: 函数, 调用retry尝试重新加载
  //    * attempts: 记录尝试的次数
  //    */
  //   onError: function(err, retry, attempts) {
  //   }
  // })

  export default {
    components: {
      Home,
      AsyncCategory,
      Loading
    }
  }
</script>

<style scoped>
.app{
  border: 1px solid #999;
  margin: 5px;
}
</style>