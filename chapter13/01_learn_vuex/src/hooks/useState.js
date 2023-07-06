import { computed } from 'vue'
import { mapState, useStore } from 'vuex'

export function useState(mapper) {
  // 拿到store独享
  const store = useStore()
  // 获取到对应的对象的functions: {name: function, age: function}
  const storeStateFns = mapState(mapper)

  // 对数据进行转换
  const storeState = {}
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({$store: store})
    storeState[fnKey] = computed(fn)
  })
  return storeState
}