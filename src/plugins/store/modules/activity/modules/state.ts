import { articles } from '@/data/articles';
import { State } from '@/plugins/store';

const state: State<any> = {
  photos: articles,
  sponsorId: ''
};

export default state;
