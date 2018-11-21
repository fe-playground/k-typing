import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login';
//import Home from './views/Home.vue';

Vue.use(Router);

const NotFound = { template: '<p>Page not found</p>' };

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '*',
      //name: 'notFound',
      component: Login,
    },
  ],
});
