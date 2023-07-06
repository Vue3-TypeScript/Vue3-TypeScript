import { ref, watch } from 'vue';
// 使用匿名函数，并该函数需接收一个参数
export default function(title = "默认的title") {
  const titleRef = ref(title);
  // 侦听titleRef变化，一旦被修改就更新 
  watch(titleRef, (newValue) => {
    document.title = newValue 
  }, {
    immediate: true // 侦听的回调函数先执行一次
  })
  return titleRef
}