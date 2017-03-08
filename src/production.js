/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import webpack from 'webpack';
import Config from 'webpack-config';
import CleanPlugin from 'clean-webpack-plugin';

export default new Config().extend('base.js').merge({
  devtool: false,
  plugins: [
    new CleanPlugin('/build', process.cwd()),
		new webpack.optimize.UglifyJsPlugin({
	    mangle: true,
	    compress: {
	      screw_ie8: true,
	      warnings: false,
	    },
	  }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.MinChunkSizePlugin({
      minChunkSize: 2048,
    }),
  ],
});