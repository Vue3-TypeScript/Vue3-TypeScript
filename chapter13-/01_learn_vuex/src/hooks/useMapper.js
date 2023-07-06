import { computed } from 'vue'
import { useStore } from 'vuex'

export function useMapper(mapFn, mapper) {
  // 拿到store独享
  const store = useStore()
  // 获取到对应的对象的functions: {name: function, age: function}
  const storeStateFns = mapFn(mapper)
  // 对数据进行转换
  const storeState = {}
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({$store: store})
    storeState[fnKey] = computed(fn)
  })
  return storeState
}
