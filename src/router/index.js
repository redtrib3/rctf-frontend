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
      title: 'redtrib3.me',
      hideFooter: true
    }
  },
  {
    path: '/challenges',
    name: 'Challenges',
    component: Challenges,
    meta: {
      title: 'Challenges - redtrib3',
    }
  },
  {
    path: '/socials',
    name: 'Socials',
    component: Socials,
    meta: {
      title: 'Socials - redtrib3',
      hideFooter: true
    }
  },
  {
    path: '/projects',
    name:  'Projects',
    component: Projects,
    meta: {
      title: 'My Projects - socials',
      hideFooter: true
    }
  },
  
  {
    path: '/:catchAll(.*)',
    name: 'Not-Found',
    component: NotFound,
    meta: {
      hideFooter: true,
      title: 'Not Found'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'redtrib3'
})

export default router
