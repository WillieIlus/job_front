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
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
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




