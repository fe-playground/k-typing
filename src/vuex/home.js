//export const types = {
//
//};

const state = {
  name: '',
};

const mutations = {
  setName(state, payload) {
    state.name = payload
  }
};

const actions = {
  setName({ dispatch, commit, getters, rootGetters }, payload) {
    commit('setName', payload)
  }
};

const home = { state, mutations, actions, namespaced: true };
export default home;
