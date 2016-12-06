export default function (options) {
  const presets = [];

  presets.push('ca');

  if (options.react) {
    presets.push('react');
  }

  if (options.react && options.hot) {
    presets.push('react-hmre');
  }

  const config = {
    presets,
  };

  const loader = `${options.loaders.js}?${JSON.stringify(config)}`;

  return {
    test: /\.js$/,
    loader,
    include: options.sourcePath,
  };
}
