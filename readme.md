# webpackdemos
本demo是按照webpack中文官网文档分步搭建的，配合文档一起看最合适
 [官方文档](https://doc.webpack-china.org/guides/)
## dem01
[起步](https://doc.webpack-china.org/guides/getting-started/)
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
[管理资源](https://doc.webpack-china.org/guides/asset-management/)

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
[管理输出](https://doc.webpack-china.org/guides/output-management/)~
[开发](https://doc.webpack-china.org/guides/development/)
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

## demo04 
[HRM](https://doc.webpack-china.org/guides/hot-module-replacement/)

### 使用sourcemap来追踪错误

在webpack.config.js中添加
```Javascript
 devtool: 'inline-source-map' 
 ```
打包后观察浏览器的console信息可以看到报错信息

### webpack-dev-server

webpack-dev-server提供了一个简单的 web 服务器，并实时重新加载

> npm install --save-dev webpack-dev-server
在webpack.config.js中添加
```Javascript
  devServer: {
    contentBase: './dist'
  },
```
在package.json中添加
``` Javascript
  "scripts": {
      "start": "webpack-dev-server --open",
      "build": "webpack"
  },
```

现在在文件中的修改会自动更新 

## demo05 生产环境构建 
[生产环境](https://doc.webpack-china.org/guides/production/)

### 拆分webpack配置
安装 webpack-merg,拆分webpack配置
> cnpm install --save-dev webpack-merg


新建三个不同的webpcak配置文件

 webpack.common.js<br>
 webpack.dev.js<br>
 webpack.prod.js
 
### 修改npm scripts

```javascript
  "scripts": {
    "start": "webpack-dev-server --open --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
},

```

### 使用sourcemap

```javascript
/*webpack.prod.js*/

  const merge = require('webpack-merge');
  const UglifyJSPlugin = require('uglifyjs-webpack-plugin');//Treeshaking，用于删除上下文中的多余js代码
  const common = require('./webpack.common.js');

  module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
      new UglifyJSPlugin({
        sourceMap: true
      })
    ]
  })
```

### 指定环境
```javascript
//webpack.prod.js

  const webpack = require('webpack');
  const merge = require('webpack-merge');
  const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
  const common = require('./webpack.common.js');

  module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
      new UglifyJSPlugin({
        sourceMap: true
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ]
  })
  ```