// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "FloraFY",
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
        },
        {
          rel: "icon",
          href: "https://i.ibb.co/PQ4mRtC/myphoto-Round.png", 
        },
      ],
      meta: [
        {
          property: "og:title",
          content: "FloraFY",
        },
        {
          property: "og:image",
          content: "https://ibb.co/TcDfsK9",
        },
        {
          property: "og:description",
          content: "FloraFY",
        },
        {
          name: "description",
          content: "FloraFY",
        },
      ],
    },
  },
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
