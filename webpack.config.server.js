var path = require('path');
var config = require('./webpack.config');
var nodeExternals = require('webpack-node-externals');

var config = {
  ...config,
  entry: {
    server: [path.resolve(__dirname, 'server/index.js')],
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  externals: [nodeExternals()],
};

module.exports = config;