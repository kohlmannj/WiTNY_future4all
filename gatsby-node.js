exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case 'develop':
      config.loader('html', {
        test: /\.html$/,
      });

      break;

    case 'build-html':
      config.loader('html', {
        test: /\.html$/,
      });

      break;

    case 'build-javascript':
      config.loader('html', {
        test: /\.html$/,
      });

      break;
  }

  return config;
};
