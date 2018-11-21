import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/vuex/auth';
import home from '@/vuex/home';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    home,
  },
});
