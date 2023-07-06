<template>
  <div>
    <h4>home子模块homeCounter的状态: {{ homeCounter }}</h4>
    <h4>home子模块doubleHomeCount: {{ doubleHomeCount }}</h4>

    <button @click="homeIncrementCommit">+1</button>
    <button @click="incrementAction">+1</button>
  </div>
</template>

<script>
  import { useStore } from 'vuex'
  import { createNamespacedHelpers, mapState, mapGetters, mapMutations, mapActions } from "vuex";
  export default {
    computed: {
      // 方式二
      ...mapState('home', ['homeCounter']),
      ...mapGetters('home', ['doubleHomeCount'])
    },
    methods: {
      // 方式二
      ...mapMutations('home', {
        homeIncrementCommit: 'increment'
      }),
      ...mapActions('home', ['incrementAction']),
    },
    setup() {
      const store = useStore()
     
      return {  }
    }
  }
</script>
<style scoped>
h4{
  margin: 0px;
}
</style>