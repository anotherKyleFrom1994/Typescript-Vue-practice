import { State } from './state';
import { MutationTree, Mutation } from 'vuex';

const mutations: MutationTree < Mutation < any > > = {
  setDrawer: (state: State, payload: boolean) => (state.drawer = payload),
  toggleDrawer: (state: State) => (state.drawer = !state.drawer)
};

export default mutations;
