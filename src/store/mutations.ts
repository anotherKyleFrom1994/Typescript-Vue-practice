import { IState } from './state';
import { MutationTree, Mutation } from 'vuex';

export const mutations: MutationTree < Mutation < any > > = {
  setDrawer: (state: IState, payload: boolean) => (state.drawer = payload),
  toggleDrawer: (state: IState) => (state.drawer = !state.drawer)
};
