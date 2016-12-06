import BrowserSyncPlugin from 'browser-sync-webpack-plugin';

export default function (options) {
  return new BrowserSyncPlugin(
    // BrowserSync options
    {
      // browse to http://localhost:3000/ during development
      host: 'localhost',
      port: 3000,
      // proxy the Webpack Dev Server endpoint
      // through BrowserSync
      proxy: options.devServer,
    },
    // plugin options
    {
      // prevent BrowserSync from reloading the page
      // and let Webpack Dev Server take care of this
      reload: false,
    }
  );
}
