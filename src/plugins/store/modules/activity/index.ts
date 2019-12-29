import state from './modules/state';
import mutations from './modules/mutations';
import actions from './modules/actions';
import getters from './modules/getters';

const activity = {
  namespaced: true, // 成為帶名稱空間的模組
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};

export default activity;
