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
      component: () => import('../views/login.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search.vue')
    },
    {
      path: '/header',
      name: 'header',
      component: () => import('../components/Header.vue')
    },
    {
      path: "/callback",
      name: "callback",
      component: () => import("../views/callback.vue")
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile.vue')
    },
    {
      path: '/Navbar',
      name: 'navbar',
      component: () => import('../components/Navbar.vue')
    }
  ]
})

export default router
