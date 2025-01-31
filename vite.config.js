import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
server : {
  proxy : {
    "/api" : {
      // target : 'https://auth-backend-93eo.onrender.com/',
      target : 'https://authenticationeskills.vercel.app/api/user/' ,
      changeOrigin : true , 
      secure : false,
    },
  },
},
});




// https://authenticationeskills.vercel.app/api/user/register
