import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';
import auth from '@/vuex/auth';
import home from '@/vuex/home';
import board from '@/vuex/board';

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    router: () => router
  },
  modules: {
    auth,
    home,
    board,
  },
});
