const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isProd = process.env.NODE_ENV === 'production'

const cssLoaders = [
  isProd ? MiniCssExtractPlugin.loader : {
    loader: 'vue-style-loader',
    options: { sourceMap: !isProd }
  },
  {
    loader: 'css-loader',
    options: { sourceMap: !isProd }
  }
]

const config = merge(base, {
  entry: {
    app: './assets/entry-client.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders
      },
      {
        test: /\.stylus$/,
        use: [
          ...cssLoaders,
          {
            loader: 'stylus-loader',
            options: { sourceMap: false } // stylus-loader sucks at sourcemaps
          }
        ]
      }
    ]
  },
  plugins: [
    // strip dev-only code in Vue source
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    new VueSSRClientPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ],
  optimization: {
    minimize: isProd,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 20,
      maxInitialRequests: 5,
      name: true,
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    }
  }
})

isProd && config.plugins.push(
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
  })
)

module.exports = config
