/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import ExtractText from 'extract-text-webpack-plugin';

const cssLoader = process.env.NODE_ENV !== 'production' ?
  'css-loader?source-map-loader' : '-!css-loader?{"modules":true}!postcss-loader??postcss-ident';

export default {
  test: /\.scss$/,
  loader: ExtractText.extract({
    fallback: 'style-loader',
    use: `${cssLoader}!sass-loader`,
  }),
  include: ['src'],
};
