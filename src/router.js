import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';
import Acts from './views/Acts.vue';
import Login from './views/login/Login.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        auth: true
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
        auth: true
      },
    },
    {
      path: '/act/:id',
      name: 'act',
      component: Dashboard,
      meta: {
        auth: true
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        auth: true
      },
    },
  ],
});
