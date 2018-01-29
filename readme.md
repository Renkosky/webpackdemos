# webpackdemos

## dem01
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
