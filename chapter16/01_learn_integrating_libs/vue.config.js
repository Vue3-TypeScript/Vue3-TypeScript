const { defineConfig } = require('@vue/cli-service')
// 1.按需自动导入组件的插件（按需引入）
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // 1.给webpack添加两个插件（按需引入）
      // AutoImport({
      //   resolvers: [ElementPlusResolver()],
      // }),
      // Components({
      //   resolvers: [ElementPlusResolver()],
      // })
      
      // 2.自动导入样式（手动引入）
      require('unplugin-element-plus/webpack')({})
    ]
  }
})
