import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import musicians from './modules/musicians/index';
import actTypes from './modules/actTypes/index';
import clothes from './modules/clothes/index';
import instruments from './modules/instruments/index';
import acts from './modules/acts/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    musicians,
    actTypes,
    clothes,
    instruments,
    acts,
  },
});
