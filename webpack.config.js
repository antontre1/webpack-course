const webpack = require('webpack');
const path = require('path');
const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // all your loaders will be here.
      // loaders enables you to use all kinds of
      // file types
    ]
  }
}
module.exports = config;

/*
babel-loader is the webpack loader for babel
babel-core is ...the core of babel
babel-preset-env this is the part of babel that lets us use the latest version of JS
*/
