import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
// import 'vuetify/src/stylus/app.styl';
// import 'vuetify/src/styles/main.sass';

Vue.use(Vuetify);
const opts = {
  theme: {
    primary: '#CBAA5C',
    secondary: '#083759'
  },
  iconfont: 'mdi'
};

export default new Vuetify({
  opts
});
