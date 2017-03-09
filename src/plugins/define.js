/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import webpack from 'webpack';

export default new webpack.DefinePlugin({
  'process.env.BABEL_ENV': JSON.stringify(process.env.NODE_ENV),
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
});
