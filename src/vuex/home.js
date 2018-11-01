//export const types = {
//
//};

const state = {
  name: '',
  records: [], // {id, name, time, current?}
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
  setRecords({ dispatch, commit, getters, rootGetters, state }, payload) {
    const lastRecord = state.records[ state.records.length - 1 ];
    if (lastRecord) {
      commit('setRecords', { ...payload, id: lastRecord.id + 1 });
    } else {
      commit('setRecords', { ...payload, id: 0 });
    }
  },
};

const home = { state, mutations, actions, namespaced: true };
export default home;
