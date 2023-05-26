import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from "@auth0/auth0-vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('/src/views/HomeView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('/src/views/signUp.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('/src/views/login.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('/src/views/search.vue')
    },
    {
      path: '/searchMap',
      name: 'searchMap',
      component: () => import('/src/views/searchMap.vue')
    },
    {
      path: '/header',
      name: 'header',
      component: () => import('/src/components/Header.vue')
    },
    {
      path: "/callback",
      name: "callback",
      component: () => import("/src/views/callback.vue")
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('/src/views/Dashboard.vue'),
      beforeEnter: authGuard,
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('/src/views/profile.vue'),
      beforeEnter: authGuard,
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('/src/views/profile.vue')
    },
    {
      path: '/Navbar',
      name: 'navbar',
      component: () => import('/src/components/Navbar.vue')
    }
  ]
})

export default router
