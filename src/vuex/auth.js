import router from '@/router';

const state = {
  email: '',
  token: '',
};

const mutations = {
  setAuthInfo(state, payload) {
    state.email = payload.email;
    state.token = payload.token;
  },
};

const actions = {
  async login({ dispatch, commit, getters, rootGetters }, payload) {
    const token = await fetch('/login');
    commit('setAuthInfo', {
      email: payload,
      token: new Date().getTime(),
    });
    router.push('/home');
  },
};

const auth = { state, mutations, actions, namespaced: true };
export default auth;
