import { createRouter, createWebHistory } from 'vue-router'
import Challenges from '../views/Challenges.vue'
import NotFound from '../views/404.vue'
import Socials from '../views/Socials.vue';

const routes = [
  {
    path: '/challenges',
    name: 'Challenges',
    component: Challenges
  },
  {
    path: '/socials',
    name: 'Socials',
    component: Socials
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not-Found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
