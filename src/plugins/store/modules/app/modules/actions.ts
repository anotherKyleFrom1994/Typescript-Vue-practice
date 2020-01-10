import AxiosHandler, { AxiosResponse } from '@/plugins/axios-handler';
import { ActionContext, State } from '@/plugins/store';
import { MutationType } from './mutations';

export enum ActionType {
    FETCH_USER = 'fetchUser',
    FETCH_IMAGES = 'fetchImages',
    FETCH_ARTICLES = 'fetchArticles'
};

const actions = {
    fetchUser: (context: ActionContext<State<any>, State<any>>) => {
        return AxiosHandler.requestGet('fetchArticles', {

        }).then(
            (response: void | AxiosResponse<any>) => {
                context.commit(MutationType.SET_USER, response);
            }
        );
    },

    fetchImages: (context: ActionContext<State<any>, State<any>>) => {
        return AxiosHandler.requestGet('fetchImages', {
            size: '1024*720'

        }).then(
            (response: void | AxiosResponse<any>) => {
                context.commit(MutationType.SET_IMAGES, response);
            }
        );
    },

    fetchArticles: (context: ActionContext<State<any>, State<any>>) => {
        return AxiosHandler.requestGet('fetchArticles', {

        }).then(
            (response: void | AxiosResponse<any>) => {
                context.commit(MutationType.SET_ARTICLES, response);
            }
        );
    }
};

export default actions;
