import state from '@/store/modules/actTypes/state';
import { actions } from '@/store/modules/actTypes/actions';
import { getters } from '@/store/modules/actTypes/getters';
import mutations from '@/store/modules/actTypes/mutations';

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
