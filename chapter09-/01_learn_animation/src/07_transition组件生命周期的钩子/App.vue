<template>
  <div class="app">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition :appear="true"
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave">
      <h4 v-if="isShow" style="border:1px solid #ddd;width: 100px">Hello World</h4>
    </transition>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: true
      }
    },
    methods: {
      beforeEnter(el) {
        console.log("beforeEnter"); // 1.在元素被插入到 DOM 之前被调用
      },
      // 参数一：el表示当前DOM对象 ，参数二：done表示动画结束的回调函数 
      enter(el, done) {
        console.log("enter");// 2.在元素被插入到 DOM 之后的下一帧被调用
        done()
      },
      afterEnter(el) {
        console.log("afterEnter"); // 3.当进入过渡完成时调用。
      },
      beforeLeave(el) {
        console.log("beforeLeave"); // 4.在 leave 钩子之前调用
      },
      leave(el, done) {
        console.log("leave"); // 5.在离开过渡开始时调用
        
      },
      afterLeave(el) {
        console.log("afterLeave"); // 6. // 在离开过渡完成，且元素已从 DOM 中移除时调用
      }
    }
  }
</script>