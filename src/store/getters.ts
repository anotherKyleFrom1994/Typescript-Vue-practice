import { IState } from './state';

interface ICategory {
  text: any;
  to: string;
}

interface IGetters {
  [key: string]: any
}

export default {
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
