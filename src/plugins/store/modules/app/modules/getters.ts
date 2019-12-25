import { GetterTree, Getter } from 'vuex';
import { State } from '@/plugins/store';

const getters: GetterTree < State, Getter < string, any > > = {};

export default getters;
