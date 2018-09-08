const mutations = {
  setMusicians(state, musicians) {
    state.musiciansFromService = musicians;
  },

  setMusician(state, musician) {
    state.musicianDetail = musician;
  },

  setExpectedMusicians(state, expectedMusicians) {
    state.expectedMusicians = expectedMusicians;
  }
};

export default mutations;
