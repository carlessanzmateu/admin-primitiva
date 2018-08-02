import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Acts from './views/acts/Acts.vue';
import Login from './views/login/Login.vue';
import About from './views/About.vue';
import Musicians from './views/musicians/Musicians.vue';
import Musician from './views/musician/Musician.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        auth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/acts',
      name: 'acts',
      component: Acts,
      meta: {
        auth: true,
      },
    },
    {
      path: '/act/:id',
      name: 'act',
      component: Dashboard,
      meta: {
        auth: true,
      },
    },
    {
      path: '/musicians',
      name: 'musicians',
      component: Musicians,
      meta: {
        auth: true,
      },
    },
    {
      path: '/musician/:alias',
      name: 'musician',
      component: Musician,
      meta: {
        auth: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        auth: true,
      },
    },
  ],
});
