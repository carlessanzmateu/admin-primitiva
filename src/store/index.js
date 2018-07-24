import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
  },
  // state: {
  //   authUser: null,
  // },
  // mutations: {
  //   setAuthUser(state, authUser) {
  //     state.authUser = authUser;
  //   },
  // },
  // actions: {

  // },
});
