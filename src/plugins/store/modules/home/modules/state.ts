import { articles } from '@/data/articles';
import { State } from '@/plugins/store';
export enum StateType {
  TOPICS = 'topics',
  DRAWER = 'drawer',
  ITEMS = 'items'
};

export interface Item {
  [key: string]: string;
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

const state: State<any> = {
  topics: articles,
  drawer: false,
  items: items
};

export default state;
