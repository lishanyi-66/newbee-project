import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/Category.vue')
  }, {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
