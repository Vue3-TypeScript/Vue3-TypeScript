import { useStore, mapGetters } from 'vuex';
import { computed } from 'vue';

export function useGetters(mapper) {
  const store = useStore();

  const stateFns = mapGetters(mapper)  // mapGetters 辅助函数

  const state = {}
  Object.keys(stateFns).forEach(fnKey => {
    state[fnKey] = computed(stateFns[fnKey].bind({$store: store}))
  })

  return state
}