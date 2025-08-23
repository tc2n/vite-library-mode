import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib:{
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    }
  }
})
