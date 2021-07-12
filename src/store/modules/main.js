const state = {
  mind: {},
};

const getters = {};

const mutations = {
  setMind(state, mind) {
    console.log(mind);
    state.mind = mind;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
