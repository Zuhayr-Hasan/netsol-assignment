// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    assets: "/<rootDir>/assets"
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/styles/main.scss',
  ],
  plugins: [
    '@/plugins/bootstrap.client.js',
  ],
})
