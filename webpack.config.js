const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'Title',
      header: 'Hello, world!',
      metaDesc: 'Description',
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  mode: 'development',
  output: {
    clean: true,
  },
  devServer: {
    static: './dist',
    open: true,
  },
};
