// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  modules: ["@nuxt/icon", "@nuxtjs/color-mode"],
  ssr: false,

  css: ["/assets/styles/main.scss"],
  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
  },
  app: {
    baseURL: "/portfolio/",
    head: {
      title: "Fredy Angarita",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
});
