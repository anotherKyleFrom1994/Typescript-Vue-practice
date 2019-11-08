module.exports = {
  // file(.js or .css) visiting url, change to relative way
  publicPath: './',
  devServer: {
    public: '192.168.0.112:8080',
    proxy: 'http://localhost:8080'
  },
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
