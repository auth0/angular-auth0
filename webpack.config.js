const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    'angular-auth0.js': './src/index.js',
    'angular-auth0.min.js': './src/index.js'
  },
  output: {
    filename: '[name]',
    path: path.resolve(__dirname, 'dist'),
    environment: {
      arrowFunction: false,
      bigIntLiteral: false,
      const: false,
      destructuring: false,
      dynamicImport: false,
      forOf: false,
      module: false,
    }
  },
  externals: {
    angular: 'angular',
    'auth0-js': 'auth0'
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      test: /\.min\.js$/
    })],
  }
};
