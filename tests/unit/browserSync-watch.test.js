/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

process.argv = ['', 'webpack-dev-server'];
const config = require('../../src/browserSync').default;

describe('browserSync config in watch mode', () => {
  it('will export an instance of webpack-config', () => {
    expect(typeof config.merge).toBe('function');
  });

  it('should contain BrowserSyncPlugin plugin if in production', () => {
    expect(config.plugins[0]).toBeInstanceOf(BrowserSyncPlugin);
  });
});
