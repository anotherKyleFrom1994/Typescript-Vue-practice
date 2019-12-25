import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'vuetify/src/styles/main.sass';
import '@mdi/font/css/materialdesignicons.css';
import './fonts/roboto.css';
import { Theme } from 'vuetify/types/services/theme';
import { Icons } from 'vuetify/types/services/icons';

Vue.use(Vuetify);

const icons: Icons = { iconfont: 'mdi' };

const baseTheme = {
  primary: '#CBAA5C',
  secondary: '#083759',
  accent: undefined,
  info: undefined,
  warning: undefined,
  error: undefined,
  success: undefined
};

const theme: Theme = {
  dark: false,
  disable: false,
  default: false,
  options: {
    minifyTheme: function (css: string) {
      return process.env.NODE_ENV === 'production' ? css.replace(/[\r\n|\r|\n]/g, '') : css;
    },

    // Enabling customProperties will also generate a css variable for each theme color, which you can then use in your components' <style> blocks.
    customProperties: true
  },

  themes: {
    dark: baseTheme,
    light: baseTheme
  },
  currentTheme: baseTheme
};

const vuetify = new Vuetify({
  theme: theme,
  icons: icons
});

export default vuetify;
