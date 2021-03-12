import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('./views/Home/index.vue')
const Heroes = () => import('./views/Heroes/index.vue')
const Calendar = () => import('./views/Calendar/index.vue')
const Markd = () => import('./views/Markdown/index.vue')
const Slider = () => import('./views/Slider/index.vue')
const Calculator = () => import('./views/Calculator/index.vue')
const ReusableModal = () => import('./views/ReusableModal/index.vue')
const Chat = () => import('./views/Chat/index.vue')
const store = () => import('./store/index')

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
    path: '/slider-carousel',
    name: 'Slider',
    component: Slider
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/reusable-modal',
    name: 'Reusable-Modal',
    component: ReusableModal
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    meta: { middleware: 'auth' }
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

router.beforeEach((to, _, next) => {
  if (to.meta.middleware) {
    const middleware = require(`./middleware/${to.meta.middleware}`)
    if (middleware) {
      middleware.default(next, store)
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
