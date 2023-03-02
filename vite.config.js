import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import { ViteAliases } from './node_modules/vite-aliases'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Icons({}), ViteAliases(), Components({
    resolvers: [
      IconsResolver(),
    ],
  }),
  AutoImport({
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
    imports: ['vue', 'vue-router', 'pinia'],
  })],
  server: {
    host: true, // 指定服务器主机名
    port: 4000, // 指定服务器端口
    open: false, // 在服务器启动时自动在浏览器中打开应用程序
    strictPort: false, // 设为 false 时，若端口已被占用则会尝试下一个可用端口,而不是直接退出
    https: false, // 是否开启 https
    cors: true, // 为开发服务器配置 CORS。默认启用并允许任何源
  },
})
