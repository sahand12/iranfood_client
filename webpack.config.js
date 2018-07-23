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
    filename: '[name].bundle.js',
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devServer: {
    port: 4000,
    hot: true,
    publicPath: '/dist/', // Recommended to be the same as `output.publicPath`
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    historyApiFallback: true,
    inline: true,
    open: true,
    // proxy: {
    //   // Proxying some urls for the backend API
    //   // request to /api/users => http://localhost:3000/api/users
    //   '/api': 'http://localhost:3000',
    // },
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output management',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  stats: {
    colors: true,
    reasons: true,
    chunks: false,
  },
};

module.exports = config;
