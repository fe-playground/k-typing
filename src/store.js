import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import auth from '@/vuex/auth';
import home from '@/vuex/home';

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    router: () => router
  },
  modules: {
    auth,
    home,
  },
});
