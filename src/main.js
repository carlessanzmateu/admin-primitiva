import 'vue-material/dist/vue-material.min.css';
import Vue from 'vue';
import store from '@/store/index';
import firebase from 'firebase';
import 'firebase/firestore';
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
  MdMenu,
  MdDatepicker,
  MdDialog,
} from 'vue-material/dist/components';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';


router.beforeEach((to, from, next) => {
  const isLogged = store.state.auth.authUser !== null ? store.state.auth.authUser : false;
  if (to.meta.auth && !isLogged) {
    next({ path: '/login' });
  } else {
    next();
  }
});

Vue.config.productionTip = false;
Vue.use(VeeValidate);

// Visual Components
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
Vue.use(MdMenu);
Vue.use(MdDatepicker);
Vue.use(MdDialog);

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAyFcI9IDWtHdt2BKfkrZ_8f9aWliMEyt0',
  authDomain: 'bpb-admin.firebaseapp.com',
  databaseURL: 'https://bpb-admin.firebaseio.com',
  projectId: 'bpb-admin',
  storageBucket: 'bpb-admin.appspot.com',
  messagingSenderId: '962430546613',
};

firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
