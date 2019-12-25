import Vue from 'vue';
import App from './App.vue';
import router from './plugins/router';
import vuetify from './plugins/vuetify';
import store from './plugins/store';
import './plugins/global-components';

Vue.config.productionTip = false;

// Component.registerHooks([
//   'beforeRouteEnter', // 进入路由之前
//   'beforeRouteLeave', // 离开路由之前
//   'beforeRouteUpdate'
// ]);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
