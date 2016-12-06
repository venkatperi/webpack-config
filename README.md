# CA Technologies Webpack configuration

## Demos

- Checkout the example folder for a client example.
- Checkout the judo-heroes folder for a server (SSR) example.

## Installation

Install the package

```bash
$ npm install webpack-config-ca --save-dev
```

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

### Using templates

```js
import {factory} from 'webpack-config-ca';

const template = (config, options, loaders, plugins) => {
    return config.merge({
        devtool: options.development ? 'foo' : 'bar',
        module: {
            loaders: [
                loaders.css,
                loaders.js,
                {
                    test: options.someExtraOption,
                }
            ],
        },
        plugins: [plugins.uglify]
    });
};

export default factory(template, {
    someExtraOption: 'foo',
});
```
