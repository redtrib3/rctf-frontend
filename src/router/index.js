import { createRouter, createWebHistory } from 'vue-router'
import Challenges from '../views/Challenges.vue'
import NotFound from '../views/404.vue'
import Socials from '../views/Socials.vue';
import Projects from '../views/Projects.vue';
import Homepage from '../views/Homepage.vue';

const routes = [
  {
    path: '/',
    name: 'Hompage',
    component: Homepage,
    meta: {
      hideFooter: true
    }
  },
  {
    path: '/challenges',
    name: 'Challenges',
    component: Challenges
  },
  {
    path: '/socials',
    name: 'Socials',
    component: Socials,
    meta: {
      hideFooter: true
    }
  },
  {
    path: '/projects',
    name:  'Projects',
    component: Projects,
    meta: {
      hideFooter: true
    }
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
