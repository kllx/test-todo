import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/page/1'
    },
    {
      path: '/page/:id',
      name: 'home',
      component: Home,
      props: true
    },
    {
      path: '*',
      name: 404,
      redirect: '/page/1'
    }
  ]
})
