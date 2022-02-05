import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 设置 `@` 指向 `src` 目录
    },
  },

  //静态资源服务的文件夹
  publicDir: "public",
  //控制台输出的级别 info 、warn、error、silent
  logLevel: "info",
  // 设为false 可以避免 vite 清屏而错过在终端中打印某些关键信息
  clearScreen: true,
  

  base: "./", // 设置打包路径
  server: {
    port: 8080, // 设置服务启动端口号
    open: false, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    https:false,// 是否开启 https

    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:x000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // },
  },
  // css
  css: {
    // 配置 css modules 的行为
    modules: {},
    // postCss 配置
    postcss: {},

    //指定传递给 css 预处理器的选项
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, //允许链式调用的换行
      },
    },
  },
});
