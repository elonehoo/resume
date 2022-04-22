import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import axios from 'axios'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)
app.config.globalProperties.axios = axios
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)
app.mount('#app')
