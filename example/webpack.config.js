const config = require('webpack-config-ca');

module.exports = config({
  sourcePath: 'src',
  outputPath: 'builds',
  hot: true,
  linting: true,
});
