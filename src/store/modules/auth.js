export default {
  namespaced: true,
  state: {
    authUser: null,
  },
  mutations: {
    setAuthUser(state, authUser) {
      state.authUser = authUser;
      console.log(authUser);
    },
    removeAuthUser(state) {
      state.authUser = null;
    },
  },
  actions: {
    setAuthUser(context, authUser) {
      context.commit('setAuthUser', authUser);
    },
  },
};
