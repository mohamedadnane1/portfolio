import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/', // pour GitHub Pages : https://mohamedadnane1.github.io/portfolio/
  plugins: [react()],
})
