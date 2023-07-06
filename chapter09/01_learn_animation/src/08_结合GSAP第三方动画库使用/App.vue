<template>
  <div class="app">
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition @enter="enter"
                @leave="leave"
                :css="false">
      <h4 v-if="isShow" style="border:1px solid #ddd;width: 100px">Hello World</h4>
    </transition>
  </div>
</template>

<script>
  import gsap from 'gsap';
  export default {
    data() {
      return {
        isShow: true,
      }
    },
    methods: {
      enter(el, done) {
        console.log("enter", el);
        // h4元素在整个进入过渡的阶段中应用了下面动画
        gsap.from(el, {
          scale: 0,
          x: 200,
          onComplete: done
        })
      },
      leave(el, done) {
        console.log("leave", el);
        // h4元素在整个离开过渡的阶段中应用了下面动画
        gsap.to(el, {
          scale: 0,
          x: 200,
          onComplete: done
        })
      }
    }
  }
</script>