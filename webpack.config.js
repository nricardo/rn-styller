const path = require('path');
const webpack = require('webpack');

module.exports = {
  // set mode
  mode: 'development',

  //


  // your web-specific entry file
  entry: './index.js',

  // configures where the build ends up
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      // transpile ES6 into native JS
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ]
  },

  plugins: [
    // `process.env.NODE_ENV === 'production'` must be `true` for production
    // builds to eliminate development checks and reduce build size. You may
    // wish to include additional optimizations.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __DEV__: process.env.NODE_ENV !== 'production' || true
    })
  ],

  // resolvers definitions
  resolve: {
    extensions: ['.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
}
