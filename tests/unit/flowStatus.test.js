/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import { resolve } from 'path';
import Config from 'webpack-config';

import { flowStatus } from '../../src/plugins';

describe('flowStatusConfig', () => {
  it('should contain flowStatus plugin', () => {
    const config = new Config().extend(
      resolve(__dirname, '../../src/flowStatus.js'),
    );

    expect(config.plugins).toContain(flowStatus);
  });
});
