<template>
  <div>
    <h4>Home: {{ $store.state.counter }}</h4>
    <h4>Home: {{ counter }}</h4>
    <h4>Name: {{ name }}</h4>
    <h4>Age: {{ hyAge }}</h4>
    <!-- <h4>Home:{{ sCounter }}</h4> -->
    <!-- <h4>Home:{{ sName }}</h4> -->
    <!-- <h4>Home:{{ age }}</h4>
    <h4>Home:{{ height }}</h4> -->
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        firstName: 'coder'
      }
    },
    
    computed: {
      counter() {
        return this.$store.state.counter
      },
      // mapState 函数支持解构
      ...mapState(['name']),
      ...mapState({
        hyAge: 'age'
      })
    }

    // 3.mapState数组方式
    // computed: mapState(['counter','name', 'age'])

    // // 2.mapState对象方式
    // computed: mapState({
    //   counter: (state) => { 
    //     return state.counter // 箭头函数不绑定this
    //   },
    //   name(state) { // 会绑定 this，this是组件实例
    //     return this.firstName + state.name
    //   },
    //   hyAge: 'age',
    // })

    // 1.计算属性的方式
    // computed: {
    //   counter() {
    //     return this.$store.state.counter
    //   }
    // }
  }
</script>
<style scoped>
h4{
  margin: 0px;
}
</style>