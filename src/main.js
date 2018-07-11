import 'vue-material/dist/vue-material.min.css';
import {
  MdApp,
  MdToolbar,
  MdDrawer,
  MdList,
  MdIcon,
  MdButton,
  MdContent,
  MdCard,
  MdRipple,
  MdField,
} from 'vue-material/dist/components';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(MdApp);
Vue.use(MdList);
Vue.use(MdIcon);
Vue.use(MdToolbar);
Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdContent);
Vue.use(MdCard);
Vue.use(MdRipple);
Vue.use(MdField);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
