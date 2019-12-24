import { articles } from '@/data/articles';

export interface State {
  [key: string]: any
}

export interface Item {
  [key: string]: string
}

let items: Item[] = [{
    text: 'Home',
    to: '/'
  },
  {
    text: 'About',
    href: '#about'
  }
];

const state: State = {
  articles: articles,
  drawer: false,
  items: items
};

export default state;
