/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

/* eslint-disable spaced-comment, no-param-reassign */

import webpack from 'webpack';
import ExtractText from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';

export default function (config, options, loaders, plugins) {
  //////////////////////////////////////////////////////////////////////
  ////////////////////////////// DEFAULTS //////////////////////////////
  //////////////////////////////////////////////////////////////////////

  config = config.merge({
    output: {
      publicPath: `/${options.outputPath.replace('public/', '')}`,
      chunkFilename: `${options.filenames.replace('hash', 'chunkhash')}.js`,
    },
    plugins: [
      new ExtractText(`${options.filenames}.css`, { allChunks: true }),
      new webpack.ContextReplacementPlugin(/moment[\\]locale$/, /^\.\/(en-us)$/),
      plugins.assets,
      plugins.occurenceOrder,
    ],
    module: {
      preLoaders: [
        loaders.baggage,
      ],
      loaders: [
        loaders.css,
        loaders.scss,
        loaders.js,
        loaders.html,
        loaders.fontgen,
        loaders.json,
        loaders.fonts,
        loaders.webfonts,
        loaders.images,
      ],
    },
    postcss: () => ([autoprefixer]),
  });

  if (options.ts) {
    config.merge({
      module: {
        loaders: [loaders.ts],
      },
    });
  }

  //////////////////////////////////////////////////////////////////////
  ////////////////////////////// LINTING ///////////////////////////////
  //////////////////////////////////////////////////////////////////////

  if (options.linting && options.development) {
    // eslint
    config = config.merge({
      module: {
        preLoaders: [
          loaders.eslint,
        ],
      },
    });
    // flow
    config.plugins.push(plugins.flowStatus);
  }

  //////////////////////////////////////////////////////////////////////
  /////////////////////////////// LOCAL ////////////////////////////////
  //////////////////////////////////////////////////////////////////////

  if (options.development) {
    config.plugins.push(plugins.stats);
  }

  //////////////////////////////////////////////////////////////////////
  ////////////////////////// SOURCEMAPS ////////////////////////////////
  //////////////////////////////////////////////////////////////////////

  if (options.development) {
    config = config.merge({
      debug: true,
      devtool: '#eval-cheap-module-source-map',
      output: {
        devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]?[loaders]',
        pathinfo: true,
      },
      module: {
        preLoaders: [
          loaders.sourcemap,
        ],
      },
    });
  }

  //////////////////////////////////////////////////////////////////////
  ////////////////////////// BROWSERSYNC ///////////////////////////////
  //////////////////////////////////////////////////////////////////////

  if (options.development && options.devServer) {
    config.plugins.push(plugins.browserSync);
  }

  //////////////////////////////////////////////////////////////////////
  //////////////////////////////// HMR /////////////////////////////////
  //////////////////////////////////////////////////////////////////////

  if (options.hot && options.devServer) {
    config = config.merge({
      output: {
        publicPath: `${options.devServer}/${options.outputPath}`,
      },
      devServer: {
        contentBase: options.contentBase,
        historyApiFallback: {
          index: options.indexPage,
        },
        hot: true,
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // disable for linting
        // new webpack.NoErrorsPlugin()
      ],
    });

    config.entry[options.name].unshift(
      `webpack-dev-server/client?${options.devServer}`,
      'webpack/hot/only-dev-server',
    );
  } else if (options.hot && !options.devServer) {
    config.entry[options.name].push('webpack-hot-middleware/client?reload=true');

    config = config.merge({
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // disable for linting
        // new webpack.NoErrorsPlugin()
      ],
    });
  }

  //////////////////////////////////////////////////////////////////////
  ///////////////////////////// PRODUCTION /////////////////////////////
  //////////////////////////////////////////////////////////////////////

  if (!options.development) {
    config = config.merge({
      plugins: [
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
          name: options.name,
          children: true,
        }),
        // https://github.com/webpack/extract-text-webpack-plugin/issues/115
        new webpack.optimize.MinChunkSizePlugin({
          minChunkSize: options.inlineLimit,
        }),
      ],
    });
  }

  return config;
}
