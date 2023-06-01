import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from "@auth0/auth0-vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/signUp.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/logIn.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search.vue')
    },
    {
      path: '/searchMap',
      name: 'searchMap',
      component: () => import('../views/searchMap.vue')
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
      component: () => import('../views/Dashboard.vue'),
      beforeEnter: authGuard,
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile.vue'),
      beforeEnter: authGuard,
    },
    {
      path: "/:catchAll(.*)",
      name: "Not Found",
      component: () => import('../views/HomeView.vue'),
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
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue')
    }
  ]
})

export default router
