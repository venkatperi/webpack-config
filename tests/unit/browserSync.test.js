/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import config from '../../src/browserSync';

describe('browserSync config without watch mode', () => {
  it('will export an instance of webpack-config', () => {
    expect(typeof config.merge).toBe('function');
  });

  it('will contain no plugins if in development', () => {
    expect(config.plugins.length).toBe(0);
  });
});
