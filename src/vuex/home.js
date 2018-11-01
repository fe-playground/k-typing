//export const types = {
//
//};

const state = {
  name: '',
  records: [], // {name, time, current?}
};

const mutations = {
  setName(state, payload) {
    state.name = payload;
  },
  setRecords(state, payload) {
    state.records.push(payload);
    state.records.sort((a, b) => a.time - b.time);
  },
};

const actions = {
  setName({ dispatch, commit, getters, rootGetters }, payload) {
    commit('setName', payload);
  },
  setRecords({ dispatch, commit, getters, rootGetters }, payload) {
    commit('setRecords', payload);
  },
};

const home = { state, mutations, actions, namespaced: true };
export default home;
