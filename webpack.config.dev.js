const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry : {
    app : path.resolve(__dirname,'src/index')
  },
  output : {
    path : path.resolve(__dirname,'dist'),
    filename : 'js/[name].js',
    chunkFilename : 'js/[id].[chunkhash].js',
    publicPath : '/'
  },
  devServer : {
    port : 8080,
    open : true,
    hot : true,
    contentBase : path.resolve(__dirname,'dist'),
    historyApiFallback : true
  },
  module : {
    rules : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        use : {
          loader : 'babel-loader'
        }
      },
      {
        test : /\.css|scss$/,
        use : ['style-loader','css-loader'] 
      },
      {
        test : /\.png|jpg$/,
        use : {
          loader : 'file-loader'
        }
      }
    ]
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template : path.resolve(__dirname,'public/index.html')
    })
  ]
}