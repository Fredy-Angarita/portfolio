// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxtjs/color-mode"],
  css: ["/assets/styles/main.scss"],
  colorMode: {
    preference: "light",
    fallback: "light",
    classSuffix: "",
  },
});
