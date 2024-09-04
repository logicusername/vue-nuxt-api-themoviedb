// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  nitro: {
    baseURL: "http://localhost:8000/movies",
    prerender: {
      crawlLinks: true,
      failOnError: false, 
    },
  },
  modules: ["@primevue/nuxt-module",'@nuxtjs/tailwindcss'],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          darkModeSelector: "system",
          cssLayer: false,
        },
      },
    },
  },
});
