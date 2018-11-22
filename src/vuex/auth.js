const state = {
  email: '',
  token: '',
};

const getters = {
  isAuth(state, rootState, 나머지는모르겠다) {
    return !!state.token;
  },
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
    const redirect = rootGetters.router.currentRoute.query.redirect;
    rootGetters.router.push(redirect || '/home');
  },
};

const auth = { state, getters, mutations, actions, namespaced: true };
export default auth;
