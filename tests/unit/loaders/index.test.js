/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import loaders, { eslint, sourcemap } from '../../../src/loaders/';

const { css, fontgen, fonts, images, js, scss } = loaders;

describe('loaders', () => {
  it('css loader should test for .css extensions', () => {
    expect(css.test).toEqual(/\.css$/);
  });

  it('fontgen loader should test for .font.json extensions', () => {
    expect(fontgen.test).toEqual(/\.font\.json$/);
  });

  it('fonts loader should test for .ttf, .eot, .woff and .woff2 extensions', () => {
    expect(fonts.test).toEqual(/\.(ttf|eot|woff|woff2)/);
  });

  it('js loader should test for .js extensions', () => {
    expect(js.test).toEqual(/\.js$/);
  });

  it('scss loader should test for .scss extensions', () => {
    expect(scss.test).toEqual(/\.scss$/);
  });

});
