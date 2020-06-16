const webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';
const path = require('path');

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
  },
  performance: {
    hints: false,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'initial',
        },
      },
    },
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    minimize: !isDevelopment,
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new SVGSpritemapPlugin('src/images/*.svg', {
      sprite: {
        generate: {
          // view: true
        },
      },
      styles: {
        filename: '~sprites.scss',
        // format: 'fragment',
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDevelopment,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    publicPath: '/dist/',
    contentBase: [path.join(__dirname, 'src/views'), path.join(__dirname, 'src')],
    watchContentBase: true,
    compress: true,
    port: 9000,
    writeToDisk: true
  },
};
