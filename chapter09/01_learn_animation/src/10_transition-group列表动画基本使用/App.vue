<template>
  <div>
    <button @click="addNum">添加数字</button>
    <button @click="removeNum">删除数字</button>
    <!-- <button @click="shuffleNum">数字洗牌</button> -->
    <!-- tag="p" 使用p标签包裹所有的span元素；
         name="why" 指定某个需要做动画span元素的过度动画类名 -->
    <transition-group tag="p" name="why">
      <span v-for="item in numbers" :key="item" class="item">
        {{item}}
      </span>
    </transition-group>
  </div>
</template>

<script>
//   import _ from 'lodash';

  export default {
    data() {
      return {
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        numCounter: 10
      }
    },
    methods: {
      addNum() {
        this.numbers.splice(this.randomIndex(), 0, this.numCounter++)
      },
      removeNum() {
        this.numbers.splice(this.randomIndex(), 1)
      },
    //   shuffleNum() {
    //     this.numbers = _.shuffle(this.numbers);
    //   },
      randomIndex() {
        return Math.floor(Math.random() * this.numbers.length)
      }
    },
  }
</script>

<style scoped>
  .item {
    margin-right: 10px;
    /* span元素做动画，需要将行内元素改为行内块级标签 */
    display: inline-block;
  }
  /* 某个span元素的进入和离开时的动画 */
  .why-enter-from,
  .why-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  /* 某个span元素动画的过度效果 */  
  .why-enter-active,
  .why-leave-active {
    transition: all 1s ease;
  }
  .why-leave-active {
    position: absolute;
  }
 
  .why-move {
    transition: transform 1s ease;
  } 
</style>