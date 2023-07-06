<template>
  <div>
    <input v-model="keyword">
    <transition-group tag="ul" name="why"
                      :css="false"
                      @before-enter="beforeEnter"
                      @enter="enter"
                      @leave="leave"
    >
      <!-- 每个li绑定了data-index属性，该值用来计算当前li动画的delay延时  -->
      <li v-for="(item, index) in showNames" :key="item" :data-index="index">
        {{item}}
      </li>
    </transition-group>
  </div>
</template>

<script>
 import gsap from 'gsap';
  export default {
    data() {
      return {
        names: ["abc", "cba", "nba", "why", "lilei", "hmm", "kobe", "james"],
        keyword: ""
      }
    },
    computed: {
      showNames() {
        return this.names.filter(item => item.indexOf(this.keyword) !== -1)
      }
    },
    methods: {
      beforeEnter(el) {
        console.log('beforeEnter=>', el)
        el.style.opacity = 0;
        el.style.height = 0;
      },
      enter(el, done) {
        console.log('enter=>', el)
        gsap.to(el, {
          opacity: 1,
          height: "1.5em",
          // el.dataset.index 是拿到li元素上data-index绑定的属性的值
          delay: el.dataset.index * 0.5,
          onComplete: done
        })
      },
      leave(el, done) {
        console.log('leave=>', el)
        gsap.to(el, {
          opacity: 0,
          height: 0,
          delay: el.dataset.index * 0.5,
          onComplete: done
        })
      }
    }
  }
</script>

<style scoped>
  .why-enter-from ,
  .why-leave-to {
    opacity: 0;
  }
  .why-enter-active ,
  .why-leave-active {
    transition: all 1s ease;
  }
</style>