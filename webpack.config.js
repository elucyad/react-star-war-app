const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/assets',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    inline: true,
    port: 5000,
  },
  plugins: [    
    new ExtractTextPlugin('styles.css'),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: [{ loader: 'babel-loader', options: { 'presets': ['env', 'react', 'stage-2', 'stage-3'] } }] },
      { test: /\.(jpe?g|gif|png|eot|svg|woff|woff2|ttf)$/, use: 'file-loader' }, // font & image loader      
      { test: /\.css$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader'] }) },
    ],
  },
};
