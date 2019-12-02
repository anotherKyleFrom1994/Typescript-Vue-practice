module.exports = {
  'publicPath': '/',
  'devServer': {
    'public': '192.168.0.112:8080',
    'proxy': 'http://localhost:8080'
  },
  'pages': {
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
  'transpileDependencies': [
    'vuetify'
  ]
};
