import state from '@/store/modules/acts/state';
import { actions } from '@/store/modules/acts/actions';
import { getters } from '@/store/modules/acts/getters';
import mutations from '@/store/modules/acts/mutations';

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
