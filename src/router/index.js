/*
 * Vue Router
 * @Author: baixiaoming
 * @Date: 2019-01-12 20:39:15
 * @Last Modified by:   baixiaoming
 * @Last Modified time: 2019-01-12 20:39:15
 */

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
