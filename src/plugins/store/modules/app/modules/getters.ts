import { GetterTree, Getter } from 'vuex';
import { State } from '@/plugins/store';

export enum GetterType {

};

const getters: GetterTree<State<any>, Getter<string, any>> = {};

export default getters;
