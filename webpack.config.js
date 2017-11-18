const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/app.js', // do zmiany
  output: {
    path: path.resolve(__dirname, 'dist'), // potencjalnie do zmiany?
    filename: 'app-bundled.js', // do zmiany
    publicPath: '/'
  },
  watch: true, // I see you
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
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