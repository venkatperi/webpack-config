export default function () {
  return {
    test: /\.js$/,
    loader: 'source-map-loader',
    exclude: /react-hot-loader/,
  };
}
