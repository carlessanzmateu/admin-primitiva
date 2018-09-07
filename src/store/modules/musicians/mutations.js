const mutations = {
  setMusicians(state, musicians) {
    state.musiciansFromService = musicians;
  },

  setMusician(state, musician) {
    state.musicianDetail = musician;
  },
};

export default mutations;
