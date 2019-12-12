import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

let opt: StoreOptions < any > = {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters,
  strict: true
};

export default new Vuex.Store(opt);
