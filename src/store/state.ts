import { articles } from '@/data/articles';

export interface IState {
  [key: string]: any
}

export default {
  articles: articles,
  drawer: false,
  items: [{
      text: 'Home',
      to: '/'
    },
    {
      text: 'About',
      href: '#about'
    }
  ]
};
