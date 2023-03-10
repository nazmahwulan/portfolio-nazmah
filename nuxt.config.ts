export default defineNuxtConfig({
  modules: ["@gits-id/ui-nuxt", "@nuxtjs/tailwindcss", "nuxt-icon"],
  gitsUi: {
    // configuration options for GITS UI go here
  },
  app: {
    head: {
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: "stylesheet", href: "https://fonts.googleapis.com" },
        // { rel: 'stylesheet', href: 'https://fonts.googleapis.com' }
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap" },
      ],
    },
  },
  
});
