import Vue from 'vue'
import Router from 'vue-router'
import Header from '../pages/Home'
import City from '../pages/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
