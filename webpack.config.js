const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

const config = {
  mode: 'development',
  entry: {
    app: './src/index.jsx',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    hot: true,
    publicPath: '/dist/', // Recommended to be the same as `output.publicPath`
    contentBase: path.resolve(__dirname, 'public'),
    historyApiFallback: true,
    // hot: true, // enable HMR
    inline: true,
    stats: 'minimal',
    open: true,
    overlay: {
      // Show compile errors and warning with an overlay on browser window
      warning: true,
      errors: true,
    },
    // proxy: {
    //   // Proxying some urls for the backend API
    //   // request to /api/users => http://localhost:3000/api/users
    //   '/api': 'http://localhost:3000',
    // },
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false,
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;
