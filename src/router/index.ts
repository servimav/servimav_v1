import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import HomeView from '@/views/Home.vue'

/**
 * ROUTE_NAME
 */
enum ROUTE_NAME {
  HOME = 'home'
}
/**
 * routes
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: ROUTE_NAME.HOME,
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
