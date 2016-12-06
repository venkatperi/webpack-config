const config = require('webpack-config-ca');

module.exports = config({
  sourcePath: '',
  outputPath: 'src/static/js',
  linting: true,
  hot: true,
  contentBase: './src/static',
  indexPage: '/index-static.html',
});
