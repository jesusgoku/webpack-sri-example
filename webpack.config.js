const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SriPlugin = require('webpack-subresource-integrity');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV,

  entry: './src/js/main.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    crossOriginLoading: 'anonymous', // false, anonymous, use-credentials
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'HTML Webpack Plugin + IntegrityHello World',
      template: path.resolve(__dirname, 'src/index.ejs'),
    }),

    new SriPlugin({
      hashFuncNames: ['sha256', 'sha384'],
      enabled: process.env.NODE_ENV === 'production',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
