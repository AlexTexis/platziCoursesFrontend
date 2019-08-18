const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TersetJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
  entry  : {
    app : path.resolve(__dirname,'src/index.js'),
  },
  mode : 'production',
  output : {
    path : path.resolve(__dirname,'dist'),
    filename : 'js/[name].js',
    chunkFilename :'js/[name].[chunkhash].js',
    publicPath : '/'
  },
  optimization : {
    minimizer : [
      new TersetJSPlugin(),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  module : {
    rules : [
      {
        test : /\.js$/,
        exclude : /node_modules/ ,
        use : {
          loader : 'babel-loader'
        }
      },
      {
        test : /\.css$/,
        use : [
          { loader :  MiniCssExtractPlugin.loader } ,
          'css-loader'
        ]
      },
      {
        test : /\.png|jpg$/,
        use : {
          loader : 'url-loader',
          options : {
            limit : 1000,
            outputPath : 'static',
            name : '[hash].[ext]'
          }
        }
      },

    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      template : path.resolve(__dirname,'public/index.html'),
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename : 'css/[name].[hash].css',
      chunkFilename : path.resolve(__dirname,'css/[id].[hash].css')
    }) ,
    new WebpackPwaManifestPlugin({
      name : 'Platzi Courses | La app que escucha la comunidad',
      short_name : 'Platzi Courses',
      description : 'Plataforma donde podras compartir que curso te gustaria ver en platzi',
      theme_color : '#98CA3F',
      background_color : '#fff',
      icons : [
        {
          src : path.resolve(__dirname,'src/static/platzi.png'),
          size : [96,128,192,256,384,512]
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching : [
        {
          urlPattern : new RegExp('https://platzi-courses-node.alextexis.now.sh'),
          handler : 'NetworkFirst',
          options :{
            cacheName : 'api'
          }
        }
      ]
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.*'],
    }) 
  ]
}