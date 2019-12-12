import { IState } from './state';

export default {
  setDrawer: (state: IState, payload: boolean) => (state.drawer = payload),
  toggleDrawer: (state: IState) => (state.drawer = !state.drawer)
};
