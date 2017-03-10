/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

export default new BrowserSyncPlugin(
  // BrowserSync options
  {
    // browse to http://localhost:3000/ during development
    host: 'localhost',
    port: 3000,
    // proxy the Webpack Dev Server endpoint
    // through BrowserSync
    proxy: 'http://localhost:8080',
  },
  // plugin options
  {
    // prevent BrowserSync from reloading the page
    // and let Webpack Dev Server take care of this
    reload: false,
  },
);
