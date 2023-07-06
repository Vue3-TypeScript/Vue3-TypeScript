import { createApp } from 'vue'
import registerDirectives from './directives'
import pluginObject from './plugins/plugins_object'
import pluginFunction from './plugins/plugins_function'
// import App from './01_render函数的使用/App.vue'
// import App from './02_JSX语法的使用/App.vue'
// import App from './03_自定义指令/App.vue'
// import App from './04_teleport内置组件/App.vue'
// import App from './05_插件的使用/App.vue'
import App from './06_nexttick的使用/App.vue'

// 1.创建app实例
let app =createApp(App)
// 2.自定义全局指令 v-focus
app.directive("focus", {
  mounted(el, bindings, vnode, preVnode) {
    console.log("focus mounted");
    el.focus();
  }
})
// 3.自定义全局指令 v-format-time
registerDirectives(app);
// 4.安装插件
// app.use(pluginObject);
app.use(pluginFunction);

app.mount('#app')
