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
  runtimeConfig: {
    api: {
      smtp: {
        auth: {
          user: process.env.NUXT_API_SMTP_AUTH_USER,
          pass: process.env.NUXT_API_SMTP_AUTH_PASS,
        },
        host: process.env.NUXT_API_SMTP_HOST,
        port: parseInt(process.env.NUXT_API_SMTP_PORT || "465"),
        secure: process.env.NUXT_API_SMTP_SECURE === "true",
      },
      mail: {
        from: process.env.NUXT_API_MAIL_FROM,
        to: process.env.NUXT_API_MAIL_TO,
      },
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
});
