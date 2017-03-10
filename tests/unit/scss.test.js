/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import { resolve } from 'path';
import Config from 'webpack-config';

describe('scssConfig', () => {
  it('should contain scss loader', () => {
    const config = new Config().extend(
      resolve(__dirname, '../../src/scss.js'),
    );

    expect(config.module.rules[0].test).toEqual(/\.scss$/);
  });
});