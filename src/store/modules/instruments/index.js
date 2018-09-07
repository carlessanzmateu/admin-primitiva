import state from '@/store/modules/instruments/state';
import { actions } from '@/store/modules/instruments/actions';
import { getters } from '@/store/modules/instruments/getters';
import mutations from '@/store/modules/instruments/mutations';

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
