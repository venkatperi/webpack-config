/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import ExtractText from 'extract-text-webpack-plugin';

export default function (options) {
  return {
    test: /\.scss$/,
    loader: ExtractText.extract('style', `${options.loaders.css}!sass`),
  };
}
