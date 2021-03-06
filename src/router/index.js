import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/pages/Home.vue';

const ROOT_PATH = '/';

const routes = [
  {
    path: ROOT_PATH,
    name: 'home',
    component: Home
  },
  {
    path: `${ROOT_PATH}about`,
    name: 'about',
    component: () => import(/* webpackChunkName: "About" */ '@/pages/About.vue')
  },
  {
    path: `${ROOT_PATH}characters/:aliasItem`,
    name: 'aliasItem',
    component: () =>
      import(
        /* webpackChunkName: "CharacterItem" */ '@/pages/CharacterItem.vue'
      )
  },
  {
    path: '/:CatchAll(.*)*',
    name: 'notFound',
    component: () =>
      import(/* webpackChunkName: "NotFound" */ '@/pages/NotFound.vue'),
    redirect: '/404'
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/pages/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
