/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

const config = require('ca-ui-webpack-config');

module.exports = config({
  sourcePath: 'src',
  outputPath: 'builds',
  hot: true,
  linting: true,
});
