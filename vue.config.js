module.exports = {
  publicPath: './',
  devServer: {
    'public': '192.168.0.112:8080',
    'proxy': 'http://localhost:8080'
  },
  pages: {
    'index': {
      'entry': 'src/main.ts',
      'template': 'public/index.html',
      'filename': 'index.html',
      'title': 'Index Page',
      'chunks': [
        'chunk-vendors',
        'chunk-common',
        'index'
      ]
    }
  },
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        return options;
      });

    config.module
      .rule('eslint')
      .use('eslint-loader')
      .tap(options => {
        options.overlay = {
          'warnings': true,
          'errors': true
        };
        options.lintOnSave = process.env.NODE_ENV !== 'production';
        return options;
      });
  }
};
