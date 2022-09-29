const {
  defineConfig
} = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 项目打包的白屏问题
  publicPath: "./",
  devServer: {
    // 端口号
    port: "8888",
    // 主机名
    host: "localhost",
    // 启动项目是否自动打开浏览器
    open: false,
    // 是否打开https
    https: false,
    // 跨域
    proxy: {

    }

  },
  lintOnSave: false
});