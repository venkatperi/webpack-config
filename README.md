# CA Technologies Webpack configuration
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
************************************************************

## Demos
- Checkout the example folder for a client example.
************************************************************

## Installation
```bash
$ npm install webpack-config-ca --save-dev
```
************************************************************

## Usage
### Basic usage
```js
import config from 'webpack-config-ca';

export default config();
```

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

#### Important Flags
- ` hot: (true|false) ` for hot reloading
- ` linting: (true|false) ` for eslint and flow support - can put .eslintrc & .flowconfig in your project folder

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

************************************************************

## How Can You Contribute
Your contributions are welcome and much appreciated. To learn more, see the [Contribution Guidelines](https://github.com/CAAPIM/webpack-config-ca/blob/master/.github/CONTRIBUTING.md).

This project supports `commitizen`. You can use `npm run commit` to run the local instance of `commitizen` or `git cz` if you have it installed globally.

Alternatively, if you are simply using `git commit`, you must follow this format:
`git commit -m "<type>: <subject>"`
************************************************************

## License
Copyright (c) 2016 CA. All rights reserved.
This software may be modified and distributed under the terms of the MIT license. To learn more, see the [License](https://github.com/CAAPIM/webpack-config-ca/blob/master/.github/LICENSE.md).
