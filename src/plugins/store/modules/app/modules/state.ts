import { articles } from '@/data/articles';
import { State } from '@/plugins/store';
export enum StateType {
};

const state: State<any> = {
    user: {},
    images: {},
    articles: {}
};

export default state;
