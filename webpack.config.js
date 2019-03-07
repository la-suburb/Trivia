const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './client/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  devServer: {
    open: true,
    contentBase: './',
    publicPath: '/build/',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
        resolve: {
          extensions: ['*', '.js', '.jsx']
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.scss$/,
        use: {
          loader: 'scss-loader'
        }
      }
    ]
  }
};
