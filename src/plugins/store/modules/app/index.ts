import state, { StateType } from './modules/state';
import mutations, { MutationType } from './modules/mutations';
import actions, { ActionType } from './modules/actions';
import getters, { GetterType } from './modules/getters';

const app = {
  namespaced: true, // 成為帶名稱空間的模組
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};

export { StateType, MutationType, ActionType, GetterType };
export default app;
