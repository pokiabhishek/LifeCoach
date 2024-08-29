import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/LifeCoach/",
  assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf'], 
  server: {
    host: '0.0.0.0', // This allows access from external devices
    port: 3000,      // or any port you are using
  },
})
