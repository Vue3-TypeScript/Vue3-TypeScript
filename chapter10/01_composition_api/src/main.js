import { createApp } from 'vue'
// import App from './App.vue'
// import App from './01_Mixin/App.vue'
// import App from './02_extends/App.vue'
// import App from './03_setup函数基本使用/App.vue'
// import App from './04_数据响应式API/App.vue'
// import App from './05_reactive其他知识点/App.vue'
// import App from './06_ref其他知识点/App.vue'
// import App from './07_computed使用/App.vue'
// import App from './08_watch使用/App.vue'
// import App from './09_生命周期钩子/App.vue'
// import App from './10_Provide和Inject/App.vue'
import App from './11_compositionAPI综合练习/App.vue'
// import App from './12_script_setup顶层编写方式/App.vue'
let app =createApp(App)
// 1.全局混入Mixin对象
// app.mixin({
//     created() {
//       console.log("global mixin created");
//     }
// })
app.mount('#app')
