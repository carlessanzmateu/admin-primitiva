import state from '@/store/modules/clothes/state';
import { actions } from '@/store/modules/clothes/actions';
import { getters } from '@/store/modules/clothes/getters';
import mutations from '@/store/modules/clothes/mutations';

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
