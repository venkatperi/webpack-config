/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

export default function (options) {
  const presets = [];

  presets.push('ca');

  if (options.react) {
    presets.push('react');
  }

  if (options.react && options.hot) {
    presets.push('react-hmre');
  }

  const config = {
    presets,
  };

  const loader = `${options.loaders.js}?${JSON.stringify(config)}`;

  return {
    test: /\.js$/,
    loader,
    include: options.sourcePath,
  };
}
