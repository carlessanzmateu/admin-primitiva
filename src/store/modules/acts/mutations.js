const mutations = {
  setAllActs(state, acts) {
    state.actsFromService = acts;
  },

  setAct(state, act) {
    state.actDetail = act;
  },
};

export default mutations;
