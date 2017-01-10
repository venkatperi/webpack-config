# CA Technologies Webpack configuration
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://travis-ci.org/caapim/webpack-config-ca.svg?branch=master)](https://travis-ci.org/caapim/webpack-config-ca)
[![codecov](https://codecov.io/gh/caapim/webpack-config-ca/branch/master/graph/badge.svg)](https://codecov.io/gh/caapim/webpack-config-ca)
[![dependencies](https://david-dm.org/caapim/webpack-config-ca.svg)](https://david-dm.org/caapim/webpack-config-ca)
[![devDependency Status](https://david-dm.org/caapim/webpack-config-ca/dev-status.svg)](https://david-dm.org/caapim/webpack-config-ca#info=devDependencies)

## Overview
Extensible configuration for [Webpack](https://webpack.github.io/) projects at CA. This module is intended to be used in all CA JavaScript applications that require resource bundling.

## Installation
```bash
$ npm install --save-dev webpack webpack-dev-server webpack-config-ca
```

## Usage
### Basic usage
1) paste the following two lines of code in your `webpack.config.js`:
```js
import config from 'webpack-config-ca';

export default config();
```

2) Then add the `build` and `start` scripts to your `package.json`:
```js
"scripts": {
  "build": "webpack -d",
  "start": "webpack-dev-server -d"
}
```

3) Start the webpack development server from the terminal:
```shell
npm start
```

### Custom Webpack settings
You can also fine-tune aspects of the configuration:

```js
import config from 'webpack-config-ca';

export default config({
  sourcePath: 'src',
  outputPath: 'builds',
  hot: true,
  linting: true
});
```

**Important Flags:**
- `hot: (true|false)` for hot reloading
- `linting: (true|false)` for eslint and flow support - will use `.eslintrc` & `.flowconfig` from your project folder

### Advanced usage

```js
import config from 'webpack-config-ca';

export default config().merge({
  module: {
    loaders: [
      // Append a loader
    ],
  }
  plugins: [
    // Append a plugin
  ],
});
```

## Demos
- Checkout the [example folder](example).

## How Can You Contribute
Your contributions are welcome and much appreciated. To learn more, see the [Contribution Guidelines](https://github.com/CAAPIM/webpack-config-ca/blob/master/CONTRIBUTING.md).

This project supports `commitizen`. You can use `npm run commit` to run the local instance of `commitizen` or `git cz` if you have it installed globally.

Alternatively, if you are simply using `git commit`, you must follow this format:
`git commit -m "<type>: <subject>"`

## License
Copyright (c) 2017 CA. All rights reserved.
This software may be modified and distributed under the terms of the MIT license. To learn more, see the [License](https://github.com/CAAPIM/webpack-config-ca/blob/master/LICENSE.md).
