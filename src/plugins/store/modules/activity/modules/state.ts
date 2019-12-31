import { articles } from '@/data/articles';
import { State } from '@/plugins/store';

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
  photos: articles,
  drawer: false,
  items: items
};

export default state;
