class Dep {
    constructor() {
      this.subscribers = new Set();
    }
    depend() {
      if (activeEffect) {
        this.subscribers.add(activeEffect);
      }
    }
    notify() {
      this.subscribers.forEach(effect => {
        effect();
      })
    }
}

// const dep = new Dep(); // （用getDep代替了）
let activeEffect = null;
function watchEffect(effect) {
  activeEffect = effect;
//   dep.depend(); // 自动依赖收集（移到get函数中实现）
  effect();
  activeEffect = null;
}

// Map({key: value}): key是一个字符串
// WeakMap({key(对象): value}): key是一个对象, 弱引用
// 1.创建一个WeakMap对象来存放所有的依赖
const targetMap = new WeakMap();
// 2.获取某一个属性对应的依赖set集合
function getDep(target, key) {
  // 2.1根据对象(target)取出对应的Map对象
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  // 2.2取出具体的dep对象
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep;
}

// vue3对raw进行数据劫持
function reactive(raw) {
  return new Proxy(raw, {
    get(target, key) { // target === raw
      const dep = getDep(target, key);
      dep.depend();
      return target[key];
    },
    set(target, key, newValue) {
      const dep = getDep(target, key);
      target[key] = newValue;
      dep.notify();
    }
  })
}

// 4.reactive函数对数据劫持（Vue2的方式）
const info = reactive({counter: 100, name:'why'});
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
// dep.notify();  // （移到set函数中实现自动通知更新）