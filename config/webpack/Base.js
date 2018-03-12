const fs = require('fs');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const npmBase = path.join(__dirname, '../../node_modules');

class WebpackBaseConfig {
  constructor() {
    this._config = {};
  }

  get includedPackages() {
    return [].map((pkg) => fs.realpathSync(path.join(npmBase, pkg)));
  }

  set config(data) {
    this._config = Object.assign({}, this.defaultSettings, data);
    return this._config;
  }

  get config() {
    return this._config;
  }

  get env() {
    return 'dev';
  }

  get srcPathAbsolute() {
    return path.resolve('./src');
  }

  get defaultSettings() {
    const cssModulesQuery = {
      modules: true,
      importLoaders: 1,
      localIdentName: '[name]-[local]-[hash:base64:5]',
    };

    return {
      context: this.srcPathAbsolute,
      entry: './index.js',
      devtool: 'inline-source-map',   
      output: {
        path: path.resolve(__dirname, 'dist'),
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
          {
             test: /\.js$/, 
             exclude: /node_modules/, 
             use: [
               { 
                 loader: 'babel-loader', 
                 options: { 
                   'presets': ['env', 'react', 'stage-2', 'stage-3'] ,
                  }, 
                },
              ] ,
          },
          {
             test: /\.(jpe?g|gif|png|eot|svg|woff|woff2|ttf)$/, 
             use: 'file-loader' ,
          }, 
          // font & image loader          
          {
             test: /\.css$/,
             use: ExtractTextPlugin.extract({ 
               fallback: 'style-loader', 
               use: 'css-loader',
            }) ,
          },
        ],
      },                
    };
  }
}

module.exports = WebpackBaseConfig;
