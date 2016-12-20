/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

export default function (config, options, loaders, plugins) {
  return config.merge({
    module: {
      loaders: [
        loaders.js,
        loaders.json,
      ],
    },
    output: {
      path: options.outputPath,
      filename: 'index.js',
      library: options.libraryName,
      libraryTarget: 'umd',
    },
    plugins: [
      plugins.occurenceOrder,
    ],
  });
}
