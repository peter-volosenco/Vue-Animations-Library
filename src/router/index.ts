import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/views/Home.vue'
import AboutPage from '@/views/About.vue'

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/about',
      component: AboutPage
    },
  ]
})

export default router
