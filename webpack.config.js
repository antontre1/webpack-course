const webpack = require('webpack');
const path = require('path');
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    // all your loaders will be here.
    // loaders enables you to use all kinds of
    // file types
    rules: [
      {
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: 'babel-loader'
      }
    ]
  }
}
module.exports = config;

/*
babel-loader is the webpack loader for babel
babel-core is ...the core of babel
babel-preset-env this is the part of babel that lets us use the latest version of JS
*/
