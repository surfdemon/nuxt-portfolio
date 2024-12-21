// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:[
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
  ],
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

  compatibilityDate: '2024-12-19'
});