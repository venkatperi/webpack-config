/* eslint-disable spaced-comment */

import packagesTemplate from './templates/packages';
import applicationsTemplate from './templates/applications';
import serverTemplate from './templates/server';
import templateFactory from './factory';

// Export main template
const applicationsConfigurator = options => templateFactory(applicationsTemplate, options);
module.exports = applicationsConfigurator;

// Factory
//////////////////////////////////////////////////////////////////////

module.exports.factory = templateFactory;

// Templates
//////////////////////////////////////////////////////////////////////

module.exports.application = applicationsConfigurator;

module.exports.server = options => templateFactory(serverTemplate, {
  ...options,
  filenames: '[name]',
  devServer: false,
});

module.exports.packages = options => templateFactory(packagesTemplate, {
  ...options,
  sourcePath: 'src',
  outputPath: 'dist',
  react: false,
});

