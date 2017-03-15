/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

jest.mock('browser-sync-webpack-plugin');

process.argv = ['', 'webpack-dev-server', '--https'];
const config = require('../../src/browserSync').default;

describe('browserSync config with SSL', () => {
  it('will export an instance of webpack-config', () => {
    expect(typeof config.merge).toBe('function');
  });

  it('should contain BrowserSyncPlugin plugin', () => {
    expect(config.plugins[0]).toBeInstanceOf(BrowserSyncPlugin);
  });

  it('should set https to true in BrowserSync plugin', () => {
    expect(BrowserSyncPlugin).toHaveBeenCalledTimes(1);
    expect(BrowserSyncPlugin.mock.calls[0][0].https).toBe(true);
  });
});
