import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../views/signUp.vue')
    },
    {
      path: '/logIn',
      name: 'logIn',
      component: () => import('../views/logIn.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search.vue')
    },
    {
<<<<<<< HEAD
      path: '/header',
      name: 'header',
      component: () => import('../components/Header.vue')
    }
=======
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')
    },
>>>>>>> ae016937e6a47b35b381e5b94adeb86e89635fe8
  ]
})

export default router
