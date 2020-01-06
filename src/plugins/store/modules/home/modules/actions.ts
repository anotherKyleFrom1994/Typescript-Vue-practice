import { Store } from 'vuex';
import { State } from '@/plugins/store';
import AxiosHandler from '@/plugins/axios-handler';

const actions = {
  fetchImages: function () {
    return AxiosHandler.requestGet('fetchImages', {
      size: '1024*720'
    });
  }
};

export default actions;
