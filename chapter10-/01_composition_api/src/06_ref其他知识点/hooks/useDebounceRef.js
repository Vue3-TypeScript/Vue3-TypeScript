import { customRef } from 'vue';
// 自定义ref
export default function(value, delay = 300) {
  let timer = null;
  return customRef((track, trigger) => {
    return {
      get() {
        track(); // 获取时，收集依赖
        return value;
      },
      set(newValue) {
        // 防抖的实现 
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger(); // 赋值时，触发更新
        }, delay);
      }
    }
  })
}
