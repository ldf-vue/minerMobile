import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/productList',
      name: 'productList',
      component (resolve) {
        require.ensure(['@/views/productList.vue'], () => { resolve(require('@/views/productList.vue')) })
      }
    },
    {
      path: '/productDetail/:id',
      name: 'productDetail',
      component (resolve) {
        require.ensure(['@/views/productDetail.vue'], () => { resolve(require('@/views/productDetail.vue')) })
      }
    },
    {
      path: '/configInfo',
      name: 'configInfo',
      component (resolve) {
        require.ensure(['@/views/configInfo.vue'], () => { resolve(require('@/views/configInfo.vue')) })
      }
    },
    {
      path: '/about',
      name: 'about',
      component (resolve) {
        require.ensure(['@/views/about.vue'], () => { resolve(require('@/views/about.vue')) })
      }
    },
    {
      path: '/theFaq',
      name: 'theFaq',
      component (resolve) {
        require.ensure(['@/views/theFaq.vue'], () => { resolve(require('@/views/theFaq.vue')) })
      }
    },
    {
      path: '*',
      component: Home
    }
  ]
})
