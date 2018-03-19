var path = require('path');
var config = require('./webpack.config');
var webpack = require('webpack');

var config = {
  ...config,
  entry: {
    client: [path.resolve(__dirname, 'client/index.js')],
    vendor: [
      'react',
      'react-dom',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
  ]
};

module.exports = config;