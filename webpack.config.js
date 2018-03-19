var path = require('path');

var config = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   loaders: ['style-loader', 'css-loader'],
      // },
      // {
      //   test: /\.(jpe?g|gif|png|svg)$/i,
      //   loader: 'url-loader?limit=10000',
      // }
    ]
  },
};

module.exports = config;