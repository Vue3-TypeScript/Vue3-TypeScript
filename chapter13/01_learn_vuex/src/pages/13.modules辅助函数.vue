<template>
  <div>
    <h4>home子模块homeCounter的状态: {{ homeCounter }}</h4>
    <h4>home子模块doubleHomeCount: {{ doubleHomeCount }}</h4>

    <button @click="homeIncrementCommit">+1</button>
    <button @click="incrementAction">+1</button>
  </div>
</template>

<script>
  import { computed } from 'vue'
  import { createNamespacedHelpers} from "vuex";
  const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers("home")
    import { useMapper } from '../hooks/index'

  export default {
    setup() {
      const stateFunc = useMapper(mapState, ['homeCounter'])
      const gettersFunc = useMapper(mapGetters, ['doubleHomeCount'])

      const mutationFuncs = mapMutations({
        homeIncrementCommit: 'increment'
      })
      const actionsFuncs = mapActions(['incrementAction'])
      return { ...stateFunc, ...gettersFunc, ...mutationFuncs, ...actionsFuncs }
    }
  }
</script>
<style scoped>
h4{
  margin: 0px;
}
</style>