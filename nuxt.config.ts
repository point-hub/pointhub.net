// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@point-hub/papp/style.css'],
  modules: ['@unocss/nuxt', '@pinia/nuxt', '@vueuse/nuxt'],
  compatibilityDate: '2024-09-17'
})
