// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:[
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    'nuxt-mail'
        
  ],
  runtimeConfig: { 
    mail: {
      message: {
        to: process.env.NUXT_MAIL_TARGET,
      },
      smtp: { 
        host: process.env.NUXT_MAIL_SMTP,
        port: process.env.NUXT_MAIL_PORT,
        secure: true,
        auth: {
          user: process.env.NUXT_MAIL_USERNAME,
          pass: process.env.NUXT_MAIL_PASSWORD
        },
      },
    },
  },
  

  content: { 

  },
  tailwindcss: { 
      exposeConfig: true, 
      viewer: true,
  },
  googleFonts:{
    families: {
      Inter: [400, 500, 600, 700],
      'DM+Sans': [400, 500, 600, 700]
    },
    display: 'swap',
    preload: true,
    preconnect: true,
    useStylesheet: true
  },

  compatibilityDate: '2024-12-19',
  ssr: true,
});