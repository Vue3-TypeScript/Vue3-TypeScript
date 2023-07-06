class Dep {
    constructor() {
      this.subscribers = new Set(); // 存放收集的依赖（即函数）
    }
    // 添加订阅
    addEffect(effect) {
      this.subscribers.add(effect);
    }
    // 发布通知
    notify() {
      this.subscribers.forEach(effect => {
        effect();
      })
    }
}
  
const info = {counter: 100};
const dep = new Dep(); // 新建一个set集合存依赖

function doubleCounter() {
  console.log(info.counter * 2);
}

function powerCounter() {
  console.log(info.counter * info.counter);
}
// 收集依赖（doubleCounter，powerCounter持有info中counter的依赖）
dep.addEffect(doubleCounter);
dep.addEffect(powerCounter);

// 修改counter
info.counter++;
// 通知更新
dep.notify();
  