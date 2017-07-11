const path = require('path');
const BabiliPlugin = require('babili-webpack-plugin');

module.exports = {
  entry: {
    'angular-auth0.js': './src/index.js',
    'angular-auth0.min.js': './src/index.js'
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'dist')
  },
  externals: {
    angular: 'angular',
    'auth0-js': 'auth0'
  },
  plugins: [
    new BabiliPlugin({}, {
      test: /\.min\.js$/
    })
  ]
};
