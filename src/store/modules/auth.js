export default {
  namespaced: true,
  state: {
    authUser: null,
  },
  mutations: {
    setAuthUser(state, authUser) {
      state.authUser = authUser;
    },
  },
  actions: {},
};
