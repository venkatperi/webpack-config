/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

/* eslint-disable no-param-reassign, func-names */

import fs from 'fs';
import dotenv from 'dotenv';
import optionsConfig from './options';
import loadersConfig from '../loaders';
import pluginsConfig from '../plugins';
import baseConfig from './base';

/**
 * Create a Webpack configuration
 */
module.exports = function (configuration, options = {}) {
  // Require dotenv variables
  const dotenvFile = `${process.cwd()}/.env`;
  try {
    if (fs.statSync(dotenvFile).isFile()) {
      dotenv.load({ path: dotenvFile });
    }
  } catch (err) {
    // Don't do anything as .env is not required
  }

  // Create options, loaders and plugins
  options = optionsConfig(options);
  const loaders = loadersConfig(options);
  const plugins = pluginsConfig(options);
  const config = baseConfig(options, loaders, plugins);

  return configuration(config, options, loaders, plugins);
};
