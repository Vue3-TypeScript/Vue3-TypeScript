import { createApp } from 'vue'
// import App from './App.vue'
// import App from './pages/01_mapState_compunted.vue'
// import App from './pages/02_mapState_setup.vue'
// import App from './pages/03_useState封装后使用.vue'
import App from './pages/04_mapGetters_computed.vue'
// import App from './pages/05_mutation的基本使用.vue'
// import App from './pages/06_mutations的辅助函数.vue'
// import App from './pages/07_actions的使用和细节补充.vue'
// import App from './pages/08_actions的辅助函数.vue'
// import App from './pages/09_actions的返回Promise.vue'
// import App from './pages/10_module的基本使用.vue'
// import App from './pages/11_module的局部状态.vue'
// import App from './pages/12_module的命名空间.vue'
// import App from './pages/13.modules辅助函数.vue'

import store from './store/index'
const app = createApp(App)
// 安装Vuex插件
app.use(store)
app.mount('#app')
