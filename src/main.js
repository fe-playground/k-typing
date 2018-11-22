import Vue from 'vue';
import Vuetify from 'vuetify';
import AsyncComputed from 'vue-async-computed';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(AsyncComputed);
Vue.use(Vuetify);
Vue.prototype.$bus = new Vue({});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
