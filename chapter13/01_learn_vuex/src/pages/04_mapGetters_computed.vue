<template>
  <div>
    <h4>书籍总价: {{ $store.getters.totalPrice }}</h4>
    <h4>Vue.js书总价: {{ $store.getters.totalPriceByName('Vue.js') }}</h4>
    <!-- <h4>mapGetters 书籍总价: {{ totalPrice }}</h4>
    <h4>mapGetters 书折扣: {{ discount }}</h4> -->
    <h4>mapGetters Vue.js书总价: {{ totalPriceByName('Vue.js') }}</h4>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { useGetters } from '../hooks'
  export default {
    // computed: {
    //   ...mapGetters(['totalPrice']), // 数组语法
    //   ...mapGetters({ // 对象语法
    //     discount: 'currentDiscount'
    //   })
    // },
    setup() {
      const  stateGetters = useGetters(['totalPriceByName'])
      return { ...stateGetters }
    }
  }
</script>

<style scoped>
h4{
  margin: 0px;
}
</style>