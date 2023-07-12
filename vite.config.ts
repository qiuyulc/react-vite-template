import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';//配置打包分析工具


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
     emitFile: false,
     filename: 'analysis-chart.html', // 分析图生成的文件名
     open:true // 如果存在本地服务端口，将在打包后自动展示
    })
  ],

})
