import AxiosHandler, { AxiosResponse } from '@/plugins/axios-handler';
import { ActionContext, State } from '@/plugins/store';
import { MutationType } from './mutations';

export enum ActionType {
    FETCH_USER = 'fetchUser',
    FETCH_IMAGES = 'fetchImages',
    FETCH_ARTICLES = 'fetchArticles'
};

const actions = {
    fetchUser: () => {
        return AxiosHandler.requestGet('fetchUser', {

        });
    },

    fetchImages: (ctx: ActionContext<State<any>, State<any>>) => {
        return AxiosHandler.requestGet('fetchImages', {
            size: '1024*720'
        }).then(
            (response: void | AxiosResponse<any>) => {
                ctx.commit(MutationType.SET_IMAGES, response);
            }
        );
    },

    fetchArticles: () => {
        return AxiosHandler.requestGet('fetchArticles', {

        });
    }
};

export default actions;
