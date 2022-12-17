import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  /// <reference types="vite-plugin-svgr/client" />
  plugins: [ svgr(), react()],
})
