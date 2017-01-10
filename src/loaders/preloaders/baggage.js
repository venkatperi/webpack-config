/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

export default function (options) {
  return {
    test: /\.(js|ts)$/,
    loader: 'baggage-loader?[file].html=template&[file].scss',
    include: options.sourcePath,
  };
}
