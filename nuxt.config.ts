import { defineConfig, searchForWorkspaceRoot } from 'vite'

export default defineNuxtConfig({
  // Your other options
  vite: {
    server: {
      fs: {
        allow: [
          '/Users/Admin/kazi/job_front',
          '/.nuxt',
          '/node_modules',
          '/node_modules/vite/dist/client',
        ]
      }
    },
  },
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Alfajirijobs - Latest Jobs',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { hid: 'description', name: 'description', content: 'Get latest jobs' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'theme-color', content: '#ffffff' },
        { hid: 'og:title', property: 'og:title', content: 'Alfajirijobs - Latest Jobs' },
        { hid: 'og:description', property: 'og:description', content: 'Get latest jobs' },
        { hid: 'og:image', property: 'og:image', content: '/favicon.png' },
        { hid: 'og:url', property: 'og:url', content: 'https://alfajirijobs.com' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Alfajirijobs - Latest Jobs' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Get latest jobs' },
        { hid: 'twitter:image', name: 'twitter:image', content: '/favicon.png' },
        { hid: 'twitter:url', name: 'twitter:url', content: 'https://alfajirijobs.com' },
      ],
      link: [
        {rel: 'icon', type: 'image/png', href: '/favicon.png' }, 
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/image',
    '@vee-validate/nuxt',
    '@formkit/auto-animate/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    { src: '~/plugins/alerts', mode: 'client' },
    { src: '~/plugins/app', mode: 'client' },
    { src: '~/plugins/area-filter-range.init', mode: 'client' },
    { src: '~/plugins/candidate.init', mode: 'client' },
    { src: '~/plugins/coming-soon.init', mode: 'client' },
    { src: '~/plugins/counter.init', mode: 'client' },
    { src: '~/plugins/dropdown&modal.init', mode: 'client' },
    { src: '~/plugins/job-grid.init', mode: 'client' },
    { src: '~/plugins/job-list.init', mode: 'client' },
    { src: '~/plugins/lightbox.init', mode: 'client' },
    { src: '~/plugins/nav&tabs', mode: 'client' },
    { src: '~/plugins/swiper.init', mode: 'client' },
    { src: '~/plugins/switcher', mode: 'client' },
  ],
  // build: {
  //   transpile: [
  //     '~/plugins/alerts.js',
  //     // '~/plugins/app.js',
  //   ]
  // }
})




