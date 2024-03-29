export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "title", content: "JustScreaMy" },
        {
          name: "description",
          content: "Web portfolio of a czechia developer",
        },
        { name: "robots", content: "index, nofollow" },
        { name: "keywords", content: "programming, linux, porfolio, nuxtjs" },
        { name: "language", content: "English" },
        { name: "author", content: "JustScreaMy" },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
});
