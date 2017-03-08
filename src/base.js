/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import webpack from 'webpack';
import Config from 'webpack-config';
import path from 'path';
import objectPath from 'object-path';
import ExtractText from 'extract-text-webpack-plugin';

import loaders from './loaders';
import {
  browserSync,
  define,
  occurrenceOrder,
  stats,
} from './plugins';

const env = process.env.NODE_ENV;
const production = env === 'production';
const filename = process.env.NODE_ENV ? '[name]' : '[name].[hash]';

// SHARED CONFIGURATION BETWEEN ALL ENVIRONMENTS
let config = new Config().merge({
  cache: true,

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  entry: {
    vendors: ['./src/index.js'],
  },

  output: {
    pathinfo: !production,
    path: 'build',
    filename: `${filename}.js`,
    publicPath: `/`,
    chunkFilename: `/${filename.replace('hash', 'chunkhash')}.js`,
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        context: __dirname,
        postcss: () => ([autoprefixer]),
      },
    }),
    new ExtractText({
      filename: `${filename}.css`,
      disable: false,
      allChunks: true,
    }),
    new webpack.ContextReplacementPlugin(/moment[\\]locale$/, /^\.\/(en-us)$/),
    new webpack.optimize.CommonsChunkPlugin({
      name: `${filename}.js`,
      children: true,
    }),
    occurrenceOrder,
    define,
  ],

  module: {
    rules: [
      loaders.css,
      loaders.fontgen,
      loaders.fonts,
      loaders.images,
      loaders.js,
      loaders.scss,
    ],
  },
});

// NON PRODUCTION CONFIGURATION
if (!production) {
  config = config.merge({
    plugins: [
      browserSync,
      stats,
    ],
  });

  // ADD WEBPACK DEV SERVER CONFIGURATION IN WATCH MODE
  if (config.watch) {
    config = config.merge({
      devServer: {
        contentBase: process.env.APP_URL,
        historyApiFallback: {
          index: '/index.html',
        },
        hot: true,
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
      ],
    });
  }
}

export default config;
