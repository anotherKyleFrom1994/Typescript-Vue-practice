import { State, Mutation, MutationTree } from '@/plugins/store';

export enum MutationType {
    SET_USER = 'setUser',
    SET_IMAGES = 'setImages',
    SET_ARTICLES = 'setArticles'
};

const mutations: MutationTree<Mutation<any>> = {
    setUser: (state: State<any>, user: any) => { state.user = user; },
    setImages: (state: State<any>, images: any) => { state.images = images; },
    setArticles: (state: State<any>, articles: any) => { state.articles = articles; }
};

export default mutations;
