class Dep {
    constructor() {
      this.subscribers = new Set(); // 存放收集的依赖（即函数）
    }
    // 自动收集依赖（副作用函数）
    depend() {
      if (activeEffect) { // 被收集的 全局依赖
        this.subscribers.add(activeEffect);
      }
    }
    // 发布通知
    notify() {
      this.subscribers.forEach(effect => {
        effect();
      })
    }
}

const dep = new Dep(); // 新建一个set集合存依赖
let activeEffect = null;
function watchEffect(effect) {
  activeEffect = effect; // 将需收集的依赖赋给：全局activeEffect函数
  dep.depend(); // 自动依赖收集
  effect(); // 收集完依赖后执行一下该依赖函数
  activeEffect = null;
}

const info = {counter: 100, name:'why'};
console.log('==自动依赖收集==')
// 自动依赖收集
watchEffect(function () {
  console.log(info.counter * 2);
})
watchEffect(function () {
  console.log(info.counter * info.counter);
})
watchEffect(function () {
    console.log(info.name);
})
console.log('======更新======')
// 修改counter
info.counter++;
// 通知更新
dep.notify();
  