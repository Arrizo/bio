/*
 * @Author: chenzechao
 * @Date: 2024-06-29 15:59:57
 * @LastEditTime: 2024-06-29 20:12:32
 * @LastEditors: chenzechao
 * @Description:
 * @FilePath: /tius/bio/vite.config.ts
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import checker from 'vite-plugin-checker';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), checker({ typescript: true })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
