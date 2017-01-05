/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

// TODO: Add HMR without overriding user defined babel configs
export default function (options) {
  return {
    test: /\.js$/,
    loader: options.loaders.js,
    include: options.sourcePath,
  };
}