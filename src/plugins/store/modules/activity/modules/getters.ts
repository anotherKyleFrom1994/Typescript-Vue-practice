import { State } from '@/plugins/store';
import { GetterTree, Getter } from 'vuex';

export interface Category {
  text: any;
  to: string;
}

const getters: GetterTree<State<any>, Getter<string, any>> = {
  categories: (state: State<any>) => {
    const categories: Category[] = [];

    for (const photo of state.photos) {
      if (
        !photo.category ||
        categories.find(category => category.text === photo.category)
      ) continue;

      const text = photo.category;

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
