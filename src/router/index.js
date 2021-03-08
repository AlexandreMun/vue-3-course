import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const Heroes = () => import('../views/Heroes/index.vue')
const Calendar = () => import('../views/Calendar/index.vue')
const Markd = () => import('../views/Markdown/index.vue')
const Slider = () => import('../views/Slider/index.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: Heroes
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/markdown',
    name: 'Markdown',
    component: Markd
  },
  {
    path: '/slider',
    name: 'Slider',
    component: Slider
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
