/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import Config from 'webpack-config';
import base from './base';
import css from './css';
import scss from './scss';
import reactSvg from './reactSvg';
import fontgen from './fontgen';
import extractText from './extractText';
import eslint from './eslint';
import flowStatus from './flowStatus';
import production from './production';

export default Config().merge(
  base,
  css,
  scss,
  reactSvg,
  fontgen,
  extractText,
  eslint,
  flowStatus,
  production,
);
