import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/base';
import vuetify from './plugins/vuetify';
// import Component from 'vue-class-component';

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
