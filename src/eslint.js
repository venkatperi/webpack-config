/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import webpack from 'webpack';
import Config from 'webpack-config';

import { eslint } from './loaders';

export default new Config().extend('base.js').merge({
  module: {
    rules: [eslint],
  },
});