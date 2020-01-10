import { State } from '@/plugins/store';
import { MutationTree, Mutation } from 'vuex';

export enum MutationType {
  SET_DRAWER = 'setDrawer',
  TOGGLE_DRAWER = 'toggleDrawer'
};

const mutations: MutationTree<Mutation<any>> = {
  setDrawer: (state: State<any>, payload: boolean) => (state.drawer = payload),
  toggleDrawer: (state: State<any>) => (state.drawer = !state.drawer)
};

export default mutations;
