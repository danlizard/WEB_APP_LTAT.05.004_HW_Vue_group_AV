import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Register from '../views/SignUp.vue'

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
      component: Register
      // component: () => import('../views/SignUp.vue')
    }
  ]
})

export default router
