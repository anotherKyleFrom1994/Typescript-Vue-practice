import { Store } from 'vuex';
import { State } from '@/plugins/store';
import { requestGet } from '@/plugins/axios-handler';

const actions = {
  fetchImages: function () {
    return requestGet('fetchImages', {
      size: '1024*720'
    });
  }
};

export default actions;
