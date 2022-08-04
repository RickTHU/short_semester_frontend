import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConnectView from '../views/ConnectView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/connect',
    name: 'connect',
    component: ConnectView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
