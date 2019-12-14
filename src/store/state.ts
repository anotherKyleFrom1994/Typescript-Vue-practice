import { articles, IArticle } from '@/data/articles';

export interface IState {
  [key: string]: any
}

interface IItem {
  [key: string]: string
}

let items: IItem[] = [{
    text: 'Home',
    to: '/'
  },
  {
    text: 'About',
    href: '#about'
  }
];

export const state: IState = {
  articles: articles,
  drawer: false,
  items: items
};
