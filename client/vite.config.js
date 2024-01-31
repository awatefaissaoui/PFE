import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),viteCompression()],
  // server: {

  //     // with RegEx: http://localhost:5173/fallback/ -> http://jsonplaceholder.typicode.com/
  //   //   '^/fallback/.*': {
  //   //     target: 'http://jsonplaceholder.typicode.com',
  //   //     changeOrigin: true,
  //   //     rewrite: (path) => path.replace(/^\/fallback/, ''),
  //   //   },
  //     // Using the proxy instance
  //     // '/api': {
  //     //   target: 'https://webpack-mern.vercel.app',
  //     //   changeOrigin: false,
      
  //     // },
  //   //   // Proxying websockets or socket.io: ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
  //   //   '/socket.io': {
  //   //     target: 'ws://localhost:5174',
  //   //     ws: true,
  //   //   },
   

})
