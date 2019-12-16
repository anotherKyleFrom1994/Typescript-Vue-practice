module.exports = {
  publicPath: './',
  devServer: {
    public: '192.168.0.112:8080',
    proxy: 'https://127.0.0.1:8080'
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

    // config.module.use('vue-style-loader');
    // config.module.use('css-loader');
    // config.module
    // .test(/\.s[ac]ss$/i)
    // .use([
    //   // Creates `style` nodes from JS strings
    //   'style-loader',
    //   // Translates CSS into CommonJS
    //   'css-loader',
    //   // Compiles Sass to CSS
    //   'sass-loader'
    // ])
    // .tap(options => {
    //   options.implementation(require('sass'));
    //   options.sassOptions({
    //     fiber: require('fibers'),
    //     indentedSyntax: true // optional
    //   });
    // });
  }
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       test: /\.s(c|a)ss$/,
  //       use: [
  //         'vue-style-loader',
  //         'css-loader',
  //         {
  //           loader: 'sass-loader',
  //           // Requires sass-loader@^8.0.0
  //           options: {
  //             implementation: require('sass'),
  //             sassOptions: {
  //               fiber: require('fibers'),
  //               indentedSyntax: true // optional
  //             }
  //           }
  //         }
  //       ]
  //     }
  //   }
  // }
};
