/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import { resolve } from 'path';
import Config from 'webpack-config';

describe('baseConfig', () => {
  let config;

  it('will not contain the hash in the development environment', () => {
    process.env.NODE_ENV = 'development';
    config = new Config().extend(resolve(__dirname, '../../src'));

    expect(config.output.filename).toContain('[hash]');
  });

  it('will enable HMR', () => {
    config = new Config().extend(
      resolve(__dirname, '../fixtures/defineWatch.js'),
      resolve(__dirname, '../../src'),
    );

    expect(config.devServer.hot).toEqual(true);
  });

  it('can merge loaders and plugins', () => {
    config = new Config().extend(resolve(__dirname, '../../src')).merge({
      watch: true,
      module: {
        rules: [
          { foo: 'bar' },
        ],
      },
      plugins: [
        { foo: 'bar' },
      ],
    });

    expect(config.module.rules[config.module.rules.length - 1]).toEqual({ foo: 'bar' });
    expect(config.plugins[config.plugins.length - 1]).toEqual({ foo: 'bar' });
  });
});
