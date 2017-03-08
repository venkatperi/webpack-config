/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

export default {
  test: /\.(png|gif|jpe?g)/,
  use: [`url-loader?limit=2048`, 'image-webpack-loader?bypassOnDebug'],
  include: ['src'],
};
