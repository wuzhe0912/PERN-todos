import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { resolve } from 'path';

const pathResolve = (pathStr: string) => {
  return resolve(__dirname, pathStr);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': pathResolve('./src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.json'],
  }
})
