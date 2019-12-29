import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import app from './modules/app';
import home from './modules/home';
import activity from './modules/activity';
// register VUEX
Vue.use(Vuex);

export interface State {
  [key: string]: any
}

let opt: StoreOptions < any > = {
  // strict mode
  strict: true,

  // module states
  modules: { app, home, activity },

  // root states
  state: {},
  mutations: {},
  actions: {},
  getters: {}

};

export default new Vuex.Store(opt);
