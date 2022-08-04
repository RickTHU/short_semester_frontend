import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConnectView from '../views/ConnectView.vue'
import InfoView from '../views/InfoView.vue'

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
  },
  {
    path: '/info',
    name: 'info',
    component: InfoView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
