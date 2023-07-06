import { ref, computed } from 'vue';

export default function useCounter() {
  // 1.1计数器案例的逻辑代码
  const counter = ref(100);
  const doubleCounter = computed(() => counter.value * 2);

  const increment = () => counter.value++;
  const decrement = () => counter.value--;

  return {
    counter, 
    doubleCounter, 
    increment, 
    decrement
  }
}