/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import AssetsPlugin from 'assets-webpack-plugin';

export default function (options) {
  return new AssetsPlugin({
    path: options.outputPath,
    filename: 'manifest.json',
    prettyPrint: true,
  });
}
