import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import musicians from './modules/musicians/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    musicians,
  },
});
