import state from '@/store/modules/musicians/state';
import { actions } from '@/store/modules/musicians/actions';
import { getters } from '@/store/modules/musicians/getters';
import mutations from '@/store/modules/musicians/mutations';

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
