import { createApp} from 'vue'
import App from './App.vue'
// 4.导入文件
import nhItImg from './img/nhlt.jpg'
// 5.导入lodash模块
import lodash from 'lodash'
createApp(App).mount('#app')

// 1.使用全局变量
console.log(appName) // 报错：Cannot find name 'appName'
console.log(appVersion) // 报错：Cannot find name 'appVersion'

// 2.使用全局函数
console.log(getAppName())

// 3.使用全局类
const p = new Person("why", 18)
console.log(p)

// 6.使用$命名空间
$.ajax({
  url: "https://httpbin.org/get",
  success: (res: any) => {
    console.log(res);
  },
});