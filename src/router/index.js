import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import About from '@/components/About'
import Promotion from '@/components/Promotion'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/promotion',
      name: 'promotion',
      component: Promotion
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
