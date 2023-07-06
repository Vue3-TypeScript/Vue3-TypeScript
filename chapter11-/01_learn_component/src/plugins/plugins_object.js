export default {
  install(app) {
    // 该插件是给app实例添加一个全局property：$name
    app.config.globalProperties.$name = "coderwhy"
  }
}