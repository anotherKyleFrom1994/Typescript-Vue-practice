import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/src/styles/main.sass';

const opts = {
  theme: {
    primary: '#CBAA5C',
    secondary: '#083759'
  },
  iconfont: 'mdi'
};
Vue.use(Vuetify, opts);

export default new Vuetify({
  opts
});
