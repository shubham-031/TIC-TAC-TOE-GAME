import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/minimax-game-ai/', 
  server: {
    host: '0.0.0.0', // Allow external access
    port: process.env.PORT || 3000, // Use Render's assigned port
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
});
