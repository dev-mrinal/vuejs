import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Home from '@/components/dashboard/Home'
import CreatePromotion from '@/components/dashboard/CreatePromotion'
import AddPromotionDetails from '@/components/promotionWizard/AddPromotionDetails'
import AddProductDetails from '@/components/promotionWizard/AddProductDetails'

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
      path: '/promotiondetails',
      component: CreatePromotion,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '/',
          name: 'promotiondetails',
          component: AddPromotionDetails
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: '/promotionproducts',
          name: 'promotionproducts',
          component: AddProductDetails
        }
      ]
    }
  ]
})
