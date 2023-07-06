import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

const app=createApp(App)
// 安装路由插件
app.use(router)
app.mount('#app')
