const path = require('path');

module.exports = {
  entry: './src/index.js',/*入口文件*/
  output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,/*$匹配.css结尾的文件 */
        use: [
          'style-loader',
          'css-loader'
          ]
        },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
            'csv-loader'
          ]
      },
      {
        test: /\.xml$/,
        use: [
            'xml-loader'
          ]
      }
    ]
  }
};