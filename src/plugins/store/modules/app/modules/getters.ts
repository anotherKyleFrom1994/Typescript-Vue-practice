import { State } from './state';
import { GetterTree, Getter } from 'vuex';

export interface IGetters {
  [key: string]: any
}

export interface Category {
  text: any;
  to: string;
}

const getters: GetterTree < State, Getter < string, any > > = {
  categories: (state: State) => {
    const categories: Category[] = [];

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
  links: (state: State, getters: IGetters) => {
    return state.items.concat(getters.categories);
  }
};

export default getters;
