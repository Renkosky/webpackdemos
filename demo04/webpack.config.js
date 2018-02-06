const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//会生成index.html
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },/*入口文件*/
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Development'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};