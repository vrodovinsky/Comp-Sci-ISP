import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from "@auth0/auth0-vue"
import HomeView from '..\\views\\HomeView.vue'
import SignUp from '../views/signUp.vue'
import Login from '../views/login.vue'
import Search from '../views/search.vue'
import SearchMap from '../views/searchMap.vue'
import Header from '../components/header.vue'
import Callback from '../views/callback.vue'
import Dashboard from '../views/dashboard.vue'
import Profile from '../views/profile.vue'
import Navbar from '../components/navBar.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/searchMap',
      name: 'searchMap',
      component: SearchMap
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    },
    {
      path: "/callback",
      name: "callback",
      component: Callback
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: authGuard,
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: authGuard,
    },
    {
      path: '/Navbar',
      name: 'navbar',
      component: Navbar
    }
  ]
})

export default router
