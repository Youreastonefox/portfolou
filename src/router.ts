import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'

import Aos from 'aos'
import 'aos/dist/aos.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
  ],
})

router.beforeEach((to, from, next) => {
  Aos.init({
    once: true,
  })
  next()
})

export default router
