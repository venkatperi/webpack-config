/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

// detect if --https option was passed to Webpack Dev Server
const isWebpackDevServer = process.argv[1].indexOf('webpack-dev-server') !== -1;
const isSSL = isWebpackDevServer && process.argv.indexOf('--https') !== -1;

export default new BrowserSyncPlugin(
  // BrowserSync options
  {
    // browse to http://localhost:3000/ during development
    host: 'localhost',
    port: process.env.BS_PORT || 3000,
    // proxy the Webpack Dev Server endpoint
    // through BrowserSync
    proxy: `http${isSSL ? 's' : ''}://localhost:${process.env.WDS_PORT || 8080}`,
    https: isSSL,
  },
  // plugin options
  {
    // prevent BrowserSync from reloading the page
    // and let Webpack Dev Server take care of this
    reload: false,
  },
);
