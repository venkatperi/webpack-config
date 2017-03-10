/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import css from './loaders/css';
import fontgen from './loaders/fontgen';
import fonts from './loaders/fonts';
import images from './loaders/images';
import js from './loaders/js';
import scss from './loaders/scss';
import eslint from './preloaders/eslint';
import sourcemap from './preloaders/sourceMap';

// Preloaders
export {
  eslint,
  sourcemap,
};

// Loaders
export default {
  css,
  fonts,
  fontgen,
  images,
  js,
  scss,
};
