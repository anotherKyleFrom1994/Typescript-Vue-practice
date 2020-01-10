import { articles } from '@/data/articles';
import { State } from '@/plugins/store';

export enum StateType {
  PHOTOS = 'photos',
  SPONSOR_ID = 'sponsorId'
};

const state: State<any> = {
  photos: articles,
  sponsorId: ''
};

export default state;
