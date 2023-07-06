// 1.createApp函数，需要接收一个根组件
function createApp(rootComponent) {
  return {
    // 2.mount函数，用于将组件挂载到指定的DOM上  
    mount(selector) {
      const container = document.querySelector(selector);
      let isMounted = false;
      let oldVNode = null;

      // 自动依赖收集（第一次挂载和页面数据发生改变都会触发该副作用函数回调）
      watchEffect(function() {
        if (!isMounted) {
          // 第一次挂载（例如，初始化计数器）
          oldVNode = rootComponent.render(); // 获取vnode（对data的响应式数据有依赖）
          mount(oldVNode, container);
          isMounted = true;
        } else {
          // 页面发生更新 （例如，计数器+1操作） 
          const newVNode = rootComponent.render(); // 获取vnode
          patch(oldVNode, newVNode);
          oldVNode = newVNode;
        }
      })
    }
  }
}