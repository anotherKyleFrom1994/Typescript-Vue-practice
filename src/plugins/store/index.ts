import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import app from './modules/app';

// register VUEX
Vue.use(Vuex);

let opt: StoreOptions < any > = {
  // strict mode
  strict: true,

  // module states
  modules: { app },

  // root states
  state: {},
  mutations: {},
  actions: {},
  getters: {}

};

export default new Vuex.Store(opt);
