import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import app from './modules/app';
import home from './modules/home';
import activity from './modules/activity';

// register VUEX
Vue.use(Vuex);

let opt: StoreOptions<any> = {
  // strict mode
  strict: true,

  // module states
  modules: { app, home, activity },

  // root states
  state: {
    user: 'user'
  },

  mutations: {},
  actions: {},
  getters: {}

};

export interface State<T> {
  [key: string]: T;
}

export { Action, ActionContext, MutationTree, Mutation, Getter } from 'vuex';
export default new Vuex.Store(opt);
