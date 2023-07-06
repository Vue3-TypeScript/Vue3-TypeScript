const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "build",
  assetsDir: "static",
  // publicPath: process.env.NODE_ENV === "production" ? "/my-app/" : "/",
  // chainWebpack: (config) => {
  //   // 1.路径起别名
  //   config.resolve.alias
  //     // 2. @别名代表的路径是：指向当前项目的src目录
  //     .set("@", resolve("src"))
  //     // 3.components别名代表的路径是：指向当前项目src目录下的components目录
  //     .set("components", resolve("src/components"));
  // },
});

// module.exports = {
//   outputDir: "build",
// };
