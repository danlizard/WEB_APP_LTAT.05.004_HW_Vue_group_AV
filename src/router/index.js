import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
      // component: () => import('../views/HomePage.vue')

    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUp.vue')
    }
  ]
})

export default router
