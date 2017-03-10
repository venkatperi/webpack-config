/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

/* eslint-disable no-console, global-require */

import FlowStatus from 'flow-status-webpack-plugin';

export default new FlowStatus({
  onError: (stdout) => {
    console.log(stdout);
  },
  onSuccess: (stdout) => {
    console.log(stdout);
  },
  binaryPath: require('flow-bin'),
});
