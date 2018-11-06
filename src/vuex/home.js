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
    const maxId = state.records.reduce((id, record) => {
      if(record.id > id) return record.id;
      return id;
    }, 0);
    commit('setRecords', { ...payload, id: maxId + 1 });
  },
};

const home = { state, mutations, actions, namespaced: true };
export default home;
