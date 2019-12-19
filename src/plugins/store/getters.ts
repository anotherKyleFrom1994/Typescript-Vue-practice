import { IState } from './state';
import { GetterTree, Getter } from 'vuex';

export interface IGetters {
  [key: string]: any
}

export const getters: GetterTree < IState, Getter < string, any > > = {
  categories: (state: IState) => {
    const categories: ICategory[] = [];

    for (const article of state.articles) {
      if (
        !article.category ||
        categories.find(category => category.text === article.category)
      ) continue;

      const text = article.category;

      categories.push({
        text,
        to: `/category/${text}`
      });
    }

    return categories.sort().slice(0, 4);
  },
  links: (state: IState, getters: IGetters) => {
    return state.items.concat(getters.categories);
  }
};

export interface ICategory {
  text: any;
  to: string;
}
