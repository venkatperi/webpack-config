import loader from '../../../../src/loaders/loaders/js';

describe('loaders/loaders/js', () => {
  let config;

  it('contains babel loader', () => {
    config = loader({
      react: true,
      sourcePath: 'foobar',
      loaders: {
        js: 'babel',
      },
    });

    expect(config.loader).toContain('babel');
  });
});
