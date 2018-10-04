const path = require('path');

const APP_DIR = path.resolve(__dirname, 'app');
const BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
  mode: 'development',
  entry: APP_DIR + '/index.jsx',
  output: {
    filename: 'main.js',
    path: BUILD_DIR,
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    contentBase: BUILD_DIR,
    port: 3333
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
