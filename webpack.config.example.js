var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./example/demo.js",
  output: {
    path: path.resolve(__dirname, './example-dist'),
    publicPath:"/example-dist/",
    filename: "demo.js",
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    // new webpack.BannerPlugin(fs.readFileSync('./LICENSE.txt', 'utf8')),
  ],
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    disableHostCheck: true,
    hot: true,
    inline: true
  }
};
