/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import webpack from 'webpack';
import Config from 'webpack-config';
import autoprefixer from 'autoprefixer';
import Dotenv from 'dotenv-webpack';

import fontsLoader from './loaders/loaders/fonts';
import imagesLoader from './loaders/loaders/images';
import jsLoader from './loaders/loaders/js';

import stats from './plugins/stats';

const env = process.env.NODE_ENV;
const isWebpackDevServer = process.argv[1].indexOf('webpack-dev-server') !== -1;
const inProduction = env === 'production';

// SHARED CONFIGURATION BETWEEN ALL ENVIRONMENTS
export default new Config().merge({
  stats: 'errors-only',
  devtool: inProduction ? false : 'cheap-module-source-map',
  cache: true,
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  entry: {
    main: ['./src/index.js'],
  },
  output: {
    filename: '[name].js',
    pathinfo: !inProduction,
    path: `${process.cwd()}/build`,
    publicPath: '/',
  },

  // ADD WEBPACK DEV SERVER CONFIGURATION IN WATCH MODE
  ...(isWebpackDevServer ? {
    devServer: {
      stats: 'errors-only',
      contentBase: 'build',
      historyApiFallback: true,
      hot: true,
      port: process.env.WDS_PORT || 3000,
    },
  } : {}),

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        context: __dirname,
        postcss: [autoprefixer],
      },
    }),
    new webpack.ContextReplacementPlugin(/moment[\\]locale$/, /^\.\/(en-us)$/),
    new Dotenv({ systemvars: true }),

    // development plugins
    ...(!inProduction ? [
      stats,
    ] : []),

    // ADD HMR PLUGIN IN WATCH MODE
    ...(isWebpackDevServer ? [
      new webpack.HotModuleReplacementPlugin(),
    ] : []),
  ],
  module: {
    rules: [
      fontsLoader,
      imagesLoader,
      jsLoader,
    ],
  },
});
