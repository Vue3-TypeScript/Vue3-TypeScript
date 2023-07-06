import { createApp } from "vue";
import App from "./App.vue";
// 1.导入路由对象
import router from "./router";
// 2.导入store对象
import store from "./store/index";
// 3.全局引入 ElementPlus 组件库
// import ElementPlus from 'element-plus'
// 3.全局引入 ElementPlus 组件库的样式
// import 'element-plus/dist/index.css'

// 4.手动引入(全局注册)
import { ElButton } from "element-plus";

// 5.导入learn-axios.ts文件
// impor./service/01-learn-axios-getios-get'
// import "./service/02-learn-axios-get-ts";
// import './service/03-learn-axios-post'
// import './service/04-learn-axios-config'
// import './service/05-learn-axios-all'
// import './service/06-learn-axios-interceptors'
// import './service/07-learn-axios-instance'
// import "./service/08-learn-hy-request";

createApp(App)
  .use(router) // 安装路由插件
  .use(store) // 安Vuex插件
  // .use(ElementPlus) // 安装ElementPlus组件库
  .component(ElButton.name, ElButton) // 4.手动引入全局注册ElButton组件
  .mount("#app");
