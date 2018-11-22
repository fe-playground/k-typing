import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

import Login from './views/Login';
import NotFound404 from './views/NotFound404';

Vue.use(Router);

const router = new Router({
  //mode: 'history',
  routes: [
    {
      path: '*',
      component: NotFound404,
      meta: { title: '404' },
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { title: 'Login' },
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: { title: 'Home', requiresAuth: true },
    },
    {
      path: '/boards',
      name: 'boards',
      component: () => import('./views/Boards'),
      meta: { title: 'Boards', requiresAuth: true },
    },
    {
      path: '/boards/:id',
      name: 'board',
      component: () => import('./views/Board'),
      meta: { title: 'Board', requiresAuth: true },
    },
    {
      path: '/public',
      name: 'public',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Public.vue'),
      meta: { title: 'Public' },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'typing';
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters[ 'auth/isAuth' ]) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // 반드시 next()를 호출하십시오!
  }
});

export default router;
