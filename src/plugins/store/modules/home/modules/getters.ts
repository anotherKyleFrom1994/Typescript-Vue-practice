import { State } from '@/plugins/store';
import { GetterTree, Getter } from 'vuex';

export enum GetterType {
  CATEGORIES = 'categories',
  LINKS = 'categories'
};

export interface Category {
  text: any;
  to: string;
}

const getters: GetterTree<State<any>, Getter<string, any>> = {
  categories: (state: State<any>) => {
    const categories: Category[] = [];

    for (const topic of state.topics) {
      if (
        !topic.category ||
        categories.find(category => category.text === topic.category)
      ) continue;

      const text = topic.category;

      categories.push({
        text,
        to: `/category/${text}`
      });
    }

    return categories.sort().slice(0, 4);
  },
  links: (state: State<any>, getters: any) => {
    return state.items.concat(getters.categories);
  }
};

export default getters;
