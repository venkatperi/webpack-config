/* eslint-disable no-console, global-require */

import FlowStatus from 'flow-status-webpack-plugin';

export default function () {
  return new FlowStatus({
    onError: (stdout) => {
      console.log(stdout);
    },
    onSuccess: (stdout) => {
      console.log(stdout);
    },
    binaryPath: require('flow-bin'),
  });
}
