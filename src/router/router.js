import MainPage from '@/pages/MainPage';
import PastPage from '@/pages/PastPage';
import AboutPage from '@/pages/AboutPage';
import PastIdPage from '@/pages/PastIdPage';
import PastPageWithStore from '@/pages/PastPageWithStore';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/posts',
    component: PastPage,
  },
  {
    path: '/posts/:id',
    component: PastIdPage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/store',
    component: PastPageWithStore,
  },
];

const router = createRouter({
  routes,

  // history: createWebHashHistory(process.env.Base_URL),
  history: createWebHistory(process.env.Base_URL),
});

export default router;
