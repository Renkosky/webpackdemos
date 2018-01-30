# webpackdemos

## dem01

> npm install lodash --save

entry/output: 
```Javascript
/*webpackconfig.js*/
entry: './src/index.js',/*入口文件*/
    output: {
        filename: 'bundle.js',/*输出后的打包文件*/
        path: path.resolve(__dirname, 'dist')
    }
```
build with script
``` Javascript
/*package.json*/
"scripts": {
    "build": "webpack"
  },
  
```
## dem02

css/file/csv/xml loaders<br>

> npm install --save-dev style-loader file-loader csv-loader xml-loader css-loader

```Javascript
/*webpackconfig.js*/
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
```
## demo3
根据入口起点名称动态生成 bundle 名称
```Javascript
  module.exports = {
    entry: './src/index.js',
    entry: {
      app: './src/index.js',
      print: './src/print.js'
   },
    output: {
      filename: 'bundle.js',
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
```
安装 html-webpack-plugin插件 [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
> npm install --save-dev html-webpack-plugin


安装 html-webpack-plugin插件
> npm install clean-webpack-plugin --save-dev
html-webpack-plugin可以清理/dist文件夹

```javascript
  /*webpack.config.js*/
  const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');

  module.exports = {
    entry: {
      app: './src/index.js',
      print: './src/print.js'
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        title: 'Output Management'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };
```