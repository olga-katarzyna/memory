const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app-bundled.js',
    publicPath: '/'
  },
  watch: true,
  module: {
    rules: [
      { 
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          query: { 
            presets: ['es2015', 'stage-2', 'react']
          }
        }
      },
      { 
        test: /\.(jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          query: { 
            presets: ['es2015', 'stage-2', 'react']
          }
        }
      },
      { test: /\.css$/, 
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};