const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => {
  const isProduction = options.mode === 'production';

  const config = {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? 'eval' : 'source-map',
    watch: !isProduction,
    entry: ['./src/index.js', './src/sass/style.scss'],
    output: {
      filename: 'script.js',
      path: path.join(__dirname, '/docs')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env']]
            }
          }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader'
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.html$/i,
          loader: 'html-loader'
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
      new CopyPlugin({
        patterns: [{ from: 'src/data/data.json' }]
      })
    ]
  };

  return config;
};
